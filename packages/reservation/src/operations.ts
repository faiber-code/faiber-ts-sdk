import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class ReservationOperations extends ServiceApi {
  /**
   * Same health envelope as /health; not a management dashboard. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Public read handler; no customer-specific authorization..
   */
  routerHealthGet(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /**
   * Raw OpenAPI document; mounted slot show/edit, capacity report and integration routes are not fully represented by the declared paths. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Public read handler; no customer-specific authorization..
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Public GET; success envelope with configured RABBITMQ_QUEUE defaultreservation_queue and empty action list. Metadata is not proof of event publication, durable delivery or consumer deduplication. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /api/v1/integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Public read handler; no customer-specific authorization..
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /**
   * Paged provider responses ordered ID ascending; no search, user or active filter implemented. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /api/v1/providers` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:provider:read, admin:provider:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  providerIndexGet(params?: T.ProviderIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProviderIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/providers`, params });
  }
  /**
   * name length1..200; optional user_id UUID,bio,avatar_url,is_active defaulttrue, capacity integer1..1000 default1. Linked IDP user existence is not checked here. Returns HTTP200 provider. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `POST /api/v1/providers` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:provider:create, admin:provider:manage, reservation:create, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  providerStorePost(data: T.ProviderStorePostInput, options?: RequestOptions<T.ProviderStorePostInput>) {
    return this.client.request<T.ProviderStorePostResponse, T.ProviderStorePostInput>({ ...options, method: "POST", url: `/api/v1/providers`, data: data });
  }
  /**
   * Numeric provider ID; missing404; booked or cancelled historical slots prevent cascade deletion409; success envelope data:null. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `DELETE /api/v1/providers/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:provider:delete, admin:provider:manage, reservation:delete, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  providerDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProviderDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/providers/${encodeURIComponent(id)}` });
  }
  /**
   * Numeric provider ID; missing404; optional user UUID, text, active, capacity and created_at. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /api/v1/providers/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:provider:read, admin:provider:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  providerShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProviderShowGetResponse>({ ...options, method: "GET", url: `/api/v1/providers/${encodeURIComponent(id)}` });
  }
  /**
   * Optional create fields; null/omitted text or user_id cannot explicitly clear. Changed capacity below current/future peak returns409; unchanged limit allowed even with legacy conflicts. Provider transaction lock serializes booking and configuration. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `PATCH /api/v1/providers/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:provider:update, admin:provider:manage, reservation:update, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  providerUpdatePatch(id: Identifier, data: T.ProviderUpdatePatchInput, options?: RequestOptions<T.ProviderUpdatePatchInput>) {
    return this.client.request<T.ProviderUpdatePatchResponse, T.ProviderUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/providers/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read in a transaction with an exclusive provider lock shared with booking/capacity/cancellation. Computes future occupancy and conflict windows, reports them without cancelling or repairing bookings. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /api/v1/providers/{id}/capacity` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:provider:read, admin:provider:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  providerCapacityReportGet(id: Identifier, params?: T.ProviderCapacityReportGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProviderCapacityReportGetResponse>({ ...options, method: "GET", url: `/api/v1/providers/${encodeURIComponent(id)}/capacity`, params });
  }
  /**
   * Provider ID selects assignment rows then service rows. Unpaged array; no explicit missing-provider check, so missing provider can return empty array; order unspecified. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /api/v1/providers/{id}/services` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:provider:read, admin:provider:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  providerListServicesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProviderListServicesGetResponse>({ ...options, method: "GET", url: `/api/v1/providers/${encodeURIComponent(id)}/services` });
  }
  /**
   * Numeric provider ID and JSON service_id; existing assignment409; missing relations FK409. Check-then-insert concurrent duplicate outcome is not certified. Success envelope data:null. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `POST /api/v1/providers/{id}/services` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:provider:create, admin:provider:manage, reservation:create, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  providerAssignServicePost(id: Identifier, data: T.ProviderAssignServicePostInput, options?: RequestOptions<T.ProviderAssignServicePostInput>) {
    return this.client.request<T.ProviderAssignServicePostResponse, T.ProviderAssignServicePostInput>({ ...options, method: "POST", url: `/api/v1/providers/${encodeURIComponent(id)}/services`, data: data });
  }
  /**
   * Two numeric IDs; absent assignment still succeeds. Existing slots/bookings remain; booking currently does not revalidate assignment. Success envelope data:null. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `DELETE /api/v1/providers/{id}/services/{service_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param serviceId Backend path identifier `service_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:provider:delete, admin:provider:manage, reservation:delete, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  providerRemoveServiceDelete(id: Identifier, serviceId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProviderRemoveServiceDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/providers/${encodeURIComponent(id)}/services/${encodeURIComponent(serviceId)}` });
  }
  /**
   * Provider ID; unpaged schedule array, unspecified order, missing provider can yield empty list. Lowercase English weekday, HH:MM times, active flag. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /api/v1/providers/{provider_id}/schedules` through the shared IDP-aware Faiber client.
   * @param providerId Backend path identifier `provider_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:provider:read, admin:provider:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  workScheduleIndexGet(providerId: Identifier, options?: RequestOptions) {
    return this.client.request<T.WorkScheduleIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/providers/${encodeURIComponent(providerId)}/schedules` });
  }
  /**
   * JSON schedules array; empty array clears all. Case-insensitive weekday; parsed 4..5 character time is normalized HH:MM; same-day end must exceed start. Active defaults true. All entries validated before transaction deletion; provider lock serializes replacement/generation. Overlapping schedules allowed; generation deduplicates candidate starts. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `PUT /api/v1/providers/{provider_id}/schedules` through the shared IDP-aware Faiber client.
   * @param providerId Backend path identifier `provider_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:provider:update, admin:provider:manage, reservation:update, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  workScheduleUpsertPut(providerId: Identifier, data: T.WorkScheduleUpsertPutInput, options?: RequestOptions<T.WorkScheduleUpsertPutInput>) {
    return this.client.request<T.WorkScheduleUpsertPutResponse, T.WorkScheduleUpsertPutInput>({ ...options, method: "PUT", url: `/api/v1/providers/${encodeURIComponent(providerId)}/schedules`, data: data });
  }
  /**
   * Optional user_id UUID,provider_id/service_id numeric,status exact lowercase pending/confirmed/cancelled/completed, bracket pagination; all combine AND. Created_at descending; ties not stabilized by ID. Responses currently starts_at:null because list does not join slot. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /api/v1/reservations` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:reservation:read, admin:reservation:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  reservationIndexGet(params?: T.ReservationIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ReservationIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/reservations`, params });
  }
  /**
   * JSON numeric time_slot_id,user_id UUID,optional notes. Provider/service derived from slot. HTTP200 confirmed reservation with starts_at populated. Provider lock and slot claim enforce interval capacity/one owner. Missing404, claimed/full409. Does not validate IDP customer existence, future date, current active provider/service or current assignment; no client idempotency receipt. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `POST /api/v1/reservations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:reservation:create, admin:reservation:manage, reservation:create, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  reservationStorePost(data: T.ReservationStorePostInput, options?: RequestOptions<T.ReservationStorePostInput>) {
    return this.client.request<T.ReservationStorePostResponse, T.ReservationStorePostInput>({ ...options, method: "POST", url: `/api/v1/reservations`, data: data });
  }
  /**
   * Same transition rules as PATCH cancelled; missing404, completed conflict409, repeated cancelled succeeds. Preserves reservation row; successful envelope data:null. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `DELETE /api/v1/reservations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:reservation:delete, admin:reservation:manage, reservation:delete, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  reservationCancelDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReservationCancelDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/reservations/${encodeURIComponent(id)}` });
  }
  /**
   * Numeric reservation ID; missing404; status lowercase, customer UUID, relation numeric IDs, notes and created_at. starts_at:null on this route; requires separate slot read for interval. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /api/v1/reservations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:reservation:read, admin:reservation:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  reservationShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReservationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/reservations/${encodeURIComponent(id)}` });
  }
  /**
   * Optional exact lowercase status and notes; null cannot explicitly clear notes. Pending->confirmed/cancelled, confirmed->completed/cancelled, same-state retry allowed; cancelled/completed terminal. Cancellation releases only the currently owned slot transactionally, stale retry never releases rebooking; notes-only updates on terminal bookings still allowed. Returns record starts_at:null. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `PATCH /api/v1/reservations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:reservation:update, admin:reservation:manage, reservation:update, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  reservationUpdatePatch(id: Identifier, data: T.ReservationUpdatePatchInput, options?: RequestOptions<T.ReservationUpdatePatchInput>) {
    return this.client.request<T.ReservationUpdatePatchResponse, T.ReservationUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/reservations/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Paged service responses ordered numeric ID ascending; no active, name or search filter implemented. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /api/v1/services` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:service:read, admin:service:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  reservationServiceIndexGet(params?: T.ReservationServiceIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ReservationServiceIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/services`, params });
  }
  /**
   * name length 1..200, duration_minutes 5..480; optional description, image_url, buffer_minutes 0..120 default0, is_active defaulttrue. Returns created service with HTTP200. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `POST /api/v1/services` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:service:create, admin:service:manage, reservation:create, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  reservationServiceStorePost(data: T.ReservationServiceStorePostInput, options?: RequestOptions<T.ReservationServiceStorePostInput>) {
    return this.client.request<T.ReservationServiceStorePostResponse, T.ReservationServiceStorePostInput>({ ...options, method: "POST", url: `/api/v1/services`, data: data });
  }
  /**
   * Numeric service ID; missing404; referenced historical slot causes409 through restrictive reservation FK. Successful delete returns envelope data:null. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `DELETE /api/v1/services/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:service:delete, admin:service:manage, reservation:delete, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  reservationServiceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReservationServiceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/services/${encodeURIComponent(id)}` });
  }
  /**
   * Numeric service ID; missing404; returns fields including duration, buffer, active flag and RFC3339 created_at. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /api/v1/services/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:service:read, admin:service:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  reservationServiceShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReservationServiceShowGetResponse>({ ...options, method: "GET", url: `/api/v1/services/${encodeURIComponent(id)}` });
  }
  /**
   * Optional create fields with same bounds. Omitted and null optional text leave existing values unchanged; no explicit clear-to-null. Existing slot durations are preserved. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `PATCH /api/v1/services/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:service:update, admin:service:manage, reservation:update, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  reservationServiceUpdatePatch(id: Identifier, data: T.ReservationServiceUpdatePatchInput, options?: RequestOptions<T.ReservationServiceUpdatePatchInput>) {
    return this.client.request<T.ReservationServiceUpdatePatchResponse, T.ReservationServiceUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/services/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Numeric provider/service plus strict YYYY-MM-DD from_date,to_date UTC, inclusive1..366days. Active assigned provider/service and valid stored configuration required. Duration5..480,buffer0..120. Fills capacity-many copies per start, preserves existing rows, returns HTTP200 envelope numeric count; max100000 created rows, all batches atomic. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `POST /api/v1/slots` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:slot:create, admin:slot:manage, reservation:create, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  timeSlotGeneratePost(data: T.TimeSlotGeneratePostInput, options?: RequestOptions<T.TimeSlotGeneratePostInput>) {
    return this.client.request<T.TimeSlotGeneratePostResponse, T.TimeSlotGeneratePostInput>({ ...options, method: "POST", url: `/api/v1/slots`, data: data });
  }
  /**
   * Numeric slot ID; missing404; claimed, inconsistent owner or any reservation history409; success envelope data:null. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `DELETE /api/v1/slots/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:slot:delete, admin:slot:manage, reservation:delete, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  timeSlotDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TimeSlotDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/slots/${encodeURIComponent(id)}` });
  }
  /**
   * Numeric slot ID; missing404; RFC3339 interval, provider/service numeric IDs, claim bit and optional customer UUID. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /api/v1/slots/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:slot:read, admin:slot:manage, reservation:read, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  timeSlotShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TimeSlotShowGetResponse>({ ...options, method: "GET", url: `/api/v1/slots/${encodeURIComponent(id)}` });
  }
  /**
   * Optional provider_id,service_id,starts_at,ends_at,is_reserved. Times RFC3339 with end>start. Cannot independently toggle claim; any claimed/historically referenced structural edit409; equivalent patch allowed. Unreferenced edit requires active assigned service/provider and same-start pool below capacity. Locks providers in sorted order then slot. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `PATCH /api/v1/slots/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated nonnil user and organization UUID required. Accepts admin:slot:update, admin:slot:manage, reservation:update, reservation:manage, reservation:* or *. Schedule and assignment operations use provider resource permissions. Forwarded identity and owning-project membership require independent gateway verification; handler does not restrict booking.user_id to current user..
   */
  timeSlotUpdatePatch(id: Identifier, data: T.TimeSlotUpdatePatchInput, options?: RequestOptions<T.TimeSlotUpdatePatchInput>) {
    return this.client.request<T.TimeSlotUpdatePatchResponse, T.TimeSlotUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/slots/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Optional numeric provider_id/service_id and strict UTC date YYYY-MM-DD combine AND. Unpaged array ordered starts_at ascending with no stable tie order. Excludes invalid intervals, claimed slots and provider-full intervals; does not validate current active assignment. Date uses inclusive midnight/exclusive next midnight. Snapshot is advisory. Explicitly requires reserved_by_user_id IS NULL, excluding legacy held rows even when is_reserved is false. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /api/v1/slots/available` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Public read handler; no customer-specific authorization..
   */
  timeSlotAvailableGet(params?: T.TimeSlotAvailableGetQuery, options?: RequestOptions) {
    return this.client.request<T.TimeSlotAvailableGetResponse>({ ...options, method: "GET", url: `/api/v1/slots/available`, params });
  }
  /**
   * No inputs; success envelope contains version; no dependency readiness guarantee. Success uses {status:"success",message,data}; AppError uses {error:string}, extractor failures may be text.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Public read handler; no customer-specific authorization..
   */
  routerHealthGetHealth(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
}
