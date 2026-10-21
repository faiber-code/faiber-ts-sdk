import type * as O from "./operations.types.js";

/** Local numeric service record, including buffer and active configuration. */
export type BookableService = O.ReservationServiceShowGetResponseData;
/** Create service; duration 5..480 minutes, buffer 0..120 (default 0). */
export type CreateBookableServiceInput = O.ReservationServiceStorePostInput;
/** Null/omitted optional members preserve existing values. */
export type UpdateBookableServiceInput = O.ReservationServiceUpdatePatchInput;
/** Provider capacity is shared across overlapping appointments for all services. */
export type Provider = O.ProviderShowGetResponseData;
export type CreateProviderInput = O.ProviderStorePostInput;
export type UpdateProviderInput = O.ProviderUpdatePatchInput;
/** A retained booking. Read its slot separately for interval details on show/list. */
export type Reservation = O.ReservationShowGetResponseData;
/** Book an existing slot for an IDP user UUID; provider/service come from the slot. */
export type CreateReservationInput = O.ReservationStorePostInput;
/** Status/notes only; cancelled and completed states cannot be reopened. */
export type UpdateReservationInput = O.ReservationUpdatePatchInput;
export type ReservationListQuery = O.ReservationIndexGetQuery;
export type ServiceListQuery = O.ReservationServiceIndexGetQuery;
export type ProviderListQuery = O.ProviderIndexGetQuery;
export type AvailableSlotsQuery = O.TimeSlotAvailableGetQuery;
export type TimeSlot = O.TimeSlotShowGetResponseData;
/** Inclusive UTC dates; requires an active provider/service assignment. */
export type GenerateSlotsInput = O.TimeSlotGeneratePostInput;
/** Structural edits cannot alter claimed/historically referenced slots. */
export type UpdateTimeSlotInput = O.TimeSlotUpdatePatchInput;
export type WorkSchedule = O.WorkScheduleIndexGetResponseItem;
export type ScheduleEntry = O.WorkScheduleUpsertPutInputSchedules;
/** Replaces the complete schedule; an empty list clears it. */
export type SetSchedulesInput = O.WorkScheduleUpsertPutInput;
export type AssignServiceInput = O.ProviderAssignServicePostInput;
export type ServiceListResponse = O.ReservationServiceIndexGetResponse;
export type ServiceResponse = O.ReservationServiceShowGetResponse;
export type ProviderListResponse = O.ProviderIndexGetResponse;
export type ProviderResponse = O.ProviderShowGetResponse;
export type ReservationListResponse = O.ReservationIndexGetResponse;
export type ReservationResponse = O.ReservationShowGetResponse;
export type AvailableSlotsResponse = O.TimeSlotAvailableGetResponse;
/** Numeric count of newly generated rows, not slot objects. */
export type GenerateSlotsResponse = O.TimeSlotGeneratePostResponse;
export type TimeSlotResponse = O.TimeSlotShowGetResponse;
export type DeleteTimeSlotResponse = O.TimeSlotDestroyDeleteResponse;
export type SchedulesResponse = O.WorkScheduleIndexGetResponse;
export type AssignServiceResponse = O.ProviderAssignServicePostResponse;
/** Unpaged assigned services; differs from the paged service catalog. */
export type ProviderServicesResponse = O.ProviderListServicesGetResponse;
