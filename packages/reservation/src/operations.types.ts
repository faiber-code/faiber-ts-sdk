import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: serde_json::Value. */
export interface RouterHealthGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: PaginationQuery. */
export interface ProviderIndexGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<ProviderResponse>. */
export interface ProviderIndexGetResponseItem extends JsonObject {
  "id": number;
  "user_id"?: string;
  "name": string;
  "bio"?: string;
  "avatar_url"?: string;
  "is_active": boolean;
  "created_at": string;
}
export interface ProviderIndexGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ProviderIndexGetResponseData extends JsonObject {
  "data": ProviderIndexGetResponseItem[];
  "meta": ProviderIndexGetResponsePageMeta;
}
export interface ProviderIndexGetResponse extends ApiEnvelope<ProviderIndexGetResponseData> {
}

/** Backend request type: CreateProviderRequest. */
export interface ProviderStorePostInput extends JsonObject {
  "user_id"?: string;
  "name": string;
  "bio"?: string;
  "avatar_url"?: string;
  "is_active"?: boolean;
}
/** Backend response type: ProviderResponse. */
export interface ProviderStorePostResponseData extends JsonObject {
  "id": number;
  "user_id"?: string;
  "name": string;
  "bio"?: string;
  "avatar_url"?: string;
  "is_active": boolean;
  "created_at": string;
}
export interface ProviderStorePostResponse extends ApiEnvelope<ProviderStorePostResponseData> {
}

/** Backend response type: (). */
export interface ProviderDestroyDeleteResponse extends ApiEnvelope<JsonObject> {
}

/** Backend response type: ProviderResponse. */
export interface ProviderShowGetResponseData extends JsonObject {
  "id": number;
  "user_id"?: string;
  "name": string;
  "bio"?: string;
  "avatar_url"?: string;
  "is_active": boolean;
  "created_at": string;
}
export interface ProviderShowGetResponse extends ApiEnvelope<ProviderShowGetResponseData> {
}

/** Backend request type: UpdateProviderRequest. */
export interface ProviderUpdatePatchInput extends JsonObject {
  "user_id"?: string;
  "name"?: string;
  "bio"?: string;
  "avatar_url"?: string;
  "is_active"?: boolean;
}
/** Backend response type: ProviderResponse. */
export interface ProviderUpdatePatchResponseData extends JsonObject {
  "id": number;
  "user_id"?: string;
  "name": string;
  "bio"?: string;
  "avatar_url"?: string;
  "is_active": boolean;
  "created_at": string;
}
export interface ProviderUpdatePatchResponse extends ApiEnvelope<ProviderUpdatePatchResponseData> {
}

/** Backend response type: Vec<ServiceResponse>. */
export interface ProviderListServicesGetResponseItem extends JsonObject {
  "id": number;
  "name": string;
  "description"?: string;
  "image_url"?: string;
  "duration_minutes": number;
  "buffer_minutes": number;
  "is_active": boolean;
  "created_at": string;
}
export interface ProviderListServicesGetResponse extends ApiEnvelope<ProviderListServicesGetResponseItem[]> {
}

/** Backend request type: AssignServiceRequest. */
export interface ProviderAssignServicePostInput extends JsonObject {
  "service_id": number;
}
/** Backend response type: (). */
export interface ProviderAssignServicePostResponse extends ApiEnvelope<JsonObject> {
}

/** Backend response type: (). */
export interface ProviderRemoveServiceDeleteResponse extends ApiEnvelope<JsonObject> {
}

/** Backend response type: Vec<WorkScheduleResponse>. */
export interface WorkScheduleIndexGetResponseItem extends JsonObject {
  "id": number;
  "provider_id": number;
  "day_of_week": string;
  "start_time": string;
  "end_time": string;
  "is_active": boolean;
}
export interface WorkScheduleIndexGetResponse extends ApiEnvelope<WorkScheduleIndexGetResponseItem[]> {
}

