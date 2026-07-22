import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class ProfileOperations extends ServiceApi {
  /** GET /api/openapi.json; permission: public/session-derived. */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /** POST /api/v1/address/get; permission: public/session-derived. */
  optionAddressGetPost(data: T.OptionAddressGetPostInput, options?: RequestOptions<T.OptionAddressGetPostInput>) {
    return this.client.request<T.OptionAddressGetPostResponse, T.OptionAddressGetPostInput>({ ...options, method: "POST", url: `/api/v1/address/get`, data: data });
  }
  /** GET /api/v1/auth/self; permission: public/session-derived. */
  sessionGetSelfGet(options?: RequestOptions) {
    return this.client.request<T.SessionGetSelfGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/self` });
  }
  /** GET /api/v1/city; permission: city:read. */
  cityIndexGet(params?: T.CityIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.CityIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/city`, params });
  }
  /** POST /api/v1/city; permission: city:create. */
  cityStorePost(data: T.CityStorePostInput, options?: RequestOptions<T.CityStorePostInput>) {
    return this.client.request<T.CityStorePostResponse, T.CityStorePostInput>({ ...options, method: "POST", url: `/api/v1/city`, data: data });
  }
  /** DELETE /api/v1/city/{id}; permission: city:delete. */
  cityDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CityDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/city/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/city/{id}; permission: city:read. */
  cityShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CityShowGetResponse>({ ...options, method: "GET", url: `/api/v1/city/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/city/{id}; permission: city:update. */
  cityUpdatePatch(id: Identifier, data: T.CityUpdatePatchInput, options?: RequestOptions<T.CityUpdatePatchInput>) {
    return this.client.request<T.CityUpdatePatchResponse, T.CityUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/city/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/city/{id}; permission: city:update. */
  cityUpdatePut(id: Identifier, data: T.CityUpdatePutInput, options?: RequestOptions<T.CityUpdatePutInput>) {
    return this.client.request<T.CityUpdatePutResponse, T.CityUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/city/${encodeURIComponent(id)}`, data: data });
  }
  /** DELETE /api/v1/city/force/{id}; permission: city:delete. */
  cityForceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CityForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/city/force/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/city/undo/{id}; permission: city:delete. */
  cityRestoreGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CityRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/city/undo/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/country; permission: country:read. */
  countryIndexGet(params?: T.CountryIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.CountryIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/country`, params });
  }
  /** POST /api/v1/country; permission: country:create. */
  countryStorePost(data: T.CountryStorePostInput, options?: RequestOptions<T.CountryStorePostInput>) {
    return this.client.request<T.CountryStorePostResponse, T.CountryStorePostInput>({ ...options, method: "POST", url: `/api/v1/country`, data: data });
  }
  /** DELETE /api/v1/country/{id}; permission: country:delete. */
  countryDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CountryDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/country/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/country/{id}; permission: country:read. */
  countryShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CountryShowGetResponse>({ ...options, method: "GET", url: `/api/v1/country/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/country/{id}; permission: country:update. */
  countryUpdatePatch(id: Identifier, data: T.CountryUpdatePatchInput, options?: RequestOptions<T.CountryUpdatePatchInput>) {
    return this.client.request<T.CountryUpdatePatchResponse, T.CountryUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/country/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/country/{id}; permission: country:update. */
  countryUpdatePut(id: Identifier, data: T.CountryUpdatePutInput, options?: RequestOptions<T.CountryUpdatePutInput>) {
    return this.client.request<T.CountryUpdatePutResponse, T.CountryUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/country/${encodeURIComponent(id)}`, data: data });
  }
  /** DELETE /api/v1/country/force/{id}; permission: country:delete. */
  countryForceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CountryForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/country/force/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/country/undo/{id}; permission: country:delete. */
  countryRestoreGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CountryRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/country/undo/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/dependency; permission: dependency:read. */
  optionDependencyGet(options?: RequestOptions) {
    return this.client.request<T.OptionDependencyGetResponse>({ ...options, method: "GET", url: `/api/v1/dependency` });
  }
  /** GET /api/v1/identity; permission: public/session-derived. */
  optionIdentityGet(options?: RequestOptions) {
    return this.client.request<T.OptionIdentityGetResponse>({ ...options, method: "GET", url: `/api/v1/identity` });
  }
  /** GET /api/v1/integration/docs; permission: admin:integration:read. */
  integrationIntegrationDocsShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationIntegrationDocsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/docs` });
  }
  /** GET /api/v1/integration/flow; permission: public/session-derived. */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /** POST /api/v1/log-action; permission: log_action:create. */
  logActionStorePost(data: T.LogActionStorePostInput, options?: RequestOptions<T.LogActionStorePostInput>) {
    return this.client.request<T.LogActionStorePostResponse, T.LogActionStorePostInput>({ ...options, method: "POST", url: `/api/v1/log-action`, data: data });
  }
  /** POST /api/v1/log-action/{slug}; permission: log_action:create. */
  logActionStoreSlugPost(slug: Identifier, data: T.LogActionStoreSlugPostInput, options?: RequestOptions<T.LogActionStoreSlugPostInput>) {
    return this.client.request<T.LogActionStoreSlugPostResponse, T.LogActionStoreSlugPostInput>({ ...options, method: "POST", url: `/api/v1/log-action/${encodeURIComponent(slug)}`, data: data });
  }
  /** POST /api/v1/log-action/direct/{slug}; permission: public/session-derived. */
  logActionStoreDirectPost(slug: Identifier, data: T.LogActionStoreDirectPostInput, options?: RequestOptions<T.LogActionStoreDirectPostInput>) {
    return this.client.request<T.LogActionStoreDirectPostResponse, T.LogActionStoreDirectPostInput>({ ...options, method: "POST", url: `/api/v1/log-action/direct/${encodeURIComponent(slug)}`, data: data });
  }
  /** GET /api/v1/logger; permission: public/session-derived. */
  loggerIndexGet(options?: RequestOptions) {
    return this.client.request<T.LoggerIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/logger` });
  }
  /** GET /api/v1/logger/{log}; permission: public/session-derived. */
  loggerShowGet(log: Identifier, options?: RequestOptions) {
    return this.client.request<T.LoggerShowGetResponse>({ ...options, method: "GET", url: `/api/v1/logger/${encodeURIComponent(log)}` });
  }
  /** POST /api/v1/parent/get; permission: public/session-derived. */
  optionParentGetPost(data: T.OptionParentGetPostInput, options?: RequestOptions<T.OptionParentGetPostInput>) {
    return this.client.request<T.OptionParentGetPostResponse, T.OptionParentGetPostInput>({ ...options, method: "POST", url: `/api/v1/parent/get`, data: data });
  }
  /** GET /api/v1/profile; permission: /api/v1/profile, profile:read. */
  profileIndexGet(params?: T.ProfileIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile`, params });
  }
  /** GET /api/v1/profile-property-definition; permission: profile_property_definition:read. */
  profilePropertyIndexGet(params?: T.ProfilePropertyIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile-property-definition`, params });
  }
  /** POST /api/v1/profile-property-definition; permission: profile_property_definition:create. */
  profilePropertyStorePost(data: T.ProfilePropertyStorePostInput, options?: RequestOptions<T.ProfilePropertyStorePostInput>) {
    return this.client.request<T.ProfilePropertyStorePostResponse, T.ProfilePropertyStorePostInput>({ ...options, method: "POST", url: `/api/v1/profile-property-definition`, data: data });
  }
  /** DELETE /api/v1/profile-property-definition/{id}; permission: profile_property_definition:delete. */
  profilePropertyDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile-property-definition/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/profile-property-definition/{id}; permission: profile_property_definition:read. */
  profilePropertyShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyShowGetResponse>({ ...options, method: "GET", url: `/api/v1/profile-property-definition/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/profile-property-definition/{id}; permission: profile_property_definition:update. */
  profilePropertyUpdatePatch(id: Identifier, data: T.ProfilePropertyUpdatePatchInput, options?: RequestOptions<T.ProfilePropertyUpdatePatchInput>) {
    return this.client.request<T.ProfilePropertyUpdatePatchResponse, T.ProfilePropertyUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile-property-definition/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/profile-property-definition/{id}; permission: profile_property_definition:update. */
  profilePropertyUpdatePut(id: Identifier, data: T.ProfilePropertyUpdatePutInput, options?: RequestOptions<T.ProfilePropertyUpdatePutInput>) {
    return this.client.request<T.ProfilePropertyUpdatePutResponse, T.ProfilePropertyUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/profile-property-definition/${encodeURIComponent(id)}`, data: data });
  }
  /** DELETE /api/v1/profile-property-definition/force/{id}; permission: profile_property_definition:force_delete. */
  profilePropertyForceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile-property-definition/force/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/profile-property-definition/undo/{id}; permission: profile_property_definition:restore. */
  profilePropertyRestoreGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/profile-property-definition/undo/${encodeURIComponent(id)}` });
  }
  /** DELETE /api/v1/profile/{student_uuid}/delete/parent/{parent_uuid}; permission: profile:update. */
  profileDeleteParentDelete(studentUuid: Identifier, parentUuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileDeleteParentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/${encodeURIComponent(studentUuid)}/delete/parent/${encodeURIComponent(parentUuid)}` });
  }
  /** DELETE /api/v1/profile/{uuid}; permission: profile:delete. */
  profileDestroyDelete(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/${encodeURIComponent(uuid)}` });
  }
  /** GET /api/v1/profile/{uuid}; permission: profile:read. */
  profileShowGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileShowGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/${encodeURIComponent(uuid)}` });
  }
  /** PATCH /api/v1/profile/{uuid}; permission: profile:update. */
  profileUpdatePatch(uuid: Identifier, data: T.ProfileUpdatePatchInput, options?: RequestOptions<T.ProfileUpdatePatchInput>) {
    return this.client.request<T.ProfileUpdatePatchResponse, T.ProfileUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}`, data: data });
  }
  /** GET /api/v1/profile/{uuid}/admin; permission: profile:read_admin. */
  profileShowAdminGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileShowAdminGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/${encodeURIComponent(uuid)}/admin` });
  }
  /** DELETE /api/v1/profile/{uuid}/avatar; permission: public/session-derived. */
  profileAvatarDeleteDelete(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileAvatarDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/${encodeURIComponent(uuid)}/avatar` });
  }
  /** POST /api/v1/profile/{uuid}/avatar; permission: public/session-derived. */
  profileAvatarStorePost(uuid: Identifier, data: T.ProfileAvatarStorePostInput, options?: RequestOptions<T.ProfileAvatarStorePostInput>) {
    return this.client.request<T.ProfileAvatarStorePostResponse, T.ProfileAvatarStorePostInput>({ ...options, method: "POST", url: `/api/v1/profile/${encodeURIComponent(uuid)}/avatar`, data: data });
  }
  /** DELETE /api/v1/profile/{uuid}/delete/address/{title}; permission: profile:update. */
  profileDeleteAddressDelete(uuid: Identifier, title: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileDeleteAddressDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/${encodeURIComponent(uuid)}/delete/address/${encodeURIComponent(title)}` });
  }
  /** PATCH /api/v1/profile/{uuid}/employee-type; permission: profile:update_employee_type. */
  profileUpdateEmployeeTypePatch(uuid: Identifier, data: T.ProfileUpdateEmployeeTypePatchInput, options?: RequestOptions<T.ProfileUpdateEmployeeTypePatchInput>) {
    return this.client.request<T.ProfileUpdateEmployeeTypePatchResponse, T.ProfileUpdateEmployeeTypePatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}/employee-type`, data: data });
  }
  /** PUT /api/v1/profile/{uuid}/employee-type; permission: profile:update_employee_type. */
  profileUpdateEmployeeTypePut(uuid: Identifier, data: T.ProfileUpdateEmployeeTypePutInput, options?: RequestOptions<T.ProfileUpdateEmployeeTypePutInput>) {
    return this.client.request<T.ProfileUpdateEmployeeTypePutResponse, T.ProfileUpdateEmployeeTypePutInput>({ ...options, method: "PUT", url: `/api/v1/profile/${encodeURIComponent(uuid)}/employee-type`, data: data });
  }
  /** PATCH /api/v1/profile/{uuid}/freemium-session-limit; permission: profile:freemium_session_limit. */
  profileUpdateFreemiumPatch(uuid: Identifier, data: T.ProfileUpdateFreemiumPatchInput, options?: RequestOptions<T.ProfileUpdateFreemiumPatchInput>) {
    return this.client.request<T.ProfileUpdateFreemiumPatchResponse, T.ProfileUpdateFreemiumPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}/freemium-session-limit`, data: data });
  }
  /** PUT /api/v1/profile/{uuid}/freemium-session-limit; permission: profile:freemium_session_limit. */
  profileUpdateFreemiumPut(uuid: Identifier, data: T.ProfileUpdateFreemiumPutInput, options?: RequestOptions<T.ProfileUpdateFreemiumPutInput>) {
    return this.client.request<T.ProfileUpdateFreemiumPutResponse, T.ProfileUpdateFreemiumPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/${encodeURIComponent(uuid)}/freemium-session-limit`, data: data });
  }
  /** GET /api/v1/profile/{uuid}/full; permission: profile:read. */
  profileShowFullGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileShowFullGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/${encodeURIComponent(uuid)}/full` });
  }
  /** GET /api/v1/profile/{uuid}/media; permission: public/session-derived. */
  profileMediaShowGet(uuid: Identifier, params?: T.ProfileMediaShowGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileMediaShowGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/${encodeURIComponent(uuid)}/media`, params });
  }
  /** PATCH /api/v1/profile/{uuid}/properties; permission: profile:update. */
  profileUpdatePropertiesPatch(uuid: Identifier, data: T.ProfileUpdatePropertiesPatchInput, options?: RequestOptions<T.ProfileUpdatePropertiesPatchInput>) {
    return this.client.request<T.ProfileUpdatePropertiesPatchResponse, T.ProfileUpdatePropertiesPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}/properties`, data: data });
  }
  /** PUT /api/v1/profile/{uuid}/properties; permission: profile:update. */
  profileUpdatePropertiesPut(uuid: Identifier, data: T.ProfileUpdatePropertiesPutInput, options?: RequestOptions<T.ProfileUpdatePropertiesPutInput>) {
    return this.client.request<T.ProfileUpdatePropertiesPutResponse, T.ProfileUpdatePropertiesPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/${encodeURIComponent(uuid)}/properties`, data: data });
  }
  /** PATCH /api/v1/profile/{uuid}/status; permission: profile:update_status. */
  profileUpdateStatusPatch(uuid: Identifier, data: T.ProfileUpdateStatusPatchInput, options?: RequestOptions<T.ProfileUpdateStatusPatchInput>) {
    return this.client.request<T.ProfileUpdateStatusPatchResponse, T.ProfileUpdateStatusPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}/status`, data: data });
  }
  /** PUT /api/v1/profile/{uuid}/status; permission: profile:update_status. */
  profileUpdateStatusPut(uuid: Identifier, data: T.ProfileUpdateStatusPutInput, options?: RequestOptions<T.ProfileUpdateStatusPutInput>) {
    return this.client.request<T.ProfileUpdateStatusPutResponse, T.ProfileUpdateStatusPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/${encodeURIComponent(uuid)}/status`, data: data });
  }
  /** GET /api/v1/profile/accountant; permission: public/session-derived. */
  profileAccountantIndexGet(options?: RequestOptions) {
    return this.client.request<T.ProfileAccountantIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/accountant` });
  }
  /** PATCH /api/v1/profile/add/address/{uuid}; permission: profile:update. */
  profileAddAddressPatch(uuid: Identifier, data: T.ProfileAddAddressPatchInput, options?: RequestOptions<T.ProfileAddAddressPatchInput>) {
    return this.client.request<T.ProfileAddAddressPatchResponse, T.ProfileAddAddressPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/add/address/${encodeURIComponent(uuid)}`, data: data });
  }
  /** PUT /api/v1/profile/add/address/{uuid}; permission: profile:update. */
  profileAddAddressPut(uuid: Identifier, data: T.ProfileAddAddressPutInput, options?: RequestOptions<T.ProfileAddAddressPutInput>) {
    return this.client.request<T.ProfileAddAddressPutResponse, T.ProfileAddAddressPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/add/address/${encodeURIComponent(uuid)}`, data: data });
  }
  /** PATCH /api/v1/profile/add/app/{uuid}; permission: profile:update. */
  profileAddAppPatch(uuid: Identifier, data: T.ProfileAddAppPatchInput, options?: RequestOptions<T.ProfileAddAppPatchInput>) {
    return this.client.request<T.ProfileAddAppPatchResponse, T.ProfileAddAppPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/add/app/${encodeURIComponent(uuid)}`, data: data });
  }
  /** PUT /api/v1/profile/add/app/{uuid}; permission: profile:update. */
  profileAddAppPut(uuid: Identifier, data: T.ProfileAddAppPutInput, options?: RequestOptions<T.ProfileAddAppPutInput>) {
    return this.client.request<T.ProfileAddAppPutResponse, T.ProfileAddAppPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/add/app/${encodeURIComponent(uuid)}`, data: data });
  }
  /** PATCH /api/v1/profile/add/parent/{uuid}; permission: profile:update. */
  profileAddParentPatch(uuid: Identifier, data: T.ProfileAddParentPatchInput, options?: RequestOptions<T.ProfileAddParentPatchInput>) {
    return this.client.request<T.ProfileAddParentPatchResponse, T.ProfileAddParentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/add/parent/${encodeURIComponent(uuid)}`, data: data });
  }
  /** PUT /api/v1/profile/add/parent/{uuid}; permission: profile:update. */
  profileAddParentPut(uuid: Identifier, data: T.ProfileAddParentPutInput, options?: RequestOptions<T.ProfileAddParentPutInput>) {
    return this.client.request<T.ProfileAddParentPutResponse, T.ProfileAddParentPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/add/parent/${encodeURIComponent(uuid)}`, data: data });
  }
  /** POST /api/v1/profile/city/get; permission: public/session-derived. */
  profileCityGetPost(data: T.ProfileCityGetPostInput, options?: RequestOptions<T.ProfileCityGetPostInput>) {
    return this.client.request<T.ProfileCityGetPostResponse, T.ProfileCityGetPostInput>({ ...options, method: "POST", url: `/api/v1/profile/city/get`, data: data });
  }
  /** GET /api/v1/profile/consultant; permission: public/session-derived. */
  profileConsultantIndexGet(options?: RequestOptions) {
    return this.client.request<T.ProfileConsultantIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/consultant` });
  }
  /** POST /api/v1/profile/country/get; permission: public/session-derived. */
  profileCountryGetPost(data: T.ProfileCountryGetPostInput, options?: RequestOptions<T.ProfileCountryGetPostInput>) {
    return this.client.request<T.ProfileCountryGetPostResponse, T.ProfileCountryGetPostInput>({ ...options, method: "POST", url: `/api/v1/profile/country/get`, data: data });
  }
  /** DELETE /api/v1/profile/force/{uuid}; permission: profile:force_delete. */
  profileForceDestroyDelete(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/force/${encodeURIComponent(uuid)}` });
  }
  /** POST /api/v1/profile/get; permission: public/session-derived. */
  profileBulkGetPost(data: T.ProfileBulkGetPostInput, options?: RequestOptions<T.ProfileBulkGetPostInput>) {
    return this.client.request<T.ProfileBulkGetPostResponse, T.ProfileBulkGetPostInput>({ ...options, method: "POST", url: `/api/v1/profile/get`, data: data });
  }
  /** GET /api/v1/profile/get-chat-list/{uuid}; permission: public/session-derived. */
  profileChatListGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileChatListGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/get-chat-list/${encodeURIComponent(uuid)}` });
  }
  /** GET /api/v1/profile/get/address/{uuid}; permission: profile:read. */
  profileGetAddressGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileGetAddressGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/get/address/${encodeURIComponent(uuid)}` });
  }
  /** GET /api/v1/profile/get/app/{uuid}; permission: profile:read. */
  profileGetAppGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileGetAppGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/get/app/${encodeURIComponent(uuid)}` });
  }
  /** GET /api/v1/profile/get/parent/{uuid}; permission: profile:read. */
  profileGetParentGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileGetParentGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/get/parent/${encodeURIComponent(uuid)}` });
  }
  /** GET /api/v1/profile/manager; permission: public/session-derived. */
  profileManagerIndexGet(options?: RequestOptions) {
    return this.client.request<T.ProfileManagerIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/manager` });
  }
  /** GET /api/v1/profile/other; permission: public/session-derived. */
  profileOtherIndexGet(options?: RequestOptions) {
    return this.client.request<T.ProfileOtherIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/other` });
  }
  /** GET /api/v1/profile/parent; permission: public/session-derived. */
  profileParentIndexGet(options?: RequestOptions) {
    return this.client.request<T.ProfileParentIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/parent` });
  }
  /** POST /api/v1/profile/province/get; permission: public/session-derived. */
  profileProvinceGetPost(data: T.ProfileProvinceGetPostInput, options?: RequestOptions<T.ProfileProvinceGetPostInput>) {
    return this.client.request<T.ProfileProvinceGetPostResponse, T.ProfileProvinceGetPostInput>({ ...options, method: "POST", url: `/api/v1/profile/province/get`, data: data });
  }
  /** POST /api/v1/profile/search; permission: profile:search. */
  profileSearchSearchPost(data: T.ProfileSearchSearchPostInput, options?: RequestOptions<T.ProfileSearchSearchPostInput>) {
    return this.client.request<T.ProfileSearchSearchPostResponse, T.ProfileSearchSearchPostInput>({ ...options, method: "POST", url: `/api/v1/profile/search`, data: data });
  }
  /** GET /api/v1/profile/student; permission: public/session-derived. */
  profileStudentIndexGet(options?: RequestOptions) {
    return this.client.request<T.ProfileStudentIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/student` });
  }
  /** GET /api/v1/profile/students/pes; permission: public/session-derived. */
  profileStudentPesGet(options?: RequestOptions) {
    return this.client.request<T.ProfileStudentPesGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/students/pes` });
  }
  /** GET /api/v1/profile/students/pes/schema; permission: public/session-derived. */
  profileStudentPesSchemaGet(options?: RequestOptions) {
    return this.client.request<T.ProfileStudentPesSchemaGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/students/pes/schema` });
  }
  /** GET /api/v1/profile/support; permission: public/session-derived. */
  profileSupportIndexGet(options?: RequestOptions) {
    return this.client.request<T.ProfileSupportIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/support` });
  }
  /** GET /api/v1/profile/supports/pes; permission: public/session-derived. */
  profileSupportPesGet(options?: RequestOptions) {
    return this.client.request<T.ProfileSupportPesGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/supports/pes` });
  }
  /** GET /api/v1/profile/supports/pes/schema; permission: public/session-derived. */
  profileSupportPesSchemaGet(options?: RequestOptions) {
    return this.client.request<T.ProfileSupportPesSchemaGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/supports/pes/schema` });
  }
  /** GET /api/v1/profile/teacher; permission: public/session-derived. */
  profileTeacherIndexGet(options?: RequestOptions) {
    return this.client.request<T.ProfileTeacherIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/teacher` });
  }
  /** GET /api/v1/profile/undo/{uuid}; permission: profile:restore. */
  profileRestoreGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/undo/${encodeURIComponent(uuid)}` });
  }
  /** PATCH /api/v1/profile/update/{uuid}/meta; permission: profile:update. */
  profileAddMetaPatch(uuid: Identifier, data: T.ProfileAddMetaPatchInput, options?: RequestOptions<T.ProfileAddMetaPatchInput>) {
    return this.client.request<T.ProfileAddMetaPatchResponse, T.ProfileAddMetaPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/update/${encodeURIComponent(uuid)}/meta`, data: data });
  }
  /** PUT /api/v1/profile/update/{uuid}/meta; permission: profile:update. */
  profileAddMetaPut(uuid: Identifier, data: T.ProfileAddMetaPutInput, options?: RequestOptions<T.ProfileAddMetaPutInput>) {
    return this.client.request<T.ProfileAddMetaPutResponse, T.ProfileAddMetaPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/update/${encodeURIComponent(uuid)}/meta`, data: data });
  }
  /** PATCH /api/v1/profile/update/personal-information/{uuid}; permission: profile:update. */
  profileUpdatePersonalPatch(uuid: Identifier, data: T.ProfileUpdatePersonalPatchInput, options?: RequestOptions<T.ProfileUpdatePersonalPatchInput>) {
    return this.client.request<T.ProfileUpdatePersonalPatchResponse, T.ProfileUpdatePersonalPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/update/personal-information/${encodeURIComponent(uuid)}`, data: data });
  }
  /** PUT /api/v1/profile/update/personal-information/{uuid}; permission: profile:update. */
  profileUpdatePersonalPut(uuid: Identifier, data: T.ProfileUpdatePersonalPutInput, options?: RequestOptions<T.ProfileUpdatePersonalPutInput>) {
    return this.client.request<T.ProfileUpdatePersonalPutResponse, T.ProfileUpdatePersonalPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/update/personal-information/${encodeURIComponent(uuid)}`, data: data });
  }
  /** GET /api/v1/province; permission: province:read. */
  provinceIndexGet(params?: T.ProvinceIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProvinceIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/province`, params });
  }
  /** POST /api/v1/province; permission: province:create. */
  provinceStorePost(data: T.ProvinceStorePostInput, options?: RequestOptions<T.ProvinceStorePostInput>) {
    return this.client.request<T.ProvinceStorePostResponse, T.ProvinceStorePostInput>({ ...options, method: "POST", url: `/api/v1/province`, data: data });
  }
  /** DELETE /api/v1/province/{id}; permission: province:delete. */
  provinceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProvinceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/province/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/province/{id}; permission: province:read. */
  provinceShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProvinceShowGetResponse>({ ...options, method: "GET", url: `/api/v1/province/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/province/{id}; permission: province:update. */
  provinceUpdatePatch(id: Identifier, data: T.ProvinceUpdatePatchInput, options?: RequestOptions<T.ProvinceUpdatePatchInput>) {
    return this.client.request<T.ProvinceUpdatePatchResponse, T.ProvinceUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/province/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/province/{id}; permission: province:update. */
  provinceUpdatePut(id: Identifier, data: T.ProvinceUpdatePutInput, options?: RequestOptions<T.ProvinceUpdatePutInput>) {
    return this.client.request<T.ProvinceUpdatePutResponse, T.ProvinceUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/province/${encodeURIComponent(id)}`, data: data });
  }
  /** DELETE /api/v1/province/force/{id}; permission: province:delete. */
  provinceForceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProvinceForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/province/force/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/province/undo/{id}; permission: province:delete. */
  provinceRestoreGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProvinceRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/province/undo/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/setting; permission: setting:read. */
  settingIndexGet(options?: RequestOptions) {
    return this.client.request<T.SettingIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/setting` });
  }
  /** POST /api/v1/setting; permission: setting:create. */
  settingStorePost(data: T.SettingStorePostInput, options?: RequestOptions<T.SettingStorePostInput>) {
    return this.client.request<T.SettingStorePostResponse, T.SettingStorePostInput>({ ...options, method: "POST", url: `/api/v1/setting`, data: data });
  }
  /** GET /api/v1/survey; permission: survey:read. */
  surveyIndexGet(options?: RequestOptions) {
    return this.client.request<T.SurveyIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/survey` });
  }
  /** POST /api/v1/survey; permission: survey:create. */
  surveyStorePost(data: T.SurveyStorePostInput, options?: RequestOptions<T.SurveyStorePostInput>) {
    return this.client.request<T.SurveyStorePostResponse, T.SurveyStorePostInput>({ ...options, method: "POST", url: `/api/v1/survey`, data: data });
  }
  /** GET /api/v1/trusted-service; permission: trusted_service:read. */
  trustedServiceIndexGet(params?: T.TrustedServiceIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/trusted-service`, params });
  }
  /** POST /api/v1/trusted-service; permission: trusted_service:create. */
  trustedServiceStorePost(data: T.TrustedServiceStorePostInput, options?: RequestOptions<T.TrustedServiceStorePostInput>) {
    return this.client.request<T.TrustedServiceStorePostResponse, T.TrustedServiceStorePostInput>({ ...options, method: "POST", url: `/api/v1/trusted-service`, data: data });
  }
  /** DELETE /api/v1/trusted-service/{id}; permission: trusted_service:delete. */
  trustedServiceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/trusted-service/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/trusted-service/{id}; permission: trusted_service:read. */
  trustedServiceShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceShowGetResponse>({ ...options, method: "GET", url: `/api/v1/trusted-service/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/trusted-service/{id}; permission: trusted_service:update. */
  trustedServiceUpdatePatch(id: Identifier, data: T.TrustedServiceUpdatePatchInput, options?: RequestOptions<T.TrustedServiceUpdatePatchInput>) {
    return this.client.request<T.TrustedServiceUpdatePatchResponse, T.TrustedServiceUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/trusted-service/${encodeURIComponent(id)}`, data: data });
  }
  /** PUT /api/v1/trusted-service/{id}; permission: trusted_service:update. */
  trustedServiceUpdatePut(id: Identifier, data: T.TrustedServiceUpdatePutInput, options?: RequestOptions<T.TrustedServiceUpdatePutInput>) {
    return this.client.request<T.TrustedServiceUpdatePutResponse, T.TrustedServiceUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/trusted-service/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/trusted-service/{id}/event; permission: trusted_service:read. */
  trustedServiceEventIndexGet(id: Identifier, params?: T.TrustedServiceEventIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceEventIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event`, params });
  }
  /** POST /api/v1/trusted-service/{id}/event; permission: trusted_service:create. */
  trustedServiceEventStorePost(id: Identifier, data: T.TrustedServiceEventStorePostInput, options?: RequestOptions<T.TrustedServiceEventStorePostInput>) {
    return this.client.request<T.TrustedServiceEventStorePostResponse, T.TrustedServiceEventStorePostInput>({ ...options, method: "POST", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event`, data: data });
  }
  /** DELETE /api/v1/trusted-service/{id}/event/{event_id}; permission: trusted_service:delete. */
  trustedServiceEventDestroyDelete(id: Identifier, eventId: Identifier, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceEventDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event/${encodeURIComponent(eventId)}` });
  }
  /** GET /api/v1/trusted-service/{id}/event/{event_id}; permission: trusted_service:read. */
  trustedServiceEventShowGet(id: Identifier, eventId: Identifier, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceEventShowGetResponse>({ ...options, method: "GET", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event/${encodeURIComponent(eventId)}` });
  }
  /** PATCH /api/v1/trusted-service/{id}/event/{event_id}; permission: trusted_service:update. */
  trustedServiceEventUpdatePatch(id: Identifier, eventId: Identifier, data: T.TrustedServiceEventUpdatePatchInput, options?: RequestOptions<T.TrustedServiceEventUpdatePatchInput>) {
    return this.client.request<T.TrustedServiceEventUpdatePatchResponse, T.TrustedServiceEventUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event/${encodeURIComponent(eventId)}`, data: data });
  }
  /** PUT /api/v1/trusted-service/{id}/event/{event_id}; permission: trusted_service:update. */
  trustedServiceEventUpdatePut(id: Identifier, eventId: Identifier, data: T.TrustedServiceEventUpdatePutInput, options?: RequestOptions<T.TrustedServiceEventUpdatePutInput>) {
    return this.client.request<T.TrustedServiceEventUpdatePutResponse, T.TrustedServiceEventUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event/${encodeURIComponent(eventId)}`, data: data });
  }
  /** GET /health; permission: public/session-derived. */
  routerHealthGetHealth(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
  /** GET /up; permission: public/session-derived. */
  routerHealthGetUp(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetUpResponse>({ ...options, method: "GET", url: `/up` });
  }
}

