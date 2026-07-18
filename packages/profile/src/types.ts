import type { ApiEnvelope, JsonObject, JsonValue, ResourceListResponse, ResourceResponse } from "@faiber/sdk-core";
export type ProfileRole = "manager" | "accountant" | "support" | "consultant" | "teacher" | "student" | "parent" | "other";
export interface Profile extends JsonObject {
    id: string;
    user_id?: string;
    first_name?: string;
    last_name?: string;
    status?: string;
    role?: ProfileRole;
    avatar_url?: string;
    properties?: ProfileProperties;
}
export interface ProfileProperties extends JsonObject {
    [key: string]: JsonValue | undefined;
}
export interface ProfileRecord extends JsonObject {
    id: string;
    name?: string;
    title?: string;
}
export interface Country extends ProfileRecord {
    name: string;
    code?: string;
}
export interface Province extends ProfileRecord {
    name: string;
    country_id?: string;
}
export interface City extends ProfileRecord {
    name: string;
    province_id?: string;
}
export interface Setting extends ProfileRecord {
    key?: string;
    value?: JsonValue;
}
export interface Survey extends ProfileRecord {
    title?: string;
}
export interface Work extends ProfileRecord {
    company?: string;
    position?: string;
}
export interface Education extends ProfileRecord {
    institution?: string;
    degree?: string;
}
export interface Greeting extends ProfileRecord {
    content?: string;
}
export interface CreateProfileInput extends JsonObject {
    user_id?: string;
    first_name?: string;
    last_name?: string;
    role?: ProfileRole;
}
export interface UpdateProfileInput extends Partial<CreateProfileInput> {
    status?: string;
}
export interface CreateProfileRecordInput extends JsonObject {
    name?: string;
    title?: string;
}
export interface UpdateProfileRecordInput extends Partial<CreateProfileRecordInput> {
}
export interface CreateCountryInput extends CreateProfileRecordInput {
    name: string;
    code?: string;
}
export interface UpdateCountryInput extends Partial<CreateCountryInput> {
}
export interface CreateProvinceInput extends CreateProfileRecordInput {
    name: string;
    country_id: string;
}
export interface UpdateProvinceInput extends Partial<CreateProvinceInput> {
}
export interface CreateCityInput extends CreateProfileRecordInput {
    name: string;
    province_id: string;
}
export interface UpdateCityInput extends Partial<CreateCityInput> {
}
export interface CreateSettingInput extends CreateProfileRecordInput {
    key: string;
    value?: JsonValue;
}
export interface UpdateSettingInput extends Partial<CreateSettingInput> {
}
export interface CreateSurveyInput extends CreateProfileRecordInput {
    title: string;
}
export interface UpdateSurveyInput extends Partial<CreateSurveyInput> {
}
export interface CreateWorkInput extends CreateProfileRecordInput {
    company: string;
    position?: string;
}
export interface UpdateWorkInput extends Partial<CreateWorkInput> {
}
export interface CreateEducationInput extends CreateProfileRecordInput {
    institution: string;
    degree?: string;
}
export interface UpdateEducationInput extends Partial<CreateEducationInput> {
}
export interface CreateGreetingInput extends CreateProfileRecordInput {
    content: string;
}
export interface UpdateGreetingInput extends Partial<CreateGreetingInput> {
}
export interface ProfileStatusInput extends JsonObject {
    status: string;
    reason?: string;
}
export interface PersonalInformationInput extends JsonObject {
    first_name?: string;
    last_name?: string;
    phone?: string;
    birth_date?: string;
    city_id?: string;
}
export interface EducationInformationInput extends JsonObject {
    institution?: string;
    degree?: string;
    field?: string;
    started_at?: string;
    ended_at?: string;
}
export interface ProfileMedia extends JsonObject {
    id: string;
    url: string;
    type?: string;
}
export interface ProfileListResponse extends ResourceListResponse<Profile> {
}
export interface ProfileResponse extends ResourceResponse<Profile> {
}
export interface ProfileRecordListResponse<T extends ProfileRecord> extends ResourceListResponse<T> {
}
export interface ProfileRecordResponse<T extends ProfileRecord> extends ResourceResponse<T> {
}
export interface CountryListResponse extends ProfileRecordListResponse<Country> {
}
export interface CountryResponse extends ProfileRecordResponse<Country> {
}
export interface ProvinceListResponse extends ProfileRecordListResponse<Province> {
}
export interface ProvinceResponse extends ProfileRecordResponse<Province> {
}
export interface CityListResponse extends ProfileRecordListResponse<City> {
}
export interface CityResponse extends ProfileRecordResponse<City> {
}
export interface SettingListResponse extends ProfileRecordListResponse<Setting> {
}
export interface SettingResponse extends ProfileRecordResponse<Setting> {
}
export interface SurveyListResponse extends ProfileRecordListResponse<Survey> {
}
export interface SurveyResponse extends ProfileRecordResponse<Survey> {
}
export interface WorkListResponse extends ProfileRecordListResponse<Work> {
}
export interface WorkResponse extends ProfileRecordResponse<Work> {
}
export interface EducationListResponse extends ProfileRecordListResponse<Education> {
}
export interface EducationResponse extends ProfileRecordResponse<Education> {
}
export interface GreetingListResponse extends ProfileRecordListResponse<Greeting> {
}
export interface GreetingResponse extends ProfileRecordResponse<Greeting> {
}
export interface FullProfileResponse extends ApiEnvelope<Profile> {
}
export interface AdminProfileResponse extends ApiEnvelope<Profile> {
}
export interface ProfileMediaResponse extends ApiEnvelope<ProfileMedia[]> {
}
