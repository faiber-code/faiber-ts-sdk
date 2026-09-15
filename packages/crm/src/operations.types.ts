import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: api. */
export type RouterStatusRouteGetResponse = import("./types.js").CrmApiResponse<JsonValue>;

/** Backend query type: ListQuery. */
export interface ApiActivitiesGetQuery extends QueryParams {
  "cursor"?: string | null;
  "limit"?: number | null;
  "q"?: string | null;
  "pipeline_id"?: string | null;
  "stage_id"?: string | null;
  "team_id"?: string | null;
  "owner_user_id"?: string | null;
  "status"?: string | null;
  "statuses"?: string | null;
  "profile_id"?: string | null;
  "active_from"?: string | null;
  "active_to"?: string | null;
  "sort"?: string | null;
}
/** Backend response type: ListData<ActivityResponse>. */
export type ApiActivitiesGetResponse = import("./types.js").CrmActivityListResponse;

/** Backend request type: CreateActivity. */
export interface ApiCreateActivityPostInput extends JsonObject {
  "lead_id"?: string | null;
  "deal_id"?: string | null;
  "contact_id"?: string | null;
  "company_id"?: string | null;
  "activity_type": string;
  "direction"?: string | null;
  "subject"?: string | null;
  "body"?: string | null;
  "outcome"?: string | null;
  "occurred_at"?: string | null;
  "duration_seconds"?: number | null;
  "metadata"?: BackendJson<"JsonValue">;
}
/** Backend response type: ActivityResponse. */
export interface ApiCreateActivityPostResponseDataProfile extends JsonObject {
  "id": string;
  "user_id"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "status"?: string | null;
  "employee_type"?: string | null;
  "avatar"?: string | null;
}
export interface ApiCreateActivityPostResponseData extends JsonObject {
  "id": string;
  "lead_id"?: string | null;
  "deal_id"?: string | null;
  "contact_id"?: string | null;
  "company_id"?: string | null;
  "owner_user_id": string;
  "activity_type": string;
  "direction"?: string | null;
  "subject"?: string | null;
  "body"?: string | null;
  "outcome"?: string | null;
  "occurred_at": string;
  "duration_seconds"?: number | null;
  "metadata": BackendJson<"JsonValue">;
  "created_at": string;
  "profile"?: ApiCreateActivityPostResponseDataProfile | null;
}
export type ApiCreateActivityPostResponse = import("./types.js").CrmApiResponse<ApiCreateActivityPostResponseData>;

/** Backend request type: CreateActivityWithReminder. */
export interface ApiCreateActivityWithReminderPostInputActivity extends JsonObject {
  "lead_id"?: string | null;
  "deal_id"?: string | null;
  "contact_id"?: string | null;
  "company_id"?: string | null;
  "activity_type": string;
  "direction"?: string | null;
  "subject"?: string | null;
  "body"?: string | null;
  "outcome"?: string | null;
  "occurred_at"?: string | null;
  "duration_seconds"?: number | null;
  "metadata"?: BackendJson<"JsonValue">;
}
export interface ApiCreateActivityWithReminderPostInputReminder extends JsonObject {
  "lead_id"?: string | null;
  "deal_id"?: string | null;
  "contact_id"?: string | null;
  "company_id"?: string | null;
  "profile_id"?: string | null;
  "assignee_user_id"?: string | null;
  "title": string;
  "description"?: string | null;
  "task_type"?: string | null;
  "priority"?: string | null;
  "due_at"?: string | null;
}
export interface ApiCreateActivityWithReminderPostInput extends JsonObject {
  "activity": ApiCreateActivityWithReminderPostInputActivity;
  "reminder": ApiCreateActivityWithReminderPostInputReminder;
}
/** Backend response type: ActivityWithReminder. */
export interface ApiCreateActivityWithReminderPostResponseDataActivityProfile extends JsonObject {
  "id": string;
  "user_id"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "status"?: string | null;
  "employee_type"?: string | null;
  "avatar"?: string | null;
}
export interface ApiCreateActivityWithReminderPostResponseDataActivity extends JsonObject {
  "id": string;
  "lead_id"?: string | null;
  "deal_id"?: string | null;
  "contact_id"?: string | null;
  "company_id"?: string | null;
  "owner_user_id": string;
  "activity_type": string;
  "direction"?: string | null;
  "subject"?: string | null;
  "body"?: string | null;
  "outcome"?: string | null;
  "occurred_at": string;
  "duration_seconds"?: number | null;
  "metadata": BackendJson<"JsonValue">;
  "created_at": string;
  "profile"?: ApiCreateActivityWithReminderPostResponseDataActivityProfile | null;
}
export interface ApiCreateActivityWithReminderPostResponseDataReminder extends JsonObject {
  "id": string;
  "lead_id"?: string | null;
  "deal_id"?: string | null;
  "contact_id"?: string | null;
  "company_id"?: string | null;
  "profile_id"?: string | null;
  "assignee_user_id": string;
  "created_by": string;
  "title": string;
  "description"?: string | null;
  "task_type": string;
  "priority": string;
  "status": string;
  "due_at"?: string | null;
  "completed_at"?: string | null;
  "version": number;
  "created_at": string;
  "updated_at": string;
}
export interface ApiCreateActivityWithReminderPostResponseData extends JsonObject {
  "activity": ApiCreateActivityWithReminderPostResponseDataActivity;
  "reminder": ApiCreateActivityWithReminderPostResponseDataReminder;
}
export type ApiCreateActivityWithReminderPostResponse = import("./types.js").CrmApiResponse<ApiCreateActivityWithReminderPostResponseData>;

/** Backend query type: ListQuery. */
export interface ApiAutomationJobsGetQuery extends QueryParams {
  "cursor"?: string | null;
  "limit"?: number | null;
  "q"?: string | null;
  "pipeline_id"?: string | null;
  "stage_id"?: string | null;
  "team_id"?: string | null;
  "owner_user_id"?: string | null;
  "status"?: string | null;
  "statuses"?: string | null;
  "profile_id"?: string | null;
  "active_from"?: string | null;
  "active_to"?: string | null;
  "sort"?: string | null;
}
/** Backend response type: ListData<DurableJob>. */
export type ApiAutomationJobsGetResponse = import("./types.js").CrmAutomationJobListResponse;

/** Backend response type: Vec<WebhookSubscription>. */
export interface ApiAutomationWebhooksGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "endpoint_url": string;
  "event_types": string[];
  "is_active": boolean;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
  "delivery_count": number;
  "failed_delivery_count": number;
}
export type ApiAutomationWebhooksGetResponse = import("./types.js").CrmApiResponse<ApiAutomationWebhooksGetResponseItem[]>;

