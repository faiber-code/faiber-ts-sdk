import { RestResource, ServiceApi, type Identifier, type QueryParams, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
export class ReservationApi extends ServiceApi {
    readonly services = new RestResource<T.BookableService, T.CreateBookableServiceInput, T.UpdateBookableServiceInput, T.ServiceListResponse, T.ServiceResponse>(this.client, "/api/v1/services");
    readonly providers = new RestResource<T.Provider, T.CreateProviderInput, T.UpdateProviderInput, T.ProviderListResponse, T.ProviderResponse>(this.client, "/api/v1/providers");
    readonly reservations = new RestResource<T.Reservation, T.CreateReservationInput, T.UpdateReservationInput, T.ReservationListResponse, T.ReservationResponse>(this.client, "/api/v1/reservations");
    availableSlots(params?: QueryParams, options?: RequestOptions) { return this.client.get<T.AvailableSlotsResponse>("/api/v1/slots/available", params, options); }
    generateSlots(data: T.GenerateSlotsInput, options?: RequestOptions<T.GenerateSlotsInput>) { return this.client.post<T.GenerateSlotsResponse, T.GenerateSlotsInput>("/api/v1/slots", data, options); }
    slot(id: Identifier, options?: RequestOptions) { return this.client.get<T.TimeSlotResponse>(`/api/v1/slots/${encodeURIComponent(id)}`, undefined, options); }
    updateSlot(id: Identifier, data: T.UpdateTimeSlotInput, options?: RequestOptions<T.UpdateTimeSlotInput>) { return this.client.patch<T.TimeSlotResponse, T.UpdateTimeSlotInput>(`/api/v1/slots/${encodeURIComponent(id)}`, data, options); }
    deleteSlot(id: Identifier, options?: RequestOptions) { return this.client.delete<T.DeleteTimeSlotResponse>(`/api/v1/slots/${encodeURIComponent(id)}`, options); }
    schedules(providerId: Identifier, options?: RequestOptions) { return this.client.get<T.SchedulesResponse>(`/api/v1/providers/${encodeURIComponent(providerId)}/schedules`, undefined, options); }
    setSchedules(providerId: Identifier, data: T.SetSchedulesInput, options?: RequestOptions<T.SetSchedulesInput>) { return this.client.put<T.SchedulesResponse, T.SetSchedulesInput>(`/api/v1/providers/${encodeURIComponent(providerId)}/schedules`, data, options); }
    assignService(providerId: Identifier, data: T.AssignServiceInput, options?: RequestOptions<T.AssignServiceInput>) { return this.client.post<T.AssignServiceResponse, T.AssignServiceInput>(`/api/v1/providers/${encodeURIComponent(providerId)}/services`, data, options); }
    providerServices(providerId: Identifier, options?: RequestOptions) { return this.client.get<T.ServiceListResponse>(`/api/v1/providers/${encodeURIComponent(providerId)}/services`, undefined, options); }
    removeService(providerId: Identifier, serviceId: Identifier, options?: RequestOptions) { return this.client.delete<T.AssignServiceResponse>(`/api/v1/providers/${encodeURIComponent(providerId)}/services/${encodeURIComponent(serviceId)}`, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
