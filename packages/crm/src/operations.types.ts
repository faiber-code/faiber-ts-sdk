import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: response without a declared JSON model. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
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

/** Backend query type: LeadListQuery. */
export interface LeadIndexGetQuery extends QueryParams {
  "sort"?: string;
}
/** Backend response type: LeadListResponse. */
export interface LeadIndexGetResponseData extends JsonObject {
  "leads": JsonValue[];
}
export interface LeadIndexGetResponse extends ApiEnvelope<LeadIndexGetResponseData> {
}

/** Backend request type: CreateLeadRequest. */
export interface LeadCreatePostInput extends JsonObject {
  "profile_id": string;
  "creator_id"?: string;
  "task_priority": number;
  "campaign"?: string;
  "source"?: string;
  "task_status"?: string;
  "foreign_key"?: string;
  "flags": string[];
  "enrollment_state"?: string;
  "enrollment_id"?: number;
  "enrollment_course_id"?: number;
  "installment_id"?: number;
  "installment_enrollment_id"?: number;
  "active_at"?: string;
  "assignee_ids"?: string[];
  "meta"?: JsonValue;
  "title"?: string;
  "description"?: string;
}
/** Backend response type: LeadResponse. */
export interface LeadCreatePostResponseData extends JsonObject {
  "id": string;
  "profile_id"?: string;
  "title"?: string;
  "description"?: string;
  "creator_id": string;
  "creator"?: JsonValue;
  "workflow_id"?: string;
  "workflow_node_id"?: string;
  "campaign_id"?: string;
  "source_id"?: string;
  "task_status": string;
  "foreign_key"?: string;
  "task_priority": number;
  "flags": string[];
  "profile"?: JsonValue;
  "created_at": string;
  "updated_at": string;
  "enrollment_id"?: number;
  "enrollment_course_id"?: number;
  "installment_id"?: number;
  "installment_enrollment_id"?: number;
  "active_at"?: string;
  "is_active_status"?: boolean;
  "is_sos_assignee"?: boolean;
  "workflow"?: JsonValue;
  "workflow_node"?: JsonValue;
  "is_in_reminder"?: boolean;
  "meta_data"?: JsonValue;
}
export interface LeadCreatePostResponse extends ApiEnvelope<LeadCreatePostResponseData> {
}

/** Backend response type: Vec<LeadCampaignResponse>. */
export interface LeadCampaignIndexGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "created_at": string;
  "updated_at": string;
}
export interface LeadCampaignIndexGetResponse extends ApiEnvelope<LeadCampaignIndexGetResponseItem[]> {
}

/** Backend request type: CreateLeadCampaignRequest. */
export interface LeadCampaignCreatePostInput extends JsonObject {
  "name": string;
  "slug": string;
}
/** Backend response type: LeadCampaignResponse. */
export interface LeadCampaignCreatePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "created_at": string;
  "updated_at": string;
}
export interface LeadCampaignCreatePostResponse extends ApiEnvelope<LeadCampaignCreatePostResponseData> {
}

/** Backend response type: bool. */
export interface LeadCampaignDestroyDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: LeadCampaignResponse. */
export interface LeadCampaignShowGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "created_at": string;
  "updated_at": string;
}
export interface LeadCampaignShowGetResponse extends ApiEnvelope<LeadCampaignShowGetResponseData> {
}

/** Backend request type: UpdateLeadCampaignRequest. */
export interface LeadCampaignUpdatePutInput extends JsonObject {
  "name"?: string;
  "slug"?: string;
}
/** Backend response type: LeadCampaignResponse. */
export interface LeadCampaignUpdatePutResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "created_at": string;
  "updated_at": string;
}
export interface LeadCampaignUpdatePutResponse extends ApiEnvelope<LeadCampaignUpdatePutResponseData> {
}

/** Backend response type: Vec<LeadSourceResponse>. */
export interface LeadSourceIndexGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "created_at": string;
  "updated_at": string;
}
export interface LeadSourceIndexGetResponse extends ApiEnvelope<LeadSourceIndexGetResponseItem[]> {
}

/** Backend request type: CreateLeadSourceRequest. */
export interface LeadSourceCreatePostInput extends JsonObject {
  "name": string;
  "slug": string;
}
/** Backend response type: LeadSourceResponse. */
export interface LeadSourceCreatePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "created_at": string;
  "updated_at": string;
}
export interface LeadSourceCreatePostResponse extends ApiEnvelope<LeadSourceCreatePostResponseData> {
}

/** Backend response type: bool. */
export interface LeadSourceDestroyDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: LeadSourceResponse. */
export interface LeadSourceShowGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "created_at": string;
  "updated_at": string;
}
export interface LeadSourceShowGetResponse extends ApiEnvelope<LeadSourceShowGetResponseData> {
}

/** Backend request type: UpdateLeadSourceRequest. */
export interface LeadSourceUpdatePutInput extends JsonObject {
  "name"?: string;
  "slug"?: string;
}
/** Backend response type: LeadSourceResponse. */
export interface LeadSourceUpdatePutResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "created_at": string;
  "updated_at": string;
}
export interface LeadSourceUpdatePutResponse extends ApiEnvelope<LeadSourceUpdatePutResponseData> {
}