/** Backend response type: serde_json::Value. */
export type ApiBoardGetResponse = import("./types.js").CrmBoardResponse;

/** Backend response type: Vec<Campaign>. */
export interface ApiCampaignsGetResponseItem extends JsonObject {
  "id": string;
  "source_id"?: string | null;
  "name": string;
  "slug": string;
  "status": string;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "budget"?: number | null;
  "actual_cost"?: number | null;
  "currency": string;
  "metadata": BackendJson<"JsonValue">;
  "version": number;
  "created_at": string;
  "updated_at": string;
}
export type ApiCampaignsGetResponse = import("./types.js").CrmApiResponse<ApiCampaignsGetResponseItem[]>;

/** Backend request type: CreateCampaign. */
export interface ApiCreateCampaignPostInput extends JsonObject {
  "source_id"?: string | null;
  "name": string;
  "slug": string;
  "status"?: string | null;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "budget"?: number | null;
  "actual_cost"?: number | null;
  "currency"?: string | null;
  "metadata"?: BackendJson<"JsonValue">;
}
/** Backend response type: Campaign. */
export interface ApiCreateCampaignPostResponseData extends JsonObject {
  "id": string;
  "source_id"?: string | null;
  "name": string;
  "slug": string;
  "status": string;
  "starts_at"?: string | null;
  "ends_at"?: string | null;
  "budget"?: number | null;
  "actual_cost"?: number | null;
  "currency": string;
  "metadata": BackendJson<"JsonValue">;
  "version": number;
  "created_at": string;
  "updated_at": string;
}
export type ApiCreateCampaignPostResponse = import("./types.js").CrmApiResponse<ApiCreateCampaignPostResponseData>;

/** Backend query type: ListQuery. */
export interface ApiCompaniesGetQuery extends QueryParams {
  "cursor"?: string | null;
  "limit"?: number | null;
  "q"?: string | null;
  "pipeline_id"?: string | null;
  "stage_id"?: string | null;
  "team_id"?: string | null;
  "owner_user_id"?: string | null;
  "status"?: string | null;
  "statuses"?: string | null;
  "profile_id"?: string | null;
  "active_from"?: string | null;
  "active_to"?: string | null;
  "sort"?: string | null;
}
/** Backend response type: ListData<Company>. */
export type ApiCompaniesGetResponse = import("./types.js").CrmCompanyListResponse;

