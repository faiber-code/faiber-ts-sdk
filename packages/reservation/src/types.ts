import type { ApiEnvelope, JsonObject, ResourceListResponse, ResourceResponse } from "@faiber/sdk-core";
export interface BookableService extends JsonObject {
    id: string;
    name: string;
    duration_minutes: number;
    price?: number;
}
export interface CreateBookableServiceInput extends JsonObject {
    name: string;
    duration_minutes: number;
    price?: number;
    description?: string;
}
export interface UpdateBookableServiceInput extends Partial<CreateBookableServiceInput> {
}
export interface Provider extends JsonObject {
    id: string;
    name: string;
    active?: boolean;
}
export interface CreateProviderInput extends JsonObject {
    name: string;
    active?: boolean;
    metadata?: JsonObject;
}
export interface UpdateProviderInput extends Partial<CreateProviderInput> {
}
export interface Reservation extends JsonObject {
    id: string;
    service_id: string;
    provider_id: string;
    starts_at: string;
    status: string;
}
export interface CreateReservationInput extends JsonObject {
    service_id: string;
    provider_id: string;
    starts_at: string;
    customer_id?: string;
    metadata?: JsonObject;
}
export interface UpdateReservationInput extends Partial<CreateReservationInput> {
    status?: string;
}
export interface TimeSlot extends JsonObject {
    id: number;
    provider_id: number;
    service_id?: number | null;
    starts_at: string;
    ends_at: string;
    is_reserved: boolean;
    reserved_by_user_id?: string | null;
}
export interface GenerateSlotsInput extends JsonObject {
    provider_id: number;
    service_id?: number;
    from_date: string;
    to_date: string;
    slot_duration_minutes?: number;
}
export interface UpdateTimeSlotInput extends JsonObject {
    starts_at?: string;
    ends_at?: string;
    is_reserved?: boolean;
    reserved_by_user_id?: string | null;
}
export interface WorkSchedule extends JsonObject {
    day_of_week: number;
    starts_at: string;
    ends_at: string;
}
export interface SetSchedulesInput extends JsonObject {
    schedules: WorkSchedule[];
}
export interface AssignServiceInput extends JsonObject {
    service_id: string;
}
export interface ServiceListResponse extends ResourceListResponse<BookableService> {
}
export interface ServiceResponse extends ResourceResponse<BookableService> {
}
export interface ProviderListResponse extends ResourceListResponse<Provider> {
}
export interface ProviderResponse extends ResourceResponse<Provider> {
}
export interface ReservationListResponse extends ResourceListResponse<Reservation> {
}
export interface ReservationResponse extends ResourceResponse<Reservation> {
}
export interface AvailableSlotsResponse extends ApiEnvelope<TimeSlot[]> {
}
export interface GenerateSlotsResponse extends ApiEnvelope<TimeSlot[]> {
}
export interface TimeSlotResponse extends ApiEnvelope<TimeSlot> {
}
export interface DeleteTimeSlotResponse extends ApiEnvelope<{ deleted: boolean; id: number }> {
}
export interface SchedulesResponse extends ApiEnvelope<WorkSchedule[]> {
}
export interface AssignServiceResponse extends ApiEnvelope<Provider> {
}
