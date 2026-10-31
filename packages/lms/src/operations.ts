import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";
import { AxiosHeaders, type RawAxiosHeaders } from "axios";

export class LmsOperations extends ServiceApi {
  /**
   * Read the LMS process version in a success envelope. This endpoint does not probe database readiness.
   * Calls `GET /` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no handler permission check; deployment gateway policy is separate.
   */
  routerRootStatusGet(options?: RequestOptions) {
    return this.client.request<T.RouterRootStatusGetResponse>({ ...options, method: "GET", url: `/` });
  }
  /**
   * Read the raw OpenAPI document. The mounted router remains authoritative because this document omits several supported operations.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no handler permission check; deployment gateway policy is separate.
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Submit exam definition records through the mounted LMS academy::routes handler.
   * Calls `POST /api/v1/academy/attempts/{id}/submit` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academySubmitExamPost(id: Identifier, data: T.AcademySubmitExamPostInput, options?: RequestOptions<T.AcademySubmitExamPostInput>) {
    return this.client.request<T.AcademySubmitExamPostResponse, T.AcademySubmitExamPostInput>({ ...options, method: "POST", url: `/api/v1/academy/attempts/${encodeURIComponent(id)}/submit`, data: data });
  }
  /**
   * Categories  records through the mounted LMS academy::routes handler.
   * Calls `GET /api/v1/academy/categories` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academyCategoriesGet(options?: RequestOptions) {
    return this.client.request<T.AcademyCategoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/academy/categories` });
  }
  /**
   * Courses  records through the mounted LMS academy::routes handler.
   * Calls `GET /api/v1/academy/courses` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academyCoursesGet(params?: T.AcademyCoursesGetQuery, options?: RequestOptions) {
    return this.client.request<T.AcademyCoursesGetResponse>({ ...options, method: "GET", url: `/api/v1/academy/courses`, params });
  }
  /**
   * Course  records through the mounted LMS academy::routes handler.
   * Calls `GET /api/v1/academy/courses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academyCourseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AcademyCourseGetResponse>({ ...options, method: "GET", url: `/api/v1/academy/courses/${encodeURIComponent(id)}` });
  }
  /**
   * Enroll  records through the mounted LMS academy::routes handler.
   * Calls `POST /api/v1/academy/courses/{id}/enroll` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academyEnrollPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AcademyEnrollPostResponse>({ ...options, method: "POST", url: `/api/v1/academy/courses/${encodeURIComponent(id)}/enroll` });
  }
  /**
   * My enrollments records through the mounted LMS academy::routes handler.
   * Calls `GET /api/v1/academy/enrollments` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academyMyEnrollmentsGet(options?: RequestOptions) {
    return this.client.request<T.AcademyMyEnrollmentsGetResponse>({ ...options, method: "GET", url: `/api/v1/academy/enrollments` });
  }
  /**
   * Start exam definition records through the mounted LMS academy::routes handler.
   * Calls `POST /api/v1/academy/enrollments/{id}/exams/{exam_id}/attempts` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param examId Backend path identifier `exam_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academyStartExamPost(id: Identifier, examId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AcademyStartExamPostResponse>({ ...options, method: "POST", url: `/api/v1/academy/enrollments/${encodeURIComponent(id)}/exams/${encodeURIComponent(examId)}/attempts` });
  }
  /**
   * Complete session records through the mounted LMS academy::routes handler.
   * Calls `POST /api/v1/academy/enrollments/{id}/sessions/{session_id}/complete` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param sessionId Backend path identifier `session_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academyCompleteSessionPost(id: Identifier, sessionId: Identifier, data: T.AcademyCompleteSessionPostInput, options?: RequestOptions<T.AcademyCompleteSessionPostInput>) {
    return this.client.request<T.AcademyCompleteSessionPostResponse, T.AcademyCompleteSessionPostInput>({ ...options, method: "POST", url: `/api/v1/academy/enrollments/${encodeURIComponent(id)}/sessions/${encodeURIComponent(sessionId)}/complete`, data: data });
  }
  /**
   * Get self records through the mounted LMS session::routes handler.
   * Calls `GET /api/v1/auth/self` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sessionGetSelfGet(options?: RequestOptions) {
    return this.client.request<T.SessionGetSelfGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/self` });
  }
  /**
   * List certificate records through the mounted LMS certificate::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/certificates` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:certificate:read; trusted gateway identity plus any handler-local checks apply.
   */
  certificateIndexCertificateGet(params?: T.CertificateIndexCertificateGetQuery, options?: RequestOptions) {
    return this.client.request<T.CertificateIndexCertificateGetResponse>({ ...options, method: "GET", url: `/api/v1/certificates`, params });
  }
  /**
   * Create certificate records through the mounted LMS certificate::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/certificates` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:certificate:create; trusted gateway identity plus any handler-local checks apply.
   */
  certificateStoreCertificatePost(data: T.CertificateStoreCertificatePostInput, options?: RequestOptions<T.CertificateStoreCertificatePostInput>) {
    return this.client.request<T.CertificateStoreCertificatePostResponse, T.CertificateStoreCertificatePostInput>({ ...options, method: "POST", url: `/api/v1/certificates`, data: data });
  }
  /**
   * Delete an authorized certificate. Returns a success envelope with an empty data object; errors preserve the server response and no deletion is inferred on failure.
   * Calls `DELETE /api/v1/certificates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:certificate:delete.
   */
  certificateDestroyCertificateDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CertificateDestroyCertificateDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/certificates/${encodeURIComponent(id)}` });
  }
  /**
   * Read certificate records through the mounted LMS certificate::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/certificates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:certificate:read; trusted gateway identity plus any handler-local checks apply.
   */
  certificateShowCertificateGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CertificateShowCertificateGetResponse>({ ...options, method: "GET", url: `/api/v1/certificates/${encodeURIComponent(id)}` });
  }
  /**
   * Patch certificate records through the mounted LMS certificate::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/certificates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:certificate:update; trusted gateway identity plus any handler-local checks apply.
   */
  certificateUpdateCertificatePatch(id: Identifier, data: T.CertificateUpdateCertificatePatchInput, options?: RequestOptions<T.CertificateUpdateCertificatePatchInput>) {
    return this.client.request<T.CertificateUpdateCertificatePatchResponse, T.CertificateUpdateCertificatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/certificates/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List certificate template records through the mounted LMS certificate::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/certificates/templates` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:certificate:read; trusted gateway identity plus any handler-local checks apply.
   */
  certificateIndexTemplateGet(params?: T.CertificateIndexTemplateGetQuery, options?: RequestOptions) {
    return this.client.request<T.CertificateIndexTemplateGetResponse>({ ...options, method: "GET", url: `/api/v1/certificates/templates`, params });
  }
  /**
   * Create certificate template records through the mounted LMS certificate::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/certificates/templates` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:certificate:create; trusted gateway identity plus any handler-local checks apply.
   */
  certificateStoreTemplatePost(data: T.CertificateStoreTemplatePostInput, options?: RequestOptions<T.CertificateStoreTemplatePostInput>) {
    return this.client.request<T.CertificateStoreTemplatePostResponse, T.CertificateStoreTemplatePostInput>({ ...options, method: "POST", url: `/api/v1/certificates/templates`, data: data });
  }
  /**
   * Delete an authorized certificate template. Returns a success envelope with an empty data object; errors preserve the server response and no deletion is inferred on failure.
   * Calls `DELETE /api/v1/certificates/templates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:certificate:template:delete.
   */
  certificateDestroyTemplateDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CertificateDestroyTemplateDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/certificates/templates/${encodeURIComponent(id)}` });
  }
  /**
   * Read certificate template records through the mounted LMS certificate::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/certificates/templates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:certificate:read; trusted gateway identity plus any handler-local checks apply.
   */
  certificateShowTemplateGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CertificateShowTemplateGetResponse>({ ...options, method: "GET", url: `/api/v1/certificates/templates/${encodeURIComponent(id)}` });
  }
  /**
   * Patch certificate template records through the mounted LMS certificate::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/certificates/templates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:certificate:update; trusted gateway identity plus any handler-local checks apply.
   */
  certificateUpdateTemplatePatch(id: Identifier, data: T.CertificateUpdateTemplatePatchInput, options?: RequestOptions<T.CertificateUpdateTemplatePatchInput>) {
    return this.client.request<T.CertificateUpdateTemplatePatchResponse, T.CertificateUpdateTemplatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/certificates/templates/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Contacts  records through the mounted LMS notifications::contacts handler.
   * Calls `GET /api/v1/chat/contacts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:chat:contacts:read; trusted gateway identity plus any handler-local checks apply.
   */
  contactsContactsGet(params?: T.ContactsContactsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ContactsContactsGetResponse>({ ...options, method: "GET", url: `/api/v1/chat/contacts`, params });
  }
  /**
   * List authorized classrooms by name, course name, legacy code, or exact UUID-derived short ID. All matching collisions are preserved within the authorized scope. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/classrooms` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply.
   */
  classroomIndexClassroomGet(params?: T.ClassroomIndexClassroomGetQuery, options?: RequestOptions) {
    return this.client.request<T.ClassroomIndexClassroomGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms`, params });
  }
  /**
   * Create classroom records through the mounted LMS classroom::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/classrooms` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:create; trusted gateway identity plus any handler-local checks apply.
   */
  classroomStoreClassroomPost(data: T.ClassroomStoreClassroomPostInput, options?: RequestOptions<T.ClassroomStoreClassroomPostInput>) {
    return this.client.request<T.ClassroomStoreClassroomPostResponse, T.ClassroomStoreClassroomPostInput>({ ...options, method: "POST", url: `/api/v1/classrooms`, data: data });
  }
  /**
   * Delete classroom records through the mounted LMS classroom::routes handler. Successful deletion returns an empty data object.
   * Calls `DELETE /api/v1/classrooms/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:delete; trusted gateway identity plus any handler-local checks apply.
   */
  classroomDestroyClassroomDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ClassroomDestroyClassroomDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/classrooms/${encodeURIComponent(id)}` });
  }
  /**
   * Read classroom records through the mounted LMS classroom::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/classrooms/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply.
   */
  classroomShowClassroomGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ClassroomShowClassroomGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/${encodeURIComponent(id)}` });
  }
  /**
   * Update a classroom with lms:classroom:update. Course replacement with linked sessions or rescheduling started sessions returns 409 classroom_session_changes_confirmation_required until confirm_session_changes is explicitly true. Retiring rooms separately requires confirm_recording_reset or returns 409 recording_reset_confirmation_required. Show the consequences before retrying: templates are remapped in order, surplus sessions are archived, new destination sessions are created, and affected recordings/automatic attendance are reset. Standalone sessions and manual attendance are retained. Errors roll back all changes; flags default to false. Missing classrooms return 404; null starts_at is invalid.
   * Calls `PATCH /api/v1/classrooms/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:update; trusted gateway identity plus any handler-local checks apply.
   */
  classroomUpdateClassroomPatch(id: Identifier, data: T.ClassroomUpdateClassroomPatchInput, options?: RequestOptions<T.ClassroomUpdateClassroomPatchInput>) {
    return this.client.request<T.ClassroomUpdateClassroomPatchResponse, T.ClassroomUpdateClassroomPatchInput>({ ...options, method: "PATCH", url: `/api/v1/classrooms/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read completion records through the mounted LMS classroom::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/classrooms/{id}/completion` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply.
   */
  classroomShowCompletionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ClassroomShowCompletionGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/${encodeURIComponent(id)}/completion` });
  }
  /**
   * Finalize classroom records through the mounted LMS classroom::routes handler.
   * Calls `POST /api/v1/classrooms/{id}/finalize` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:finalize; trusted gateway identity plus any handler-local checks apply.
   */
  classroomFinalizeClassroomPost(id: Identifier, data: T.ClassroomFinalizeClassroomPostInput, options?: RequestOptions<T.ClassroomFinalizeClassroomPostInput>) {
    return this.client.request<T.ClassroomFinalizeClassroomPostResponse, T.ClassroomFinalizeClassroomPostInput>({ ...options, method: "POST", url: `/api/v1/classrooms/${encodeURIComponent(id)}/finalize`, data: data });
  }
  /**
   * List classroom enrollment records through the mounted LMS classroom::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/classrooms/{id}/users` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply.
   */
  classroomIndexClassroomUsersGet(id: Identifier, params?: T.ClassroomIndexClassroomUsersGetQuery, options?: RequestOptions) {
    return this.client.request<T.ClassroomIndexClassroomUsersGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/${encodeURIComponent(id)}/users`, params });
  }
  /**
   * Enroll classroom user records through the mounted LMS classroom::routes handler.
   * Calls `POST /api/v1/classrooms/{id}/users` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:create; trusted gateway identity plus any handler-local checks apply.
   */
  classroomEnrollClassroomUserPost(id: Identifier, data: T.ClassroomEnrollClassroomUserPostInput, options?: RequestOptions<T.ClassroomEnrollClassroomUserPostInput>) {
    return this.client.request<T.ClassroomEnrollClassroomUserPostResponse, T.ClassroomEnrollClassroomUserPostInput>({ ...options, method: "POST", url: `/api/v1/classrooms/${encodeURIComponent(id)}/users`, data: data });
  }
  /**
   * Remove a classroom enrollment. The successful JSON envelope contains data:null; no deleted flag is returned.
   * Calls `DELETE /api/v1/classrooms/{id}/users/{user_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:update; trusted gateway identity plus any handler-local checks apply.
   */
  classroomRemoveClassroomUserDelete(id: Identifier, userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ClassroomRemoveClassroomUserDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/classrooms/${encodeURIComponent(id)}/users/${encodeURIComponent(userId)}` });
  }
  /**
   * Patch classroom user records through the mounted LMS classroom::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/classrooms/{id}/users/{user_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:update, lms:classroom:score:update; trusted gateway identity plus any handler-local checks apply.
   */
  classroomUpdateClassroomUserPatch(id: Identifier, userId: Identifier, data: T.ClassroomUpdateClassroomUserPatchInput, options?: RequestOptions<T.ClassroomUpdateClassroomUserPatchInput>) {
    return this.client.request<T.ClassroomUpdateClassroomUserPatchResponse, T.ClassroomUpdateClassroomUserPatchInput>({ ...options, method: "PATCH", url: `/api/v1/classrooms/${encodeURIComponent(id)}/users/${encodeURIComponent(userId)}`, data: data });
  }
  /**
   * Batch classrooms records through the mounted LMS integration::routes handler.
   * Calls `POST /api/v1/classrooms/batch` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationBatchClassroomsPost(data: T.IntegrationBatchClassroomsPostInput, options?: RequestOptions<T.IntegrationBatchClassroomsPostInput>) {
    return this.client.request<T.IntegrationBatchClassroomsPostResponse, T.IntegrationBatchClassroomsPostInput>({ ...options, method: "POST", url: `/api/v1/classrooms/batch`, data: data });
  }
  /**
   * List session types records through the mounted LMS classroom::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/classrooms/session-types` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply.
   */
  classroomIndexSessionTypesGet(options?: RequestOptions) {
    return this.client.request<T.ClassroomIndexSessionTypesGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/session-types` });
  }
  /**
   * List session records through the mounted LMS classroom::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/classrooms/sessions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply.
   */
  classroomIndexSessionGet(params?: T.ClassroomIndexSessionGetQuery, options?: RequestOptions) {
    return this.client.request<T.ClassroomIndexSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/sessions`, params });
  }
  /**
   * Create session records through the mounted LMS classroom::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/classrooms/sessions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:create; trusted gateway identity plus any handler-local checks apply.
   */
  classroomStoreSessionPost(data: T.ClassroomStoreSessionPostInput, options?: RequestOptions<T.ClassroomStoreSessionPostInput>) {
    return this.client.request<T.ClassroomStoreSessionPostResponse, T.ClassroomStoreSessionPostInput>({ ...options, method: "POST", url: `/api/v1/classrooms/sessions`, data: data });
  }
  /**
   * Delete an authorized classroom session. Returns a success envelope with an empty data object; errors preserve the server response and no deletion is inferred on failure.
   * Calls `DELETE /api/v1/classrooms/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:session:delete.
   */
  classroomDestroySessionDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ClassroomDestroySessionDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/classrooms/sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Read session records through the mounted LMS classroom::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/classrooms/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply.
   */
  classroomShowSessionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ClassroomShowSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Patch session records through the mounted LMS classroom::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/classrooms/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:update; trusted gateway identity plus any handler-local checks apply.
   */
  classroomUpdateSessionPatch(id: Identifier, data: T.ClassroomUpdateSessionPatchInput, options?: RequestOptions<T.ClassroomUpdateSessionPatchInput>) {
    return this.client.request<T.ClassroomUpdateSessionPatchResponse, T.ClassroomUpdateSessionPatchInput>({ ...options, method: "PATCH", url: `/api/v1/classrooms/sessions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List attendance records through the mounted LMS classroom::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/classrooms/sessions/{id}/attendance` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply.
   */
  classroomIndexAttendanceGet(id: Identifier, params?: T.ClassroomIndexAttendanceGetQuery, options?: RequestOptions) {
    return this.client.request<T.ClassroomIndexAttendanceGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/sessions/${encodeURIComponent(id)}/attendance`, params });
  }
  /**
   * Record attendance records through the mounted LMS classroom::routes handler.
   * Calls `PUT /api/v1/classrooms/sessions/{id}/attendance` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:attendance:update; trusted gateway identity plus any handler-local checks apply.
   */
  classroomRecordAttendancePut(id: Identifier, data: T.ClassroomRecordAttendancePutInput, options?: RequestOptions<T.ClassroomRecordAttendancePutInput>) {
    return this.client.request<T.ClassroomRecordAttendancePutResponse, T.ClassroomRecordAttendancePutInput>({ ...options, method: "PUT", url: `/api/v1/classrooms/sessions/${encodeURIComponent(id)}/attendance`, data: data });
  }
  /**
   * Return every authorized session and complete calendar details for 1–7 local days. Requires an IANA timezone and date or half-open midnight range. Type counts ignore selected type filters; summary respects all filters. Rejects invalid ranges (422), malformed queries (400), missing read permission (403), and unavailable profile enrichment (502). No pagination or enrichment requests are needed.
   * Calls `GET /api/v1/classrooms/sessions/calendar` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:read.
   */
  classroomCalendarGet(params: T.ClassroomCalendarGetQuery, options?: RequestOptions) {
    return this.client.request<T.ClassroomCalendarGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/sessions/calendar`, params });
  }
  /**
   * List today sessions records through the mounted LMS classroom::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/classrooms/sessions/today` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply.
   */
  classroomIndexTodaySessionsGet(params?: T.ClassroomIndexTodaySessionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ClassroomIndexTodaySessionsGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/sessions/today`, params });
  }
  /**
   * Current classroom enrollment records through the mounted LMS integration::routes handler.
   * Calls `GET /api/v1/classrooms/users/current` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationCurrentClassroomUsersGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationCurrentClassroomUsersGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/users/current` });
  }
  /**
   * Dropout eligibility records through the mounted LMS integration::routes handler.
   * Calls `POST /api/v1/classrooms/users/dropout-eligibility` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationDropoutEligibilityPost(data: T.IntegrationDropoutEligibilityPostInput, options?: RequestOptions<T.IntegrationDropoutEligibilityPostInput>) {
    return this.client.request<T.IntegrationDropoutEligibilityPostResponse, T.IntegrationDropoutEligibilityPostInput>({ ...options, method: "POST", url: `/api/v1/classrooms/users/dropout-eligibility`, data: data });
  }
  /**
   * List absence records through the mounted LMS classroom::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/classrooms/users/sessions/absences` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply.
   */
  classroomIndexAbsencesGet(params?: T.ClassroomIndexAbsencesGetQuery, options?: RequestOptions) {
    return this.client.request<T.ClassroomIndexAbsencesGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/users/sessions/absences`, params });
  }
  /**
   * Read persisted learner branding. The handler checks a nonnil actor and lms:config:read.
   * Calls `GET /api/v1/config/branding` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply.
   */
  brandingShowGet(options?: RequestOptions) {
    return this.client.request<T.BrandingShowGetResponse>({ ...options, method: "GET", url: `/api/v1/config/branding` });
  }
  /**
   * Replace learner branding, normalize localized titles, and derive icon_url from a previously uploaded icon_asset_key. Requires a nonnil actor and lms:config:update; omitted fields reset to defaults.
   * Calls `PUT /api/v1/config/branding` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply.
   */
  brandingUpdatePut(data: T.BrandingUpdatePutInput, options?: RequestOptions<T.BrandingUpdatePutInput>) {
    return this.client.request<T.BrandingUpdatePutResponse, T.BrandingUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/config/branding`, data: data });
  }
  /**
   * Upload one file multipart field containing PNG, JPEG, or WebP bytes up to 8 MiB. Returns asset_key and public URL; saving branding is a separate request.
   * Calls `POST /api/v1/config/branding/assets` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply.
   */
  brandingUploadPost(data: T.BrandingUploadPostInput, options?: RequestOptions<T.BrandingUploadPostInput>) {
    return this.client.request<T.BrandingUploadPostResponse, T.BrandingUploadPostInput>({ ...options, method: "POST", url: `/api/v1/config/branding/assets`, data: data });
  }
  /**
   * List classroom type records through the mounted LMS config::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/config/classroom-types` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply.
   */
  configIndexClassroomTypeGet(params?: T.ConfigIndexClassroomTypeGetQuery, options?: RequestOptions) {
    return this.client.request<T.ConfigIndexClassroomTypeGetResponse>({ ...options, method: "GET", url: `/api/v1/config/classroom-types`, params });
  }
  /**
   * Create classroom type records through the mounted LMS config::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/config/classroom-types` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:create; trusted gateway identity plus any handler-local checks apply.
   */
  configStoreClassroomTypePost(data: T.ConfigStoreClassroomTypePostInput, options?: RequestOptions<T.ConfigStoreClassroomTypePostInput>) {
    return this.client.request<T.ConfigStoreClassroomTypePostResponse, T.ConfigStoreClassroomTypePostInput>({ ...options, method: "POST", url: `/api/v1/config/classroom-types`, data: data });
  }
  /**
   * Read classroom type records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/config/classroom-types/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply.
   */
  configShowClassroomTypeGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ConfigShowClassroomTypeGetResponse>({ ...options, method: "GET", url: `/api/v1/config/classroom-types/${encodeURIComponent(id)}` });
  }
  /**
   * Patch classroom type records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/config/classroom-types/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply.
   */
  configUpdateClassroomTypePatch(id: Identifier, data: T.ConfigUpdateClassroomTypePatchInput, options?: RequestOptions<T.ConfigUpdateClassroomTypePatchInput>) {
    return this.client.request<T.ConfigUpdateClassroomTypePatchResponse, T.ConfigUpdateClassroomTypePatchInput>({ ...options, method: "PATCH", url: `/api/v1/config/classroom-types/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List education day records through the mounted LMS config::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/config/education-days` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply.
   */
  configIndexEducationDayGet(params?: T.ConfigIndexEducationDayGetQuery, options?: RequestOptions) {
    return this.client.request<T.ConfigIndexEducationDayGetResponse>({ ...options, method: "GET", url: `/api/v1/config/education-days`, params });
  }
  /**
   * Create education day records through the mounted LMS config::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/config/education-days` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:create; trusted gateway identity plus any handler-local checks apply.
   */
  configStoreEducationDayPost(data: T.ConfigStoreEducationDayPostInput, options?: RequestOptions<T.ConfigStoreEducationDayPostInput>) {
    return this.client.request<T.ConfigStoreEducationDayPostResponse, T.ConfigStoreEducationDayPostInput>({ ...options, method: "POST", url: `/api/v1/config/education-days`, data: data });
  }
  /**
   * Read education day records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/config/education-days/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply.
   */
  configShowEducationDayGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ConfigShowEducationDayGetResponse>({ ...options, method: "GET", url: `/api/v1/config/education-days/${encodeURIComponent(id)}` });
  }
  /**
   * Patch education day records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/config/education-days/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply.
   */
  configUpdateEducationDayPatch(id: Identifier, data: T.ConfigUpdateEducationDayPatchInput, options?: RequestOptions<T.ConfigUpdateEducationDayPatchInput>) {
    return this.client.request<T.ConfigUpdateEducationDayPatchResponse, T.ConfigUpdateEducationDayPatchInput>({ ...options, method: "PATCH", url: `/api/v1/config/education-days/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List school grade records through the mounted LMS config::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/config/grades` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply.
   */
  configIndexGradeGet(params?: T.ConfigIndexGradeGetQuery, options?: RequestOptions) {
    return this.client.request<T.ConfigIndexGradeGetResponse>({ ...options, method: "GET", url: `/api/v1/config/grades`, params });
  }
  /**
   * Create school grade records through the mounted LMS config::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/config/grades` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:create; trusted gateway identity plus any handler-local checks apply.
   */
  configStoreGradePost(data: T.ConfigStoreGradePostInput, options?: RequestOptions<T.ConfigStoreGradePostInput>) {
    return this.client.request<T.ConfigStoreGradePostResponse, T.ConfigStoreGradePostInput>({ ...options, method: "POST", url: `/api/v1/config/grades`, data: data });
  }
  /**
   * Read school grade records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/config/grades/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply.
   */
  configShowGradeGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ConfigShowGradeGetResponse>({ ...options, method: "GET", url: `/api/v1/config/grades/${encodeURIComponent(id)}` });
  }
  /**
   * Patch school grade records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/config/grades/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply.
   */
  configUpdateGradePatch(id: Identifier, data: T.ConfigUpdateGradePatchInput, options?: RequestOptions<T.ConfigUpdateGradePatchInput>) {
    return this.client.request<T.ConfigUpdateGradePatchResponse, T.ConfigUpdateGradePatchInput>({ ...options, method: "PATCH", url: `/api/v1/config/grades/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List holiday records through the mounted LMS config::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/config/holidays` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply.
   */
  configIndexHolidayGet(params?: T.ConfigIndexHolidayGetQuery, options?: RequestOptions) {
    return this.client.request<T.ConfigIndexHolidayGetResponse>({ ...options, method: "GET", url: `/api/v1/config/holidays`, params });
  }
  /**
   * Create holiday records through the mounted LMS config::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/config/holidays` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:create; trusted gateway identity plus any handler-local checks apply.
   */
  configStoreHolidayPost(data: T.ConfigStoreHolidayPostInput, options?: RequestOptions<T.ConfigStoreHolidayPostInput>) {
    return this.client.request<T.ConfigStoreHolidayPostResponse, T.ConfigStoreHolidayPostInput>({ ...options, method: "POST", url: `/api/v1/config/holidays`, data: data });
  }
  /**
   * Read holiday records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/config/holidays/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply.
   */
  configShowHolidayGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ConfigShowHolidayGetResponse>({ ...options, method: "GET", url: `/api/v1/config/holidays/${encodeURIComponent(id)}` });
  }
  /**
   * Patch holiday records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/config/holidays/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply.
   */
  configUpdateHolidayPatch(id: Identifier, data: T.ConfigUpdateHolidayPatchInput, options?: RequestOptions<T.ConfigUpdateHolidayPatchInput>) {
    return this.client.request<T.ConfigUpdateHolidayPatchResponse, T.ConfigUpdateHolidayPatchInput>({ ...options, method: "PATCH", url: `/api/v1/config/holidays/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List weekend weekday records through the mounted LMS config::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/config/weekends` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply.
   */
  configIndexWeekendGet(params?: T.ConfigIndexWeekendGetQuery, options?: RequestOptions) {
    return this.client.request<T.ConfigIndexWeekendGetResponse>({ ...options, method: "GET", url: `/api/v1/config/weekends`, params });
  }
  /**
   * Create weekend weekday records through the mounted LMS config::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/config/weekends` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:create; trusted gateway identity plus any handler-local checks apply.
   */
  configStoreWeekendPost(data: T.ConfigStoreWeekendPostInput, options?: RequestOptions<T.ConfigStoreWeekendPostInput>) {
    return this.client.request<T.ConfigStoreWeekendPostResponse, T.ConfigStoreWeekendPostInput>({ ...options, method: "POST", url: `/api/v1/config/weekends`, data: data });
  }
  /**
   * Read weekend weekday records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/config/weekends/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply.
   */
  configShowWeekendGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ConfigShowWeekendGetResponse>({ ...options, method: "GET", url: `/api/v1/config/weekends/${encodeURIComponent(id)}` });
  }
  /**
   * Patch weekend weekday records through the mounted LMS config::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/config/weekends/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply.
   */
  configUpdateWeekendPatch(id: Identifier, data: T.ConfigUpdateWeekendPatchInput, options?: RequestOptions<T.ConfigUpdateWeekendPatchInput>) {
    return this.client.request<T.ConfigUpdateWeekendPatchResponse, T.ConfigUpdateWeekendPatchInput>({ ...options, method: "PATCH", url: `/api/v1/config/weekends/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List course records through the mounted LMS course::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/courses` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:read; trusted gateway identity plus any handler-local checks apply.
   */
  courseIndexCourseGet(params?: T.CourseIndexCourseGetQuery, options?: RequestOptions) {
    return this.client.request<T.CourseIndexCourseGetResponse>({ ...options, method: "GET", url: `/api/v1/courses`, params });
  }
  /**
   * Create course records through the mounted LMS course::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/courses` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:create; trusted gateway identity plus any handler-local checks apply.
   */
  courseStoreCoursePost(data: T.CourseStoreCoursePostInput, options?: RequestOptions<T.CourseStoreCoursePostInput>) {
    return this.client.request<T.CourseStoreCoursePostResponse, T.CourseStoreCoursePostInput>({ ...options, method: "POST", url: `/api/v1/courses`, data: data });
  }
  /**
   * List session records through the mounted LMS course::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/courses/{course_id}/sessions` through the shared IDP-aware Faiber client.
   * @param courseId Backend path identifier `course_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:read; trusted gateway identity plus any handler-local checks apply.
   */
  courseIndexSessionGet(courseId: Identifier, params?: T.CourseIndexSessionGetQuery, options?: RequestOptions) {
    return this.client.request<T.CourseIndexSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/courses/${encodeURIComponent(courseId)}/sessions`, params });
  }
  /**
   * Create session records through the mounted LMS course::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/courses/{course_id}/sessions` through the shared IDP-aware Faiber client.
   * @param courseId Backend path identifier `course_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:create; trusted gateway identity plus any handler-local checks apply.
   */
  courseStoreSessionPost(courseId: Identifier, data: T.CourseStoreSessionPostInput, options?: RequestOptions<T.CourseStoreSessionPostInput>) {
    return this.client.request<T.CourseStoreSessionPostResponse, T.CourseStoreSessionPostInput>({ ...options, method: "POST", url: `/api/v1/courses/${encodeURIComponent(courseId)}/sessions`, data: data });
  }
  /**
   * Delete session records through the mounted LMS course::routes handler. Successful deletion returns an empty data object.
   * Calls `DELETE /api/v1/courses/{course_id}/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param courseId Backend path identifier `course_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:delete; trusted gateway identity plus any handler-local checks apply.
   */
  courseDestroySessionDelete(courseId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CourseDestroySessionDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/courses/${encodeURIComponent(courseId)}/sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Read session records through the mounted LMS course::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/courses/{course_id}/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param courseId Backend path identifier `course_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:read; trusted gateway identity plus any handler-local checks apply.
   */
  courseShowSessionGet(courseId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CourseShowSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/courses/${encodeURIComponent(courseId)}/sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Patch session records through the mounted LMS course::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/courses/{course_id}/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param courseId Backend path identifier `course_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:update; trusted gateway identity plus any handler-local checks apply.
   */
  courseUpdateSessionPatch(courseId: Identifier, id: Identifier, data: T.CourseUpdateSessionPatchInput, options?: RequestOptions<T.CourseUpdateSessionPatchInput>) {
    return this.client.request<T.CourseUpdateSessionPatchResponse, T.CourseUpdateSessionPatchInput>({ ...options, method: "PATCH", url: `/api/v1/courses/${encodeURIComponent(courseId)}/sessions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Delete course records through the mounted LMS course::routes handler. Successful deletion returns an empty data object.
   * Calls `DELETE /api/v1/courses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:delete; trusted gateway identity plus any handler-local checks apply.
   */
  courseDestroyCourseDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CourseDestroyCourseDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/courses/${encodeURIComponent(id)}` });
  }
  /**
   * Read course records through the mounted LMS course::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/courses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:read; trusted gateway identity plus any handler-local checks apply.
   */
  courseShowCourseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CourseShowCourseGetResponse>({ ...options, method: "GET", url: `/api/v1/courses/${encodeURIComponent(id)}` });
  }
  /**
   * Patch course records through the mounted LMS course::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/courses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:update; trusted gateway identity plus any handler-local checks apply.
   */
  courseUpdateCoursePatch(id: Identifier, data: T.CourseUpdateCoursePatchInput, options?: RequestOptions<T.CourseUpdateCoursePatchInput>) {
    return this.client.request<T.CourseUpdateCoursePatchResponse, T.CourseUpdateCoursePatchInput>({ ...options, method: "PATCH", url: `/api/v1/courses/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Batch courses records through the mounted LMS integration::routes handler.
   * Calls `POST /api/v1/courses/batch` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationBatchCoursesPost(data: T.IntegrationBatchCoursesPostInput, options?: RequestOptions<T.IntegrationBatchCoursesPostInput>) {
    return this.client.request<T.IntegrationBatchCoursesPostResponse, T.IntegrationBatchCoursesPostInput>({ ...options, method: "POST", url: `/api/v1/courses/batch`, data: data });
  }
  /**
   * List course category records through the mounted LMS course::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/courses/categories` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:read; trusted gateway identity plus any handler-local checks apply.
   */
  courseIndexCategoryGet(params?: T.CourseIndexCategoryGetQuery, options?: RequestOptions) {
    return this.client.request<T.CourseIndexCategoryGetResponse>({ ...options, method: "GET", url: `/api/v1/courses/categories`, params });
  }
  /**
   * Create course category records through the mounted LMS course::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/courses/categories` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:create; trusted gateway identity plus any handler-local checks apply.
   */
  courseStoreCategoryPost(data: T.CourseStoreCategoryPostInput, options?: RequestOptions<T.CourseStoreCategoryPostInput>) {
    return this.client.request<T.CourseStoreCategoryPostResponse, T.CourseStoreCategoryPostInput>({ ...options, method: "POST", url: `/api/v1/courses/categories`, data: data });
  }
  /**
   * Delete course category records through the mounted LMS course::routes handler. Successful deletion returns an empty data object.
   * Calls `DELETE /api/v1/courses/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:delete; trusted gateway identity plus any handler-local checks apply.
   */
  courseDestroyCategoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CourseDestroyCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/courses/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Read course category records through the mounted LMS course::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/courses/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:read; trusted gateway identity plus any handler-local checks apply.
   */
  courseShowCategoryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CourseShowCategoryGetResponse>({ ...options, method: "GET", url: `/api/v1/courses/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Patch course category records through the mounted LMS course::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/courses/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:update; trusted gateway identity plus any handler-local checks apply.
   */
  courseUpdateCategoryPatch(id: Identifier, data: T.CourseUpdateCategoryPatchInput, options?: RequestOptions<T.CourseUpdateCategoryPatchInput>) {
    return this.client.request<T.CourseUpdateCategoryPatchResponse, T.CourseUpdateCategoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/courses/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Reorder categories records through the mounted LMS course::routes handler.
   * Calls `PATCH /api/v1/courses/categories/reorder` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:update; trusted gateway identity plus any handler-local checks apply.
   */
  courseReorderCategoriesPatch(data: T.CourseReorderCategoriesPatchInput, options?: RequestOptions<T.CourseReorderCategoriesPatchInput>) {
    return this.client.request<T.CourseReorderCategoriesPatchResponse, T.CourseReorderCategoriesPatchInput>({ ...options, method: "PATCH", url: `/api/v1/courses/categories/reorder`, data: data });
  }
  /**
   * Reorder courses records through the mounted LMS course::routes handler.
   * Calls `PATCH /api/v1/courses/reorder` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:update; trusted gateway identity plus any handler-local checks apply.
   */
  courseReorderCoursesPatch(data: T.CourseReorderCoursesPatchInput, options?: RequestOptions<T.CourseReorderCoursesPatchInput>) {
    return this.client.request<T.CourseReorderCoursesPatchResponse, T.CourseReorderCoursesPatchInput>({ ...options, method: "PATCH", url: `/api/v1/courses/reorder`, data: data });
  }
  /**
   * Batch course successors records through the mounted LMS integration::routes handler.
   * Calls `POST /api/v1/courses/successors/batch` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationBatchCourseSuccessorsPost(data: T.IntegrationBatchCourseSuccessorsPostInput, options?: RequestOptions<T.IntegrationBatchCourseSuccessorsPostInput>) {
    return this.client.request<T.IntegrationBatchCourseSuccessorsPostResponse, T.IntegrationBatchCourseSuccessorsPostInput>({ ...options, method: "POST", url: `/api/v1/courses/successors/batch`, data: data });
  }
  /**
   * List  records through the mounted LMS dashboard::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/dashboard` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:dashboard:read; trusted gateway identity plus any handler-local checks apply.
   */
  dashboardIndexGet(params?: T.DashboardIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.DashboardIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/dashboard`, params });
  }
  /**
   * Integration  records through the mounted LMS docs::routes handler.
   * Calls `GET /api/v1/docs/integration` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:docs:read; trusted gateway identity plus any handler-local checks apply.
   */
  docsIntegrationGet(options?: RequestOptions) {
    return this.client.request<T.DocsIntegrationGetResponse>({ ...options, method: "GET", url: `/api/v1/docs/integration` });
  }
  /**
   * Search published DRM compositions by page, size and search, retaining selected_id when applicable. Returns composition IDs, names and category paths.
   * Calls `GET /api/v1/drm/compositions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:update, lms:course:create; trusted gateway identity plus any handler-local checks apply.
   */
  drmRoutesIndexCompositionsGet(params?: T.DrmRoutesIndexCompositionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.DrmRoutesIndexCompositionsGetResponse>({ ...options, method: "GET", url: `/api/v1/drm/compositions`, params });
  }
  /**
   * Get context records through the mounted LMS evaluation::routes handler.
   * Calls `GET /api/v1/evaluations/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  evaluationGetContextGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.EvaluationGetContextGetResponse>({ ...options, method: "GET", url: `/api/v1/evaluations/sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Submit  records through the mounted LMS evaluation::routes handler.
   * Calls `POST /api/v1/evaluations/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  evaluationSubmitPost(id: Identifier, data: T.EvaluationSubmitPostInput, options?: RequestOptions<T.EvaluationSubmitPostInput>) {
    return this.client.request<T.EvaluationSubmitPostResponse, T.EvaluationSubmitPostInput>({ ...options, method: "POST", url: `/api/v1/evaluations/sessions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Get settings records through the mounted LMS evaluation::routes handler.
   * Calls `GET /api/v1/evaluations/settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:read; trusted gateway identity plus any handler-local checks apply.
   */
  evaluationGetSettingsGet(options?: RequestOptions) {
    return this.client.request<T.EvaluationGetSettingsGetResponse>({ ...options, method: "GET", url: `/api/v1/evaluations/settings` });
  }
  /**
   * Patch settings records through the mounted LMS evaluation::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PUT /api/v1/evaluations/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:config:update; trusted gateway identity plus any handler-local checks apply.
   */
  evaluationUpdateSettingsPut(data: T.EvaluationUpdateSettingsPutInput, options?: RequestOptions<T.EvaluationUpdateSettingsPutInput>) {
    return this.client.request<T.EvaluationUpdateSettingsPutResponse, T.EvaluationUpdateSettingsPutInput>({ ...options, method: "PUT", url: `/api/v1/evaluations/settings`, data: data });
  }
  /**
   * List exam definition records through the mounted LMS exam::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/exams` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply.
   */
  examIndexExamGet(params?: T.ExamIndexExamGetQuery, options?: RequestOptions) {
    return this.client.request<T.ExamIndexExamGetResponse>({ ...options, method: "GET", url: `/api/v1/exams`, params });
  }
  /**
   * Create exam definition records through the mounted LMS exam::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/exams` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:create; trusted gateway identity plus any handler-local checks apply.
   */
  examStoreExamPost(data: T.ExamStoreExamPostInput, options?: RequestOptions<T.ExamStoreExamPostInput>) {
    return this.client.request<T.ExamStoreExamPostResponse, T.ExamStoreExamPostInput>({ ...options, method: "POST", url: `/api/v1/exams`, data: data });
  }
  /**
   * Delete exam definition records through the mounted LMS exam::routes handler. Successful deletion returns an empty data object.
   * Calls `DELETE /api/v1/exams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:delete; trusted gateway identity plus any handler-local checks apply.
   */
  examDestroyExamDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamDestroyExamDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/exams/${encodeURIComponent(id)}` });
  }
  /**
   * Read exam definition records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/exams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply.
   */
  examShowExamGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamShowExamGetResponse>({ ...options, method: "GET", url: `/api/v1/exams/${encodeURIComponent(id)}` });
  }
  /**
   * Patch exam definition records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/exams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:update; trusted gateway identity plus any handler-local checks apply.
   */
  examUpdateExamPatch(id: Identifier, data: T.ExamUpdateExamPatchInput, options?: RequestOptions<T.ExamUpdateExamPatchInput>) {
    return this.client.request<T.ExamUpdateExamPatchResponse, T.ExamUpdateExamPatchInput>({ ...options, method: "PATCH", url: `/api/v1/exams/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List exam attempt records through the mounted LMS exam::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/exams/attempts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply.
   */
  examIndexAttemptGet(params?: T.ExamIndexAttemptGetQuery, options?: RequestOptions) {
    return this.client.request<T.ExamIndexAttemptGetResponse>({ ...options, method: "GET", url: `/api/v1/exams/attempts`, params });
  }
  /**
   * Read exam attempt records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/exams/attempts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply.
   */
  examShowAttemptGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamShowAttemptGetResponse>({ ...options, method: "GET", url: `/api/v1/exams/attempts/${encodeURIComponent(id)}` });
  }
  /**
   * Patch exam attempt records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/exams/attempts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:update; trusted gateway identity plus any handler-local checks apply.
   */
  examUpdateAttemptPatch(id: Identifier, data: T.ExamUpdateAttemptPatchInput, options?: RequestOptions<T.ExamUpdateAttemptPatchInput>) {
    return this.client.request<T.ExamUpdateAttemptPatchResponse, T.ExamUpdateAttemptPatchInput>({ ...options, method: "PATCH", url: `/api/v1/exams/attempts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Save attempt answer records through the mounted LMS exam::routes handler.
   * Calls `PUT /api/v1/exams/attempts/{id}/answers/{position}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param position Backend path identifier `position`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply.
   */
  examSaveAttemptAnswerPut(id: Identifier, position: Identifier, data: T.ExamSaveAttemptAnswerPutInput, options?: RequestOptions<T.ExamSaveAttemptAnswerPutInput>) {
    return this.client.request<T.ExamSaveAttemptAnswerPutResponse, T.ExamSaveAttemptAnswerPutInput>({ ...options, method: "PUT", url: `/api/v1/exams/attempts/${encodeURIComponent(id)}/answers/${encodeURIComponent(position)}`, data: data });
  }
  /**
   * Read attempt delivery records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/exams/attempts/{id}/delivery` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply.
   */
  examShowAttemptDeliveryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamShowAttemptDeliveryGetResponse>({ ...options, method: "GET", url: `/api/v1/exams/attempts/${encodeURIComponent(id)}/delivery` });
  }
  /**
   * Start exam attempt records through the mounted LMS exam::routes handler.
   * Calls `POST /api/v1/exams/attempts/{id}/start` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply.
   */
  examStartAttemptPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamStartAttemptPostResponse>({ ...options, method: "POST", url: `/api/v1/exams/attempts/${encodeURIComponent(id)}/start` });
  }
  /**
   * Submit exam attempt records through the mounted LMS exam::routes handler.
   * Calls `POST /api/v1/exams/attempts/{id}/submit` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply.
   */
  examSubmitAttemptPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamSubmitAttemptPostResponse>({ ...options, method: "POST", url: `/api/v1/exams/attempts/${encodeURIComponent(id)}/submit` });
  }
  /**
   * List exercise/question records through the mounted LMS exam::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/exams/questions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply.
   */
  examIndexQuestionGet(params?: T.ExamIndexQuestionGetQuery, options?: RequestOptions) {
    return this.client.request<T.ExamIndexQuestionGetResponse>({ ...options, method: "GET", url: `/api/v1/exams/questions`, params });
  }
  /**
   * Create exercise/question records through the mounted LMS exam::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/exams/questions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:create; trusted gateway identity plus any handler-local checks apply.
   */
  examStoreQuestionPost(data: T.ExamStoreQuestionPostInput, options?: RequestOptions<T.ExamStoreQuestionPostInput>) {
    return this.client.request<T.ExamStoreQuestionPostResponse, T.ExamStoreQuestionPostInput>({ ...options, method: "POST", url: `/api/v1/exams/questions`, data: data });
  }
  /**
   * Delete exercise/question records through the mounted LMS exam::routes handler. Successful deletion returns an empty data object.
   * Calls `DELETE /api/v1/exams/questions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:delete; trusted gateway identity plus any handler-local checks apply.
   */
  examDestroyQuestionDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamDestroyQuestionDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/exams/questions/${encodeURIComponent(id)}` });
  }
  /**
   * Read exercise/question records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/exams/questions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply.
   */
  examShowQuestionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamShowQuestionGetResponse>({ ...options, method: "GET", url: `/api/v1/exams/questions/${encodeURIComponent(id)}` });
  }
  /**
   * Patch exercise/question records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/exams/questions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:update; trusted gateway identity plus any handler-local checks apply.
   */
  examUpdateQuestionPatch(id: Identifier, data: T.ExamUpdateQuestionPatchInput, options?: RequestOptions<T.ExamUpdateQuestionPatchInput>) {
    return this.client.request<T.ExamUpdateQuestionPatchResponse, T.ExamUpdateQuestionPatchInput>({ ...options, method: "PATCH", url: `/api/v1/exams/questions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List session records through the mounted LMS exam::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/exams/sessions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply.
   */
  examIndexSessionGet(params?: T.ExamIndexSessionGetQuery, options?: RequestOptions) {
    return this.client.request<T.ExamIndexSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/exams/sessions`, params });
  }
  /**
   * Create session records through the mounted LMS exam::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/exams/sessions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:create; trusted gateway identity plus any handler-local checks apply.
   */
  examStoreSessionPost(data: T.ExamStoreSessionPostInput, options?: RequestOptions<T.ExamStoreSessionPostInput>) {
    return this.client.request<T.ExamStoreSessionPostResponse, T.ExamStoreSessionPostInput>({ ...options, method: "POST", url: `/api/v1/exams/sessions`, data: data });
  }
  /**
   * Delete session records through the mounted LMS exam::routes handler. Successful deletion returns an empty data object.
   * Calls `DELETE /api/v1/exams/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:delete; trusted gateway identity plus any handler-local checks apply.
   */
  examDestroySessionDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamDestroySessionDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/exams/sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Read session records through the mounted LMS exam::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/exams/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:read; trusted gateway identity plus any handler-local checks apply.
   */
  examShowSessionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamShowSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/exams/sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Patch an exam session. Omit a field to preserve it; explicit null clears PatchField members such as classroom_id, dates, staff, and counts. selection_mode and status use normal optional scalar semantics.
   * Calls `PATCH /api/v1/exams/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:exam:update; trusted gateway identity plus any handler-local checks apply.
   */
  examUpdateSessionPatch(id: Identifier, data: T.ExamUpdateSessionPatchInput, options?: RequestOptions<T.ExamUpdateSessionPatchInput>) {
    return this.client.request<T.ExamUpdateSessionPatchResponse, T.ExamUpdateSessionPatchInput>({ ...options, method: "PATCH", url: `/api/v1/exams/sessions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List homework bank records through the mounted LMS homework::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/homework-banks` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework_bank:read; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkIndexBankGet(params?: T.HomeworkIndexBankGetQuery, options?: RequestOptions) {
    return this.client.request<T.HomeworkIndexBankGetResponse>({ ...options, method: "GET", url: `/api/v1/homework-banks`, params });
  }
  /**
   * Create homework bank records through the mounted LMS homework::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/homework-banks` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework_bank:create; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkStoreBankPost(data: T.HomeworkStoreBankPostInput, options?: RequestOptions<T.HomeworkStoreBankPostInput>) {
    return this.client.request<T.HomeworkStoreBankPostResponse, T.HomeworkStoreBankPostInput>({ ...options, method: "POST", url: `/api/v1/homework-banks`, data: data });
  }
  /**
   * List bank exercise records through the mounted LMS homework::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/homework-banks/{homework_bank_id}/homeworks` through the shared IDP-aware Faiber client.
   * @param homeworkBankId Backend path identifier `homework_bank_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkIndexBankHomeworkGet(homeworkBankId: Identifier, params?: T.HomeworkIndexBankHomeworkGetQuery, options?: RequestOptions) {
    return this.client.request<T.HomeworkIndexBankHomeworkGetResponse>({ ...options, method: "GET", url: `/api/v1/homework-banks/${encodeURIComponent(homeworkBankId)}/homeworks`, params });
  }
  /**
   * Create bank exercise records through the mounted LMS homework::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/homework-banks/{homework_bank_id}/homeworks` through the shared IDP-aware Faiber client.
   * @param homeworkBankId Backend path identifier `homework_bank_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:create; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkStoreBankHomeworkPost(homeworkBankId: Identifier, data: T.HomeworkStoreBankHomeworkPostInput, options?: RequestOptions<T.HomeworkStoreBankHomeworkPostInput>) {
    return this.client.request<T.HomeworkStoreBankHomeworkPostResponse, T.HomeworkStoreBankHomeworkPostInput>({ ...options, method: "POST", url: `/api/v1/homework-banks/${encodeURIComponent(homeworkBankId)}/homeworks`, data: data });
  }
  /**
   * Delete bank exercise records through the mounted LMS homework::routes handler. Successful deletion returns an empty data object.
   * Calls `DELETE /api/v1/homework-banks/{homework_bank_id}/homeworks/{homework_id}` through the shared IDP-aware Faiber client.
   * @param homeworkBankId Backend path identifier `homework_bank_id`.
   * @param homeworkId Backend path identifier `homework_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:delete; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkDestroyBankHomeworkDelete(homeworkBankId: Identifier, homeworkId: Identifier, options?: RequestOptions) {
    return this.client.request<T.HomeworkDestroyBankHomeworkDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/homework-banks/${encodeURIComponent(homeworkBankId)}/homeworks/${encodeURIComponent(homeworkId)}` });
  }
  /**
   * Read bank exercise records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/homework-banks/{homework_bank_id}/homeworks/{homework_id}` through the shared IDP-aware Faiber client.
   * @param homeworkBankId Backend path identifier `homework_bank_id`.
   * @param homeworkId Backend path identifier `homework_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkShowBankHomeworkGet(homeworkBankId: Identifier, homeworkId: Identifier, options?: RequestOptions) {
    return this.client.request<T.HomeworkShowBankHomeworkGetResponse>({ ...options, method: "GET", url: `/api/v1/homework-banks/${encodeURIComponent(homeworkBankId)}/homeworks/${encodeURIComponent(homeworkId)}` });
  }
  /**
   * Patch bank exercise records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/homework-banks/{homework_bank_id}/homeworks/{homework_id}` through the shared IDP-aware Faiber client.
   * @param homeworkBankId Backend path identifier `homework_bank_id`.
   * @param homeworkId Backend path identifier `homework_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:update; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkUpdateBankHomeworkPatch(homeworkBankId: Identifier, homeworkId: Identifier, data: T.HomeworkUpdateBankHomeworkPatchInput, options?: RequestOptions<T.HomeworkUpdateBankHomeworkPatchInput>) {
    return this.client.request<T.HomeworkUpdateBankHomeworkPatchResponse, T.HomeworkUpdateBankHomeworkPatchInput>({ ...options, method: "PATCH", url: `/api/v1/homework-banks/${encodeURIComponent(homeworkBankId)}/homeworks/${encodeURIComponent(homeworkId)}`, data: data });
  }
  /**
   * Delete homework bank records through the mounted LMS homework::routes handler. Successful deletion returns an empty data object.
   * Calls `DELETE /api/v1/homework-banks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework_bank:delete; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkDestroyBankDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.HomeworkDestroyBankDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/homework-banks/${encodeURIComponent(id)}` });
  }
  /**
   * Read homework bank records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/homework-banks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework_bank:read; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkShowBankGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.HomeworkShowBankGetResponse>({ ...options, method: "GET", url: `/api/v1/homework-banks/${encodeURIComponent(id)}` });
  }
  /**
   * Patch homework bank records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/homework-banks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework_bank:update; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkUpdateBankPatch(id: Identifier, data: T.HomeworkUpdateBankPatchInput, options?: RequestOptions<T.HomeworkUpdateBankPatchInput>) {
    return this.client.request<T.HomeworkUpdateBankPatchResponse, T.HomeworkUpdateBankPatchInput>({ ...options, method: "PATCH", url: `/api/v1/homework-banks/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List homework definition records through the mounted LMS homework::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/homeworks` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkIndexHomeworkGet(params?: T.HomeworkIndexHomeworkGetQuery, options?: RequestOptions) {
    return this.client.request<T.HomeworkIndexHomeworkGetResponse>({ ...options, method: "GET", url: `/api/v1/homeworks`, params });
  }
  /**
   * Create homework definition records through the mounted LMS homework::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/homeworks` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:create; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkStoreHomeworkPost(data: T.HomeworkStoreHomeworkPostInput, options?: RequestOptions<T.HomeworkStoreHomeworkPostInput>) {
    return this.client.request<T.HomeworkStoreHomeworkPostResponse, T.HomeworkStoreHomeworkPostInput>({ ...options, method: "POST", url: `/api/v1/homeworks`, data: data });
  }
  /**
   * Delete homework definition records through the mounted LMS homework::routes handler. Successful deletion returns an empty data object.
   * Calls `DELETE /api/v1/homeworks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:delete; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkDestroyHomeworkDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.HomeworkDestroyHomeworkDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/homeworks/${encodeURIComponent(id)}` });
  }
  /**
   * Read homework definition records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/homeworks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkShowHomeworkGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.HomeworkShowHomeworkGetResponse>({ ...options, method: "GET", url: `/api/v1/homeworks/${encodeURIComponent(id)}` });
  }
  /**
   * Patch homework definition records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/homeworks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:update; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkUpdateHomeworkPatch(id: Identifier, data: T.HomeworkUpdateHomeworkPatchInput, options?: RequestOptions<T.HomeworkUpdateHomeworkPatchInput>) {
    return this.client.request<T.HomeworkUpdateHomeworkPatchResponse, T.HomeworkUpdateHomeworkPatchInput>({ ...options, method: "PATCH", url: `/api/v1/homeworks/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List assignment records through the mounted LMS homework::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/homeworks/assignments` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkIndexAssignmentGet(params?: T.HomeworkIndexAssignmentGetQuery, options?: RequestOptions) {
    return this.client.request<T.HomeworkIndexAssignmentGetResponse>({ ...options, method: "GET", url: `/api/v1/homeworks/assignments`, params });
  }
  /**
   * Assign a real active exercise to an existing learner. homework_id identifies the exercise/question, not its bank. user_id is required by repository validation; a supplied classroom must contain that learner. Invalid targets return 422; Profile validation outages return 502.
   * Calls `POST /api/v1/homeworks/assignments` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:create; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkStoreAssignmentPost(data: T.HomeworkStoreAssignmentPostInput, options?: RequestOptions<T.HomeworkStoreAssignmentPostInput>) {
    return this.client.request<T.HomeworkStoreAssignmentPostResponse, T.HomeworkStoreAssignmentPostInput>({ ...options, method: "POST", url: `/api/v1/homeworks/assignments`, data: data });
  }
  /**
   * Delete assignment records through the mounted LMS homework::routes handler. Successful deletion returns an empty data object.
   * Calls `DELETE /api/v1/homeworks/assignments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:delete; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkDestroyAssignmentDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.HomeworkDestroyAssignmentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/homeworks/assignments/${encodeURIComponent(id)}` });
  }
  /**
   * Read assignment records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/homeworks/assignments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkShowAssignmentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.HomeworkShowAssignmentGetResponse>({ ...options, method: "GET", url: `/api/v1/homeworks/assignments/${encodeURIComponent(id)}` });
  }
  /**
   * Patch assignment records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/homeworks/assignments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:update; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkUpdateAssignmentPatch(id: Identifier, data: T.HomeworkUpdateAssignmentPatchInput, options?: RequestOptions<T.HomeworkUpdateAssignmentPatchInput>) {
    return this.client.request<T.HomeworkUpdateAssignmentPatchResponse, T.HomeworkUpdateAssignmentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/homeworks/assignments/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List current term assignment records through the mounted LMS homework::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/homeworks/assignments/current-term` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkIndexCurrentTermAssignmentGet(params?: T.HomeworkIndexCurrentTermAssignmentGetQuery, options?: RequestOptions) {
    return this.client.request<T.HomeworkIndexCurrentTermAssignmentGetResponse>({ ...options, method: "GET", url: `/api/v1/homeworks/assignments/current-term`, params });
  }
  /**
   * List exercise/question records through the mounted LMS homework::routes handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/homeworks/questions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkIndexQuestionGet(params?: T.HomeworkIndexQuestionGetQuery, options?: RequestOptions) {
    return this.client.request<T.HomeworkIndexQuestionGetResponse>({ ...options, method: "GET", url: `/api/v1/homeworks/questions`, params });
  }
  /**
   * Create exercise/question records through the mounted LMS homework::routes handler. Required JSON fields follow the named input DTO; server validation and database failures reject with AxiosError.
   * Calls `POST /api/v1/homeworks/questions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:create; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkStoreQuestionPost(data: T.HomeworkStoreQuestionPostInput, options?: RequestOptions<T.HomeworkStoreQuestionPostInput>) {
    return this.client.request<T.HomeworkStoreQuestionPostResponse, T.HomeworkStoreQuestionPostInput>({ ...options, method: "POST", url: `/api/v1/homeworks/questions`, data: data });
  }
  /**
   * Read exercise/question records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `GET /api/v1/homeworks/questions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:read; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkShowQuestionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.HomeworkShowQuestionGetResponse>({ ...options, method: "GET", url: `/api/v1/homeworks/questions/${encodeURIComponent(id)}` });
  }
  /**
   * Patch exercise/question records through the mounted LMS homework::routes handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PATCH /api/v1/homeworks/questions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:homework:update; trusted gateway identity plus any handler-local checks apply.
   */
  homeworkUpdateQuestionPatch(id: Identifier, data: T.HomeworkUpdateQuestionPatchInput, options?: RequestOptions<T.HomeworkUpdateQuestionPatchInput>) {
    return this.client.request<T.HomeworkUpdateQuestionPatchResponse, T.HomeworkUpdateQuestionPatchInput>({ ...options, method: "PATCH", url: `/api/v1/homeworks/questions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Transfer learner-owned educational records transactionally between distinct nonnil Profile user UUIDs. Requires Idempotency-Key (1–128 printable ASCII characters without spaces); identical actor/key/payload retries replay success. Conflicts or active attempts return 409; Profile outages return 502. Declared IDP permission is user_data:transfer; the pinned handler itself checks actor presence.
   * Calls `POST /api/v1/idp/option/transfer-user-data` through the shared IDP-aware Faiber client.
   * @param idempotencyKey Stable printable ASCII key (1–128 characters, without spaces); reuse for identical retries.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: user_data:transfer; trusted gateway identity plus any handler-local checks apply.
   */
  transferUserDataPost(data: T.TransferTransferUserDataPostInput, idempotencyKey: string, options?: RequestOptions<T.TransferTransferUserDataPostInput>) {
    if (!/^[\x21-\x7e]{1,128}$/.test(idempotencyKey)) throw new TypeError("Idempotency-Key must be 1–128 printable ASCII characters without spaces");
    const headers = new AxiosHeaders(options?.headers as RawAxiosHeaders | AxiosHeaders | undefined);
    headers.set("Idempotency-Key", idempotencyKey);
    return this.client.request<T.TransferTransferUserDataPostResponse, T.TransferTransferUserDataPostInput>({ ...options, method: "POST", url: `/api/v1/idp/option/transfer-user-data`, headers, data: data });
  }
  /**
   * Flow integration show records through the mounted LMS integration::routes handler.
   * Calls `GET /api/v1/integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /**
   * Resolve legacy ids records through the mounted LMS integration::routes handler.
   * Calls `POST /api/v1/integration/legacy-ids/resolve` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  integrationResolveLegacyIdsPost(data: T.IntegrationResolveLegacyIdsPostInput, options?: RequestOptions<T.IntegrationResolveLegacyIdsPostInput>) {
    return this.client.request<T.IntegrationResolveLegacyIdsPostResponse, T.IntegrationResolveLegacyIdsPostInput>({ ...options, method: "POST", url: `/api/v1/integration/legacy-ids/resolve`, data: data });
  }
  /**
   * Relationship  records through the mounted LMS notifications::contacts handler.
   * Calls `POST /api/v1/integrations/chat/relationship` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  notificationsRelationshipPost(data: T.NotificationsRelationshipPostInput, options?: RequestOptions<T.NotificationsRelationshipPostInput>) {
    return this.client.request<T.NotificationsRelationshipPostResponse, T.NotificationsRelationshipPostInput>({ ...options, method: "POST", url: `/api/v1/integrations/chat/relationship`, data: data });
  }
  /**
   * Catalog  records through the mounted LMS interactive::routes handler.
   * Calls `GET /api/v1/interactive/catalog` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public catalog.
   */
  interactiveCatalogGet(options?: RequestOptions) {
    return this.client.request<T.InteractiveCatalogGetResponse>({ ...options, method: "GET", url: `/api/v1/interactive/catalog` });
  }
  /**
   * My certificates records through the mounted LMS interactive::routes handler.
   * Calls `GET /api/v1/interactive/certificates` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated learner; own awards only.
   */
  interactiveMyCertificatesGet(options?: RequestOptions) {
    return this.client.request<T.InteractiveMyCertificatesGetResponse>({ ...options, method: "GET", url: `/api/v1/interactive/certificates` });
  }
  /**
   * Claim certificate records through the mounted LMS interactive::routes handler.
   * Calls `POST /api/v1/interactive/courses/{id}/certificate` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated active enrollment owner.
   */
  interactiveClaimCertificatePost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InteractiveClaimCertificatePostResponse>({ ...options, method: "POST", url: `/api/v1/interactive/courses/${encodeURIComponent(id)}/certificate` });
  }
  /**
   * Definitions  records through the mounted LMS interactive::routes handler.
   * Calls `GET /api/v1/interactive/definitions` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:read.
   */
  interactiveDefinitionsGet(options?: RequestOptions) {
    return this.client.request<T.InteractiveDefinitionsGetResponse>({ ...options, method: "GET", url: `/api/v1/interactive/definitions` });
  }
  /**
   * Definition  records through the mounted LMS interactive::routes handler.
   * Calls `GET /api/v1/interactive/definitions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:read.
   */
  interactiveDefinitionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InteractiveDefinitionGetResponse>({ ...options, method: "GET", url: `/api/v1/interactive/definitions/${encodeURIComponent(id)}` });
  }
  /**
   * Publish  records through the mounted LMS interactive::routes handler.
   * Calls `POST /api/v1/interactive/definitions/{id}/publish` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:update.
   */
  interactivePublishPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InteractivePublishPostResponse>({ ...options, method: "POST", url: `/api/v1/interactive/definitions/${encodeURIComponent(id)}/publish` });
  }
  /**
   * Lesson  records through the mounted LMS interactive::routes handler.
   * Calls `GET /api/v1/interactive/lessons/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated enrollment/run owner.
   */
  interactiveLessonGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InteractiveLessonGetResponse>({ ...options, method: "GET", url: `/api/v1/interactive/lessons/${encodeURIComponent(id)}` });
  }
  /**
   * Save definition records through the mounted LMS interactive::routes handler.
   * Calls `POST /api/v1/interactive/lessons/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:update.
   */
  interactiveSaveDefinitionPost(id: Identifier, data: T.InteractiveSaveDefinitionPostInput, options?: RequestOptions<T.InteractiveSaveDefinitionPostInput>) {
    return this.client.request<T.InteractiveSaveDefinitionPostResponse, T.InteractiveSaveDefinitionPostInput>({ ...options, method: "POST", url: `/api/v1/interactive/lessons/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Start  records through the mounted LMS interactive::routes handler.
   * Calls `POST /api/v1/interactive/lessons/{id}/start` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated enrollment/run owner.
   */
  interactiveStartPost(id: Identifier, data: T.InteractiveStartPostInput, options?: RequestOptions<T.InteractiveStartPostInput>) {
    return this.client.request<T.InteractiveStartPostResponse, T.InteractiveStartPostInput>({ ...options, method: "POST", url: `/api/v1/interactive/lessons/${encodeURIComponent(id)}/start`, data: data });
  }
  /**
   * Runs  records through the mounted LMS interactive::routes handler.
   * Calls `GET /api/v1/interactive/runs` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated enrollment/run owner.
   */
  interactiveRunsGet(options?: RequestOptions) {
    return this.client.request<T.InteractiveRunsGetResponse>({ ...options, method: "GET", url: `/api/v1/interactive/runs` });
  }
  /**
   * Run  records through the mounted LMS interactive::routes handler.
   * Calls `GET /api/v1/interactive/runs/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated enrollment/run owner.
   */
  interactiveRunGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InteractiveRunGetResponse>({ ...options, method: "GET", url: `/api/v1/interactive/runs/${encodeURIComponent(id)}` });
  }
  /**
   * Submit  records through the mounted LMS interactive::routes handler.
   * Calls `POST /api/v1/interactive/runs/{id}/attempts` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated enrollment/run owner.
   */
  interactiveSubmitPost(id: Identifier, data: T.InteractiveSubmitPostInput, options?: RequestOptions<T.InteractiveSubmitPostInput>) {
    return this.client.request<T.InteractiveSubmitPostResponse, T.InteractiveSubmitPostInput>({ ...options, method: "POST", url: `/api/v1/interactive/runs/${encodeURIComponent(id)}/attempts`, data: data });
  }
  /**
   * Draft  records through the mounted LMS interactive::routes handler.
   * Calls `PUT /api/v1/interactive/runs/{id}/draft` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated enrollment/run owner.
   */
  interactiveDraftPut(id: Identifier, data: T.InteractiveDraftPutInput, options?: RequestOptions<T.InteractiveDraftPutInput>) {
    return this.client.request<T.InteractiveDraftPutResponse, T.InteractiveDraftPutInput>({ ...options, method: "PUT", url: `/api/v1/interactive/runs/${encodeURIComponent(id)}/draft`, data: data });
  }
  /**
   * Hint  records through the mounted LMS interactive::routes handler.
   * Calls `POST /api/v1/interactive/runs/{id}/hints` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated enrollment/run owner.
   */
  interactiveHintPost(id: Identifier, data: T.InteractiveHintPostInput, options?: RequestOptions<T.InteractiveHintPostInput>) {
    return this.client.request<T.InteractiveHintPostResponse, T.InteractiveHintPostInput>({ ...options, method: "POST", url: `/api/v1/interactive/runs/${encodeURIComponent(id)}/hints`, data: data });
  }
  /**
   * Teacher context records through the mounted LMS interactive::routes handler.
   * Calls `GET /api/v1/interactive/runs/{id}/teacher-context` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated enrollment/run owner.
   */
  interactiveTeacherContextGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InteractiveTeacherContextGetResponse>({ ...options, method: "GET", url: `/api/v1/interactive/runs/${encodeURIComponent(id)}/teacher-context` });
  }
  /**
   * Upload the first multipart image field containing PNG, JPEG, WebP or GIF bytes up to 10 MiB. Verifies MIME and magic bytes; returns the stored URL/key. Unsupported media returns 415, oversized data 413, storage failures 502.
   * Calls `POST /api/v1/media/images` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:update; trusted gateway identity plus any handler-local checks apply.
   */
  mediaUploadImagePost(data: T.MediaUploadImagePostInput, options?: RequestOptions<T.MediaUploadImagePostInput>) {
    return this.client.request<T.MediaUploadImagePostResponse, T.MediaUploadImagePostInput>({ ...options, method: "POST", url: `/api/v1/media/images`, data: data });
  }
  /**
   * Download raw image bytes with Content-Type and cache headers in the complete Axios response. This response has no JSON envelope; invalid or missing assets reject with AxiosError.
   * Calls `GET /api/v1/media/images/{filename}` through the shared IDP-aware Faiber client.
   * @param filename Backend path identifier `filename`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:course:read; trusted gateway identity plus any handler-local checks apply.
   */
  mediaDownloadImageGet(filename: Identifier, options?: RequestOptions) {
    return this.client.request<T.MediaDownloadImageGetResponse>({ ...options, method: "GET", url: `/api/v1/media/images/${encodeURIComponent(filename)}`, responseType: "arraybuffer" });
  }
  /**
   * List  records through the mounted LMS notifications handler. Returns data.data rows and data.meta pagination (page 1, size 20 by default, maximum 100).
   * Calls `GET /api/v1/notification-rules` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:notification:settings:read; trusted gateway identity plus any handler-local checks apply.
   */
  modIndexGet(params?: T.ModIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ModIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/notification-rules`, params });
  }
  /**
   * Patch  records through the mounted LMS notifications handler. Missing resource identifiers return 404; optional scalar null members follow the Rust request model semantics.
   * Calls `PUT /api/v1/notification-rules/{key}` through the shared IDP-aware Faiber client.
   * @param key Backend path identifier `key`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:notification:settings:update; trusted gateway identity plus any handler-local checks apply.
   */
  modUpdatePut(key: Identifier, data: T.ModUpdatePutInput, options?: RequestOptions<T.ModUpdatePutInput>) {
    return this.client.request<T.ModUpdatePutResponse, T.ModUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/notification-rules/${encodeURIComponent(key)}`, data: data });
  }
  /**
   * Preview  records through the mounted LMS notifications handler.
   * Calls `POST /api/v1/notification-rules/{key}/preview` through the shared IDP-aware Faiber client.
   * @param key Backend path identifier `key`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:notification:settings:read; trusted gateway identity plus any handler-local checks apply.
   */
  modPreviewPost(key: Identifier, options?: RequestOptions) {
    return this.client.request<T.ModPreviewPostResponse>({ ...options, method: "POST", url: `/api/v1/notification-rules/${encodeURIComponent(key)}/preview` });
  }
  /**
   * Search Profile summaries through the LMS proxy using page, per_page and filter[search]. Returns LMS pagination metadata.
   * Calls `GET /api/v1/profiles` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply.
   */
  profileRoutesIndexGet(params?: T.ProfileRoutesIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileRoutesIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profiles`, params });
  }
  /**
   * Read a Profile summary by user UUID. An absent profile returns data:null; an upstream failure returns 502.
   * Calls `GET /api/v1/profiles/{user_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:classroom:read; trusted gateway identity plus any handler-local checks apply.
   */
  profileRoutesShowGet(userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileRoutesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/profiles/${encodeURIComponent(userId)}` });
  }
  /**
   * Read public learner branding and runtime feedback_task_origin. The discovery key is present with null when unconfigured and is not persisted as branding.
   * Calls `GET /api/v1/public/branding` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public runtime branding/discovery; no actor or administration permission.
   */
  brandingPublicShowGet(options?: RequestOptions) {
    return this.client.request<T.BrandingPublicShowGetResponse>({ ...options, method: "GET", url: `/api/v1/public/branding` });
  }
  /**
   * Download raw image bytes with Content-Type and cache headers in the complete Axios response. This response has no JSON envelope; invalid or missing assets reject with AxiosError.
   * Calls `GET /api/v1/public/branding/assets/{key}` through the shared IDP-aware Faiber client.
   * @param key Backend path identifier `key`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  brandingAssetGet(key: Identifier, options?: RequestOptions) {
    return this.client.request<T.BrandingAssetGetResponse>({ ...options, method: "GET", url: `/api/v1/public/branding/assets/${encodeURIComponent(key)}`, responseType: "arraybuffer" });
  }
  /**
   * Verify a public, legacy, or verification code. Returns certificate identity, validity and result fields; unknown codes return 404.
   * Calls `GET /api/v1/public/certificates/{code}` through the shared IDP-aware Faiber client.
   * @param code Backend path identifier `code`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata lms:certificate:verify; handler accepts public verification codes without an actor guard.
   */
  certificateVerifyCertificateGet(code: Identifier, options?: RequestOptions) {
    return this.client.request<T.CertificateVerifyCertificateGetResponse>({ ...options, method: "GET", url: `/api/v1/public/certificates/${encodeURIComponent(code)}` });
  }
  /**
   * Render or read the cached SVG for a public, legacy, or verification code. Returns a raw SVG string with cache headers; unknown codes return 404.
   * Calls `GET /api/v1/public/certificates/{code}/image.svg` through the shared IDP-aware Faiber client.
   * @param code Backend path identifier `code`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata lms:certificate:verify; handler accepts public verification codes without an actor guard.
   */
  certificateRenderCertificateImageGet(code: Identifier, options?: RequestOptions) {
    return this.client.request<T.CertificateRenderCertificateImageGetResponse>({ ...options, method: "GET", url: `/api/v1/public/certificates/${encodeURIComponent(code)}/image.svg`, responseType: "text" });
  }
  /**
   * List authorized supervised students and their Profile-linked parents, with search and standard pagination. contact_role and Profile fields are flattened in each row; upstream validation failures return 502.
   * Calls `GET /api/v1/reports/assigned-chat-contacts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:report:read_own; trusted gateway identity plus any handler-local checks apply.
   */
  reportAssignedChatContactsGet(params?: T.ReportAssignedChatContactsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ReportAssignedChatContactsGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/assigned-chat-contacts`, params });
  }
  /**
   * List students enrolled in classrooms supervised by the actor, with search and standard pagination. Removed/disabled memberships are excluded; rows are Profile summaries.
   * Calls `GET /api/v1/reports/assigned-students` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:report:read_own; trusted gateway identity plus any handler-local checks apply.
   */
  reportAssignedStudentsGet(params?: T.ReportAssignedStudentsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ReportAssignedStudentsGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/assigned-students`, params });
  }
  /**
   * Read one aggregate metrics row per classroom with teacher/consultant profiles and date/status filters. Requires broad report access.
   * Calls `GET /api/v1/reports/classrooms` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:report:read; trusted gateway identity plus any handler-local checks apply.
   */
  reportClassroomsGet(params?: T.ReportClassroomsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ReportClassroomsGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/classrooms`, params });
  }
  /**
   * Read aggregate classroom/student/session/attendance metrics grouped by assigned consultant. Date/status filters select classroom rows; requires broad report access.
   * Calls `GET /api/v1/reports/consultants` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:report:read; trusted gateway identity plus any handler-local checks apply.
   */
  reportConsultantsGet(params?: T.ReportConsultantsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ReportConsultantsGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/consultants`, params });
  }
  /**
   * Read aggregate classroom/student/session/attendance metrics grouped by course. Returns course_id/course_name and counts, distinct from academy catalog DTOs; requires broad report access.
   * Calls `GET /api/v1/reports/courses` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:report:read; trusted gateway identity plus any handler-local checks apply.
   */
  reportCoursesGet(params?: T.ReportCoursesGetQuery, options?: RequestOptions) {
    return this.client.request<T.ReportCoursesGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/courses`, params });
  }
  /**
   * Read Profile-verified child summaries for the authenticated parent. Upstream Profile failure returns 502.
   * Calls `GET /api/v1/reports/my-students` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:report:read_own; trusted gateway identity plus any handler-local checks apply.
   */
  reportMyStudentsGet(options?: RequestOptions) {
    return this.client.request<T.ReportMyStudentsGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/my-students` });
  }
  /**
   * Read the authenticated learner or selected student_user_id summary and nested courses/sessions/deliveries/exams. Own access permits self or a Profile-verified child; unrelated students return 403 and Profile outages return 502.
   * Calls `GET /api/v1/reports/student-summary` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:report:read_own; trusted gateway identity plus any handler-local checks apply.
   */
  reportStudentSummaryGet(params?: T.ReportStudentSummaryGetQuery, options?: RequestOptions) {
    return this.client.request<T.ReportStudentSummaryGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/student-summary`, params });
  }
  /**
   * Read aggregate student classroom/attendance metrics. courses is omitted on this list; date/status filters apply through classroom scope. Requires broad report access.
   * Calls `GET /api/v1/reports/students` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:report:read; trusted gateway identity plus any handler-local checks apply.
   */
  reportStudentsGet(params?: T.ReportStudentsGetQuery, options?: RequestOptions) {
    return this.client.request<T.ReportStudentsGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/students`, params });
  }
  /**
   * Read aggregate classroom/student/session/attendance metrics grouped by assigned teacher. from/to accept RFC3339 or UTC dates and filter classroom starts; requires broad report access.
   * Calls `GET /api/v1/reports/teachers` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route metadata: lms:report:read; trusted gateway identity plus any handler-local checks apply.
   */
  reportTeachersGet(params?: T.ReportTeachersGetQuery, options?: RequestOptions) {
    return this.client.request<T.ReportTeachersGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/teachers`, params });
  }
  /**
   * Check licence records through the mounted LMS service::routes handler.
   * Calls `GET /api/v1/service/licence/check` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  serviceCheckLicenceGet(params: T.ServiceCheckLicenceGetQuery, options?: RequestOptions) {
    return this.client.request<T.ServiceCheckLicenceGetResponse>({ ...options, method: "GET", url: `/api/v1/service/licence/check`, params });
  }
  /**
   * Read the LMS process version in a success envelope. This endpoint does not probe database readiness.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no handler permission check; deployment gateway policy is separate.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Read the LMS process version in a success envelope. This endpoint does not probe database readiness.
   * Calls `GET /up` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no handler permission check; deployment gateway policy is separate.
   */
  routerUpGet(options?: RequestOptions) {
    return this.client.request<T.RouterUpGetResponse>({ ...options, method: "GET", url: `/up` });
  }
}
