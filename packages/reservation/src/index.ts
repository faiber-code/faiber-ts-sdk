import { RestResource, ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
import { ReservationOperations } from "./operations.js";
/** Reservation transport; management methods require trusted user/organization and resource/action permission. */
export class ReservationApi extends ServiceApi {
    readonly operations = new ReservationOperations(this.client);
    /** Service catalog: paged list, read/create/patch/delete. Requires service action/manage grant; missing 404, referenced deletion 409. */
    readonly services = new RestResource<T.BookableService, T.CreateBookableServiceInput, T.UpdateBookableServiceInput, T.ServiceListResponse, T.ServiceResponse, T.ServiceListQuery, import("./contracts.types.js").ReservationMutationReceipt>(this.client, "/api/v1/services", { supported: ["list", "show", "create", "update", "delete"] });
    /** Providers: paged list, read/create/patch/delete. Requires provider action/manage grant; capacity below occupancy or retained history 409. */
    readonly providers = new RestResource<T.Provider, T.CreateProviderInput, T.UpdateProviderInput, T.ProviderListResponse, T.ProviderResponse, T.ProviderListQuery, import("./contracts.types.js").ReservationMutationReceipt>(this.client, "/api/v1/providers", { supported: ["list", "show", "create", "update", "delete"] });
    /** Bookings: filtered paged list, read/create/patch/cancel. Requires reservation action/manage grant; claim/full or invalid transition 409. Delete retains history and returns data:null. */
    readonly reservations = new RestResource<T.Reservation, T.CreateReservationInput, T.UpdateReservationInput, T.ReservationListResponse, T.ReservationResponse, T.ReservationListQuery, import("./contracts.types.js").ReservationMutationReceipt>(this.client, "/api/v1/reservations", { supported: ["list", "show", "create", "update", "delete"] });
    /** Public advisory availability, unpaged; optional numeric filters and strict UTC YYYY-MM-DD. Returns slots; malformed date 400. */
    availableSlots(params?: T.AvailableSlotsQuery, options?: RequestOptions) { return this.client.get<T.AvailableSlotsResponse>("/api/v1/slots/available", params, options); }
    /** Generate capacity-many slots atomically for inclusive UTC dates. Requires slot:create/manage; returns numeric count, invalid configuration 400, missing relation 404. */
    generateSlots(data: T.GenerateSlotsInput, options?: RequestOptions<T.GenerateSlotsInput>) { return this.client.post<T.GenerateSlotsResponse, T.GenerateSlotsInput>("/api/v1/slots", data, options); }
    /** Read numeric slot; requires slot:read/manage; missing 404. Returns RFC3339 interval and claim fields. */
    slot(id: Identifier, options?: RequestOptions) { return this.client.get<T.TimeSlotResponse>(`/api/v1/slots/${encodeURIComponent(id)}`, undefined, options); }
    /** Patch slot structure; requires slot:update/manage. Returns slot; claimed/history edits or independent claim toggles 409, invalid interval 400. */
    updateSlot(id: Identifier, data: T.UpdateTimeSlotInput, options?: RequestOptions<T.UpdateTimeSlotInput>) { return this.client.patch<T.TimeSlotResponse, T.UpdateTimeSlotInput>(`/api/v1/slots/${encodeURIComponent(id)}`, data, options); }
    /** Delete numeric slot; requires slot:delete/manage. Returns data:null; missing 404, retained history or claim 409. */
    deleteSlot(id: Identifier, options?: RequestOptions) { return this.client.delete<T.DeleteTimeSlotResponse>(`/api/v1/slots/${encodeURIComponent(id)}`, options); }
    /** Read unpaged schedules with lowercase weekday and HH:MM times; requires provider:read/manage. Missing provider may yield []. */
    schedules(providerId: Identifier, options?: RequestOptions) { return this.client.get<T.SchedulesResponse>(`/api/v1/providers/${encodeURIComponent(providerId)}/schedules`, undefined, options); }
    /** Replace all schedules atomically; [] clears. Requires provider:update/manage; invalid weekday/time 400, missing provider 404; returns schedules. */
    setSchedules(providerId: Identifier, data: T.SetSchedulesInput, options?: RequestOptions<T.SetSchedulesInput>) { return this.client.put<T.SchedulesResponse, T.SetSchedulesInput>(`/api/v1/providers/${encodeURIComponent(providerId)}/schedules`, data, options); }
    /** Assign numeric service ID to provider; requires provider:create/manage. Returns data:null; existing/missing relation 409. */
    assignService(providerId: Identifier, data: T.AssignServiceInput, options?: RequestOptions<T.AssignServiceInput>) { return this.client.post<T.AssignServiceResponse, T.AssignServiceInput>(`/api/v1/providers/${encodeURIComponent(providerId)}/services`, data, options); }
    /** Read unpaged assigned services; requires provider:read/manage. Missing provider may yield []; no pagination envelope. */
    providerServices(providerId: Identifier, options?: RequestOptions) { return this.client.get<T.ProviderServicesResponse>(`/api/v1/providers/${encodeURIComponent(providerId)}/services`, undefined, options); }
    /** Remove assignment without removing slots/history; requires provider:delete/manage. Absent assignment succeeds with data:null. */
    removeService(providerId: Identifier, serviceId: Identifier, options?: RequestOptions) { return this.client.delete<T.AssignServiceResponse>(`/api/v1/providers/${encodeURIComponent(providerId)}/services/${encodeURIComponent(serviceId)}`, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";

export * from "./contracts.types.js";
