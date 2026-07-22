import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class ReservationOperations extends ServiceApi {
  /** GET /; permission: public/session-derived. */
  routerHealthGet(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /** GET /api/openapi.json; permission: public/session-derived. */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /** GET /api/v1/integration/flow; permission: public/session-derived. */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /** GET /api/v1/providers; permission: public/session-derived. */
  providerIndexGet(params?: T.ProviderIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProviderIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/providers`, params });
  }
  /** POST /api/v1/providers; permission: public/session-derived. */
  providerStorePost(data: T.ProviderStorePostInput, options?: RequestOptions<T.ProviderStorePostInput>) {
    return this.client.request<T.ProviderStorePostResponse, T.ProviderStorePostInput>({ ...options, method: "POST", url: `/api/v1/providers`, data: data });
  }
  /** DELETE /api/v1/providers/{id}; permission: public/session-derived. */
  providerDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProviderDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/providers/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/providers/{id}; permission: public/session-derived. */
  providerShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProviderShowGetResponse>({ ...options, method: "GET", url: `/api/v1/providers/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/providers/{id}; permission: public/session-derived. */
  providerUpdatePatch(id: Identifier, data: T.ProviderUpdatePatchInput, options?: RequestOptions<T.ProviderUpdatePatchInput>) {
    return this.client.request<T.ProviderUpdatePatchResponse, T.ProviderUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/providers/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/providers/{id}/services; permission: public/session-derived. */
  providerListServicesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProviderListServicesGetResponse>({ ...options, method: "GET", url: `/api/v1/providers/${encodeURIComponent(id)}/services` });
  }
  /** POST /api/v1/providers/{id}/services; permission: public/session-derived. */
  providerAssignServicePost(id: Identifier, data: T.ProviderAssignServicePostInput, options?: RequestOptions<T.ProviderAssignServicePostInput>) {
    return this.client.request<T.ProviderAssignServicePostResponse, T.ProviderAssignServicePostInput>({ ...options, method: "POST", url: `/api/v1/providers/${encodeURIComponent(id)}/services`, data: data });
  }
  /** DELETE /api/v1/providers/{id}/services/{service_id}; permission: public/session-derived. */
  providerRemoveServiceDelete(id: Identifier, serviceId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProviderRemoveServiceDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/providers/${encodeURIComponent(id)}/services/${encodeURIComponent(serviceId)}` });
  }
  /** GET /api/v1/providers/{provider_id}/schedules; permission: public/session-derived. */
  workScheduleIndexGet(providerId: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkScheduleIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/providers/${encodeURIComponent(providerId)}/schedules` });
  }
  /** PUT /api/v1/providers/{provider_id}/schedules; permission: public/session-derived. */
  workScheduleUpsertPut(providerId: Identifier, data: T.WorkScheduleUpsertPutInput, options?: RequestOptions<T.WorkScheduleUpsertPutInput>) {
    return this.client.request<T.WorkScheduleUpsertPutResponse, T.WorkScheduleUpsertPutInput>({ ...options, method: "PUT", url: `/api/v1/providers/${encodeURIComponent(providerId)}/schedules`, data: data });
  }
  /** GET /api/v1/reservations; permission: public/session-derived. */
  reservationIndexGet(params?: T.ReservationIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ReservationIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/reservations`, params });
  }
  /** POST /api/v1/reservations; permission: public/session-derived. */
  reservationStorePost(data: T.ReservationStorePostInput, options?: RequestOptions<T.ReservationStorePostInput>) {
    return this.client.request<T.ReservationStorePostResponse, T.ReservationStorePostInput>({ ...options, method: "POST", url: `/api/v1/reservations`, data: data });
  }
  /** DELETE /api/v1/reservations/{id}; permission: public/session-derived. */
  reservationCancelDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReservationCancelDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/reservations/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/reservations/{id}; permission: public/session-derived. */
  reservationShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReservationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/reservations/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/reservations/{id}; permission: public/session-derived. */
  reservationUpdatePatch(id: Identifier, data: T.ReservationUpdatePatchInput, options?: RequestOptions<T.ReservationUpdatePatchInput>) {
    return this.client.request<T.ReservationUpdatePatchResponse, T.ReservationUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/reservations/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/services; permission: public/session-derived. */
  reservationServiceIndexGet(params?: T.ReservationServiceIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ReservationServiceIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/services`, params });
  }
  /** POST /api/v1/services; permission: public/session-derived. */
  reservationServiceStorePost(data: T.ReservationServiceStorePostInput, options?: RequestOptions<T.ReservationServiceStorePostInput>) {
    return this.client.request<T.ReservationServiceStorePostResponse, T.ReservationServiceStorePostInput>({ ...options, method: "POST", url: `/api/v1/services`, data: data });
  }
  /** DELETE /api/v1/services/{id}; permission: public/session-derived. */
  reservationServiceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReservationServiceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/services/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/services/{id}; permission: public/session-derived. */
  reservationServiceShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReservationServiceShowGetResponse>({ ...options, method: "GET", url: `/api/v1/services/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/services/{id}; permission: public/session-derived. */
  reservationServiceUpdatePatch(id: Identifier, data: T.ReservationServiceUpdatePatchInput, options?: RequestOptions<T.ReservationServiceUpdatePatchInput>) {
    return this.client.request<T.ReservationServiceUpdatePatchResponse, T.ReservationServiceUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/services/${encodeURIComponent(id)}`, data: data });
  }
  /** POST /api/v1/slots; permission: public/session-derived. */
  timeSlotGeneratePost(data: T.TimeSlotGeneratePostInput, options?: RequestOptions<T.TimeSlotGeneratePostInput>) {
    return this.client.request<T.TimeSlotGeneratePostResponse, T.TimeSlotGeneratePostInput>({ ...options, method: "POST", url: `/api/v1/slots`, data: data });
  }
  /** DELETE /api/v1/slots/{id}; permission: public/session-derived. */
  timeSlotDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TimeSlotDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/slots/${encodeURIComponent(id)}` });
  }
  /** GET /api/v1/slots/{id}; permission: public/session-derived. */
  timeSlotShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TimeSlotShowGetResponse>({ ...options, method: "GET", url: `/api/v1/slots/${encodeURIComponent(id)}` });
  }
  /** PATCH /api/v1/slots/{id}; permission: public/session-derived. */
  timeSlotUpdatePatch(id: Identifier, data: T.TimeSlotUpdatePatchInput, options?: RequestOptions<T.TimeSlotUpdatePatchInput>) {
    return this.client.request<T.TimeSlotUpdatePatchResponse, T.TimeSlotUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/slots/${encodeURIComponent(id)}`, data: data });
  }
  /** GET /api/v1/slots/available; permission: public/session-derived. */
  timeSlotAvailableGet(params?: T.TimeSlotAvailableGetQuery, options?: RequestOptions) {
    return this.client.request<T.TimeSlotAvailableGetResponse>({ ...options, method: "GET", url: `/api/v1/slots/available`, params });
  }
  /** GET /health; permission: public/session-derived. */
  routerHealthGetHealth(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
}