/** Backend request type: CreateCompany. */
export interface ApiCreateCompanyPostInput extends JsonObject {
  "name": string;
  "legal_name"?: string | null;
  "domain"?: string | null;
  "industry"?: string | null;
  "employee_count"?: number | null;
  "annual_revenue"?: number | null;
  "phone"?: string | null;
  "email"?: string | null;
  "website"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "address"?: BackendJson<"JsonValue">;
  "custom_data"?: BackendJson<"JsonValue">;
}
/** Backend response type: Company. */
export interface ApiCreateCompanyPostResponseData extends JsonObject {
  "id": string;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "name": string;
  "legal_name"?: string | null;
  "domain"?: string | null;
  "industry"?: string | null;
  "employee_count"?: number | null;
  "annual_revenue"?: number | null;
  "phone"?: string | null;
  "email"?: string | null;
  "website"?: string | null;
  "address": BackendJson<"JsonValue">;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiCreateCompanyPostResponse = import("./types.js").CrmApiResponse<ApiCreateCompanyPostResponseData>;

/** Backend response type: Company. */
export interface ApiCompanyGetResponseData extends JsonObject {
  "id": string;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "name": string;
  "legal_name"?: string | null;
  "domain"?: string | null;
  "industry"?: string | null;
  "employee_count"?: number | null;
  "annual_revenue"?: number | null;
  "phone"?: string | null;
  "email"?: string | null;
  "website"?: string | null;
  "address": BackendJson<"JsonValue">;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiCompanyGetResponse = import("./types.js").CrmApiResponse<ApiCompanyGetResponseData>;

/** Backend request type: UpdateCompany. */
export interface ApiUpdateCompanyPatchInput extends JsonObject {
  "version": number;
  "name"?: string | null;
  "legal_name"?: string | null;
  "domain"?: string | null;
  "industry"?: string | null;
  "employee_count"?: number | null;
  "annual_revenue"?: number | null;
  "phone"?: string | null;
  "email"?: string | null;
  "website"?: string | null;
}
/** Backend response type: Company. */
export interface ApiUpdateCompanyPatchResponseData extends JsonObject {
  "id": string;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "name": string;
  "legal_name"?: string | null;
  "domain"?: string | null;
  "industry"?: string | null;
  "employee_count"?: number | null;
  "annual_revenue"?: number | null;
  "phone"?: string | null;
  "email"?: string | null;
  "website"?: string | null;
  "address": BackendJson<"JsonValue">;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiUpdateCompanyPatchResponse = import("./types.js").CrmApiResponse<ApiUpdateCompanyPatchResponseData>;

/** Backend query type: ListQuery. */
export interface ApiContactsGetQuery extends QueryParams {
  "cursor"?: string | null;
  "limit"?: number | null;
  "q"?: string | null;
  "pipeline_id"?: string | null;
  "stage_id"?: string | null;
  "team_id"?: string | null;
  "owner_user_id"?: string | null;
  "status"?: string | null;
  "statuses"?: string | null;
  "profile_id"?: string | null;
  "active_from"?: string | null;
  "active_to"?: string | null;
  "sort"?: string | null;
}
/** Backend response type: ListData<Contact>. */
export type ApiContactsGetResponse = import("./types.js").CrmContactListResponse;

/** Backend request type: CreateContact. */
export interface ApiCreateContactPostInput extends JsonObject {
  "company_id"?: string | null;
  "first_name": string;
  "last_name"?: string | null;
  "job_title"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "preferred_channel"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "profile_id"?: string | null;
  "consent"?: BackendJson<"JsonValue">;
  "custom_data"?: BackendJson<"JsonValue">;
}
/** Backend response type: Contact. */
export interface ApiCreateContactPostResponseData extends JsonObject {
  "id": string;
  "company_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "profile_id"?: string | null;
  "first_name": string;
  "last_name"?: string | null;
  "job_title"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "preferred_channel"?: string | null;
  "lifecycle_status": string;
  "consent": BackendJson<"JsonValue">;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiCreateContactPostResponse = import("./types.js").CrmApiResponse<ApiCreateContactPostResponseData>;

/** Backend response type: Contact. */
export interface ApiContactGetResponseData extends JsonObject {
  "id": string;
  "company_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "profile_id"?: string | null;
  "first_name": string;
  "last_name"?: string | null;
  "job_title"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "preferred_channel"?: string | null;
  "lifecycle_status": string;
  "consent": BackendJson<"JsonValue">;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiContactGetResponse = import("./types.js").CrmApiResponse<ApiContactGetResponseData>;

/** Backend request type: UpdateContact. */
export interface ApiUpdateContactPatchInput extends JsonObject {
  "version": number;
  "first_name"?: string | null;
  "last_name"?: string | null;
  "job_title"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "preferred_channel"?: string | null;
  "lifecycle_status"?: string | null;
}
/** Backend response type: Contact. */
export interface ApiUpdateContactPatchResponseData extends JsonObject {
  "id": string;
  "company_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "profile_id"?: string | null;
  "first_name": string;
  "last_name"?: string | null;
  "job_title"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "preferred_channel"?: string | null;
  "lifecycle_status": string;
  "consent": BackendJson<"JsonValue">;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiUpdateContactPatchResponse = import("./types.js").CrmApiResponse<ApiUpdateContactPatchResponseData>;

/** Backend response type: Workspace. */
export interface ApiContextGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "locale": string;
  "timezone": string;
  "currency": string;
  "ai_mode": string;
  "project_id"?: string | null;
  "project_owner_user_id"?: string | null;
  "agentic_enabled": boolean;
  "settings": BackendJson<"JsonValue">;
  "version": number;
}
export type ApiContextGetResponse = import("./types.js").CrmApiResponse<ApiContextGetResponseData>;

/** Backend query type: ListQuery. */
export interface ApiDealsGetQuery extends QueryParams {
  "cursor"?: string | null;
  "limit"?: number | null;
  "q"?: string | null;
  "pipeline_id"?: string | null;
  "stage_id"?: string | null;
  "team_id"?: string | null;
  "owner_user_id"?: string | null;
  "status"?: string | null;
  "statuses"?: string | null;
  "profile_id"?: string | null;
  "active_from"?: string | null;
  "active_to"?: string | null;
  "sort"?: string | null;
}
/** Backend response type: ListData<Deal>. */
export type ApiDealsGetResponse = import("./types.js").CrmDealListResponse;

/** Backend request type: CreateDeal. */
export interface ApiCreateDealPostInput extends JsonObject {
  "pipeline_id"?: string | null;
  "stage_id"?: string | null;
  "lead_id"?: string | null;
  "company_id"?: string | null;
  "primary_contact_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "name": string;
  "amount": number;
  "currency"?: string | null;
  "probability"?: number | null;
  "expected_close_date"?: string | null;
  "recurring_amount"?: number | null;
  "recurring_interval"?: string | null;
  "custom_data"?: BackendJson<"JsonValue">;
}
/** Backend response type: Deal. */
export interface ApiCreateDealPostResponseData extends JsonObject {
  "id": string;
  "pipeline_id": string;
  "stage_id": string;
  "lead_id"?: string | null;
  "company_id"?: string | null;
  "primary_contact_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "name": string;
  "amount": number;
  "currency": string;
  "probability": number;
  "expected_close_date"?: string | null;
  "closed_at"?: string | null;
  "status": string;
  "loss_reason"?: string | null;
  "recurring_amount"?: number | null;
  "recurring_interval"?: string | null;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiCreateDealPostResponse = import("./types.js").CrmApiResponse<ApiCreateDealPostResponseData>;

/** Backend response type: Deal. */
export interface ApiDealGetResponseData extends JsonObject {
  "id": string;
  "pipeline_id": string;
  "stage_id": string;
  "lead_id"?: string | null;
  "company_id"?: string | null;
  "primary_contact_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "name": string;
  "amount": number;
  "currency": string;
  "probability": number;
  "expected_close_date"?: string | null;
  "closed_at"?: string | null;
  "status": string;
  "loss_reason"?: string | null;
  "recurring_amount"?: number | null;
  "recurring_interval"?: string | null;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiDealGetResponse = import("./types.js").CrmApiResponse<ApiDealGetResponseData>;

/** Backend request type: UpdateDeal. */
export interface ApiUpdateDealPatchInput extends JsonObject {
  "version": number;
  "name"?: string | null;
  "amount"?: number | null;
  "currency"?: string | null;
  "probability"?: number | null;
  "expected_close_date"?: string | null;
  "recurring_amount"?: number | null;
  "recurring_interval"?: string | null;
}
/** Backend response type: Deal. */
export interface ApiUpdateDealPatchResponseData extends JsonObject {
  "id": string;
  "pipeline_id": string;
  "stage_id": string;
  "lead_id"?: string | null;
  "company_id"?: string | null;
  "primary_contact_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "name": string;
  "amount": number;
  "currency": string;
  "probability": number;
  "expected_close_date"?: string | null;
  "closed_at"?: string | null;
  "status": string;
  "loss_reason"?: string | null;
  "recurring_amount"?: number | null;
  "recurring_interval"?: string | null;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiUpdateDealPatchResponse = import("./types.js").CrmApiResponse<ApiUpdateDealPatchResponseData>;

/** Backend request type: AssignRecord. */
export interface ApiAssignDealPatchInput extends JsonObject {
  "team_id"?: string | null;
  "owner_user_id"?: string | null;
  "version": number;
}
/** Backend response type: Deal. */
export interface ApiAssignDealPatchResponseData extends JsonObject {
  "id": string;
  "pipeline_id": string;
  "stage_id": string;
  "lead_id"?: string | null;
  "company_id"?: string | null;
  "primary_contact_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "name": string;
  "amount": number;
  "currency": string;
  "probability": number;
  "expected_close_date"?: string | null;
  "closed_at"?: string | null;
  "status": string;
  "loss_reason"?: string | null;
  "recurring_amount"?: number | null;
  "recurring_interval"?: string | null;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiAssignDealPatchResponse = import("./types.js").CrmApiResponse<ApiAssignDealPatchResponseData>;

/** Backend request type: MoveStage. */
export interface ApiMoveDealStagePatchInput extends JsonObject {
  "stage_id": string;
  "version": number;
  "loss_reason"?: string | null;
}
/** Backend response type: Deal. */
export interface ApiMoveDealStagePatchResponseData extends JsonObject {
  "id": string;
  "pipeline_id": string;
  "stage_id": string;
  "lead_id"?: string | null;
  "company_id"?: string | null;
  "primary_contact_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "name": string;
  "amount": number;
  "currency": string;
  "probability": number;
  "expected_close_date"?: string | null;
  "closed_at"?: string | null;
  "status": string;
  "loss_reason"?: string | null;
  "recurring_amount"?: number | null;
  "recurring_interval"?: string | null;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiMoveDealStagePatchResponse = import("./types.js").CrmApiResponse<ApiMoveDealStagePatchResponseData>;

/** Backend query type: FindOfficeLeadQuery. */
export interface ApiFindOfficeLeadGetQuery extends QueryParams {
  "profile_id": string;
  "foreign_key": string;
  "flags"?: string;
}
/** Backend response type: Option<entity::lead::Model>. */
export type ApiFindOfficeLeadGetResponse = import("./types.js").CrmApiResponse<BackendJson<"entity::lead::Model"> | null>;

/** Backend query type: ListQuery. */
export interface ApiLeadsGetQuery extends QueryParams {
  "cursor"?: string | null;
  "limit"?: number | null;
  "q"?: string | null;
  "pipeline_id"?: string | null;
  "stage_id"?: string | null;
  "team_id"?: string | null;
  "owner_user_id"?: string | null;
  "status"?: string | null;
  "statuses"?: string | null;
  "profile_id"?: string | null;
  "active_from"?: string | null;
  "active_to"?: string | null;
  "sort"?: string | null;
}
/** Backend response type: ListData<Lead>. */
export type ApiLeadsGetResponse = import("./types.js").CrmLeadListResponse;

/** Backend request type: CreateLead. */
export interface ApiCreateLeadPostInput extends JsonObject {
  "pipeline_id"?: string | null;
  "stage_id"?: string | null;
  "company_id"?: string | null;
  "contact_id"?: string | null;
  "source_id"?: string | null;
  "campaign_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "profile_id"?: string | null;
  "title": string;
  "first_name"?: string | null;
  "last_name"?: string | null;
  "company_name"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "segment"?: string | null;
  "offer"?: string | null;
  "score"?: number | null;
  "estimated_value"?: number | null;
  "currency"?: string | null;
  "next_activity_at"?: string | null;
  "custom_data"?: BackendJson<"JsonValue">;
}
/** Backend response type: Lead. */
export interface ApiCreateLeadPostResponseData extends JsonObject {
  "id": string;
  "pipeline_id": string;
  "stage_id": string;
  "company_id"?: string | null;
  "contact_id"?: string | null;
  "source_id"?: string | null;
  "campaign_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "profile_id"?: string | null;
  "title": string;
  "first_name"?: string | null;
  "last_name"?: string | null;
  "company_name"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "segment"?: string | null;
  "offer"?: string | null;
  "status": string;
  "score": number;
  "estimated_value"?: number | null;
  "currency": string;
  "next_activity_at"?: string | null;
  "converted_at"?: string | null;
  "converted_deal_id"?: string | null;
  "loss_reason"?: string | null;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiCreateLeadPostResponse = import("./types.js").CrmApiResponse<ApiCreateLeadPostResponseData>;

/** Backend response type: Lead. */
export interface ApiLeadGetResponseData extends JsonObject {
  "id": string;
  "pipeline_id": string;
  "stage_id": string;
  "company_id"?: string | null;
  "contact_id"?: string | null;
  "source_id"?: string | null;
  "campaign_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "profile_id"?: string | null;
  "title": string;
  "first_name"?: string | null;
  "last_name"?: string | null;
  "company_name"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "segment"?: string | null;
  "offer"?: string | null;
  "status": string;
  "score": number;
  "estimated_value"?: number | null;
  "currency": string;
  "next_activity_at"?: string | null;
  "converted_at"?: string | null;
  "converted_deal_id"?: string | null;
  "loss_reason"?: string | null;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiLeadGetResponse = import("./types.js").CrmApiResponse<ApiLeadGetResponseData>;

/** Backend request type: UpdateLead. */
export interface ApiUpdateLeadPatchInput extends JsonObject {
  "version": number;
  "title"?: string | null;
  "first_name"?: string | null;
  "last_name"?: string | null;
  "company_name"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "segment"?: string | null;
  "offer"?: string | null;
  "status"?: string | null;
  "score"?: number | null;
  "estimated_value"?: number | null;
  "currency"?: string | null;
  "next_activity_at"?: string | null;
  "profile_id"?: string | null;
}
/** Backend response type: Lead. */
export interface ApiUpdateLeadPatchResponseData extends JsonObject {
  "id": string;
  "pipeline_id": string;
  "stage_id": string;
  "company_id"?: string | null;
  "contact_id"?: string | null;
  "source_id"?: string | null;
  "campaign_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "profile_id"?: string | null;
  "title": string;
  "first_name"?: string | null;
  "last_name"?: string | null;
  "company_name"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "segment"?: string | null;
  "offer"?: string | null;
  "status": string;
  "score": number;
  "estimated_value"?: number | null;
  "currency": string;
  "next_activity_at"?: string | null;
  "converted_at"?: string | null;
  "converted_deal_id"?: string | null;
  "loss_reason"?: string | null;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiUpdateLeadPatchResponse = import("./types.js").CrmApiResponse<ApiUpdateLeadPatchResponseData>;

/** Backend request type: AssignRecord. */
export interface ApiAssignLeadPatchInput extends JsonObject {
  "team_id"?: string | null;
  "owner_user_id"?: string | null;
  "version": number;
}
/** Backend response type: Lead. */
export interface ApiAssignLeadPatchResponseData extends JsonObject {
  "id": string;
  "pipeline_id": string;
  "stage_id": string;
  "company_id"?: string | null;
  "contact_id"?: string | null;
  "source_id"?: string | null;
  "campaign_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "profile_id"?: string | null;
  "title": string;
  "first_name"?: string | null;
  "last_name"?: string | null;
  "company_name"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "segment"?: string | null;
  "offer"?: string | null;
  "status": string;
  "score": number;
  "estimated_value"?: number | null;
  "currency": string;
  "next_activity_at"?: string | null;
  "converted_at"?: string | null;
  "converted_deal_id"?: string | null;
  "loss_reason"?: string | null;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiAssignLeadPatchResponse = import("./types.js").CrmApiResponse<ApiAssignLeadPatchResponseData>;

/** Backend response type: Vec<LeadHistoryEvent>. */
export interface ApiLeadHistoryGetResponseItemProfile extends JsonObject {
  "id": string;
  "user_id"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "national_code"?: string | null;
  "first_name"?: JsonValue | null;
  "last_name"?: JsonValue | null;
  "status"?: string | null;
  "employee_type"?: string | null;
  "avatar"?: string | null;
}
export interface ApiLeadHistoryGetResponseItem extends JsonObject {
  "id": string;
  "event_type": string;
  "actor_user_id"?: string | null;
  "profile"?: ApiLeadHistoryGetResponseItemProfile | null;
  "data": BackendJson<"JsonValue">;
  "occurred_at": string;
}
export type ApiLeadHistoryGetResponse = import("./types.js").CrmApiResponse<ApiLeadHistoryGetResponseItem[]>;

/** Backend response type: serde_json::Value. */
export type ApiDeleteLeadRemindersDeleteResponse = import("./types.js").CrmApiResponse<JsonValue>;

/** Backend response type: DeletionResult. */
export interface ApiRemoveLeadFromSosDeleteResponseData extends JsonObject {
  "id": string;
  "deleted": boolean;
}
export type ApiRemoveLeadFromSosDeleteResponse = import("./types.js").CrmApiResponse<ApiRemoveLeadFromSosDeleteResponseData>;

/** Backend response type: SosLead. */
export interface ApiAddLeadToSosPostResponseData extends JsonObject {
  "id": string;
  "lead_id": string;
  "created_by": string;
  "created_at": string;
}
export type ApiAddLeadToSosPostResponse = import("./types.js").CrmApiResponse<ApiAddLeadToSosPostResponseData>;

/** Backend request type: MoveStage. */
export interface ApiMoveLeadStagePatchInput extends JsonObject {
  "stage_id": string;
  "version": number;
  "loss_reason"?: string | null;
}
/** Backend response type: Lead. */
export interface ApiMoveLeadStagePatchResponseData extends JsonObject {
  "id": string;
  "pipeline_id": string;
  "stage_id": string;
  "company_id"?: string | null;
  "contact_id"?: string | null;
  "source_id"?: string | null;
  "campaign_id"?: string | null;
  "owner_user_id"?: string | null;
  "team_id"?: string | null;
  "profile_id"?: string | null;
  "title": string;
  "first_name"?: string | null;
  "last_name"?: string | null;
  "company_name"?: string | null;
  "email"?: string | null;
  "phone"?: string | null;
  "segment"?: string | null;
  "offer"?: string | null;
  "status": string;
  "score": number;
  "estimated_value"?: number | null;
  "currency": string;
  "next_activity_at"?: string | null;
  "converted_at"?: string | null;
  "converted_deal_id"?: string | null;
  "loss_reason"?: string | null;
  "custom_data": BackendJson<"JsonValue">;
  "version": number;
  "created_by": string;
  "created_at": string;
  "updated_at": string;
}
export type ApiMoveLeadStagePatchResponse = import("./types.js").CrmApiResponse<ApiMoveLeadStagePatchResponseData>;

/** Backend query type: ListQuery. */
export interface ApiLightLeadsGetQuery extends QueryParams {
  "cursor"?: string | null;
  "limit"?: number | null;
  "q"?: string | null;
  "pipeline_id"?: string | null;
  "stage_id"?: string | null;
  "team_id"?: string | null;
  "owner_user_id"?: string | null;
  "status"?: string | null;
  "statuses"?: string | null;
  "profile_id"?: string | null;
  "active_from"?: string | null;
  "active_to"?: string | null;
  "sort"?: string | null;
}
/** Backend response type: ListData<Lead>. */
export type ApiLightLeadsGetResponse = import("./types.js").CrmLeadListResponse;

/** Backend response type: Vec<PipelineWithStages>. */
export type ApiPipelinesGetResponse = import("./types.js").CrmPipelinesResponse;

/** Backend request type: UpdatePipeline. */
export interface ApiUpdatePipelinePatchInput extends JsonObject {
  "version": number;
  "name"?: string | null;
  "priority"?: number | null;
  "hint"?: string | null;
  "daily_quota"?: number | null;
  "can_create_lead"?: boolean | null;
  "acquire_flags"?: BackendJson<"JsonValue"> | null;
  "actions"?: BackendJson<"JsonValue"> | null;
  "is_active"?: boolean | null;
}
/** Backend response type: Pipeline. */
export interface ApiUpdatePipelinePatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "entity_type": string;
  "team_id"?: string | null;
  "is_default": boolean;
  "is_active": boolean;
  "priority": number;
  "hint"?: string | null;
  "daily_quota": number;
  "can_create_lead": boolean;
  "acquire_flags": BackendJson<"JsonValue">;
  "actions": BackendJson<"JsonValue">;
  "version": number;
}
export type ApiUpdatePipelinePatchResponse = import("./types.js").CrmApiResponse<ApiUpdatePipelinePatchResponseData>;

/** Backend response type: ReportRun. */
export interface ApiReportRunGetResponseData extends JsonObject {
  "id": string;
  "report_type": string;
  "period_start": string;
  "period_end": string;
  "status": string;
  "deterministic_summary"?: BackendJson<"JsonValue"> | null;
  "ai_job_id"?: string | null;
  "ai_interpretation"?: BackendJson<"JsonValue"> | null;
  "error"?: string | null;
  "requested_by": string;
  "created_at": string;
  "completed_at"?: string | null;
}
export type ApiReportRunGetResponse = import("./types.js").CrmApiResponse<ApiReportRunGetResponseData>;

/** Backend response type: JsonValue. */
export type ApiRequestAgenticInsightPostResponse = import("./types.js").CrmAgenticInsightResponse;

/** Backend response type: serde_json::Value. */
export type ApiReportCatalogGetResponse = import("./types.js").CrmReportCatalogResponse;

/** Backend query type: ReportQuery. */
export interface ApiOverviewGetQuery extends QueryParams {
  "period_start"?: string | null;
  "period_end"?: string | null;
}
/** Backend response type: super::types::Overview. */
export type ApiOverviewGetResponse = import("./types.js").CrmOverviewResponse;

/** Backend query type: ReportQuery. */
export interface ApiRefreshReportsPostQuery extends QueryParams {
  "period_start"?: string | null;
  "period_end"?: string | null;
}
/** Backend response type: JsonValue. */
export type ApiRefreshReportsPostResponse = import("./types.js").CrmReportRefreshResponse;

/** Backend response type: Vec<SosLead>. */
export interface ApiListSosLeadsGetResponseItem extends JsonObject {
  "id": string;
  "lead_id": string;
  "created_by": string;
  "created_at": string;
}
export type ApiListSosLeadsGetResponse = import("./types.js").CrmApiResponse<ApiListSosLeadsGetResponseItem[]>;

/** Backend response type: Vec<Source>. */
export interface ApiSourcesGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "channel": string;
  "is_active": boolean;
  "created_at": string;
  "updated_at": string;
}
export type ApiSourcesGetResponse = import("./types.js").CrmApiResponse<ApiSourcesGetResponseItem[]>;

/** Backend request type: CreateSource. */
export interface ApiCreateSourcePostInput extends JsonObject {
  "name": string;
  "slug": string;
  "channel"?: string | null;
}
/** Backend response type: Source. */
export interface ApiCreateSourcePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "channel": string;
  "is_active": boolean;
  "created_at": string;
  "updated_at": string;
}
export type ApiCreateSourcePostResponse = import("./types.js").CrmApiResponse<ApiCreateSourcePostResponseData>;

/** Backend response type: DailyStats. */
export interface ApiDailyStatsGetResponseDataWorkflows extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "priority": number;
  "hint"?: string | null;
  "daily_tasks": number;
  "leads_count": number;
  "lead_count": number;
}
export interface ApiDailyStatsGetResponseData extends JsonObject {
  "workflows": ApiDailyStatsGetResponseDataWorkflows[];
  "total_tasks": number;
  "total_done_tasks": number;
  "extra_tasks_done": number;
  "all_tasks_done": boolean;
}
export type ApiDailyStatsGetResponse = import("./types.js").CrmApiResponse<ApiDailyStatsGetResponseData>;

/** Backend response type: LeadStats. */
export interface ApiLeadStatsGetResponseDataWorkflows extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "priority": number;
  "total": number;
  "active": number;
  "inactive": number;
}
export interface ApiLeadStatsGetResponseData extends JsonObject {
  "total": number;
  "active": number;
  "inactive": number;
  "workflows": ApiLeadStatsGetResponseDataWorkflows[];
}
export type ApiLeadStatsGetResponse = import("./types.js").CrmApiResponse<ApiLeadStatsGetResponseData>;

/** Backend query type: ListQuery. */
export interface ApiTasksGetQuery extends QueryParams {
  "cursor"?: string | null;
  "limit"?: number | null;
  "q"?: string | null;
  "pipeline_id"?: string | null;
  "stage_id"?: string | null;
  "team_id"?: string | null;
  "owner_user_id"?: string | null;
  "status"?: string | null;
  "statuses"?: string | null;
  "profile_id"?: string | null;
  "active_from"?: string | null;
  "active_to"?: string | null;
  "sort"?: string | null;
}
/** Backend response type: ListData<Task>. */
export type ApiTasksGetResponse = import("./types.js").CrmTaskListResponse;

/** Backend request type: CreateTask. */
export interface ApiCreateTaskPostInput extends JsonObject {
  "lead_id"?: string | null;
  "deal_id"?: string | null;
  "contact_id"?: string | null;
  "company_id"?: string | null;
  "profile_id"?: string | null;
  "assignee_user_id"?: string | null;
  "title": string;
  "description"?: string | null;
  "task_type"?: string | null;
  "priority"?: string | null;
  "due_at"?: string | null;
}
/** Backend response type: Task. */
export interface ApiCreateTaskPostResponseData extends JsonObject {
  "id": string;
  "lead_id"?: string | null;
  "deal_id"?: string | null;
  "contact_id"?: string | null;
  "company_id"?: string | null;
  "profile_id"?: string | null;
  "assignee_user_id": string;
  "created_by": string;
  "title": string;
  "description"?: string | null;
  "task_type": string;
  "priority": string;
  "status": string;
  "due_at"?: string | null;
  "completed_at"?: string | null;
  "version": number;
  "created_at": string;
  "updated_at": string;
}
export type ApiCreateTaskPostResponse = import("./types.js").CrmApiResponse<ApiCreateTaskPostResponseData>;

/** Backend response type: DeletionResult. */
export interface ApiDeleteTaskDeleteResponseData extends JsonObject {
  "id": string;
  "deleted": boolean;
}
export type ApiDeleteTaskDeleteResponse = import("./types.js").CrmApiResponse<ApiDeleteTaskDeleteResponseData>;

/** Backend request type: UpdateTaskStatus. */
export interface ApiUpdateTaskStatusPatchInput extends JsonObject {
  "status": string;
  "version": number;
}
/** Backend response type: Task. */
export interface ApiUpdateTaskStatusPatchResponseData extends JsonObject {
  "id": string;
  "lead_id"?: string | null;
  "deal_id"?: string | null;
  "contact_id"?: string | null;
  "company_id"?: string | null;
  "profile_id"?: string | null;
  "assignee_user_id": string;
  "created_by": string;
  "title": string;
  "description"?: string | null;
  "task_type": string;
  "priority": string;
  "status": string;
  "due_at"?: string | null;
  "completed_at"?: string | null;
  "version": number;
  "created_at": string;
  "updated_at": string;
}
export type ApiUpdateTaskStatusPatchResponse = import("./types.js").CrmApiResponse<ApiUpdateTaskStatusPatchResponseData>;

/** Backend response type: Vec<Team>. */
export interface ApiTeamsGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string | null;
  "manager_user_id"?: string | null;
  "is_active": boolean;
  "version": number;
  "member_count": number;
  "created_at": string;
  "updated_at": string;
}
export type ApiTeamsGetResponse = import("./types.js").CrmApiResponse<ApiTeamsGetResponseItem[]>;

/** Backend request type: CreateTeam. */
export interface ApiCreateTeamPostInput extends JsonObject {
  "name": string;
  "description"?: string | null;
  "manager_user_id"?: string | null;
}
/** Backend response type: Team. */
export interface ApiCreateTeamPostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "description"?: string | null;
  "manager_user_id"?: string | null;
  "is_active": boolean;
  "version": number;
  "member_count": number;
  "created_at": string;
  "updated_at": string;
}
export type ApiCreateTeamPostResponse = import("./types.js").CrmApiResponse<ApiCreateTeamPostResponseData>;

/** Backend request type: VersionedDelete. */
export interface ApiDeleteTeamDeleteInput extends JsonObject {
  "version": number;
}
/** Backend response type: DeletionResult. */
export interface ApiDeleteTeamDeleteResponseData extends JsonObject {
  "id": string;
  "deleted": boolean;
}
export type ApiDeleteTeamDeleteResponse = import("./types.js").CrmApiResponse<ApiDeleteTeamDeleteResponseData>;

/** Backend response type: serde_json::Value. */
export type ApiTeamGetResponse = import("./types.js").CrmTeamDetailResponse;

/** Backend request type: AddTeamMember. */
export interface ApiAddTeamMemberPostInput extends JsonObject {
  "user_id": string;
  "title"?: string | null;
  "capacity"?: number | null;
}
/** Backend response type: TeamMember. */
export interface ApiAddTeamMemberPostResponseData extends JsonObject {
  "id": string;
  "team_id": string;
  "user_id": string;
  "title"?: string | null;
  "capacity": number;
  "is_active": boolean;
  "created_at": string;
  "updated_at": string;
}
export type ApiAddTeamMemberPostResponse = import("./types.js").CrmApiResponse<ApiAddTeamMemberPostResponseData>;

/** Backend response type: TeamMember. */
export interface ApiRemoveTeamMemberDeleteResponseData extends JsonObject {
  "id": string;
  "team_id": string;
  "user_id": string;
  "title"?: string | null;
  "capacity": number;
  "is_active": boolean;
  "created_at": string;
  "updated_at": string;
}
export type ApiRemoveTeamMemberDeleteResponse = import("./types.js").CrmApiResponse<ApiRemoveTeamMemberDeleteResponseData>;

/** Backend request type: CreateWorkflowRequest. */
export interface ApiCreateWorkflowRoutePostApiV1WorkflowInput extends JsonObject {
  "name": string;
  "slug": string;
  "acquire_flags": string[];
  "priority": number;
  "can_create_lead"?: boolean;
  "actions"?: JsonValue | null;
  "hint"?: string | null;
}
/** Backend response type: WorkflowResponse. */
export interface ApiCreateWorkflowRoutePostApiV1WorkflowResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "acquire_flags": string[];
  "priority": number;
  "can_create_lead": boolean;
  "actions"?: JsonValue | null;
  "hint"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export type ApiCreateWorkflowRoutePostApiV1WorkflowResponse = import("./types.js").CrmApiResponse<ApiCreateWorkflowRoutePostApiV1WorkflowResponseData>;

/** Backend query type: ListQuery. */
export interface ApiListWorkflowsRouteGetQuery extends QueryParams {
  "cursor"?: string | null;
  "limit"?: number | null;
  "q"?: string | null;
  "pipeline_id"?: string | null;
  "stage_id"?: string | null;
  "team_id"?: string | null;
  "owner_user_id"?: string | null;
  "status"?: string | null;
  "statuses"?: string | null;
  "profile_id"?: string | null;
  "active_from"?: string | null;
  "active_to"?: string | null;
  "sort"?: string | null;
}
/** Backend response type: Vec<WorkflowResponse>. */
export interface ApiListWorkflowsRouteGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "acquire_flags": string[];
  "priority": number;
  "can_create_lead": boolean;
  "actions"?: JsonValue | null;
  "hint"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export type ApiListWorkflowsRouteGetResponse = import("./types.js").CrmApiResponse<ApiListWorkflowsRouteGetResponseItem[]>;

/** Backend request type: CreateWorkflowRequest. */
export interface ApiCreateWorkflowRoutePostApiV1WorkflowsInput extends JsonObject {
  "name": string;
  "slug": string;
  "acquire_flags": string[];
  "priority": number;
  "can_create_lead"?: boolean;
  "actions"?: JsonValue | null;
  "hint"?: string | null;
}
/** Backend response type: WorkflowResponse. */
export interface ApiCreateWorkflowRoutePostApiV1WorkflowsResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "acquire_flags": string[];
  "priority": number;
  "can_create_lead": boolean;
  "actions"?: JsonValue | null;
  "hint"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export type ApiCreateWorkflowRoutePostApiV1WorkflowsResponse = import("./types.js").CrmApiResponse<ApiCreateWorkflowRoutePostApiV1WorkflowsResponseData>;

/** Backend response type: DeletionResult. */
export interface ApiDeleteWorkflowRouteDeleteResponseData extends JsonObject {
  "id": string;
  "deleted": boolean;
}
export type ApiDeleteWorkflowRouteDeleteResponse = import("./types.js").CrmApiResponse<ApiDeleteWorkflowRouteDeleteResponseData>;

/** Backend response type: WorkflowResponse. */
export interface ApiShowWorkflowRouteGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "acquire_flags": string[];
  "priority": number;
  "can_create_lead": boolean;
  "actions"?: JsonValue | null;
  "hint"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export type ApiShowWorkflowRouteGetResponse = import("./types.js").CrmApiResponse<ApiShowWorkflowRouteGetResponseData>;

/** Backend request type: UpdateWorkflowRequest. */
export interface ApiUpdateWorkflowRoutePatchInput extends JsonObject {
  "name"?: string | null;
  "slug"?: string | null;
  "acquire_flags"?: string[] | null;
  "priority"?: number | null;
  "can_create_lead"?: boolean | null;
  "actions"?: JsonValue | null;
  "hint"?: string | null;
}
/** Backend response type: WorkflowResponse. */
export interface ApiUpdateWorkflowRoutePatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "acquire_flags": string[];
  "priority": number;
  "can_create_lead": boolean;
  "actions"?: JsonValue | null;
  "hint"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export type ApiUpdateWorkflowRoutePatchResponse = import("./types.js").CrmApiResponse<ApiUpdateWorkflowRoutePatchResponseData>;

/** Backend response type: Vec<WorkflowAssignment>. */
export interface ApiListWorkflowAssignmentsGetResponseItem extends JsonObject {
  "id": string;
  "workflow_id": string;
  "team_id"?: string | null;
  "user_id"?: string | null;
  "created_by": string;
  "created_at": string;
}
export type ApiListWorkflowAssignmentsGetResponse = import("./types.js").CrmApiResponse<ApiListWorkflowAssignmentsGetResponseItem[]>;

/** Backend request type: CreateWorkflowAssignment. */
export interface ApiCreateWorkflowAssignmentPostInput extends JsonObject {
  "team_id"?: string | null;
  "user_id"?: string | null;
}
/** Backend response type: WorkflowAssignment. */
export interface ApiCreateWorkflowAssignmentPostResponseData extends JsonObject {
  "id": string;
  "workflow_id": string;
  "team_id"?: string | null;
  "user_id"?: string | null;
  "created_by": string;
  "created_at": string;
}
export type ApiCreateWorkflowAssignmentPostResponse = import("./types.js").CrmApiResponse<ApiCreateWorkflowAssignmentPostResponseData>;

/** Backend response type: DeletionResult. */
export interface ApiDeleteWorkflowAssignmentDeleteResponseData extends JsonObject {
  "id": string;
  "deleted": boolean;
}
export type ApiDeleteWorkflowAssignmentDeleteResponse = import("./types.js").CrmApiResponse<ApiDeleteWorkflowAssignmentDeleteResponseData>;

/** Backend query type: ListQuery. */
export interface ApiListWorkflowNodesRouteGetQuery extends QueryParams {
  "cursor"?: string | null;
  "limit"?: number | null;
  "q"?: string | null;
  "pipeline_id"?: string | null;
  "stage_id"?: string | null;
  "team_id"?: string | null;
  "owner_user_id"?: string | null;
  "status"?: string | null;
  "statuses"?: string | null;
  "profile_id"?: string | null;
  "active_from"?: string | null;
  "active_to"?: string | null;
  "sort"?: string | null;
}
/** Backend response type: Vec<WorkflowNodeResponse>. */
export interface ApiListWorkflowNodesRouteGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "priority": number;
  "workflow_id": string;
  "is_draggable_in": boolean;
  "is_draggable_out": boolean;
  "actions"?: JsonValue | null;
  "auto_win": boolean;
  "created_at": string;
  "updated_at": string;
}
export type ApiListWorkflowNodesRouteGetResponse = import("./types.js").CrmApiResponse<ApiListWorkflowNodesRouteGetResponseItem[]>;

/** Backend request type: CreateWorkflowNodeRequest. */
export interface ApiCreateWorkflowNodeRoutePostInput extends JsonObject {
  "name": string;
  "slug": string;
  "priority": number;
  "is_draggable_in"?: boolean;
  "is_draggable_out"?: boolean;
  "actions"?: JsonValue | null;
  "auto_win"?: boolean;
}
/** Backend response type: WorkflowNodeResponse. */
export interface ApiCreateWorkflowNodeRoutePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "priority": number;
  "workflow_id": string;
  "is_draggable_in": boolean;
  "is_draggable_out": boolean;
  "actions"?: JsonValue | null;
  "auto_win": boolean;
  "created_at": string;
  "updated_at": string;
}
export type ApiCreateWorkflowNodeRoutePostResponse = import("./types.js").CrmApiResponse<ApiCreateWorkflowNodeRoutePostResponseData>;

/** Backend response type: DeletionResult. */
export interface ApiDeleteWorkflowNodeRouteDeleteResponseData extends JsonObject {
  "id": string;
  "deleted": boolean;
}
export type ApiDeleteWorkflowNodeRouteDeleteResponse = import("./types.js").CrmApiResponse<ApiDeleteWorkflowNodeRouteDeleteResponseData>;

/** Backend response type: WorkflowNodeResponse. */
export interface ApiShowWorkflowNodeRouteGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "priority": number;
  "workflow_id": string;
  "is_draggable_in": boolean;
  "is_draggable_out": boolean;
  "actions"?: JsonValue | null;
  "auto_win": boolean;
  "created_at": string;
  "updated_at": string;
}
export type ApiShowWorkflowNodeRouteGetResponse = import("./types.js").CrmApiResponse<ApiShowWorkflowNodeRouteGetResponseData>;

/** Backend request type: UpdateWorkflowNodeRequest. */
export interface ApiUpdateWorkflowNodeRoutePatchInput extends JsonObject {
  "name"?: string | null;
  "slug"?: string | null;
  "priority"?: number | null;
  "is_draggable_in"?: boolean | null;
  "is_draggable_out"?: boolean | null;
  "actions"?: JsonValue | null;
  "auto_win"?: boolean | null;
}
/** Backend response type: WorkflowNodeResponse. */
export interface ApiUpdateWorkflowNodeRoutePatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "priority": number;
  "workflow_id": string;
  "is_draggable_in": boolean;
  "is_draggable_out": boolean;
  "actions"?: JsonValue | null;
  "auto_win": boolean;
  "created_at": string;
  "updated_at": string;
}
export type ApiUpdateWorkflowNodeRoutePatchResponse = import("./types.js").CrmApiResponse<ApiUpdateWorkflowNodeRoutePatchResponseData>;

/** Backend response type: Vec<Pipeline>. */
export interface ApiMemberWorkflowsGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "entity_type": string;
  "team_id"?: string | null;
  "is_default": boolean;
  "is_active": boolean;
  "priority": number;
  "hint"?: string | null;
  "daily_quota": number;
  "can_create_lead": boolean;
  "acquire_flags": BackendJson<"JsonValue">;
  "actions": BackendJson<"JsonValue">;
  "version": number;
}
export type ApiMemberWorkflowsGetResponse = import("./types.js").CrmApiResponse<ApiMemberWorkflowsGetResponseItem[]>;

/** Backend query type: super::types::WorklogListQuery. */
export interface ApiWorklogsGetQuery extends QueryParams {
  "sort"?: string | null;
}
/** Backend response type: Vec<WorklogResponse>. */
export interface ApiWorklogsGetResponseItem extends JsonObject {
  "id": string;
  "log_type": string;
  "assignee_id": string;
  "profile_id": string;
  "start_date": string;
  "duration": number;
  "description"?: string | null;
  "created_at": string;
  "updated_at": string;
}
export type ApiWorklogsGetResponse = import("./types.js").CrmApiResponse<ApiWorklogsGetResponseItem[]>;

/** Backend request type: UpdateWorkspace. */
export interface ApiUpdateWorkspacePatchInput extends JsonObject {
  "name"?: string | null;
  "locale"?: string | null;
  "timezone"?: string | null;
  "currency"?: string | null;
  "ai_mode"?: string | null;
  "agentic_enabled"?: boolean | null;
  "version": number;
}
/** Backend response type: Workspace. */
export interface ApiUpdateWorkspacePatchResponseData extends JsonObject {
  "id": string;
  "name": string;
  "locale": string;
  "timezone": string;
  "currency": string;
  "ai_mode": string;
  "project_id"?: string | null;
  "project_owner_user_id"?: string | null;
  "agentic_enabled": boolean;
  "settings": BackendJson<"JsonValue">;
  "version": number;
}
export type ApiUpdateWorkspacePatchResponse = import("./types.js").CrmApiResponse<ApiUpdateWorkspacePatchResponseData>;

/** Backend response type: api. */
export type RouterStatusRouteGetHealthResponse = import("./types.js").CrmApiResponse<JsonValue>;

/** Backend response type: api. */
export type RouterStatusRouteGetLivezResponse = import("./types.js").CrmApiResponse<JsonValue>;

/** Backend response type: api. */
export type RouterReadinessRouteGetResponse = import("./types.js").CrmApiResponse<JsonValue>;

/** Backend response type: api. */
export type RouterStatusRouteGetUpResponse = import("./types.js").CrmApiResponse<JsonValue>;
