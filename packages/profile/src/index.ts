import { RestResource, ServiceApi, multipart, type Identifier, type QueryParams, type RequestOptions } from "@faiber/sdk-core";
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
    admin(id: Identifier, options?: RequestOptions) { return this.client.get<T.AdminProfileResponse>(`/api/v1/profile/${encodeURIComponent(id)}/admin`, undefined, options); }
    media(id: Identifier, key?: string, options?: RequestOptions) { return this.client.get<T.ProfileMediaResponse>(`/api/v1/profile/${encodeURIComponent(id)}/media`, key ? { key } : undefined, options); }
    setStatus(id: Identifier, data: T.ProfileStatusInput, options?: RequestOptions<T.ProfileStatusInput>) { return this.client.put<T.ProfileResponse, T.ProfileStatusInput>(`/api/v1/profile/${encodeURIComponent(id)}/status`, data, options); }
    personalInformation(id: Identifier, data: T.PersonalInformationInput, options?: RequestOptions<T.PersonalInformationInput>) { return this.client.put<T.ProfileResponse, T.PersonalInformationInput>(`/api/v1/profile/update/personal-information/${encodeURIComponent(id)}`, data, options); }
    educationInformation(id: Identifier, data: T.EducationInformationInput, options?: RequestOptions<T.EducationInformationInput>) { return this.client.patch<T.ProfileResponse, T.EducationInformationInput>(`/api/v1/profile/update/education-information/${encodeURIComponent(id)}`, data, options); }
    setProperties(id: Identifier, properties: T.ProfileProperties, options?: RequestOptions<T.ProfileProperties>) { return this.client.put<T.ProfileResponse, T.ProfileProperties>(`/api/v1/profile/${encodeURIComponent(id)}/properties`, properties, options); }
    uploadAvatar(id: Identifier, file: Blob, options?: RequestOptions<FormData>) { return this.client.post<T.ProfileMediaResponse, FormData>(`/api/v1/profile/${encodeURIComponent(id)}/avatar`, multipart({ file }), options); }
    deleteAvatar(id: Identifier, options?: RequestOptions) { return this.client.delete<T.ProfileMediaResponse>(`/api/v1/profile/${encodeURIComponent(id)}/avatar`, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