/** Backend response type: bool. */
export interface LeadDestroyDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: LeadResponse. */
export interface LeadShowGetResponseData extends JsonObject {
  "id": string;
  "profile_id"?: string;
  "title"?: string;
  "description"?: string;
  "creator_id": string;
  "creator"?: JsonValue;
  "workflow_id"?: string;
  "workflow_node_id"?: string;
  "campaign_id"?: string;
  "source_id"?: string;
  "task_status": string;
  "foreign_key"?: string;
  "task_priority": number;
  "flags": string[];
  "profile"?: JsonValue;
  "created_at": string;
  "updated_at": string;
  "enrollment_id"?: number;
  "enrollment_course_id"?: number;
  "installment_id"?: number;
  "installment_enrollment_id"?: number;
  "active_at"?: string;
  "is_active_status"?: boolean;
  "is_sos_assignee"?: boolean;
  "workflow"?: JsonValue;
  "workflow_node"?: JsonValue;
  "is_in_reminder"?: boolean;
  "meta_data"?: JsonValue;
}
export interface LeadShowGetResponse extends ApiEnvelope<LeadShowGetResponseData> {
}

/** Backend request type: UpdateLeadRequest. */
export interface LeadUpdatePutInput extends JsonObject {
  "profile_id"?: string;
  "title"?: string;
  "description"?: string;
  "task_priority"?: number;
  "campaign"?: string;
  "source"?: string;
  "task_status"?: string;
  "foreign_key"?: string;
  "flags"?: string[];
  "enrollment_id"?: number;
  "enrollment_course_id"?: number;
  "installment_id"?: number;
  "installment_enrollment_id"?: number;
  "active_at"?: string;
  "assignee_ids"?: string[];
  "meta"?: JsonValue;
  "workflow_node_id"?: string;
  "assignee_profile_id"?: string;
}
/** Backend response type: LeadResponse. */
export interface LeadUpdatePutResponseData extends JsonObject {
  "id": string;
  "profile_id"?: string;
  "title"?: string;
  "description"?: string;
  "creator_id": string;
  "creator"?: JsonValue;
  "workflow_id"?: string;
  "workflow_node_id"?: string;
  "campaign_id"?: string;
  "source_id"?: string;
  "task_status": string;
  "foreign_key"?: string;
  "task_priority": number;
  "flags": string[];
  "profile"?: JsonValue;
  "created_at": string;
  "updated_at": string;
  "enrollment_id"?: number;
  "enrollment_course_id"?: number;
  "installment_id"?: number;
  "installment_enrollment_id"?: number;
  "active_at"?: string;
  "is_active_status"?: boolean;
  "is_sos_assignee"?: boolean;
  "workflow"?: JsonValue;
  "workflow_node"?: JsonValue;
  "is_in_reminder"?: boolean;
  "meta_data"?: JsonValue;
}
export interface LeadUpdatePutResponse extends ApiEnvelope<LeadUpdatePutResponseData> {
}

/** Backend response type: LeadResponse. */
export interface LeadCheckStatusGetResponseData extends JsonObject {
  "id": string;
  "profile_id"?: string;
  "title"?: string;
  "description"?: string;
  "creator_id": string;
  "creator"?: JsonValue;
  "workflow_id"?: string;
  "workflow_node_id"?: string;
  "campaign_id"?: string;
  "source_id"?: string;
  "task_status": string;
  "foreign_key"?: string;
  "task_priority": number;
  "flags": string[];
  "profile"?: JsonValue;
  "created_at": string;
  "updated_at": string;
  "enrollment_id"?: number;
  "enrollment_course_id"?: number;
  "installment_id"?: number;
  "installment_enrollment_id"?: number;
  "active_at"?: string;
  "is_active_status"?: boolean;
  "is_sos_assignee"?: boolean;
  "workflow"?: JsonValue;
  "workflow_node"?: JsonValue;
  "is_in_reminder"?: boolean;
  "meta_data"?: JsonValue;
}
export interface LeadCheckStatusGetResponse extends ApiEnvelope<LeadCheckStatusGetResponseData> {
}

/** Backend response type: LeadLogListResponse. */
export interface LeadListLogsGetResponseData extends JsonObject {
  "lead_logs": JsonValue[];
}
export interface LeadListLogsGetResponse extends ApiEnvelope<LeadListLogsGetResponseData> {
}

/** Backend request type: CreateLeadLogRequest. */
export interface LeadCreateLogPostInput extends JsonObject {
  "from_workflow_node_id"?: string;
  "to_workflow_node_id"?: string;
  "from_status"?: string;
  "to_status"?: string;
  "type": string;
}
/** Backend response type: LeadLogResponse. */
export interface LeadCreateLogPostResponseData extends JsonObject {
  "id": string;
  "from_workflow_node_id"?: string;
  "to_workflow_node_id"?: string;
  "type": string;
  "profile_id": string;
  "profile"?: JsonValue;
  "from_status"?: string;
  "to_status"?: string;
  "from_workflow_node"?: JsonValue;
  "to_workflow_node"?: JsonValue;
  "created_at": string;
  "updated_at": string;
}
export interface LeadCreateLogPostResponse extends ApiEnvelope<LeadCreateLogPostResponseData> {
}

/** Backend response type: bool. */
export interface LeadDestroyLogDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: LeadLogResponse. */
export interface LeadShowLogGetResponseData extends JsonObject {
  "id": string;
  "from_workflow_node_id"?: string;
  "to_workflow_node_id"?: string;
  "type": string;
  "profile_id": string;
  "profile"?: JsonValue;
  "from_status"?: string;
  "to_status"?: string;
  "from_workflow_node"?: JsonValue;
  "to_workflow_node"?: JsonValue;
  "created_at": string;
  "updated_at": string;
}
export interface LeadShowLogGetResponse extends ApiEnvelope<LeadShowLogGetResponseData> {
}