/** Backend request type: UpsertScheduleRequest. */
export interface WorkScheduleUpsertPutInput extends JsonObject {
  "schedules": JsonValue[];
}
/** Backend response type: Vec<WorkScheduleResponse>. */
export interface WorkScheduleUpsertPutResponseItem extends JsonObject {
  "id": number;
  "provider_id": number;
  "day_of_week": string;
  "start_time": string;
  "end_time": string;
  "is_active": boolean;
}
export interface WorkScheduleUpsertPutResponse extends ApiEnvelope<WorkScheduleUpsertPutResponseItem[]> {
}

/** Backend query type: ReservationListQuery. */
export interface ReservationIndexGetQuery extends QueryParams {
  "user_id"?: string;
  "provider_id"?: number;
  "service_id"?: number;
  "status"?: string;
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: PagedResult<ReservationResponse>. */
export interface ReservationIndexGetResponseItem extends JsonObject {
  "id": number;
  "time_slot_id": number;
  "provider_id": number;
  "service_id": number;
  "user_id": string;
  "status": string;
  "notes"?: string;
  "starts_at"?: string;
  "created_at": string;
}
export interface ReservationIndexGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ReservationIndexGetResponseData extends JsonObject {
  "data": ReservationIndexGetResponseItem[];
  "meta": ReservationIndexGetResponsePageMeta;
}
export interface ReservationIndexGetResponse extends ApiEnvelope<ReservationIndexGetResponseData> {
}

/** Backend request type: CreateReservationRequest. */
export interface ReservationStorePostInput extends JsonObject {
  "time_slot_id": number;
  "user_id": string;
  "notes"?: string;
}
/** Backend response type: ReservationResponse. */
export interface ReservationStorePostResponseData extends JsonObject {
  "id": number;
  "time_slot_id": number;
  "provider_id": number;
  "service_id": number;
  "user_id": string;
  "status": string;
  "notes"?: string;
  "starts_at"?: string;
  "created_at": string;
}
export interface ReservationStorePostResponse extends ApiEnvelope<ReservationStorePostResponseData> {
}

/** Backend response type: (). */
export interface ReservationCancelDeleteResponse extends ApiEnvelope<JsonObject> {
}

/** Backend response type: ReservationResponse. */
export interface ReservationShowGetResponseData extends JsonObject {
  "id": number;
  "time_slot_id": number;
  "provider_id": number;
  "service_id": number;
  "user_id": string;
  "status": string;
  "notes"?: string;
  "starts_at"?: string;
  "created_at": string;
}
export interface ReservationShowGetResponse extends ApiEnvelope<ReservationShowGetResponseData> {
}

/** Backend request type: UpdateReservationRequest. */
export interface ReservationUpdatePatchInput extends JsonObject {
  "status"?: string;
  "notes"?: string;
}
/** Backend response type: ReservationResponse. */
export interface ReservationUpdatePatchResponseData extends JsonObject {
  "id": number;
  "time_slot_id": number;
  "provider_id": number;
  "service_id": number;
  "user_id": string;
  "status": string;
  "notes"?: string;
  "starts_at"?: string;
  "created_at": string;
}
export interface ReservationUpdatePatchResponse extends ApiEnvelope<ReservationUpdatePatchResponseData> {
}

/** Backend query type: PaginationQuery. */
export interface ReservationServiceIndexGetQuery extends QueryParams {
  "page[number]"?: number;
  "page[size]"?: number;
}
/** Backend response type: crate::models::PagedResult<ServiceResponse>. */
export interface ReservationServiceIndexGetResponseItem extends JsonObject {
  "id": number;
  "name": string;
  "description"?: string;
  "image_url"?: string;
  "duration_minutes": number;
  "buffer_minutes": number;
  "is_active": boolean;
  "created_at": string;
}
export interface ReservationServiceIndexGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface ReservationServiceIndexGetResponseData extends JsonObject {
  "data": ReservationServiceIndexGetResponseItem[];
  "meta": ReservationServiceIndexGetResponsePageMeta;
}
export interface ReservationServiceIndexGetResponse extends ApiEnvelope<ReservationServiceIndexGetResponseData> {
}

/** Backend request type: CreateServiceRequest. */
export interface ReservationServiceStorePostInput extends JsonObject {
  "name": string;
  "description"?: string;
  "image_url"?: string;
  "duration_minutes": number;
  "buffer_minutes"?: number;
  "is_active"?: boolean;
}
/** Backend response type: ServiceResponse. */
export interface ReservationServiceStorePostResponseData extends JsonObject {
  "id": number;
  "name": string;
  "description"?: string;
  "image_url"?: string;
  "duration_minutes": number;
  "buffer_minutes": number;
  "is_active": boolean;
  "created_at": string;
}
export interface ReservationServiceStorePostResponse extends ApiEnvelope<ReservationServiceStorePostResponseData> {
}

/** Backend response type: (). */
export interface ReservationServiceDestroyDeleteResponse extends ApiEnvelope<JsonObject> {
}

/** Backend response type: ServiceResponse. */
export interface ReservationServiceShowGetResponseData extends JsonObject {
  "id": number;
  "name": string;
  "description"?: string;
  "image_url"?: string;
  "duration_minutes": number;
  "buffer_minutes": number;
  "is_active": boolean;
  "created_at": string;
}
export interface ReservationServiceShowGetResponse extends ApiEnvelope<ReservationServiceShowGetResponseData> {
}

/** Backend request type: UpdateServiceRequest. */
export interface ReservationServiceUpdatePatchInput extends JsonObject {
  "name"?: string;
  "description"?: string;
  "image_url"?: string;
  "duration_minutes"?: number;
  "buffer_minutes"?: number;
  "is_active"?: boolean;
}
/** Backend response type: ServiceResponse. */
export interface ReservationServiceUpdatePatchResponseData extends JsonObject {
  "id": number;
  "name": string;
  "description"?: string;
  "image_url"?: string;
  "duration_minutes": number;
  "buffer_minutes": number;
  "is_active": boolean;
  "created_at": string;
}
export interface ReservationServiceUpdatePatchResponse extends ApiEnvelope<ReservationServiceUpdatePatchResponseData> {
}

/** Backend request type: GenerateSlotsRequest. */
export interface TimeSlotGeneratePostInput extends JsonObject {
  "provider_id": number;
  "service_id": number;
  "from_date": string;
  "to_date": string;
}
/** Backend response type: usize. */
export interface TimeSlotGeneratePostResponse extends ApiEnvelope<number> {
}

/** Backend response type: (). */
export interface TimeSlotDestroyDeleteResponse extends ApiEnvelope<JsonObject> {
}

/** Backend response type: TimeSlotResponse. */
export interface TimeSlotShowGetResponseData extends JsonObject {
  "id": number;
  "provider_id": number;
  "service_id": number;
  "starts_at": string;
  "ends_at": string;
  "is_reserved": boolean;
  "reserved_by_user_id"?: string;
}
export interface TimeSlotShowGetResponse extends ApiEnvelope<TimeSlotShowGetResponseData> {
}

/** Backend request type: UpdateTimeSlotRequest. */
export interface TimeSlotUpdatePatchInput extends JsonObject {
  "provider_id"?: number;
  "service_id"?: number;
  "starts_at"?: string;
  "ends_at"?: string;
  "is_reserved"?: boolean;
}
/** Backend response type: TimeSlotResponse. */
export interface TimeSlotUpdatePatchResponseData extends JsonObject {
  "id": number;
  "provider_id": number;
  "service_id": number;
  "starts_at": string;
  "ends_at": string;
  "is_reserved": boolean;
  "reserved_by_user_id"?: string;
}
export interface TimeSlotUpdatePatchResponse extends ApiEnvelope<TimeSlotUpdatePatchResponseData> {
}

/** Backend query type: AvailableSlotsQuery. */
export interface TimeSlotAvailableGetQuery extends QueryParams {
  "service_id"?: number;
  "provider_id"?: number;
  "date"?: string;
}
/** Backend response type: Vec<TimeSlotResponse>. */
export interface TimeSlotAvailableGetResponseItem extends JsonObject {
  "id": number;
  "provider_id": number;
  "service_id": number;
  "starts_at": string;
  "ends_at": string;
  "is_reserved": boolean;
  "reserved_by_user_id"?: string;
}
export interface TimeSlotAvailableGetResponse extends ApiEnvelope<TimeSlotAvailableGetResponseItem[]> {
}

/** Backend response type: serde_json::Value. */
export interface RouterHealthGetHealthResponse extends ApiEnvelope<JsonValue> {
}

