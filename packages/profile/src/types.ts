import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, ResourceListResponse, ResourceResponse } from "@faiber/sdk-core";
export type ProfileRole = "manager" | "accountant" | "support" | "consultant" | "teacher" | "student" | "parent" | "other";
export interface ProfileListQuery extends QueryParams {
    page?: string | number;
    per_page?: string | number;
    "filter[search]"?: string;
    "filter[status]"?: string;
    "filter[active]"?: boolean | "true" | "false" | "1" | "0";
    "filter[role]"?: ProfileRole;
    "filter[trashed]"?: string;
}
export interface Profile extends JsonObject {
    id: string;
    user_id: string;
    email?: string | null;
    phone?: string | null;
    national_code?: string | null;
    first_name?: LocalizedText | null;
    last_name?: LocalizedText | null;
    gender: string | null;
    status: string;
    employee_type?: string | null;
    freemium_session_limit?: number | null;
    avatar?: string | null;
    has_active_enrollment: boolean;
    roles: ProfileRoleRecord[];
    credential?: ProfileCredential | null;
    meta?: JsonValue;
    app?: JsonValue;
    assessment?: JsonValue;
    /** Office data synchronized into Profile. Present on detail, full, and admin reads. */
    office?: OfficeProfileData | null;
    /** LMS classroom projection. Present on detail, full, and admin reads. */
    lms?: LmsProfileData | null;
    properties?: ProfileProperties;
    services?: ProfileProperties;
    parent?: ProfileParent[];
}
export interface OfficeProfileData extends JsonObject {
    account_balance?: number | null;
    wallet_balance?: number | null;
    enrollments: OfficeEnrollment[];
    transactions: OfficeTransaction[];
    installments: OfficeInstallment[];
    wallets: OfficeWallet[];
    wallet_transactions: OfficeWalletTransaction[];
}
export interface OfficeEnrollment extends JsonObject {
    enrollment_id: number;
    student_id?: number | null;
    classroom_id?: number | null;
    course_id?: number | null;
    support_user_id?: string | null;
    amount?: number | null;
    discount_amount?: number | null;
    remain_amount?: number | null;
    total_sessions?: number | null;
    freemium_sessions?: number | null;
    freemium_sessions_used?: number | null;
    education_status_id?: number | null;
    archive: boolean;
}
export interface OfficeTransaction extends JsonObject {
    transaction_id: number;
    subject?: string | null;
    amount?: number | null;
    status?: string | null;
    support_user_id?: string | null;
    deposit_at?: string | null;
    archive: boolean;
}
export interface OfficeInstallment extends JsonObject {
    installment_id: number;
    amount?: number | null;
    status?: string | null;
    paid_at?: string | null;
    deadline?: string | null;
    archive: boolean;
}
export interface OfficeWallet extends JsonObject {
    wallet_id: number;
    balance?: number | null;
}
export interface OfficeWalletTransaction extends JsonObject {
    wallet_transaction_id: number;
    amount?: number | null;
    transaction_type?: string | null;
}
export interface LmsProfileData extends JsonObject {
    classrooms: LmsClassroom[];
    classroom_sessions: LmsClassroomSession[];
    classroom_users: LmsClassroomUser[];
}
export interface LmsClassroom extends JsonObject {
    classroom_id: string;
    name?: string | null;
    course_id?: string | null;
    capacity?: number | null;
    starts_at?: string | null;
    ends_at?: string | null;
    classroom_type_id?: string | null;
    status?: string | null;
    consultant_user_id?: string | null;
    teacher_user_id?: string | null;
    support_user_id?: string | null;
}
export interface LmsClassroomSession extends JsonObject {
    session_id: string;
    classroom_id?: string | null;
    starts_at?: string | null;
    ends_at?: string | null;
    status?: string | null;
}
export interface LmsClassroomUser extends JsonObject {
    classroom_id: string;
    score?: number | null;
    status?: string | null;
}
export interface LocalizedText extends JsonObject {
    fa?: string | null;
    en?: string | null;
}
export interface ProfileRoleRecord extends JsonObject {
    id: string;
    name: string;
}
export interface ProfileCredential extends JsonObject {
    handle_registration: number;
    handle_registration_with_installment: number;
    handle_await_installment: number;
    handle_overdue_installment: number;
    handle_freemium_sessions: number;
    handle_cancel: number;
    total: number;
}
export interface ProfileParent extends JsonObject {
    user_id: string;
    parent_type?: string | null;
}
export interface ProfileAddress extends JsonObject {
    id?: string;
    profile_id?: string;
    title: string;
    country?: string | null;
    province?: string | null;
    city?: string | null;
    postal_code?: string | null;
    plate?: string | null;
    detail?: string | null;
    created_at?: string;
    updated_at?: string | null;
}
export type SaveProfileAddressInput = Pick<ProfileAddress, "title"> & Partial<Pick<ProfileAddress, "country" | "province" | "city" | "postal_code" | "plate" | "detail">>;
export interface ProfileAddressListResponse extends ApiEnvelope<ProfileAddress[]> {
}
export interface ProfileAddressMutationResponse extends ApiEnvelope<JsonValue> {
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
export interface ProfilePatchInput extends JsonObject {
    email?: string | null;
    phone?: string | null;
    national_code?: string | null;
    national_number?: string | null;
    first_name?: LocalizedText | string | null;
    last_name?: LocalizedText | string | null;
    birthday?: string | null;
    nationality?: string | null;
    religion?: string | null;
    gender?: string | null;
    attendance_mode?: string | null;
    level?: string | null;
    referral_source?: string | null;
    referrer_uuid?: string | null;
    description?: string | null;
    marital?: string | null;
    nickname?: string | null;
    country_id?: string | null;
    province_id?: string | null;
    city_id?: string | null;
    status?: string;
    employee_type?: string | null;
    freemium_session_limit?: number | null;
    meta?: JsonValue;
    app?: JsonValue;
    properties?: ProfileProperties;
}
export interface UpdateProfileInput extends ProfilePatchInput {
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
    first_name?: LocalizedText;
    last_name?: LocalizedText;
    birthday?: string;
    nationality?: string;
    religion?: string;
    gender?: string;
    marital?: string;
    nickname?: string;
    national_number?: string;
    description?: string;
    referral_source?: string;
    referrer_uuid?: string;
    country_id?: string;
    province_id?: string;
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
    url: string;
    key: string;
}
export interface ProfilePropertiesInput extends JsonObject {
    properties: ProfileProperties;
}
export interface ProfilePropertiesResponse extends ApiEnvelope<JsonObject> {
}
export interface ProfileListData extends JsonObject {
    profiles: Profile[];
}
export interface ProfileSingleData extends JsonObject {
    profile: Profile;
}
export interface ProfilePaginationMeta extends JsonObject {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
}
export interface ProfileListResponse extends ApiEnvelope<ProfileListData> {
    meta: ProfilePaginationMeta;
}
export interface ProfileResponse extends ApiEnvelope<ProfileSingleData> {
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
export interface FullProfileResponse extends ProfileResponse {
}
export interface AdminProfileResponse extends ProfileResponse {
}
export interface ProfileMediaResponse extends ApiEnvelope<ProfileMedia> {
}
export interface ProfileMediaDeleteResponse extends ApiEnvelope<JsonObject> {
}
