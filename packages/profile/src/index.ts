import { RestResource, ServiceApi, UnsupportedOperationError, multipart, type Identifier, type QueryParams, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
type R<E extends T.ProfileRecord, C, U, L, S> = RestResource<E, C, U, L, S>;
import { ProfileOperations } from "./operations.js";
export class ProfileApi extends ServiceApi {
    readonly operations = new ProfileOperations(this.client);
    readonly profiles = new RestResource<T.Profile, T.CreateProfileInput, T.UpdateProfileInput, T.ProfileListResponse, T.ProfileResponse>(this.client, "/api/v1/profile", { supported: ["list", "show", "update", "delete"] });
    readonly countries: R<T.Country, T.CreateCountryInput, T.UpdateCountryInput, T.CountryListResponse, T.CountryResponse> = new RestResource(this.client, "/api/v1/country", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly provinces: R<T.Province, T.CreateProvinceInput, T.UpdateProvinceInput, T.ProvinceListResponse, T.ProvinceResponse> = new RestResource(this.client, "/api/v1/province", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly cities: R<T.City, T.CreateCityInput, T.UpdateCityInput, T.CityListResponse, T.CityResponse> = new RestResource(this.client, "/api/v1/city", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly settings: R<T.Setting, T.CreateSettingInput, T.UpdateSettingInput, T.SettingListResponse, T.SettingResponse> = new RestResource(this.client, "/api/v1/setting", { supported: ["list", "create"] });
    readonly surveys: R<T.Survey, T.CreateSurveyInput, T.UpdateSurveyInput, T.SurveyListResponse, T.SurveyResponse> = new RestResource(this.client, "/api/v1/survey", { supported: ["list", "create"] });
    readonly work: R<T.Work, T.CreateWorkInput, T.UpdateWorkInput, T.WorkListResponse, T.WorkResponse> = new RestResource(this.client, "/api/v1/work", { supported: [] });
    readonly education: R<T.Education, T.CreateEducationInput, T.UpdateEducationInput, T.EducationListResponse, T.EducationResponse> = new RestResource(this.client, "/api/v1/education", { supported: [] });
    readonly greetings: R<T.Greeting, T.CreateGreetingInput, T.UpdateGreetingInput, T.GreetingListResponse, T.GreetingResponse> = new RestResource(this.client, "/api/v1/greetings", { supported: [] });
    byRole(role: T.ProfileRole, params?: QueryParams, options?: RequestOptions) { return this.client.get<T.ProfileListResponse>(`/api/v1/profile/${role}`, params, options); }
    full(id: Identifier, options?: RequestOptions) { return this.client.get<T.FullProfileResponse>(`/api/v1/profile/${encodeURIComponent(id)}/full`, undefined, options); }
    admin(id: Identifier, options?: RequestOptions) { return this.client.get<T.AdminProfileResponse>(`/api/v1/profile/${encodeURIComponent(id)}/admin`, undefined, options); }
    media(id: Identifier, key: string, options?: RequestOptions) { return this.client.get<Blob>(`/api/v1/profile/${encodeURIComponent(id)}/media`, { key }, { responseType: "blob", ...options }); }
    updateProfile(id: Identifier, data: T.ProfilePatchInput, options?: RequestOptions<T.ProfilePatchInput>) { return this.client.patch<T.ProfileResponse, T.ProfilePatchInput>(`/api/v1/profile/${encodeURIComponent(id)}`, data, options); }
    setStatus(id: Identifier, data: T.ProfileStatusInput, options?: RequestOptions<T.ProfileStatusInput>) { return this.client.put<T.ProfileResponse, T.ProfileStatusInput>(`/api/v1/profile/${encodeURIComponent(id)}/status`, data, options); }
    personalInformation(id: Identifier, data: T.PersonalInformationInput, options?: RequestOptions<T.PersonalInformationInput>) { return this.client.put<T.ProfileResponse, T.PersonalInformationInput>(`/api/v1/profile/update/personal-information/${encodeURIComponent(id)}`, data, options); }
    /** @deprecated The profile service has never registered an education-information route. Store custom education data through updateProfile properties instead. */
    educationInformation(_id: Identifier, _data: T.EducationInformationInput, _options?: RequestOptions<T.EducationInformationInput>): never { throw new UnsupportedOperationError("update", "/api/v1/profile/update/education-information/{uuid}"); }
    setProperties(id: Identifier, properties: T.ProfileProperties, options?: RequestOptions<T.ProfilePropertiesInput>) { return this.client.put<T.ProfilePropertiesResponse, T.ProfilePropertiesInput>(`/api/v1/profile/${encodeURIComponent(id)}/properties`, { properties }, options); }
    uploadAvatar(id: Identifier, file: Blob, options?: RequestOptions<FormData>) { return this.client.post<T.ProfileMediaResponse, FormData>(`/api/v1/profile/${encodeURIComponent(id)}/avatar`, multipart({ file }), options); }
    deleteAvatar(id: Identifier, options?: RequestOptions) { return this.client.delete<T.ProfileMediaDeleteResponse>(`/api/v1/profile/${encodeURIComponent(id)}/avatar`, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";
