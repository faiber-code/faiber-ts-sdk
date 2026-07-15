import { RestResource, ServiceApi, type Identifier, type QueryParams, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
type R<E extends T.ProfileRecord, C, U, L, S> = RestResource<E, C, U, L, S>;
export class ProfileApi extends ServiceApi {
    readonly profiles = new RestResource<T.Profile, T.CreateProfileInput, T.UpdateProfileInput, T.ProfileListResponse, T.ProfileResponse>(this.client, "/api/v1/profile");
    readonly countries: R<T.Country, T.CreateCountryInput, T.UpdateCountryInput, T.CountryListResponse, T.CountryResponse> = new RestResource(this.client, "/api/v1/country");
    readonly provinces: R<T.Province, T.CreateProvinceInput, T.UpdateProvinceInput, T.ProvinceListResponse, T.ProvinceResponse> = new RestResource(this.client, "/api/v1/province");
    readonly cities: R<T.City, T.CreateCityInput, T.UpdateCityInput, T.CityListResponse, T.CityResponse> = new RestResource(this.client, "/api/v1/city");
    readonly settings: R<T.Setting, T.CreateSettingInput, T.UpdateSettingInput, T.SettingListResponse, T.SettingResponse> = new RestResource(this.client, "/api/v1/setting");
    readonly surveys: R<T.Survey, T.CreateSurveyInput, T.UpdateSurveyInput, T.SurveyListResponse, T.SurveyResponse> = new RestResource(this.client, "/api/v1/survey");
    readonly work: R<T.Work, T.CreateWorkInput, T.UpdateWorkInput, T.WorkListResponse, T.WorkResponse> = new RestResource(this.client, "/api/v1/work");
    readonly education: R<T.Education, T.CreateEducationInput, T.UpdateEducationInput, T.EducationListResponse, T.EducationResponse> = new RestResource(this.client, "/api/v1/education");
    readonly greetings: R<T.Greeting, T.CreateGreetingInput, T.UpdateGreetingInput, T.GreetingListResponse, T.GreetingResponse> = new RestResource(this.client, "/api/v1/greetings");
    byRole(role: T.ProfileRole, params?: QueryParams, options?: RequestOptions) { return this.client.get<T.ProfileListResponse>(`/api/v1/profile/${role}`, params, options); }
    full(id: Identifier, options?: RequestOptions) { return this.client.get<T.FullProfileResponse>(`/api/v1/profile/${encodeURIComponent(id)}/full`, undefined, options); }
    media(id: Identifier, options?: RequestOptions) { return this.client.get<T.ProfileMediaResponse>(`/api/v1/profile/${encodeURIComponent(id)}/media`, undefined, options); }
    setStatus(id: Identifier, data: T.ProfileStatusInput, options?: RequestOptions<T.ProfileStatusInput>) { return this.client.patch<T.ProfileResponse, T.ProfileStatusInput>(`/api/v1/profile/${encodeURIComponent(id)}/status`, data, options); }
    personalInformation(id: Identifier, data: T.PersonalInformationInput, options?: RequestOptions<T.PersonalInformationInput>) { return this.client.patch<T.ProfileResponse, T.PersonalInformationInput>(`/api/v1/profile/update/personal-information/${encodeURIComponent(id)}`, data, options); }
    educationInformation(id: Identifier, data: T.EducationInformationInput, options?: RequestOptions<T.EducationInformationInput>) { return this.client.patch<T.ProfileResponse, T.EducationInformationInput>(`/api/v1/profile/update/education-information/${encodeURIComponent(id)}`, data, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