/** Backend request type: UpdateLeadLogRequest. */
export interface LeadUpdateLogPutInput extends JsonObject {
  "from_workflow_node_id"?: string;
  "to_workflow_node_id"?: string;
  "from_status"?: string;
  "to_status"?: string;
  "type"?: string;
}
/** Backend response type: LeadLogResponse. */
export interface LeadUpdateLogPutResponseData extends JsonObject {
  "id": string;
  "from_workflow_node_id"?: string;
  "to_workflow_node_id"?: string;
  "type": string;
  "profile_id": string;
  "profile"?: JsonValue;
  "from_status"?: string;
  "to_status"?: string;
  "from_workflow_node"?: JsonValue;
  "to_workflow_node"?: JsonValue;
  "created_at": string;
  "updated_at": string;
}
export interface LeadUpdateLogPutResponse extends ApiEnvelope<LeadUpdateLogPutResponseData> {
}

/** Backend request type: MoveLeadToDoneRequest. */
export interface LeadMoveToDonePutInput extends JsonObject {
  "task_status": string;
  "assignee_profile_id"?: string;
}
/** Backend response type: LeadResponse. */
export interface LeadMoveToDonePutResponseData extends JsonObject {
  "id": string;
  "profile_id"?: string;
  "title"?: string;
  "description"?: string;
  "creator_id": string;
  "creator"?: JsonValue;
  "workflow_id"?: string;
  "workflow_node_id"?: string;
  "campaign_id"?: string;
  "source_id"?: string;
  "task_status": string;
  "foreign_key"?: string;
  "task_priority": number;
  "flags": string[];
  "profile"?: JsonValue;
  "created_at": string;
  "updated_at": string;
  "enrollment_id"?: number;
  "enrollment_course_id"?: number;
  "installment_id"?: number;
  "installment_enrollment_id"?: number;
  "active_at"?: string;
  "is_active_status"?: boolean;
  "is_sos_assignee"?: boolean;
  "workflow"?: JsonValue;
  "workflow_node"?: JsonValue;
  "is_in_reminder"?: boolean;
  "meta_data"?: JsonValue;
}
export interface LeadMoveToDonePutResponse extends ApiEnvelope<LeadMoveToDonePutResponseData> {
}

/** Backend response type: LeadTouchListResponse. */
export interface LeadListTouchesGetResponseData extends JsonObject {
  "lead_touch": JsonValue[];
}
export interface LeadListTouchesGetResponse extends ApiEnvelope<LeadListTouchesGetResponseData> {
}

