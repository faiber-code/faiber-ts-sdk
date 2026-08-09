import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class LmsOperations extends ServiceApi {
  /**
   * Performs the openapi json operation for the router capability.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Performs the submit exam operation for the academy capability.
   * Calls `POST /api/v1/academy/attempts/{id}/submit` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academySubmitExamPost(id: Identifier, data: T.AcademySubmitExamPostInput, options?: RequestOptions<T.AcademySubmitExamPostInput>) {
    return this.client.request<T.AcademySubmitExamPostResponse, T.AcademySubmitExamPostInput>({ ...options, method: "POST", url: `/api/v1/academy/attempts/${encodeURIComponent(id)}/submit`, data: data });
  }
  /**
   * Performs the categories operation for the academy capability.
   * Calls `GET /api/v1/academy/categories` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academyCategoriesGet(options?: RequestOptions) {
    return this.client.request<T.AcademyCategoriesGetResponse>({ ...options, method: "GET", url: `/api/v1/academy/categories` });
  }
  /**
   * Performs the courses operation for the academy capability.
   * Calls `GET /api/v1/academy/courses` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academyCoursesGet(params?: T.AcademyCoursesGetQuery, options?: RequestOptions) {
    return this.client.request<T.AcademyCoursesGetResponse>({ ...options, method: "GET", url: `/api/v1/academy/courses`, params });
  }
  /**
   * Performs the course operation for the academy capability.
   * Calls `GET /api/v1/academy/courses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academyCourseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AcademyCourseGetResponse>({ ...options, method: "GET", url: `/api/v1/academy/courses/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the enroll operation for the academy capability.
   * Calls `POST /api/v1/academy/courses/{id}/enroll` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academyEnrollPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AcademyEnrollPostResponse>({ ...options, method: "POST", url: `/api/v1/academy/courses/${encodeURIComponent(id)}/enroll` });
  }
  /**
   * Performs the my enrollments operation for the academy capability.
   * Calls `GET /api/v1/academy/enrollments` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academyMyEnrollmentsGet(options?: RequestOptions) {
    return this.client.request<T.AcademyMyEnrollmentsGetResponse>({ ...options, method: "GET", url: `/api/v1/academy/enrollments` });
  }
  /**
   * Performs the start exam operation for the academy capability.
   * Calls `POST /api/v1/academy/enrollments/{id}/exams/{exam_id}/attempts` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param examId Backend path identifier `exam_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academyStartExamPost(id: Identifier, examId: Identifier, options?: RequestOptions) {
    return this.client.request<T.AcademyStartExamPostResponse>({ ...options, method: "POST", url: `/api/v1/academy/enrollments/${encodeURIComponent(id)}/exams/${encodeURIComponent(examId)}/attempts` });
  }
  /**
   * Performs the complete session operation for the academy capability.
   * Calls `POST /api/v1/academy/enrollments/{id}/sessions/{session_id}/complete` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param sessionId Backend path identifier `session_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  academyCompleteSessionPost(id: Identifier, sessionId: Identifier, data: T.AcademyCompleteSessionPostInput, options?: RequestOptions<T.AcademyCompleteSessionPostInput>) {
    return this.client.request<T.AcademyCompleteSessionPostResponse, T.AcademyCompleteSessionPostInput>({ ...options, method: "POST", url: `/api/v1/academy/enrollments/${encodeURIComponent(id)}/sessions/${encodeURIComponent(sessionId)}/complete`, data: data });
  }
  /**
   * Performs the get self operation for the session capability.
   * Calls `GET /api/v1/auth/self` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sessionGetSelfGet(options?: RequestOptions) {
    return this.client.request<T.SessionGetSelfGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/self` });
  }
  /**
   * Performs the index certificate operation for the certificate capability.
   * Calls `GET /api/v1/certificates` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:certificate:read.
   */
  certificateIndexCertificateGet(params?: T.CertificateIndexCertificateGetQuery, options?: RequestOptions) {
    return this.client.request<T.CertificateIndexCertificateGetResponse>({ ...options, method: "GET", url: `/api/v1/certificates`, params });
  }
  /**
   * Performs the store certificate operation for the certificate capability.
   * Calls `POST /api/v1/certificates` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:certificate:create.
   */
  certificateStoreCertificatePost(data: T.CertificateStoreCertificatePostInput, options?: RequestOptions<T.CertificateStoreCertificatePostInput>) {
    return this.client.request<T.CertificateStoreCertificatePostResponse, T.CertificateStoreCertificatePostInput>({ ...options, method: "POST", url: `/api/v1/certificates`, data: data });
  }
  /**
   * Performs the show certificate operation for the certificate capability.
   * Calls `GET /api/v1/certificates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:certificate:read.
   */
  certificateShowCertificateGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CertificateShowCertificateGetResponse>({ ...options, method: "GET", url: `/api/v1/certificates/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update certificate operation for the certificate capability.
   * Calls `PATCH /api/v1/certificates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:certificate:update.
   */
  certificateUpdateCertificatePatch(id: Identifier, data: T.CertificateUpdateCertificatePatchInput, options?: RequestOptions<T.CertificateUpdateCertificatePatchInput>) {
    return this.client.request<T.CertificateUpdateCertificatePatchResponse, T.CertificateUpdateCertificatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/certificates/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index classroom operation for the classroom capability.
   * Calls `GET /api/v1/classrooms` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:read.
   */
  classroomIndexClassroomGet(params?: T.ClassroomIndexClassroomGetQuery, options?: RequestOptions) {
    return this.client.request<T.ClassroomIndexClassroomGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms`, params });
  }
  /**
   * Performs the store classroom operation for the classroom capability.
   * Calls `POST /api/v1/classrooms` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:create.
   */
  classroomStoreClassroomPost(data: T.ClassroomStoreClassroomPostInput, options?: RequestOptions<T.ClassroomStoreClassroomPostInput>) {
    return this.client.request<T.ClassroomStoreClassroomPostResponse, T.ClassroomStoreClassroomPostInput>({ ...options, method: "POST", url: `/api/v1/classrooms`, data: data });
  }
  /**
   * Performs the show classroom operation for the classroom capability.
   * Calls `GET /api/v1/classrooms/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:read.
   */
  classroomShowClassroomGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ClassroomShowClassroomGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update classroom operation for the classroom capability.
   * Calls `PATCH /api/v1/classrooms/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:update.
   */
  classroomUpdateClassroomPatch(id: Identifier, data: T.ClassroomUpdateClassroomPatchInput, options?: RequestOptions<T.ClassroomUpdateClassroomPatchInput>) {
    return this.client.request<T.ClassroomUpdateClassroomPatchResponse, T.ClassroomUpdateClassroomPatchInput>({ ...options, method: "PATCH", url: `/api/v1/classrooms/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index classroom users operation for the classroom capability.
   * Calls `GET /api/v1/classrooms/{id}/users` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:read.
   */
  classroomIndexClassroomUsersGet(id: Identifier, params?: T.ClassroomIndexClassroomUsersGetQuery, options?: RequestOptions) {
    return this.client.request<T.ClassroomIndexClassroomUsersGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/${encodeURIComponent(id)}/users`, params });
  }
  /**
   * Performs the enroll classroom user operation for the classroom capability.
   * Calls `POST /api/v1/classrooms/{id}/users` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:create.
   */
  classroomEnrollClassroomUserPost(id: Identifier, data: T.ClassroomEnrollClassroomUserPostInput, options?: RequestOptions<T.ClassroomEnrollClassroomUserPostInput>) {
    return this.client.request<T.ClassroomEnrollClassroomUserPostResponse, T.ClassroomEnrollClassroomUserPostInput>({ ...options, method: "POST", url: `/api/v1/classrooms/${encodeURIComponent(id)}/users`, data: data });
  }
  /**
   * Performs the remove classroom user operation for the classroom capability.
   * Calls `DELETE /api/v1/classrooms/{id}/users/{user_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:update.
   */
  classroomRemoveClassroomUserDelete(id: Identifier, userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ClassroomRemoveClassroomUserDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/classrooms/${encodeURIComponent(id)}/users/${encodeURIComponent(userId)}` });
  }
  /**
   * Performs the update classroom user operation for the classroom capability.
   * Calls `PATCH /api/v1/classrooms/{id}/users/{user_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:update.
   */
  classroomUpdateClassroomUserPatch(id: Identifier, userId: Identifier, data: T.ClassroomUpdateClassroomUserPatchInput, options?: RequestOptions<T.ClassroomUpdateClassroomUserPatchInput>) {
    return this.client.request<T.ClassroomUpdateClassroomUserPatchResponse, T.ClassroomUpdateClassroomUserPatchInput>({ ...options, method: "PATCH", url: `/api/v1/classrooms/${encodeURIComponent(id)}/users/${encodeURIComponent(userId)}`, data: data });
  }
  /**
   * Performs the index session operation for the classroom capability.
   * Calls `GET /api/v1/classrooms/sessions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:read.
   */
  classroomIndexSessionGet(params?: T.ClassroomIndexSessionGetQuery, options?: RequestOptions) {
    return this.client.request<T.ClassroomIndexSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/sessions`, params });
  }
  /**
   * Performs the store session operation for the classroom capability.
   * Calls `POST /api/v1/classrooms/sessions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:create.
   */
  classroomStoreSessionPost(data: T.ClassroomStoreSessionPostInput, options?: RequestOptions<T.ClassroomStoreSessionPostInput>) {
    return this.client.request<T.ClassroomStoreSessionPostResponse, T.ClassroomStoreSessionPostInput>({ ...options, method: "POST", url: `/api/v1/classrooms/sessions`, data: data });
  }
  /**
   * Performs the show session operation for the classroom capability.
   * Calls `GET /api/v1/classrooms/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:read.
   */
  classroomShowSessionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ClassroomShowSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update session operation for the classroom capability.
   * Calls `PATCH /api/v1/classrooms/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:update.
   */
  classroomUpdateSessionPatch(id: Identifier, data: T.ClassroomUpdateSessionPatchInput, options?: RequestOptions<T.ClassroomUpdateSessionPatchInput>) {
    return this.client.request<T.ClassroomUpdateSessionPatchResponse, T.ClassroomUpdateSessionPatchInput>({ ...options, method: "PATCH", url: `/api/v1/classrooms/sessions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index absences operation for the classroom capability.
   * Calls `GET /api/v1/classrooms/users/sessions/absences` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:classroom:read.
   */
  classroomIndexAbsencesGet(params?: T.ClassroomIndexAbsencesGetQuery, options?: RequestOptions) {
    return this.client.request<T.ClassroomIndexAbsencesGetResponse>({ ...options, method: "GET", url: `/api/v1/classrooms/users/sessions/absences`, params });
  }
  /**
   * Performs the index club project operation for the ops capability.
   * Calls `GET /api/v1/club/projects` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:read.
   */
  opsIndexClubProjectGet(params?: T.OpsIndexClubProjectGetQuery, options?: RequestOptions) {
    return this.client.request<T.OpsIndexClubProjectGetResponse>({ ...options, method: "GET", url: `/api/v1/club/projects`, params });
  }
  /**
   * Performs the store club project operation for the ops capability.
   * Calls `POST /api/v1/club/projects` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:create.
   */
  opsStoreClubProjectPost(data: T.OpsStoreClubProjectPostInput, options?: RequestOptions<T.OpsStoreClubProjectPostInput>) {
    return this.client.request<T.OpsStoreClubProjectPostResponse, T.OpsStoreClubProjectPostInput>({ ...options, method: "POST", url: `/api/v1/club/projects`, data: data });
  }
  /**
   * Performs the show club project operation for the ops capability.
   * Calls `GET /api/v1/club/projects/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:read.
   */
  opsShowClubProjectGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OpsShowClubProjectGetResponse>({ ...options, method: "GET", url: `/api/v1/club/projects/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update club project operation for the ops capability.
   * Calls `PATCH /api/v1/club/projects/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:update.
   */
  opsUpdateClubProjectPatch(id: Identifier, data: T.OpsUpdateClubProjectPatchInput, options?: RequestOptions<T.OpsUpdateClubProjectPatchInput>) {
    return this.client.request<T.OpsUpdateClubProjectPatchResponse, T.OpsUpdateClubProjectPatchInput>({ ...options, method: "PATCH", url: `/api/v1/club/projects/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index classroom type operation for the config capability.
   * Calls `GET /api/v1/config/classroom-types` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:read.
   */
  configIndexClassroomTypeGet(params?: T.ConfigIndexClassroomTypeGetQuery, options?: RequestOptions) {
    return this.client.request<T.ConfigIndexClassroomTypeGetResponse>({ ...options, method: "GET", url: `/api/v1/config/classroom-types`, params });
  }
  /**
   * Performs the store classroom type operation for the config capability.
   * Calls `POST /api/v1/config/classroom-types` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:create.
   */
  configStoreClassroomTypePost(data: T.ConfigStoreClassroomTypePostInput, options?: RequestOptions<T.ConfigStoreClassroomTypePostInput>) {
    return this.client.request<T.ConfigStoreClassroomTypePostResponse, T.ConfigStoreClassroomTypePostInput>({ ...options, method: "POST", url: `/api/v1/config/classroom-types`, data: data });
  }
  /**
   * Performs the show classroom type operation for the config capability.
   * Calls `GET /api/v1/config/classroom-types/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:read.
   */
  configShowClassroomTypeGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ConfigShowClassroomTypeGetResponse>({ ...options, method: "GET", url: `/api/v1/config/classroom-types/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update classroom type operation for the config capability.
   * Calls `PATCH /api/v1/config/classroom-types/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:update.
   */
  configUpdateClassroomTypePatch(id: Identifier, data: T.ConfigUpdateClassroomTypePatchInput, options?: RequestOptions<T.ConfigUpdateClassroomTypePatchInput>) {
    return this.client.request<T.ConfigUpdateClassroomTypePatchResponse, T.ConfigUpdateClassroomTypePatchInput>({ ...options, method: "PATCH", url: `/api/v1/config/classroom-types/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index education day operation for the config capability.
   * Calls `GET /api/v1/config/education-days` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:read.
   */
  configIndexEducationDayGet(params?: T.ConfigIndexEducationDayGetQuery, options?: RequestOptions) {
    return this.client.request<T.ConfigIndexEducationDayGetResponse>({ ...options, method: "GET", url: `/api/v1/config/education-days`, params });
  }
  /**
   * Performs the store education day operation for the config capability.
   * Calls `POST /api/v1/config/education-days` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:create.
   */
  configStoreEducationDayPost(data: T.ConfigStoreEducationDayPostInput, options?: RequestOptions<T.ConfigStoreEducationDayPostInput>) {
    return this.client.request<T.ConfigStoreEducationDayPostResponse, T.ConfigStoreEducationDayPostInput>({ ...options, method: "POST", url: `/api/v1/config/education-days`, data: data });
  }
  /**
   * Performs the show education day operation for the config capability.
   * Calls `GET /api/v1/config/education-days/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:read.
   */
  configShowEducationDayGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ConfigShowEducationDayGetResponse>({ ...options, method: "GET", url: `/api/v1/config/education-days/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update education day operation for the config capability.
   * Calls `PATCH /api/v1/config/education-days/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:update.
   */
  configUpdateEducationDayPatch(id: Identifier, data: T.ConfigUpdateEducationDayPatchInput, options?: RequestOptions<T.ConfigUpdateEducationDayPatchInput>) {
    return this.client.request<T.ConfigUpdateEducationDayPatchResponse, T.ConfigUpdateEducationDayPatchInput>({ ...options, method: "PATCH", url: `/api/v1/config/education-days/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index grade operation for the config capability.
   * Calls `GET /api/v1/config/grades` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:read.
   */
  configIndexGradeGet(params?: T.ConfigIndexGradeGetQuery, options?: RequestOptions) {
    return this.client.request<T.ConfigIndexGradeGetResponse>({ ...options, method: "GET", url: `/api/v1/config/grades`, params });
  }
  /**
   * Performs the store grade operation for the config capability.
   * Calls `POST /api/v1/config/grades` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:create.
   */
  configStoreGradePost(data: T.ConfigStoreGradePostInput, options?: RequestOptions<T.ConfigStoreGradePostInput>) {
    return this.client.request<T.ConfigStoreGradePostResponse, T.ConfigStoreGradePostInput>({ ...options, method: "POST", url: `/api/v1/config/grades`, data: data });
  }
  /**
   * Performs the show grade operation for the config capability.
   * Calls `GET /api/v1/config/grades/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:read.
   */
  configShowGradeGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ConfigShowGradeGetResponse>({ ...options, method: "GET", url: `/api/v1/config/grades/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update grade operation for the config capability.
   * Calls `PATCH /api/v1/config/grades/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:update.
   */
  configUpdateGradePatch(id: Identifier, data: T.ConfigUpdateGradePatchInput, options?: RequestOptions<T.ConfigUpdateGradePatchInput>) {
    return this.client.request<T.ConfigUpdateGradePatchResponse, T.ConfigUpdateGradePatchInput>({ ...options, method: "PATCH", url: `/api/v1/config/grades/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index text template operation for the config capability.
   * Calls `GET /api/v1/config/text-templates` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:read.
   */
  configIndexTextTemplateGet(params?: T.ConfigIndexTextTemplateGetQuery, options?: RequestOptions) {
    return this.client.request<T.ConfigIndexTextTemplateGetResponse>({ ...options, method: "GET", url: `/api/v1/config/text-templates`, params });
  }
  /**
   * Performs the store text template operation for the config capability.
   * Calls `POST /api/v1/config/text-templates` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:create.
   */
  configStoreTextTemplatePost(data: T.ConfigStoreTextTemplatePostInput, options?: RequestOptions<T.ConfigStoreTextTemplatePostInput>) {
    return this.client.request<T.ConfigStoreTextTemplatePostResponse, T.ConfigStoreTextTemplatePostInput>({ ...options, method: "POST", url: `/api/v1/config/text-templates`, data: data });
  }
  /**
   * Performs the show text template operation for the config capability.
   * Calls `GET /api/v1/config/text-templates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:read.
   */
  configShowTextTemplateGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ConfigShowTextTemplateGetResponse>({ ...options, method: "GET", url: `/api/v1/config/text-templates/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update text template operation for the config capability.
   * Calls `PATCH /api/v1/config/text-templates/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:update.
   */
  configUpdateTextTemplatePatch(id: Identifier, data: T.ConfigUpdateTextTemplatePatchInput, options?: RequestOptions<T.ConfigUpdateTextTemplatePatchInput>) {
    return this.client.request<T.ConfigUpdateTextTemplatePatchResponse, T.ConfigUpdateTextTemplatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/config/text-templates/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index weekend operation for the config capability.
   * Calls `GET /api/v1/config/weekends` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:read.
   */
  configIndexWeekendGet(params?: T.ConfigIndexWeekendGetQuery, options?: RequestOptions) {
    return this.client.request<T.ConfigIndexWeekendGetResponse>({ ...options, method: "GET", url: `/api/v1/config/weekends`, params });
  }
  /**
   * Performs the store weekend operation for the config capability.
   * Calls `POST /api/v1/config/weekends` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:create.
   */
  configStoreWeekendPost(data: T.ConfigStoreWeekendPostInput, options?: RequestOptions<T.ConfigStoreWeekendPostInput>) {
    return this.client.request<T.ConfigStoreWeekendPostResponse, T.ConfigStoreWeekendPostInput>({ ...options, method: "POST", url: `/api/v1/config/weekends`, data: data });
  }
  /**
   * Performs the show weekend operation for the config capability.
   * Calls `GET /api/v1/config/weekends/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:read.
   */
  configShowWeekendGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ConfigShowWeekendGetResponse>({ ...options, method: "GET", url: `/api/v1/config/weekends/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update weekend operation for the config capability.
   * Calls `PATCH /api/v1/config/weekends/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:config:update.
   */
  configUpdateWeekendPatch(id: Identifier, data: T.ConfigUpdateWeekendPatchInput, options?: RequestOptions<T.ConfigUpdateWeekendPatchInput>) {
    return this.client.request<T.ConfigUpdateWeekendPatchResponse, T.ConfigUpdateWeekendPatchInput>({ ...options, method: "PATCH", url: `/api/v1/config/weekends/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index course operation for the course capability.
   * Calls `GET /api/v1/courses` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:read.
   */
  courseIndexCourseGet(params?: T.CourseIndexCourseGetQuery, options?: RequestOptions) {
    return this.client.request<T.CourseIndexCourseGetResponse>({ ...options, method: "GET", url: `/api/v1/courses`, params });
  }
  /**
   * Performs the store course operation for the course capability.
   * Calls `POST /api/v1/courses` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:create.
   */
  courseStoreCoursePost(data: T.CourseStoreCoursePostInput, options?: RequestOptions<T.CourseStoreCoursePostInput>) {
    return this.client.request<T.CourseStoreCoursePostResponse, T.CourseStoreCoursePostInput>({ ...options, method: "POST", url: `/api/v1/courses`, data: data });
  }
  /**
   * Performs the index session operation for the course capability.
   * Calls `GET /api/v1/courses/{course_id}/sessions` through the shared IDP-aware Faiber client.
   * @param courseId Backend path identifier `course_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:read.
   */
  courseIndexSessionGet(courseId: Identifier, params?: T.CourseIndexSessionGetQuery, options?: RequestOptions) {
    return this.client.request<T.CourseIndexSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/courses/${encodeURIComponent(courseId)}/sessions`, params });
  }
  /**
   * Performs the store session operation for the course capability.
   * Calls `POST /api/v1/courses/{course_id}/sessions` through the shared IDP-aware Faiber client.
   * @param courseId Backend path identifier `course_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:create.
   */
  courseStoreSessionPost(courseId: Identifier, data: T.CourseStoreSessionPostInput, options?: RequestOptions<T.CourseStoreSessionPostInput>) {
    return this.client.request<T.CourseStoreSessionPostResponse, T.CourseStoreSessionPostInput>({ ...options, method: "POST", url: `/api/v1/courses/${encodeURIComponent(courseId)}/sessions`, data: data });
  }
  /**
   * Performs the destroy session operation for the course capability.
   * Calls `DELETE /api/v1/courses/{course_id}/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param courseId Backend path identifier `course_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:delete.
   */
  courseDestroySessionDelete(courseId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CourseDestroySessionDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/courses/${encodeURIComponent(courseId)}/sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show session operation for the course capability.
   * Calls `GET /api/v1/courses/{course_id}/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param courseId Backend path identifier `course_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:read.
   */
  courseShowSessionGet(courseId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CourseShowSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/courses/${encodeURIComponent(courseId)}/sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update session operation for the course capability.
   * Calls `PATCH /api/v1/courses/{course_id}/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param courseId Backend path identifier `course_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:update.
   */
  courseUpdateSessionPatch(courseId: Identifier, id: Identifier, data: T.CourseUpdateSessionPatchInput, options?: RequestOptions<T.CourseUpdateSessionPatchInput>) {
    return this.client.request<T.CourseUpdateSessionPatchResponse, T.CourseUpdateSessionPatchInput>({ ...options, method: "PATCH", url: `/api/v1/courses/${encodeURIComponent(courseId)}/sessions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the destroy course operation for the course capability.
   * Calls `DELETE /api/v1/courses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:delete.
   */
  courseDestroyCourseDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CourseDestroyCourseDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/courses/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show course operation for the course capability.
   * Calls `GET /api/v1/courses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:read.
   */
  courseShowCourseGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CourseShowCourseGetResponse>({ ...options, method: "GET", url: `/api/v1/courses/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update course operation for the course capability.
   * Calls `PATCH /api/v1/courses/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:update.
   */
  courseUpdateCoursePatch(id: Identifier, data: T.CourseUpdateCoursePatchInput, options?: RequestOptions<T.CourseUpdateCoursePatchInput>) {
    return this.client.request<T.CourseUpdateCoursePatchResponse, T.CourseUpdateCoursePatchInput>({ ...options, method: "PATCH", url: `/api/v1/courses/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index category operation for the course capability.
   * Calls `GET /api/v1/courses/categories` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:read.
   */
  courseIndexCategoryGet(params?: T.CourseIndexCategoryGetQuery, options?: RequestOptions) {
    return this.client.request<T.CourseIndexCategoryGetResponse>({ ...options, method: "GET", url: `/api/v1/courses/categories`, params });
  }
  /**
   * Performs the store category operation for the course capability.
   * Calls `POST /api/v1/courses/categories` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:create.
   */
  courseStoreCategoryPost(data: T.CourseStoreCategoryPostInput, options?: RequestOptions<T.CourseStoreCategoryPostInput>) {
    return this.client.request<T.CourseStoreCategoryPostResponse, T.CourseStoreCategoryPostInput>({ ...options, method: "POST", url: `/api/v1/courses/categories`, data: data });
  }
  /**
   * Performs the destroy category operation for the course capability.
   * Calls `DELETE /api/v1/courses/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:delete.
   */
  courseDestroyCategoryDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CourseDestroyCategoryDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/courses/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show category operation for the course capability.
   * Calls `GET /api/v1/courses/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:read.
   */
  courseShowCategoryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CourseShowCategoryGetResponse>({ ...options, method: "GET", url: `/api/v1/courses/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update category operation for the course capability.
   * Calls `PATCH /api/v1/courses/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:update.
   */
  courseUpdateCategoryPatch(id: Identifier, data: T.CourseUpdateCategoryPatchInput, options?: RequestOptions<T.CourseUpdateCategoryPatchInput>) {
    return this.client.request<T.CourseUpdateCategoryPatchResponse, T.CourseUpdateCategoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/courses/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index video section operation for the course capability.
   * Calls `GET /api/v1/courses/video-sections` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:read.
   */
  courseIndexVideoSectionGet(params?: T.CourseIndexVideoSectionGetQuery, options?: RequestOptions) {
    return this.client.request<T.CourseIndexVideoSectionGetResponse>({ ...options, method: "GET", url: `/api/v1/courses/video-sections`, params });
  }
  /**
   * Performs the store video section operation for the course capability.
   * Calls `POST /api/v1/courses/video-sections` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:create.
   */
  courseStoreVideoSectionPost(data: T.CourseStoreVideoSectionPostInput, options?: RequestOptions<T.CourseStoreVideoSectionPostInput>) {
    return this.client.request<T.CourseStoreVideoSectionPostResponse, T.CourseStoreVideoSectionPostInput>({ ...options, method: "POST", url: `/api/v1/courses/video-sections`, data: data });
  }
  /**
   * Performs the destroy video section operation for the course capability.
   * Calls `DELETE /api/v1/courses/video-sections/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:delete.
   */
  courseDestroyVideoSectionDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CourseDestroyVideoSectionDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/courses/video-sections/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show video section operation for the course capability.
   * Calls `GET /api/v1/courses/video-sections/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:read.
   */
  courseShowVideoSectionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CourseShowVideoSectionGetResponse>({ ...options, method: "GET", url: `/api/v1/courses/video-sections/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update video section operation for the course capability.
   * Calls `PATCH /api/v1/courses/video-sections/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:update.
   */
  courseUpdateVideoSectionPatch(id: Identifier, data: T.CourseUpdateVideoSectionPatchInput, options?: RequestOptions<T.CourseUpdateVideoSectionPatchInput>) {
    return this.client.request<T.CourseUpdateVideoSectionPatchResponse, T.CourseUpdateVideoSectionPatchInput>({ ...options, method: "PATCH", url: `/api/v1/courses/video-sections/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index operation for the dashboard capability.
   * Calls `GET /api/v1/dashboard` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:dashboard:read.
   */
  dashboardIndexGet(options?: RequestOptions) {
    return this.client.request<T.DashboardIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/dashboard` });
  }
  /**
   * Performs the integration operation for the docs capability.
   * Calls `GET /api/v1/docs/integration` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:docs:read.
   */
  docsIntegrationGet(options?: RequestOptions) {
    return this.client.request<T.DocsIntegrationGetResponse>({ ...options, method: "GET", url: `/api/v1/docs/integration` });
  }
  /**
   * Performs the index event operation for the event capability.
   * Calls `GET /api/v1/events` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:event:read.
   */
  eventIndexEventGet(params?: T.EventIndexEventGetQuery, options?: RequestOptions) {
    return this.client.request<T.EventIndexEventGetResponse>({ ...options, method: "GET", url: `/api/v1/events`, params });
  }
  /**
   * Performs the store event operation for the event capability.
   * Calls `POST /api/v1/events` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:event:create.
   */
  eventStoreEventPost(data: T.EventStoreEventPostInput, options?: RequestOptions<T.EventStoreEventPostInput>) {
    return this.client.request<T.EventStoreEventPostResponse, T.EventStoreEventPostInput>({ ...options, method: "POST", url: `/api/v1/events`, data: data });
  }
  /**
   * Performs the index user operation for the event capability.
   * Calls `GET /api/v1/events/{event_id}/users` through the shared IDP-aware Faiber client.
   * @param eventId Backend path identifier `event_id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:event:read.
   */
  eventIndexUserGet(eventId: Identifier, params?: T.EventIndexUserGetQuery, options?: RequestOptions) {
    return this.client.request<T.EventIndexUserGetResponse>({ ...options, method: "GET", url: `/api/v1/events/${encodeURIComponent(eventId)}/users`, params });
  }
  /**
   * Performs the store user operation for the event capability.
   * Calls `POST /api/v1/events/{event_id}/users` through the shared IDP-aware Faiber client.
   * @param eventId Backend path identifier `event_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:event:create.
   */
  eventStoreUserPost(eventId: Identifier, data: T.EventStoreUserPostInput, options?: RequestOptions<T.EventStoreUserPostInput>) {
    return this.client.request<T.EventStoreUserPostResponse, T.EventStoreUserPostInput>({ ...options, method: "POST", url: `/api/v1/events/${encodeURIComponent(eventId)}/users`, data: data });
  }
  /**
   * Performs the show user operation for the event capability.
   * Calls `GET /api/v1/events/{event_id}/users/{id}` through the shared IDP-aware Faiber client.
   * @param eventId Backend path identifier `event_id`.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:event:read.
   */
  eventShowUserGet(eventId: Identifier, id: Identifier, options?: RequestOptions) {
    return this.client.request<T.EventShowUserGetResponse>({ ...options, method: "GET", url: `/api/v1/events/${encodeURIComponent(eventId)}/users/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update user operation for the event capability.
   * Calls `PATCH /api/v1/events/{event_id}/users/{id}` through the shared IDP-aware Faiber client.
   * @param eventId Backend path identifier `event_id`.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:event:update.
   */
  eventUpdateUserPatch(eventId: Identifier, id: Identifier, data: T.EventUpdateUserPatchInput, options?: RequestOptions<T.EventUpdateUserPatchInput>) {
    return this.client.request<T.EventUpdateUserPatchResponse, T.EventUpdateUserPatchInput>({ ...options, method: "PATCH", url: `/api/v1/events/${encodeURIComponent(eventId)}/users/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the show event operation for the event capability.
   * Calls `GET /api/v1/events/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:event:read.
   */
  eventShowEventGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.EventShowEventGetResponse>({ ...options, method: "GET", url: `/api/v1/events/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update event operation for the event capability.
   * Calls `PATCH /api/v1/events/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:event:update.
   */
  eventUpdateEventPatch(id: Identifier, data: T.EventUpdateEventPatchInput, options?: RequestOptions<T.EventUpdateEventPatchInput>) {
    return this.client.request<T.EventUpdateEventPatchResponse, T.EventUpdateEventPatchInput>({ ...options, method: "PATCH", url: `/api/v1/events/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index session operation for the event capability.
   * Calls `GET /api/v1/events/sessions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:event:read.
   */
  eventIndexSessionGet(params?: T.EventIndexSessionGetQuery, options?: RequestOptions) {
    return this.client.request<T.EventIndexSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/events/sessions`, params });
  }
  /**
   * Performs the store session operation for the event capability.
   * Calls `POST /api/v1/events/sessions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:event:create.
   */
  eventStoreSessionPost(data: T.EventStoreSessionPostInput, options?: RequestOptions<T.EventStoreSessionPostInput>) {
    return this.client.request<T.EventStoreSessionPostResponse, T.EventStoreSessionPostInput>({ ...options, method: "POST", url: `/api/v1/events/sessions`, data: data });
  }
  /**
   * Performs the show session operation for the event capability.
   * Calls `GET /api/v1/events/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:event:read.
   */
  eventShowSessionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.EventShowSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/events/sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update session operation for the event capability.
   * Calls `PATCH /api/v1/events/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:event:update.
   */
  eventUpdateSessionPatch(id: Identifier, data: T.EventUpdateSessionPatchInput, options?: RequestOptions<T.EventUpdateSessionPatchInput>) {
    return this.client.request<T.EventUpdateSessionPatchResponse, T.EventUpdateSessionPatchInput>({ ...options, method: "PATCH", url: `/api/v1/events/sessions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index exam operation for the exam capability.
   * Calls `GET /api/v1/exams` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:exam:read.
   */
  examIndexExamGet(params?: T.ExamIndexExamGetQuery, options?: RequestOptions) {
    return this.client.request<T.ExamIndexExamGetResponse>({ ...options, method: "GET", url: `/api/v1/exams`, params });
  }
  /**
   * Performs the store exam operation for the exam capability.
   * Calls `POST /api/v1/exams` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:exam:create.
   */
  examStoreExamPost(data: T.ExamStoreExamPostInput, options?: RequestOptions<T.ExamStoreExamPostInput>) {
    return this.client.request<T.ExamStoreExamPostResponse, T.ExamStoreExamPostInput>({ ...options, method: "POST", url: `/api/v1/exams`, data: data });
  }
  /**
   * Performs the destroy exam operation for the exam capability.
   * Calls `DELETE /api/v1/exams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:exam:delete.
   */
  examDestroyExamDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamDestroyExamDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/exams/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show exam operation for the exam capability.
   * Calls `GET /api/v1/exams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:exam:read.
   */
  examShowExamGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamShowExamGetResponse>({ ...options, method: "GET", url: `/api/v1/exams/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update exam operation for the exam capability.
   * Calls `PATCH /api/v1/exams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:exam:update.
   */
  examUpdateExamPatch(id: Identifier, data: T.ExamUpdateExamPatchInput, options?: RequestOptions<T.ExamUpdateExamPatchInput>) {
    return this.client.request<T.ExamUpdateExamPatchResponse, T.ExamUpdateExamPatchInput>({ ...options, method: "PATCH", url: `/api/v1/exams/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index question operation for the exam capability.
   * Calls `GET /api/v1/exams/questions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:exam:read.
   */
  examIndexQuestionGet(params?: T.ExamIndexQuestionGetQuery, options?: RequestOptions) {
    return this.client.request<T.ExamIndexQuestionGetResponse>({ ...options, method: "GET", url: `/api/v1/exams/questions`, params });
  }
  /**
   * Performs the store question operation for the exam capability.
   * Calls `POST /api/v1/exams/questions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:exam:create.
   */
  examStoreQuestionPost(data: T.ExamStoreQuestionPostInput, options?: RequestOptions<T.ExamStoreQuestionPostInput>) {
    return this.client.request<T.ExamStoreQuestionPostResponse, T.ExamStoreQuestionPostInput>({ ...options, method: "POST", url: `/api/v1/exams/questions`, data: data });
  }
  /**
   * Performs the destroy question operation for the exam capability.
   * Calls `DELETE /api/v1/exams/questions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:exam:delete.
   */
  examDestroyQuestionDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamDestroyQuestionDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/exams/questions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show question operation for the exam capability.
   * Calls `GET /api/v1/exams/questions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:exam:read.
   */
  examShowQuestionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamShowQuestionGetResponse>({ ...options, method: "GET", url: `/api/v1/exams/questions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update question operation for the exam capability.
   * Calls `PATCH /api/v1/exams/questions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:exam:update.
   */
  examUpdateQuestionPatch(id: Identifier, data: T.ExamUpdateQuestionPatchInput, options?: RequestOptions<T.ExamUpdateQuestionPatchInput>) {
    return this.client.request<T.ExamUpdateQuestionPatchResponse, T.ExamUpdateQuestionPatchInput>({ ...options, method: "PATCH", url: `/api/v1/exams/questions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index session operation for the exam capability.
   * Calls `GET /api/v1/exams/sessions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:exam:read.
   */
  examIndexSessionGet(params?: T.ExamIndexSessionGetQuery, options?: RequestOptions) {
    return this.client.request<T.ExamIndexSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/exams/sessions`, params });
  }
  /**
   * Performs the store session operation for the exam capability.
   * Calls `POST /api/v1/exams/sessions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:exam:create.
   */
  examStoreSessionPost(data: T.ExamStoreSessionPostInput, options?: RequestOptions<T.ExamStoreSessionPostInput>) {
    return this.client.request<T.ExamStoreSessionPostResponse, T.ExamStoreSessionPostInput>({ ...options, method: "POST", url: `/api/v1/exams/sessions`, data: data });
  }
  /**
   * Performs the show session operation for the exam capability.
   * Calls `GET /api/v1/exams/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:exam:read.
   */
  examShowSessionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ExamShowSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/exams/sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update session operation for the exam capability.
   * Calls `PATCH /api/v1/exams/sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:exam:update.
   */
  examUpdateSessionPatch(id: Identifier, data: T.ExamUpdateSessionPatchInput, options?: RequestOptions<T.ExamUpdateSessionPatchInput>) {
    return this.client.request<T.ExamUpdateSessionPatchResponse, T.ExamUpdateSessionPatchInput>({ ...options, method: "PATCH", url: `/api/v1/exams/sessions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index homework operation for the homework capability.
   * Calls `GET /api/v1/homeworks` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:homework:read.
   */
  homeworkIndexHomeworkGet(params?: T.HomeworkIndexHomeworkGetQuery, options?: RequestOptions) {
    return this.client.request<T.HomeworkIndexHomeworkGetResponse>({ ...options, method: "GET", url: `/api/v1/homeworks`, params });
  }
  /**
   * Performs the store homework operation for the homework capability.
   * Calls `POST /api/v1/homeworks` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:homework:create.
   */
  homeworkStoreHomeworkPost(data: T.HomeworkStoreHomeworkPostInput, options?: RequestOptions<T.HomeworkStoreHomeworkPostInput>) {
    return this.client.request<T.HomeworkStoreHomeworkPostResponse, T.HomeworkStoreHomeworkPostInput>({ ...options, method: "POST", url: `/api/v1/homeworks`, data: data });
  }
  /**
   * Performs the show homework operation for the homework capability.
   * Calls `GET /api/v1/homeworks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:homework:read.
   */
  homeworkShowHomeworkGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.HomeworkShowHomeworkGetResponse>({ ...options, method: "GET", url: `/api/v1/homeworks/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update homework operation for the homework capability.
   * Calls `PATCH /api/v1/homeworks/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:homework:update.
   */
  homeworkUpdateHomeworkPatch(id: Identifier, data: T.HomeworkUpdateHomeworkPatchInput, options?: RequestOptions<T.HomeworkUpdateHomeworkPatchInput>) {
    return this.client.request<T.HomeworkUpdateHomeworkPatchResponse, T.HomeworkUpdateHomeworkPatchInput>({ ...options, method: "PATCH", url: `/api/v1/homeworks/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index assignment operation for the homework capability.
   * Calls `GET /api/v1/homeworks/assignments` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:homework:read.
   */
  homeworkIndexAssignmentGet(params?: T.HomeworkIndexAssignmentGetQuery, options?: RequestOptions) {
    return this.client.request<T.HomeworkIndexAssignmentGetResponse>({ ...options, method: "GET", url: `/api/v1/homeworks/assignments`, params });
  }
  /**
   * Performs the store assignment operation for the homework capability.
   * Calls `POST /api/v1/homeworks/assignments` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:homework:create.
   */
  homeworkStoreAssignmentPost(data: T.HomeworkStoreAssignmentPostInput, options?: RequestOptions<T.HomeworkStoreAssignmentPostInput>) {
    return this.client.request<T.HomeworkStoreAssignmentPostResponse, T.HomeworkStoreAssignmentPostInput>({ ...options, method: "POST", url: `/api/v1/homeworks/assignments`, data: data });
  }
  /**
   * Performs the show assignment operation for the homework capability.
   * Calls `GET /api/v1/homeworks/assignments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:homework:read.
   */
  homeworkShowAssignmentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.HomeworkShowAssignmentGetResponse>({ ...options, method: "GET", url: `/api/v1/homeworks/assignments/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update assignment operation for the homework capability.
   * Calls `PATCH /api/v1/homeworks/assignments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:homework:update.
   */
  homeworkUpdateAssignmentPatch(id: Identifier, data: T.HomeworkUpdateAssignmentPatchInput, options?: RequestOptions<T.HomeworkUpdateAssignmentPatchInput>) {
    return this.client.request<T.HomeworkUpdateAssignmentPatchResponse, T.HomeworkUpdateAssignmentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/homeworks/assignments/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index question operation for the homework capability.
   * Calls `GET /api/v1/homeworks/questions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:homework:read.
   */
  homeworkIndexQuestionGet(params?: T.HomeworkIndexQuestionGetQuery, options?: RequestOptions) {
    return this.client.request<T.HomeworkIndexQuestionGetResponse>({ ...options, method: "GET", url: `/api/v1/homeworks/questions`, params });
  }
  /**
   * Performs the store question operation for the homework capability.
   * Calls `POST /api/v1/homeworks/questions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:homework:create.
   */
  homeworkStoreQuestionPost(data: T.HomeworkStoreQuestionPostInput, options?: RequestOptions<T.HomeworkStoreQuestionPostInput>) {
    return this.client.request<T.HomeworkStoreQuestionPostResponse, T.HomeworkStoreQuestionPostInput>({ ...options, method: "POST", url: `/api/v1/homeworks/questions`, data: data });
  }
  /**
   * Performs the show question operation for the homework capability.
   * Calls `GET /api/v1/homeworks/questions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:homework:read.
   */
  homeworkShowQuestionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.HomeworkShowQuestionGetResponse>({ ...options, method: "GET", url: `/api/v1/homeworks/questions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update question operation for the homework capability.
   * Calls `PATCH /api/v1/homeworks/questions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:homework:update.
   */
  homeworkUpdateQuestionPatch(id: Identifier, data: T.HomeworkUpdateQuestionPatchInput, options?: RequestOptions<T.HomeworkUpdateQuestionPatchInput>) {
    return this.client.request<T.HomeworkUpdateQuestionPatchResponse, T.HomeworkUpdateQuestionPatchInput>({ ...options, method: "PATCH", url: `/api/v1/homeworks/questions/${encodeURIComponent(id)}`, data: data });
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
   * Performs the index category operation for the interactive capability.
   * Calls `GET /api/v1/interactive/categories` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:interactive:read.
   */
  interactiveIndexCategoryGet(params?: T.InteractiveIndexCategoryGetQuery, options?: RequestOptions) {
    return this.client.request<T.InteractiveIndexCategoryGetResponse>({ ...options, method: "GET", url: `/api/v1/interactive/categories`, params });
  }
  /**
   * Performs the store category operation for the interactive capability.
   * Calls `POST /api/v1/interactive/categories` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:interactive:create.
   */
  interactiveStoreCategoryPost(data: T.InteractiveStoreCategoryPostInput, options?: RequestOptions<T.InteractiveStoreCategoryPostInput>) {
    return this.client.request<T.InteractiveStoreCategoryPostResponse, T.InteractiveStoreCategoryPostInput>({ ...options, method: "POST", url: `/api/v1/interactive/categories`, data: data });
  }
  /**
   * Performs the show category operation for the interactive capability.
   * Calls `GET /api/v1/interactive/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:interactive:read.
   */
  interactiveShowCategoryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InteractiveShowCategoryGetResponse>({ ...options, method: "GET", url: `/api/v1/interactive/categories/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update category operation for the interactive capability.
   * Calls `PATCH /api/v1/interactive/categories/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:interactive:update.
   */
  interactiveUpdateCategoryPatch(id: Identifier, data: T.InteractiveUpdateCategoryPatchInput, options?: RequestOptions<T.InteractiveUpdateCategoryPatchInput>) {
    return this.client.request<T.InteractiveUpdateCategoryPatchResponse, T.InteractiveUpdateCategoryPatchInput>({ ...options, method: "PATCH", url: `/api/v1/interactive/categories/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index classroom session operation for the interactive capability.
   * Calls `GET /api/v1/interactive/classroom-sessions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:interactive:read.
   */
  interactiveIndexClassroomSessionGet(params?: T.InteractiveIndexClassroomSessionGetQuery, options?: RequestOptions) {
    return this.client.request<T.InteractiveIndexClassroomSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/interactive/classroom-sessions`, params });
  }
  /**
   * Performs the store classroom session operation for the interactive capability.
   * Calls `POST /api/v1/interactive/classroom-sessions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:interactive:create.
   */
  interactiveStoreClassroomSessionPost(data: T.InteractiveStoreClassroomSessionPostInput, options?: RequestOptions<T.InteractiveStoreClassroomSessionPostInput>) {
    return this.client.request<T.InteractiveStoreClassroomSessionPostResponse, T.InteractiveStoreClassroomSessionPostInput>({ ...options, method: "POST", url: `/api/v1/interactive/classroom-sessions`, data: data });
  }
  /**
   * Performs the show classroom session operation for the interactive capability.
   * Calls `GET /api/v1/interactive/classroom-sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:interactive:read.
   */
  interactiveShowClassroomSessionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InteractiveShowClassroomSessionGetResponse>({ ...options, method: "GET", url: `/api/v1/interactive/classroom-sessions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update classroom session operation for the interactive capability.
   * Calls `PATCH /api/v1/interactive/classroom-sessions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:interactive:update.
   */
  interactiveUpdateClassroomSessionPatch(id: Identifier, data: T.InteractiveUpdateClassroomSessionPatchInput, options?: RequestOptions<T.InteractiveUpdateClassroomSessionPatchInput>) {
    return this.client.request<T.InteractiveUpdateClassroomSessionPatchResponse, T.InteractiveUpdateClassroomSessionPatchInput>({ ...options, method: "PATCH", url: `/api/v1/interactive/classroom-sessions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index content operation for the interactive capability.
   * Calls `GET /api/v1/interactive/content` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:interactive:read.
   */
  interactiveIndexContentGet(params?: T.InteractiveIndexContentGetQuery, options?: RequestOptions) {
    return this.client.request<T.InteractiveIndexContentGetResponse>({ ...options, method: "GET", url: `/api/v1/interactive/content`, params });
  }
  /**
   * Performs the store content operation for the interactive capability.
   * Calls `POST /api/v1/interactive/content` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:interactive:create.
   */
  interactiveStoreContentPost(data: T.InteractiveStoreContentPostInput, options?: RequestOptions<T.InteractiveStoreContentPostInput>) {
    return this.client.request<T.InteractiveStoreContentPostResponse, T.InteractiveStoreContentPostInput>({ ...options, method: "POST", url: `/api/v1/interactive/content`, data: data });
  }
  /**
   * Performs the show content operation for the interactive capability.
   * Calls `GET /api/v1/interactive/content/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:interactive:read.
   */
  interactiveShowContentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.InteractiveShowContentGetResponse>({ ...options, method: "GET", url: `/api/v1/interactive/content/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update content operation for the interactive capability.
   * Calls `PATCH /api/v1/interactive/content/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:interactive:update.
   */
  interactiveUpdateContentPatch(id: Identifier, data: T.InteractiveUpdateContentPatchInput, options?: RequestOptions<T.InteractiveUpdateContentPatchInput>) {
    return this.client.request<T.InteractiveUpdateContentPatchResponse, T.InteractiveUpdateContentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/interactive/content/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index invitation operation for the ops capability.
   * Calls `GET /api/v1/invitations` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:read.
   */
  opsIndexInvitationGet(params?: T.OpsIndexInvitationGetQuery, options?: RequestOptions) {
    return this.client.request<T.OpsIndexInvitationGetResponse>({ ...options, method: "GET", url: `/api/v1/invitations`, params });
  }
  /**
   * Performs the store invitation operation for the ops capability.
   * Calls `POST /api/v1/invitations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:create.
   */
  opsStoreInvitationPost(data: T.OpsStoreInvitationPostInput, options?: RequestOptions<T.OpsStoreInvitationPostInput>) {
    return this.client.request<T.OpsStoreInvitationPostResponse, T.OpsStoreInvitationPostInput>({ ...options, method: "POST", url: `/api/v1/invitations`, data: data });
  }
  /**
   * Performs the show invitation operation for the ops capability.
   * Calls `GET /api/v1/invitations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:read.
   */
  opsShowInvitationGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OpsShowInvitationGetResponse>({ ...options, method: "GET", url: `/api/v1/invitations/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update invitation operation for the ops capability.
   * Calls `PATCH /api/v1/invitations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:update.
   */
  opsUpdateInvitationPatch(id: Identifier, data: T.OpsUpdateInvitationPatchInput, options?: RequestOptions<T.OpsUpdateInvitationPatchInput>) {
    return this.client.request<T.OpsUpdateInvitationPatchResponse, T.OpsUpdateInvitationPatchInput>({ ...options, method: "PATCH", url: `/api/v1/invitations/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the upload image operation for the media capability.
   * Calls `POST /api/v1/media/images` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:update.
   */
  mediaUploadImagePost(data: T.MediaUploadImagePostInput, options?: RequestOptions<T.MediaUploadImagePostInput>) {
    return this.client.request<T.MediaUploadImagePostResponse, T.MediaUploadImagePostInput>({ ...options, method: "POST", url: `/api/v1/media/images`, data: data });
  }
  /**
   * Performs the download image operation for the media capability.
   * Calls `GET /api/v1/media/images/{filename}` through the shared IDP-aware Faiber client.
   * @param filename Backend path identifier `filename`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:course:read.
   */
  mediaDownloadImageGet(filename: Identifier, options?: RequestOptions) {
    return this.client.request<T.MediaDownloadImageGetResponse>({ ...options, method: "GET", url: `/api/v1/media/images/${encodeURIComponent(filename)}` });
  }
  /**
   * Performs the classrooms operation for the report capability.
   * Calls `GET /api/v1/reports/classrooms` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:report:read.
   */
  reportClassroomsGet(options?: RequestOptions) {
    return this.client.request<T.ReportClassroomsGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/classrooms` });
  }
  /**
   * Performs the students operation for the report capability.
   * Calls `GET /api/v1/reports/students` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:report:read.
   */
  reportStudentsGet(options?: RequestOptions) {
    return this.client.request<T.ReportStudentsGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/students` });
  }
  /**
   * Performs the teachers operation for the report capability.
   * Calls `GET /api/v1/reports/teachers` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:report:read.
   */
  reportTeachersGet(options?: RequestOptions) {
    return this.client.request<T.ReportTeachersGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/teachers` });
  }
  /**
   * Performs the check licence operation for the service capability.
   * Calls `GET /api/v1/service/licence/check` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  serviceCheckLicenceGet(params?: T.ServiceCheckLicenceGetQuery, options?: RequestOptions) {
    return this.client.request<T.ServiceCheckLicenceGetResponse>({ ...options, method: "GET", url: `/api/v1/service/licence/check`, params });
  }
  /**
   * Performs the index support interaction operation for the ops capability.
   * Calls `GET /api/v1/support-interactions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:read.
   */
  opsIndexSupportInteractionGet(params?: T.OpsIndexSupportInteractionGetQuery, options?: RequestOptions) {
    return this.client.request<T.OpsIndexSupportInteractionGetResponse>({ ...options, method: "GET", url: `/api/v1/support-interactions`, params });
  }
  /**
   * Performs the store support interaction operation for the ops capability.
   * Calls `POST /api/v1/support-interactions` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:create.
   */
  opsStoreSupportInteractionPost(data: T.OpsStoreSupportInteractionPostInput, options?: RequestOptions<T.OpsStoreSupportInteractionPostInput>) {
    return this.client.request<T.OpsStoreSupportInteractionPostResponse, T.OpsStoreSupportInteractionPostInput>({ ...options, method: "POST", url: `/api/v1/support-interactions`, data: data });
  }
  /**
   * Performs the show support interaction operation for the ops capability.
   * Calls `GET /api/v1/support-interactions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:read.
   */
  opsShowSupportInteractionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OpsShowSupportInteractionGetResponse>({ ...options, method: "GET", url: `/api/v1/support-interactions/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update support interaction operation for the ops capability.
   * Calls `PATCH /api/v1/support-interactions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:update.
   */
  opsUpdateSupportInteractionPatch(id: Identifier, data: T.OpsUpdateSupportInteractionPatchInput, options?: RequestOptions<T.OpsUpdateSupportInteractionPatchInput>) {
    return this.client.request<T.OpsUpdateSupportInteractionPatchResponse, T.OpsUpdateSupportInteractionPatchInput>({ ...options, method: "PATCH", url: `/api/v1/support-interactions/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the index worktime operation for the ops capability.
   * Calls `GET /api/v1/worktime` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:read.
   */
  opsIndexWorktimeGet(params?: T.OpsIndexWorktimeGetQuery, options?: RequestOptions) {
    return this.client.request<T.OpsIndexWorktimeGetResponse>({ ...options, method: "GET", url: `/api/v1/worktime`, params });
  }
  /**
   * Performs the store worktime operation for the ops capability.
   * Calls `POST /api/v1/worktime` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:create.
   */
  opsStoreWorktimePost(data: T.OpsStoreWorktimePostInput, options?: RequestOptions<T.OpsStoreWorktimePostInput>) {
    return this.client.request<T.OpsStoreWorktimePostResponse, T.OpsStoreWorktimePostInput>({ ...options, method: "POST", url: `/api/v1/worktime`, data: data });
  }
  /**
   * Performs the show worktime operation for the ops capability.
   * Calls `GET /api/v1/worktime/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:read.
   */
  opsShowWorktimeGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.OpsShowWorktimeGetResponse>({ ...options, method: "GET", url: `/api/v1/worktime/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update worktime operation for the ops capability.
   * Calls `PATCH /api/v1/worktime/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: lms:ops:update.
   */
  opsUpdateWorktimePatch(id: Identifier, data: T.OpsUpdateWorktimePatchInput, options?: RequestOptions<T.OpsUpdateWorktimePatchInput>) {
    return this.client.request<T.OpsUpdateWorktimePatchResponse, T.OpsUpdateWorktimePatchInput>({ ...options, method: "PATCH", url: `/api/v1/worktime/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the status route operation for the router capability.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerStatusRouteGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusRouteGetResponse>({ ...options, method: "GET", url: `/health` });
  }
}

