import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class ReservationOperations extends ServiceApi {
  /**
   * Read the process package version; does not verify database, broker, tenant binding or booking availability.
   * Calls `GET /` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public static process version; no downstream readiness guarantee.
   */
  routerHealthGet(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /**
   * Read raw generated OpenAPI. It omits some actual mounted operations and is not authoritative endpoint-completeness evidence.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public generated documentation; deployed gateway policy remains separate.
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Performs the flow integration show operation for the integration capability.
   * Calls `GET /api/v1/integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /**
   * Performs the index operation for the provider capability.
   * Calls `GET /api/v1/providers` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  providerIndexGet(params?: T.ProviderIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProviderIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/providers`, params });
  }
  /**
   * Performs the store operation for the provider capability.
   * Calls `POST /api/v1/providers` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  providerStorePost(data: T.ProviderStorePostInput, options?: RequestOptions<T.ProviderStorePostInput>) {
    return this.client.request<T.ProviderStorePostResponse, T.ProviderStorePostInput>({ ...options, method: "POST", url: `/api/v1/providers`, data: data });
  }
  /**
   * Apply the named Reservation resource mutation. Success has data:null. Native conflict/history and current sandbox-scoped authorization checks remain authoritative; history-preserving parent/slot deletion can return409.
   * Calls `DELETE /api/v1/providers/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted current user and organization context plus matching admin resource action/manage permission, reservation action/manage wildcard as accepted by the source middleware.
   */
  providerDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProviderDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/providers/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the provider capability.
   * Calls `GET /api/v1/providers/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  providerShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProviderShowGetResponse>({ ...options, method: "GET", url: `/api/v1/providers/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the provider capability.
   * Calls `PATCH /api/v1/providers/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  providerUpdatePatch(id: Identifier, data: T.ProviderUpdatePatchInput, options?: RequestOptions<T.ProviderUpdatePatchInput>) {
    return this.client.request<T.ProviderUpdatePatchResponse, T.ProviderUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/providers/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read a provider-locked capacity/occupancy snapshot and paged legacy conflicts. Capacity is1..1000 and shared across all services and overlapping intervals; timestamps are RFC3339 and observed_at is database time. Pagination uses page[number]/page[size], defaults1/20 and clamps1..100. This is a snapshot, not an admission reservation; booking rechecks and locks. Missing providers404; invalid pagination400; no IDP user lookup or live gateway binding is established by the DTO.
   * Calls `GET /api/v1/providers/{id}/capacity` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted non-nil user/organization plus admin:provider:read, admin:provider:manage, reservation:read/manage/* or *; organization data isolation depends on trusted project routing.
   */
  providerCapacityReportGet(id: Identifier, params?: T.ProviderCapacityReportGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProviderCapacityReportGetResponse>({ ...options, method: "GET", url: `/api/v1/providers/${encodeURIComponent(id)}/capacity`, params });
  }
  /**
   * Performs the list services operation for the provider capability.
   * Calls `GET /api/v1/providers/{id}/services` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  providerListServicesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProviderListServicesGetResponse>({ ...options, method: "GET", url: `/api/v1/providers/${encodeURIComponent(id)}/services` });
  }
  /**
   * Apply the named Reservation resource mutation. Success has data:null. Native conflict/history and current sandbox-scoped authorization checks remain authoritative; history-preserving parent/slot deletion can return409.
   * Calls `POST /api/v1/providers/{id}/services` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted current user and organization context plus matching admin resource action/manage permission, reservation action/manage wildcard as accepted by the source middleware.
   */
  providerAssignServicePost(id: Identifier, data: T.ProviderAssignServicePostInput, options?: RequestOptions<T.ProviderAssignServicePostInput>) {
    return this.client.request<T.ProviderAssignServicePostResponse, T.ProviderAssignServicePostInput>({ ...options, method: "POST", url: `/api/v1/providers/${encodeURIComponent(id)}/services`, data: data });
  }
  /**
   * Apply the named Reservation resource mutation. Success has data:null. Native conflict/history and current sandbox-scoped authorization checks remain authoritative; history-preserving parent/slot deletion can return409.
   * Calls `DELETE /api/v1/providers/{id}/services/{service_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param serviceId Backend path identifier `service_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted current user and organization context plus matching admin resource action/manage permission, reservation action/manage wildcard as accepted by the source middleware.
   */
  providerRemoveServiceDelete(id: Identifier, serviceId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProviderRemoveServiceDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/providers/${encodeURIComponent(id)}/services/${encodeURIComponent(serviceId)}` });
  }
  /**
   * Performs the index operation for the work schedule capability.
   * Calls `GET /api/v1/providers/{provider_id}/schedules` through the shared IDP-aware Faiber client.
   * @param providerId Backend path identifier `provider_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  workScheduleIndexGet(providerId: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkScheduleIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/providers/${encodeURIComponent(providerId)}/schedules` });
  }
  /**
   * Performs the upsert operation for the work schedule capability.
   * Calls `PUT /api/v1/providers/{provider_id}/schedules` through the shared IDP-aware Faiber client.
   * @param providerId Backend path identifier `provider_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  workScheduleUpsertPut(providerId: Identifier, data: T.WorkScheduleUpsertPutInput, options?: RequestOptions<T.WorkScheduleUpsertPutInput>) {
    return this.client.request<T.WorkScheduleUpsertPutResponse, T.WorkScheduleUpsertPutInput>({ ...options, method: "PUT", url: `/api/v1/providers/${encodeURIComponent(providerId)}/schedules`, data: data });
  }
  /**
   * Performs the index operation for the reservation capability.
   * Calls `GET /api/v1/reservations` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  reservationIndexGet(params?: T.ReservationIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ReservationIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/reservations`, params });
  }
  /**
   * Performs the store operation for the reservation capability.
   * Calls `POST /api/v1/reservations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  reservationStorePost(data: T.ReservationStorePostInput, options?: RequestOptions<T.ReservationStorePostInput>) {
    return this.client.request<T.ReservationStorePostResponse, T.ReservationStorePostInput>({ ...options, method: "POST", url: `/api/v1/reservations`, data: data });
  }
  /**
   * Cancel a booking while retaining its history. Returns data:null. Repeated cancellation succeeds without releasing a newer claim; cancelled bookings cannot be reopened. Missing booking404, invalid transition409, and a claim no longer owned by this booking409.
   * Calls `DELETE /api/v1/reservations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted non-nil current user/organization and reservation delete/manage permission as accepted by source middleware.
   */
  reservationCancelDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReservationCancelDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/reservations/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the reservation capability.
   * Calls `GET /api/v1/reservations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  reservationShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReservationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/reservations/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the reservation capability.
   * Calls `PATCH /api/v1/reservations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  reservationUpdatePatch(id: Identifier, data: T.ReservationUpdatePatchInput, options?: RequestOptions<T.ReservationUpdatePatchInput>) {
    return this.client.request<T.ReservationUpdatePatchResponse, T.ReservationUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/reservations/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index operation for the reservation service capability.
   * Calls `GET /api/v1/services` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  reservationServiceIndexGet(params?: T.ReservationServiceIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ReservationServiceIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/services`, params });
  }
  /**
   * Performs the store operation for the reservation service capability.
   * Calls `POST /api/v1/services` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  reservationServiceStorePost(data: T.ReservationServiceStorePostInput, options?: RequestOptions<T.ReservationServiceStorePostInput>) {
    return this.client.request<T.ReservationServiceStorePostResponse, T.ReservationServiceStorePostInput>({ ...options, method: "POST", url: `/api/v1/services`, data: data });
  }
  /**
   * Apply the named Reservation resource mutation. Success has data:null. Native conflict/history and current sandbox-scoped authorization checks remain authoritative; history-preserving parent/slot deletion can return409.
   * Calls `DELETE /api/v1/services/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted current user and organization context plus matching admin resource action/manage permission, reservation action/manage wildcard as accepted by the source middleware.
   */
  reservationServiceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReservationServiceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/services/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the reservation service capability.
   * Calls `GET /api/v1/services/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  reservationServiceShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReservationServiceShowGetResponse>({ ...options, method: "GET", url: `/api/v1/services/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the reservation service capability.
   * Calls `PATCH /api/v1/services/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  reservationServiceUpdatePatch(id: Identifier, data: T.ReservationServiceUpdatePatchInput, options?: RequestOptions<T.ReservationServiceUpdatePatchInput>) {
    return this.client.request<T.ReservationServiceUpdatePatchResponse, T.ReservationServiceUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/services/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the generate operation for the time slot capability.
   * Calls `POST /api/v1/slots` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  timeSlotGeneratePost(data: T.TimeSlotGeneratePostInput, options?: RequestOptions<T.TimeSlotGeneratePostInput>) {
    return this.client.request<T.TimeSlotGeneratePostResponse, T.TimeSlotGeneratePostInput>({ ...options, method: "POST", url: `/api/v1/slots`, data: data });
  }
  /**
   * Apply the named Reservation resource mutation. Success has data:null. Native conflict/history and current sandbox-scoped authorization checks remain authoritative; history-preserving parent/slot deletion can return409.
   * Calls `DELETE /api/v1/slots/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted current user and organization context plus matching admin resource action/manage permission, reservation action/manage wildcard as accepted by the source middleware.
   */
  timeSlotDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TimeSlotDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/slots/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the time slot capability.
   * Calls `GET /api/v1/slots/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  timeSlotShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TimeSlotShowGetResponse>({ ...options, method: "GET", url: `/api/v1/slots/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the time slot capability.
   * Calls `PATCH /api/v1/slots/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  timeSlotUpdatePatch(id: Identifier, data: T.TimeSlotUpdatePatchInput, options?: RequestOptions<T.TimeSlotUpdatePatchInput>) {
    return this.client.request<T.TimeSlotUpdatePatchResponse, T.TimeSlotUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/slots/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the available operation for the time slot capability.
   * Calls `GET /api/v1/slots/available` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  timeSlotAvailableGet(params?: T.TimeSlotAvailableGetQuery, options?: RequestOptions) {
    return this.client.request<T.TimeSlotAvailableGetResponse>({ ...options, method: "GET", url: `/api/v1/slots/available`, params });
  }
  /**
   * Read the process package version; does not verify database, broker, tenant binding or booking availability.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public static process version; no downstream readiness guarantee.
   */
  routerHealthGetHealth(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
}