/** Backend request type: CreateLeadTouchRequest. */
export interface LeadCreateTouchPostInput extends JsonObject {
  "description"?: string;
  "status": string;
}
/** Backend response type: LeadTouchResponse. */
export interface LeadCreateTouchPostResponseData extends JsonObject {
  "id": string;
  "lead_id": string;
  "profile_id": string;
  "profile"?: JsonValue;
  "description"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface LeadCreateTouchPostResponse extends ApiEnvelope<LeadCreateTouchPostResponseData> {
}

/** Backend response type: bool. */
export interface LeadDestroyTouchDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: LeadTouchResponse. */
export interface LeadShowTouchGetResponseData extends JsonObject {
  "id": string;
  "lead_id": string;
  "profile_id": string;
  "profile"?: JsonValue;
  "description"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface LeadShowTouchGetResponse extends ApiEnvelope<LeadShowTouchGetResponseData> {
}

/** Backend request type: UpdateLeadTouchRequest. */
export interface LeadUpdateTouchPutInput extends JsonObject {
  "description"?: string;
  "status"?: string;
}
/** Backend response type: LeadTouchResponse. */
export interface LeadUpdateTouchPutResponseData extends JsonObject {
  "id": string;
  "lead_id": string;
  "profile_id": string;
  "profile"?: JsonValue;
  "description"?: string;
  "status": string;
  "created_at": string;
  "updated_at": string;
}
export interface LeadUpdateTouchPutResponse extends ApiEnvelope<LeadUpdateTouchPutResponseData> {
}

/** Backend request type: CreateDeveloperLeadRequest. */
export interface LeadCreateDeveloperPostInput extends JsonObject {
  "title": string;
  "description": string;
  "task_priority"?: number;
  "flags": string[];
  "assignee_ids": string[];
  "meta"?: JsonValue;
}
/** Backend response type: LeadResponse. */
export interface LeadCreateDeveloperPostResponseData extends JsonObject {
  "id": string;
  "profile_id"?: string;
  "title"?: string;
  "description"?: string;
  "creator_id": string;
  "creator"?: JsonValue;
  "workflow_id"?: string;
  "workflow_node_id"?: string;
  "campaign_id"?: string;
  "source_id"?: string;
  "task_status": string;
  "foreign_key"?: string;
  "task_priority": number;
  "flags": string[];
  "profile"?: JsonValue;
  "created_at": string;
  "updated_at": string;
  "enrollment_id"?: number;
  "enrollment_course_id"?: number;
  "installment_id"?: number;
  "installment_enrollment_id"?: number;
  "active_at"?: string;
  "is_active_status"?: boolean;
  "is_sos_assignee"?: boolean;
  "workflow"?: JsonValue;
  "workflow_node"?: JsonValue;
  "is_in_reminder"?: boolean;
  "meta_data"?: JsonValue;
}
export interface LeadCreateDeveloperPostResponse extends ApiEnvelope<LeadCreateDeveloperPostResponseData> {
}

/** Backend query type: LeadListQuery. */
export interface LeadDeveloperReadyGetQuery extends QueryParams {
  "sort"?: string;
}
/** Backend response type: DeveloperReadyLeadListResponse. */
export interface LeadDeveloperReadyGetResponseData extends JsonObject {
  "leads": JsonValue[];
}
export interface LeadDeveloperReadyGetResponse extends ApiEnvelope<LeadDeveloperReadyGetResponseData> {
}

/** Backend query type: ForeignKeyQuery. */
export interface LeadByForeignKeyGetQuery extends QueryParams {
  "foreign_key"?: string;
  "profile_id"?: string;
  "flags"?: string;
}
/** Backend response type: LeadResponse. */
export interface LeadByForeignKeyGetResponseData extends JsonObject {
  "id": string;
  "profile_id"?: string;
  "title"?: string;
  "description"?: string;
  "creator_id": string;
  "creator"?: JsonValue;
  "workflow_id"?: string;
  "workflow_node_id"?: string;
  "campaign_id"?: string;
  "source_id"?: string;
  "task_status": string;
  "foreign_key"?: string;
  "task_priority": number;
  "flags": string[];
  "profile"?: JsonValue;
  "created_at": string;
  "updated_at": string;
  "enrollment_id"?: number;
  "enrollment_course_id"?: number;
  "installment_id"?: number;
  "installment_enrollment_id"?: number;
  "active_at"?: string;
  "is_active_status"?: boolean;
  "is_sos_assignee"?: boolean;
  "workflow"?: JsonValue;
  "workflow_node"?: JsonValue;
  "is_in_reminder"?: boolean;
  "meta_data"?: JsonValue;
}
export interface LeadByForeignKeyGetResponse extends ApiEnvelope<LeadByForeignKeyGetResponseData> {
}

/** Backend response type: bool. */
export interface LeadDestroyByForeignKeyDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend request type: UpdateLeadRequest. */
export interface LeadUpdateByForeignKeyPutInput extends JsonObject {
  "profile_id"?: string;
  "title"?: string;
  "description"?: string;
  "task_priority"?: number;
  "campaign"?: string;
  "source"?: string;
  "task_status"?: string;
  "foreign_key"?: string;
  "flags"?: string[];
  "enrollment_id"?: number;
  "enrollment_course_id"?: number;
  "installment_id"?: number;
  "installment_enrollment_id"?: number;
  "active_at"?: string;
  "assignee_ids"?: string[];
  "meta"?: JsonValue;
  "workflow_node_id"?: string;
  "assignee_profile_id"?: string;
}
/** Backend response type: LeadResponse. */
export interface LeadUpdateByForeignKeyPutResponseData extends JsonObject {
  "id": string;
  "profile_id"?: string;
  "title"?: string;
  "description"?: string;
  "creator_id": string;
  "creator"?: JsonValue;
  "workflow_id"?: string;
  "workflow_node_id"?: string;
  "campaign_id"?: string;
  "source_id"?: string;
  "task_status": string;
  "foreign_key"?: string;
  "task_priority": number;
  "flags": string[];
  "profile"?: JsonValue;
  "created_at": string;
  "updated_at": string;
  "enrollment_id"?: number;
  "enrollment_course_id"?: number;
  "installment_id"?: number;
  "installment_enrollment_id"?: number;
  "active_at"?: string;
  "is_active_status"?: boolean;
  "is_sos_assignee"?: boolean;
  "workflow"?: JsonValue;
  "workflow_node"?: JsonValue;
  "is_in_reminder"?: boolean;
  "meta_data"?: JsonValue;
}
export interface LeadUpdateByForeignKeyPutResponse extends ApiEnvelope<LeadUpdateByForeignKeyPutResponseData> {
}

/** Backend query type: LeadLightQuery. */
export interface LeadLightGetQuery extends QueryParams {
  "sort"?: string;
  "page[limit]"?: number;
  "page[number]"?: number;
}
/** Backend response type: LeadLightListResponse. */
export interface LeadLightGetResponseData extends JsonObject {
  "leads": JsonValue[];
  "total_count": number;
  "won_count": number;
  "lost_count": number;
}
export interface LeadLightGetResponse extends ApiEnvelope<LeadLightGetResponseData> {
}

/** Backend response type: Vec<ReminderResponse>. */
export interface ReminderIndexGetResponseItem extends JsonObject {
  "id": string;
  "lead_id": string;
  "profile_id": string;
  "remind": string;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface ReminderIndexGetResponse extends ApiEnvelope<ReminderIndexGetResponseItem[]> {
}

/** Backend request type: CreateReminderRequest. */
export interface ReminderCreatePostInput extends JsonObject {
  "lead_id": string;
  "remind": string;
  "description"?: string;
}
/** Backend response type: ReminderResponse. */
export interface ReminderCreatePostResponseData extends JsonObject {
  "id": string;
  "lead_id": string;
  "profile_id": string;
  "remind": string;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface ReminderCreatePostResponse extends ApiEnvelope<ReminderCreatePostResponseData> {
}

/** Backend response type: bool. */
export interface ReminderDestroyDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend request type: UpdateReminderRequest. */
export interface ReminderUpdatePutInput extends JsonObject {
  "remind"?: string;
  "description"?: string;
}
/** Backend response type: ReminderResponse. */
export interface ReminderUpdatePutResponseData extends JsonObject {
  "id": string;
  "lead_id": string;
  "profile_id": string;
  "remind": string;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface ReminderUpdatePutResponse extends ApiEnvelope<ReminderUpdatePutResponseData> {
}

/** Backend response type: u64. */
export interface ReminderDestroyByLeadDeleteResponse extends ApiEnvelope<number> {
}

/** Backend response type: Vec<ReminderResponse>. */
export interface ReminderUntilTodayGetResponseItem extends JsonObject {
  "id": string;
  "lead_id": string;
  "profile_id": string;
  "remind": string;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface ReminderUntilTodayGetResponse extends ApiEnvelope<ReminderUntilTodayGetResponseItem[]> {
}

/** Backend query type: SortQuery. */
export interface SosIndexGetQuery extends QueryParams {
  "sort"?: string;
}
/** Backend response type: SosListResponse. */
export interface SosIndexGetResponseData extends JsonObject {
  "sos": JsonValue[];
}
export interface SosIndexGetResponse extends ApiEnvelope<SosIndexGetResponseData> {
}

/** Backend request type: CreateSosRequest. */
export interface SosCreatePostInput extends JsonObject {
  "profile_id": string;
}
/** Backend response type: SosResponse. */
export interface SosCreatePostResponseData extends JsonObject {
  "id": string;
  "profile_id": string;
  "assignee_ids": string[];
  "created_at": string;
  "updated_at": string;
}
export interface SosCreatePostResponse extends ApiEnvelope<SosCreatePostResponseData> {
}

/** Backend response type: bool. */
export interface SosDestroyDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: SosResponse. */
export interface SosShowGetResponseData extends JsonObject {
  "id": string;
  "profile_id": string;
  "assignee_ids": string[];
  "created_at": string;
  "updated_at": string;
}
export interface SosShowGetResponse extends ApiEnvelope<SosShowGetResponseData> {
}

/** Backend request type: UpdateSosRequest. */
export interface SosUpdatePutInput extends JsonObject {
  "profile_id"?: string;
}
/** Backend response type: SosResponse. */
export interface SosUpdatePutResponseData extends JsonObject {
  "id": string;
  "profile_id": string;
  "assignee_ids": string[];
  "created_at": string;
  "updated_at": string;
}
export interface SosUpdatePutResponse extends ApiEnvelope<SosUpdatePutResponseData> {
}

/** Backend response type: Vec<SosLogResponse>. */
export interface SosListLogsGetResponseItem extends JsonObject {
  "id": string;
  "sos_id": string;
  "profile_id": string;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface SosListLogsGetResponse extends ApiEnvelope<SosListLogsGetResponseItem[]> {
}

/** Backend request type: CreateSosLogRequest. */
export interface SosCreateLogPostInput extends JsonObject {
  "description"?: string;
}
/** Backend response type: SosLogResponse. */
export interface SosCreateLogPostResponseData extends JsonObject {
  "id": string;
  "sos_id": string;
  "profile_id": string;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface SosCreateLogPostResponse extends ApiEnvelope<SosCreateLogPostResponseData> {
}

/** Backend response type: bool. */
export interface SosDestroyLogDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: SosLogResponse. */
export interface SosShowLogGetResponseData extends JsonObject {
  "id": string;
  "sos_id": string;
  "profile_id": string;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface SosShowLogGetResponse extends ApiEnvelope<SosShowLogGetResponseData> {
}

/** Backend request type: UpdateSosLogRequest. */
export interface SosUpdateLogPutInput extends JsonObject {
  "description"?: string;
}
/** Backend response type: SosLogResponse. */
export interface SosUpdateLogPutResponseData extends JsonObject {
  "id": string;
  "sos_id": string;
  "profile_id": string;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface SosUpdateLogPutResponse extends ApiEnvelope<SosUpdateLogPutResponseData> {
}

/** Backend response type: Vec<SosTouchResponse>. */
export interface SosListTouchesGetResponseItem extends JsonObject {
  "id": string;
  "sos_id": string;
  "profile_id": string;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface SosListTouchesGetResponse extends ApiEnvelope<SosListTouchesGetResponseItem[]> {
}

/** Backend request type: CreateSosTouchRequest. */
export interface SosCreateTouchPostInput extends JsonObject {
  "description"?: string;
}
/** Backend response type: SosTouchResponse. */
export interface SosCreateTouchPostResponseData extends JsonObject {
  "id": string;
  "sos_id": string;
  "profile_id": string;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface SosCreateTouchPostResponse extends ApiEnvelope<SosCreateTouchPostResponseData> {
}

/** Backend response type: bool. */
export interface SosDestroyTouchDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: SosTouchResponse. */
export interface SosShowTouchGetResponseData extends JsonObject {
  "id": string;
  "sos_id": string;
  "profile_id": string;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface SosShowTouchGetResponse extends ApiEnvelope<SosShowTouchGetResponseData> {
}

/** Backend request type: UpdateSosTouchRequest. */
export interface SosUpdateTouchPutInput extends JsonObject {
  "description"?: string;
}
/** Backend response type: SosTouchResponse. */
export interface SosUpdateTouchPutResponseData extends JsonObject {
  "id": string;
  "sos_id": string;
  "profile_id": string;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface SosUpdateTouchPutResponse extends ApiEnvelope<SosUpdateTouchPutResponseData> {
}

/** Backend query type: SortQuery. */
export interface SosAllGetQuery extends QueryParams {
  "sort"?: string;
}
/** Backend response type: SosListResponse. */
export interface SosAllGetResponseData extends JsonObject {
  "sos": JsonValue[];
}
export interface SosAllGetResponse extends ApiEnvelope<SosAllGetResponseData> {
}

/** Backend response type: SosResponse. */
export interface SosExitAssigneeRoutePostResponseData extends JsonObject {
  "id": string;
  "profile_id": string;
  "assignee_ids": string[];
  "created_at": string;
  "updated_at": string;
}
export interface SosExitAssigneeRoutePostResponse extends ApiEnvelope<SosExitAssigneeRoutePostResponseData> {
}

/** Backend response type: DailyStatsResponse. */
export interface StatsDailyGetResponseData extends JsonObject {
  "workflows": JsonValue[];
  "total_tasks": number;
  "total_done_tasks": number;
  "extra_tasks_done": number;
  "all_tasks_done": boolean;
}
export interface StatsDailyGetResponse extends ApiEnvelope<StatsDailyGetResponseData> {
}

/** Backend response type: LeadStatsResponse. */
export interface StatsLeadGetResponseData extends JsonObject {
  "total": number;
  "workflows": JsonValue[];
  "permissions": string[];
}
export interface StatsLeadGetResponse extends ApiEnvelope<StatsLeadGetResponseData> {
}

/** Backend query type: SortQuery. */
export interface TeamIndexGetQuery extends QueryParams {
  "sort"?: string;
}
/** Backend response type: Vec<TeamResponse>. */
export interface TeamIndexGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
  "updated_at": string;
}
export interface TeamIndexGetResponse extends ApiEnvelope<TeamIndexGetResponseItem[]> {
}

/** Backend request type: CreateTeamRequest. */
export interface TeamCreatePostInput extends JsonObject {
  "name": string;
}
/** Backend response type: TeamResponse. */
export interface TeamCreatePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
  "updated_at": string;
}
export interface TeamCreatePostResponse extends ApiEnvelope<TeamCreatePostResponseData> {
}

/** Backend query type: SortQuery. */
export interface TeamUserIndexGetQuery extends QueryParams {
  "sort"?: string;
}
/** Backend response type: Vec<TeamUserResponse>. */
export interface TeamUserIndexGetResponseItem extends JsonObject {
  "id": string;
  "team_id": string;
  "profile_id": string;
  "created_at": string;
  "updated_at": string;
}
export interface TeamUserIndexGetResponse extends ApiEnvelope<TeamUserIndexGetResponseItem[]> {
}

/** Backend request type: CreateTeamUserRequest. */
export interface TeamUserCreatePostInput extends JsonObject {
  "team_id": string;
  "profile_id": string;
}
/** Backend response type: TeamUserResponse. */
export interface TeamUserCreatePostResponseData extends JsonObject {
  "id": string;
  "team_id": string;
  "profile_id": string;
  "created_at": string;
  "updated_at": string;
}
export interface TeamUserCreatePostResponse extends ApiEnvelope<TeamUserCreatePostResponseData> {
}

/** Backend response type: bool. */
export interface TeamUserDestroyDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: TeamUserResponse. */
export interface TeamUserShowGetResponseData extends JsonObject {
  "id": string;
  "team_id": string;
  "profile_id": string;
  "created_at": string;
  "updated_at": string;
}
export interface TeamUserShowGetResponse extends ApiEnvelope<TeamUserShowGetResponseData> {
}

/** Backend request type: UpdateTeamUserRequest. */
export interface TeamUserUpdatePutInput extends JsonObject {
  "team_id"?: string;
  "profile_id"?: string;
}
/** Backend response type: TeamUserResponse. */
export interface TeamUserUpdatePutResponseData extends JsonObject {
  "id": string;
  "team_id": string;
  "profile_id": string;
  "created_at": string;
  "updated_at": string;
}
export interface TeamUserUpdatePutResponse extends ApiEnvelope<TeamUserUpdatePutResponseData> {
}

/** Backend request type: MultiProfilesRequest. */
export interface TeamUserMultiProfilesPostInput extends JsonObject {
  "team_id": string;
  "profile_id": string[];
}
/** Backend response type: Vec<TeamUserResponse>. */
export interface TeamUserMultiProfilesPostResponseItem extends JsonObject {
  "id": string;
  "team_id": string;
  "profile_id": string;
  "created_at": string;
  "updated_at": string;
}
export interface TeamUserMultiProfilesPostResponse extends ApiEnvelope<TeamUserMultiProfilesPostResponseItem[]> {
}

/** Backend response type: bool. */
export interface TeamDestroyDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: TeamResponse. */
export interface TeamShowGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
  "updated_at": string;
}
export interface TeamShowGetResponse extends ApiEnvelope<TeamShowGetResponseData> {
}

/** Backend request type: UpdateTeamRequest. */
export interface TeamUpdatePutInput extends JsonObject {
  "name"?: string;
}
/** Backend response type: TeamResponse. */
export interface TeamUpdatePutResponseData extends JsonObject {
  "id": string;
  "name": string;
  "created_at": string;
  "updated_at": string;
}
export interface TeamUpdatePutResponse extends ApiEnvelope<TeamUpdatePutResponseData> {
}

/** Backend response type: Vec<WebhookResponse>. */
export interface WebhookIndexGetResponseItem extends JsonObject {
  "id": string;
  "domain": string;
  "events": JsonValue;
  "workflow_id": string;
  "created_at": string;
  "updated_at": string;
}
export interface WebhookIndexGetResponse extends ApiEnvelope<WebhookIndexGetResponseItem[]> {
}

/** Backend request type: CreateWebhookRequest. */
export interface WebhookCreatePostInput extends JsonObject {
  "domain": string;
  "events": JsonValue;
  "workflow_id": string;
}
/** Backend response type: WebhookResponse. */
export interface WebhookCreatePostResponseData extends JsonObject {
  "id": string;
  "domain": string;
  "events": JsonValue;
  "workflow_id": string;
  "created_at": string;
  "updated_at": string;
}
export interface WebhookCreatePostResponse extends ApiEnvelope<WebhookCreatePostResponseData> {
}

/** Backend response type: bool. */
export interface WebhookDestroyDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: WebhookResponse. */
export interface WebhookShowGetResponseData extends JsonObject {
  "id": string;
  "domain": string;
  "events": JsonValue;
  "workflow_id": string;
  "created_at": string;
  "updated_at": string;
}
export interface WebhookShowGetResponse extends ApiEnvelope<WebhookShowGetResponseData> {
}

/** Backend request type: UpdateWebhookRequest. */
export interface WebhookUpdatePutInput extends JsonObject {
  "domain"?: string;
  "events"?: JsonValue;
  "workflow_id"?: string;
}
/** Backend response type: WebhookResponse. */
export interface WebhookUpdatePutResponseData extends JsonObject {
  "id": string;
  "domain": string;
  "events": JsonValue;
  "workflow_id": string;
  "created_at": string;
  "updated_at": string;
}
export interface WebhookUpdatePutResponse extends ApiEnvelope<WebhookUpdatePutResponseData> {
}

/** Backend query type: SortQuery. */
export interface WorkflowIndexGetQuery extends QueryParams {
  "sort"?: string;
}
/** Backend response type: Vec<WorkflowResponse>. */
export interface WorkflowIndexGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "acquire_flags": string[];
  "priority": number;
  "can_create_lead": boolean;
  "actions"?: JsonValue;
  "hint"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface WorkflowIndexGetResponse extends ApiEnvelope<WorkflowIndexGetResponseItem[]> {
}

/** Backend request type: CreateWorkflowRequest. */
export interface WorkflowCreatePostInput extends JsonObject {
  "name": string;
  "slug": string;
  "acquire_flags": string[];
  "priority": number;
  "can_create_lead": boolean;
  "actions"?: JsonValue;
  "hint"?: string;
}
/** Backend response type: WorkflowResponse. */
export interface WorkflowCreatePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "acquire_flags": string[];
  "priority": number;
  "can_create_lead": boolean;
  "actions"?: JsonValue;
  "hint"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface WorkflowCreatePostResponse extends ApiEnvelope<WorkflowCreatePostResponseData> {
}

/** Backend response type: Vec<WorkflowMemberResponse>. */
export interface WorkflowMemberIndexGetResponseItem extends JsonObject {
  "id": string;
  "workflow_id": string;
  "team_id"?: string;
  "profile_id"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface WorkflowMemberIndexGetResponse extends ApiEnvelope<WorkflowMemberIndexGetResponseItem[]> {
}

/** Backend response type: bool. */
export interface WorkflowMemberDestroyDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: WorkflowMemberResponse. */
export interface WorkflowMemberShowGetResponseData extends JsonObject {
  "id": string;
  "workflow_id": string;
  "team_id"?: string;
  "profile_id"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface WorkflowMemberShowGetResponse extends ApiEnvelope<WorkflowMemberShowGetResponseData> {
}

/** Backend request type: CreateWorkflowMemberRequest. */
export interface WorkflowMemberCreatePostInput extends JsonObject {
  "team_id"?: string;
  "profile_id"?: string;
}
/** Backend response type: WorkflowMemberResponse. */
export interface WorkflowMemberCreatePostResponseData extends JsonObject {
  "id": string;
  "workflow_id": string;
  "team_id"?: string;
  "profile_id"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface WorkflowMemberCreatePostResponse extends ApiEnvelope<WorkflowMemberCreatePostResponseData> {
}

/** Backend request type: UpdateWorkflowMemberRequest. */
export interface WorkflowMemberUpdatePutInput extends JsonObject {
  "team_id"?: string;
  "profile_id"?: string;
}
/** Backend response type: WorkflowMemberResponse. */
export interface WorkflowMemberUpdatePutResponseData extends JsonObject {
  "id": string;
  "workflow_id": string;
  "team_id"?: string;
  "profile_id"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface WorkflowMemberUpdatePutResponse extends ApiEnvelope<WorkflowMemberUpdatePutResponseData> {
}

/** Backend response type: Vec<WorkflowMemberResponse>. */
export interface WorkflowMemberByWorkflowGetResponseItem extends JsonObject {
  "id": string;
  "workflow_id": string;
  "team_id"?: string;
  "profile_id"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface WorkflowMemberByWorkflowGetResponse extends ApiEnvelope<WorkflowMemberByWorkflowGetResponseItem[]> {
}

/** Backend query type: SortQuery. */
export interface WorkflowNodeIndexGetQuery extends QueryParams {
  "sort"?: string;
}
/** Backend response type: Vec<WorkflowNodeResponse>. */
export interface WorkflowNodeIndexGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "priority": number;
  "workflow_id": string;
  "is_draggable_in": boolean;
  "is_draggable_out": boolean;
  "actions"?: JsonValue;
  "auto_win": boolean;
  "created_at": string;
  "updated_at": string;
}
export interface WorkflowNodeIndexGetResponse extends ApiEnvelope<WorkflowNodeIndexGetResponseItem[]> {
}

/** Backend response type: bool. */
export interface WorkflowNodeDestroyDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: WorkflowNodeResponse. */
export interface WorkflowNodeShowGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "priority": number;
  "workflow_id": string;
  "is_draggable_in": boolean;
  "is_draggable_out": boolean;
  "actions"?: JsonValue;
  "auto_win": boolean;
  "created_at": string;
  "updated_at": string;
}
export interface WorkflowNodeShowGetResponse extends ApiEnvelope<WorkflowNodeShowGetResponseData> {
}

/** Backend request type: CreateWorkflowNodeRequest. */
export interface WorkflowNodeCreatePostInput extends JsonObject {
  "name": string;
  "slug": string;
  "priority": number;
  "is_draggable_in": boolean;
  "is_draggable_out": boolean;
  "actions"?: JsonValue;
  "auto_win": boolean;
}
/** Backend response type: WorkflowNodeResponse. */
export interface WorkflowNodeCreatePostResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "priority": number;
  "workflow_id": string;
  "is_draggable_in": boolean;
  "is_draggable_out": boolean;
  "actions"?: JsonValue;
  "auto_win": boolean;
  "created_at": string;
  "updated_at": string;
}
export interface WorkflowNodeCreatePostResponse extends ApiEnvelope<WorkflowNodeCreatePostResponseData> {
}

/** Backend request type: UpdateWorkflowNodeRequest. */
export interface WorkflowNodeUpdatePutInput extends JsonObject {
  "name"?: string;
  "slug"?: string;
  "priority"?: number;
  "is_draggable_in"?: boolean;
  "is_draggable_out"?: boolean;
  "actions"?: JsonValue;
  "auto_win"?: boolean;
}
/** Backend response type: WorkflowNodeResponse. */
export interface WorkflowNodeUpdatePutResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "priority": number;
  "workflow_id": string;
  "is_draggable_in": boolean;
  "is_draggable_out": boolean;
  "actions"?: JsonValue;
  "auto_win": boolean;
  "created_at": string;
  "updated_at": string;
}
export interface WorkflowNodeUpdatePutResponse extends ApiEnvelope<WorkflowNodeUpdatePutResponseData> {
}

/** Backend response type: bool. */
export interface WorkflowDestroyDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: WorkflowResponse. */
export interface WorkflowShowGetResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "acquire_flags": string[];
  "priority": number;
  "can_create_lead": boolean;
  "actions"?: JsonValue;
  "hint"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface WorkflowShowGetResponse extends ApiEnvelope<WorkflowShowGetResponseData> {
}

/** Backend request type: UpdateWorkflowRequest. */
export interface WorkflowUpdatePutInput extends JsonObject {
  "name"?: string;
  "slug"?: string;
  "acquire_flags"?: string[];
  "priority"?: number;
  "can_create_lead"?: boolean;
  "actions"?: JsonValue;
  "hint"?: string;
}
/** Backend response type: WorkflowResponse. */
export interface WorkflowUpdatePutResponseData extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "acquire_flags": string[];
  "priority": number;
  "can_create_lead": boolean;
  "actions"?: JsonValue;
  "hint"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface WorkflowUpdatePutResponse extends ApiEnvelope<WorkflowUpdatePutResponseData> {
}

/** Backend response type: Vec<WorkflowResponse>. */
export interface WorkflowMemberBasedGetResponseItem extends JsonObject {
  "id": string;
  "name": string;
  "slug": string;
  "acquire_flags": string[];
  "priority": number;
  "can_create_lead": boolean;
  "actions"?: JsonValue;
  "hint"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface WorkflowMemberBasedGetResponse extends ApiEnvelope<WorkflowMemberBasedGetResponseItem[]> {
}

/** Backend query type: SortQuery. */
export interface WorklogIndexGetQuery extends QueryParams {
  "sort"?: string;
}
/** Backend response type: Vec<WorklogResponse>. */
export interface WorklogIndexGetResponseItem extends JsonObject {
  "id": string;
  "log_type": string;
  "assignee_id": string;
  "profile_id": string;
  "start_date": string;
  "duration": number;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface WorklogIndexGetResponse extends ApiEnvelope<WorklogIndexGetResponseItem[]> {
}

/** Backend request type: CreateWorklogRequest. */
export interface WorklogCreatePostInput extends JsonObject {
  "log_type": string;
  "start_date": string;
  "duration": number;
  "description"?: string;
  "profile_id": string;
}
/** Backend response type: WorklogResponse. */
export interface WorklogCreatePostResponseData extends JsonObject {
  "id": string;
  "log_type": string;
  "assignee_id": string;
  "profile_id": string;
  "start_date": string;
  "duration": number;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface WorklogCreatePostResponse extends ApiEnvelope<WorklogCreatePostResponseData> {
}

/** Backend response type: bool. */
export interface WorklogDestroyDeleteResponse extends ApiEnvelope<boolean> {
}

/** Backend response type: WorklogResponse. */
export interface WorklogShowGetResponseData extends JsonObject {
  "id": string;
  "log_type": string;
  "assignee_id": string;
  "profile_id": string;
  "start_date": string;
  "duration": number;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface WorklogShowGetResponse extends ApiEnvelope<WorklogShowGetResponseData> {
}

/** Backend request type: UpdateWorklogRequest. */
export interface WorklogUpdatePutInput extends JsonObject {
  "log_type"?: string;
  "start_date"?: string;
  "duration"?: number;
  "description"?: string;
  "profile_id"?: string;
}
/** Backend response type: WorklogResponse. */
export interface WorklogUpdatePutResponseData extends JsonObject {
  "id": string;
  "log_type": string;
  "assignee_id": string;
  "profile_id": string;
  "start_date": string;
  "duration": number;
  "description"?: string;
  "created_at": string;
  "updated_at": string;
}
export interface WorklogUpdatePutResponse extends ApiEnvelope<WorklogUpdatePutResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface RouterStatusRouteGetHealthResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RouterStatusRouteGetUpResponse extends ApiEnvelope<JsonValue> {
}

