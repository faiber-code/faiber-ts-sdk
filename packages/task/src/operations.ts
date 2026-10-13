import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class TaskOperations extends ServiceApi {
  /**
   * Performs the openapi operation for the routes capability.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  workspaceQuery(options?: RequestOptions) {
    return this.client.request<T.RoutesOpenapiGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Performs the effective access operation for the routes capability.
   * Calls `GET /api/v1/access/effective` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesEffectiveAccessGet(params?: T.RoutesEffectiveAccessGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesEffectiveAccessGetResponse>({ ...options, method: "GET", url: `/api/v1/access/effective`, params });
  }
  /**
   * Performs the create agent proposal operation for the routes capability.
   * Calls `POST /api/v1/agent-proposals` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateAgentProposalPost(data: T.RoutesCreateAgentProposalPostInput, options?: RequestOptions<T.RoutesCreateAgentProposalPostInput>) {
    return this.client.request<T.RoutesCreateAgentProposalPostResponse, T.RoutesCreateAgentProposalPostInput>({ ...options, method: "POST", url: `/api/v1/agent-proposals`, data: data });
  }
  /**
   * Performs the approve agent proposal operation for the routes capability.
   * Calls `POST /api/v1/agent-proposals/{id}/approve` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesApproveAgentProposalPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesApproveAgentProposalPostResponse>({ ...options, method: "POST", url: `/api/v1/agent-proposals/${encodeURIComponent(id)}/approve` });
  }
  /**
   * Performs the query operation for the routes capability.
   * Calls `POST /api/v1/assistant/query` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesQueryPost(data: T.RoutesQueryPostInput, options?: RequestOptions<T.RoutesQueryPostInput>) {
    return this.client.request<T.RoutesQueryPostResponse, T.RoutesQueryPostInput>({ ...options, method: "POST", url: `/api/v1/assistant/query`, data: data });
  }
  /**
   * Performs the remove operation for the routes capability.
   * Calls `DELETE /api/v1/attachments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesRemoveDeleteApiV1AttachmentsId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRemoveDeleteApiV1AttachmentsIdResponse>({ ...options, method: "DELETE", url: `/api/v1/attachments/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the status operation for the routes capability.
   * Calls `GET /api/v1/attachments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesStatusGetApiV1AttachmentsId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesStatusGetApiV1AttachmentsIdResponse>({ ...options, method: "GET", url: `/api/v1/attachments/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the content operation for the routes capability.
   * Calls `PUT /api/v1/attachments/{id}/content` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesContentPut(id: Identifier, data: T.RoutesContentPutInput, options?: RequestOptions<T.RoutesContentPutInput>) {
    return this.client.request<T.RoutesContentPutResponse, T.RoutesContentPutInput>({ ...options, method: "PUT", url: `/api/v1/attachments/${encodeURIComponent(id)}/content`, data: data });
  }
  /**
   * Performs the download operation for the routes capability.
   * Calls `GET /api/v1/attachments/{id}/download` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesDownloadGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDownloadGetResponse>({ ...options, method: "GET", url: `/api/v1/attachments/${encodeURIComponent(id)}/download`, responseType: "arraybuffer" });
  }
  /**
   * Performs the config operation for the routes capability.
   * Calls `GET /api/v1/collaboration/config` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesConfigGetApiV1CollaborationConfig(options?: RequestOptions) {
    return this.client.request<T.RoutesConfigGetApiV1CollaborationConfigResponse>({ ...options, method: "GET", url: `/api/v1/collaboration/config` });
  }
  /**
   * Performs the events operation for the routes capability.
   * Calls `GET /api/v1/events` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesEventsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesEventsGetResponse>({ ...options, method: "GET", url: `/api/v1/events`, responseType: "stream" });
  }
  /**
   * Performs the use guest link operation for the routes capability.
   * Calls `POST /api/v1/guest-links/use` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesUseGuestLinkPost(data: T.RoutesUseGuestLinkPostInput, options?: RequestOptions<T.RoutesUseGuestLinkPostInput>) {
    return this.client.request<T.RoutesUseGuestLinkPostResponse, T.RoutesUseGuestLinkPostInput>({ ...options, method: "POST", url: `/api/v1/guest-links/use`, data: data });
  }
  /**
   * Performs the list operation for the routes capability.
   * Calls `GET /api/v1/internal/plans/gifts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  routesListGet(params?: T.RoutesListGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/plans/gifts`, params });
  }
  /**
   * Performs the create operation for the routes capability.
   * Calls `POST /api/v1/internal/plans/gifts` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  routesCreatePostApiV1InternalPlansGifts(data: T.RoutesCreatePostApiV1InternalPlansGiftsInput, options?: RequestOptions<T.RoutesCreatePostApiV1InternalPlansGiftsInput>) {
    return this.client.request<T.RoutesCreatePostApiV1InternalPlansGiftsResponse, T.RoutesCreatePostApiV1InternalPlansGiftsInput>({ ...options, method: "POST", url: `/api/v1/internal/plans/gifts`, data: data });
  }
  /**
   * Performs the show operation for the routes capability.
   * Calls `GET /api/v1/internal/plans/gifts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  routesShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/plans/gifts/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the routes capability.
   * Calls `PUT /api/v1/internal/plans/gifts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  routesUpdatePut(id: Identifier, data: T.RoutesUpdatePutInput, options?: RequestOptions<T.RoutesUpdatePutInput>) {
    return this.client.request<T.RoutesUpdatePutResponse, T.RoutesUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/internal/plans/gifts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the reserve internal operation for the routes capability.
   * Calls `POST /api/v1/internal/plans/memory-reservations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  routesReserveInternalPost(data: T.RoutesReserveInternalPostInput, options?: RequestOptions<T.RoutesReserveInternalPostInput>) {
    return this.client.request<T.RoutesReserveInternalPostResponse, T.RoutesReserveInternalPostInput>({ ...options, method: "POST", url: `/api/v1/internal/plans/memory-reservations`, data: data });
  }
  /**
   * Performs the settle internal operation for the routes capability.
   * Calls `POST /api/v1/internal/plans/memory-reservations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  routesSettleInternalPost(id: Identifier, data: T.RoutesSettleInternalPostInput, options?: RequestOptions<T.RoutesSettleInternalPostInput>) {
    return this.client.request<T.RoutesSettleInternalPostResponse, T.RoutesSettleInternalPostInput>({ ...options, method: "POST", url: `/api/v1/internal/plans/memory-reservations/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the reserve operation for the routes capability.
   * Calls `POST /api/v1/internal/plans/reservations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  routesReservePost(data: T.RoutesReservePostInput, options?: RequestOptions<T.RoutesReservePostInput>) {
    return this.client.request<T.RoutesReservePostResponse, T.RoutesReservePostInput>({ ...options, method: "POST", url: `/api/v1/internal/plans/reservations`, data: data });
  }
  /**
   * Performs the finish operation for the routes capability.
   * Calls `POST /api/v1/internal/plans/reservations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted backend service credential and tenant scope; not a public browser endpoint.
   */
  routesFinishPost(id: Identifier, data: T.RoutesFinishPostInput, options?: RequestOptions<T.RoutesFinishPostInput>) {
    return this.client.request<T.RoutesFinishPostResponse, T.RoutesFinishPostInput>({ ...options, method: "POST", url: `/api/v1/internal/plans/reservations/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the own operation for the routes capability.
   * Calls `GET /api/v1/memory-usage` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesOwnGet(options?: RequestOptions) {
    return this.client.request<T.RoutesOwnGetResponse>({ ...options, method: "GET", url: `/api/v1/memory-usage` });
  }
  /**
   * Performs the folders operation for the routes capability.
   * Calls `GET /api/v1/note-folders` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  workspaceFolders(params?: T.RoutesFoldersGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesFoldersGetResponse>({ ...options, method: "GET", url: `/api/v1/note-folders`, params });
  }
  /**
   * Performs the get operation for the routes capability.
   * Calls `GET /api/v1/note-imports/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGetGetApiV1NoteImportsId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1NoteImportsIdResponse>({ ...options, method: "GET", url: `/api/v1/note-imports/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the control operation for the routes capability.
   * Calls `POST /api/v1/note-imports/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesControlPost(id: Identifier, data: T.RoutesControlPostInput, options?: RequestOptions<T.RoutesControlPostInput>) {
    return this.client.request<T.RoutesControlPostResponse, T.RoutesControlPostInput>({ ...options, method: "POST", url: `/api/v1/note-imports/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the apply operation for the routes capability.
   * Calls `POST /api/v1/note-imports/{id}/apply` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesApplyPostApiV1NoteImportsIdApply(id: Identifier, data: T.RoutesApplyPostApiV1NoteImportsIdApplyInput, options?: RequestOptions<T.RoutesApplyPostApiV1NoteImportsIdApplyInput>) {
    return this.client.request<T.RoutesApplyPostApiV1NoteImportsIdApplyResponse, T.RoutesApplyPostApiV1NoteImportsIdApplyInput>({ ...options, method: "POST", url: `/api/v1/note-imports/${encodeURIComponent(id)}/apply`, data: data });
  }
  /**
   * Performs the cover operation for the routes capability.
   * Calls `PUT /api/v1/notes/{id}/cover` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCoverPut(id: Identifier, data: T.RoutesCoverPutInput, options?: RequestOptions<T.RoutesCoverPutInput>) {
    return this.client.request<T.RoutesCoverPutResponse, T.RoutesCoverPutInput>({ ...options, method: "PUT", url: `/api/v1/notes/${encodeURIComponent(id)}/cover`, data: data });
  }
  /**
   * Performs the document operation for the routes capability.
   * Calls `GET /api/v1/notes/{id}/document` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesDocumentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDocumentGetResponse>({ ...options, method: "GET", url: `/api/v1/notes/${encodeURIComponent(id)}/document` });
  }
  /**
   * Performs the update operation for the routes capability.
   * Calls `POST /api/v1/notes/{id}/document` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesUpdatePost(id: Identifier, data: T.RoutesUpdatePostInput, options?: RequestOptions<T.RoutesUpdatePostInput>) {
    return this.client.request<T.RoutesUpdatePostResponse, T.RoutesUpdatePostInput>({ ...options, method: "POST", url: `/api/v1/notes/${encodeURIComponent(id)}/document`, data: data });
  }
  /**
   * Performs the create operation for the routes capability.
   * Calls `POST /api/v1/notes/{id}/imports` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreatePostApiV1NotesIdImports(id: Identifier, data: T.RoutesCreatePostApiV1NotesIdImportsInput, options?: RequestOptions<T.RoutesCreatePostApiV1NotesIdImportsInput>) {
    return this.client.request<T.RoutesCreatePostApiV1NotesIdImportsResponse, T.RoutesCreatePostApiV1NotesIdImportsInput>({ ...options, method: "POST", url: `/api/v1/notes/${encodeURIComponent(id)}/imports`, data: data });
  }
  /**
   * Performs the status operation for the routes capability.
   * Calls `GET /api/v1/notes/{id}/indexing` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesStatusGetApiV1NotesIdIndexing(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesStatusGetApiV1NotesIdIndexingResponse>({ ...options, method: "GET", url: `/api/v1/notes/${encodeURIComponent(id)}/indexing` });
  }
  /**
   * Performs the retry operation for the routes capability.
   * Calls `POST /api/v1/notes/{id}/indexing` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesRetryPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRetryPostResponse>({ ...options, method: "POST", url: `/api/v1/notes/${encodeURIComponent(id)}/indexing` });
  }
  /**
   * Performs the get operation for the routes capability.
   * Calls `GET /api/v1/notes/{id}/media` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGetGetApiV1NotesIdMedia(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1NotesIdMediaResponse>({ ...options, method: "GET", url: `/api/v1/notes/${encodeURIComponent(id)}/media` });
  }
  /**
   * Performs the add operation for the routes capability.
   * Calls `POST /api/v1/notes/{id}/media` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesAddPost(id: Identifier, data: T.RoutesAddPostInput, options?: RequestOptions<T.RoutesAddPostInput>) {
    return this.client.request<T.RoutesAddPostResponse, T.RoutesAddPostInput>({ ...options, method: "POST", url: `/api/v1/notes/${encodeURIComponent(id)}/media`, data: data });
  }
  /**
   * Performs the remove operation for the routes capability.
   * Calls `DELETE /api/v1/notes/{id}/media/{attachment}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param attachment Backend path identifier `attachment`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesRemoveDeleteApiV1NotesIdMediaAttachment(id: Identifier, attachment: Identifier, data: T.RoutesRemoveDeleteApiV1NotesIdMediaAttachmentInput, options?: RequestOptions<T.RoutesRemoveDeleteApiV1NotesIdMediaAttachmentInput>) {
    return this.client.request<T.RoutesRemoveDeleteApiV1NotesIdMediaAttachmentResponse, T.RoutesRemoveDeleteApiV1NotesIdMediaAttachmentInput>({ ...options, method: "DELETE", url: `/api/v1/notes/${encodeURIComponent(id)}/media/${encodeURIComponent(attachment)}`, data: data });
  }
  /**
   * Performs the authorize operation for the routes capability.
   * Calls `POST /api/v1/notes/{id}/realtime/auth` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesAuthorizePost(id: Identifier, data: T.RoutesAuthorizePostInput, options?: RequestOptions<T.RoutesAuthorizePostInput>) {
    return this.client.request<T.RoutesAuthorizePostResponse, T.RoutesAuthorizePostInput>({ ...options, method: "POST", url: `/api/v1/notes/${encodeURIComponent(id)}/realtime/auth`, data: data });
  }
  /**
   * Performs the config operation for the routes capability.
   * Calls `GET /api/v1/notes/{id}/realtime/config` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesConfigGetApiV1NotesIdRealtimeConfig(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesConfigGetApiV1NotesIdRealtimeConfigResponse>({ ...options, method: "GET", url: `/api/v1/notes/${encodeURIComponent(id)}/realtime/config` });
  }
  /**
   * Performs the create operation for the routes capability.
   * Calls `POST /api/v1/notes/{id}/source-imports` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreatePostApiV1NotesIdSourceImports(id: Identifier, data: T.RoutesCreatePostApiV1NotesIdSourceImportsInput, options?: RequestOptions<T.RoutesCreatePostApiV1NotesIdSourceImportsInput>) {
    return this.client.request<T.RoutesCreatePostApiV1NotesIdSourceImportsResponse, T.RoutesCreatePostApiV1NotesIdSourceImportsInput>({ ...options, method: "POST", url: `/api/v1/notes/${encodeURIComponent(id)}/source-imports`, data: data });
  }
  /**
   * Performs the catalog operation for the routes capability.
   * Calls `GET /api/v1/notes/data/catalog` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCatalogGetApiV1NotesDataCatalog(options?: RequestOptions) {
    return this.client.request<T.RoutesCatalogGetApiV1NotesDataCatalogResponse>({ ...options, method: "GET", url: `/api/v1/notes/data/catalog` });
  }
  /**
   * Performs the search operation for the routes capability.
   * Calls `POST /api/v1/notes/knowledge/search` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesSearchPost(data: T.RoutesSearchPostInput, options?: RequestOptions<T.RoutesSearchPostInput>) {
    return this.client.request<T.RoutesSearchPostResponse, T.RoutesSearchPostInput>({ ...options, method: "POST", url: `/api/v1/notes/knowledge/search`, data: data });
  }
  /**
   * Performs the get preferences operation for the routes capability.
   * Calls `GET /api/v1/notification-preferences` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGetPreferencesGet(options?: RequestOptions) {
    return this.client.request<T.RoutesGetPreferencesGetResponse>({ ...options, method: "GET", url: `/api/v1/notification-preferences` });
  }
  /**
   * Performs the put preferences operation for the routes capability.
   * Calls `PUT /api/v1/notification-preferences` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesPutPreferencesPut(data: T.RoutesPutPreferencesPutInput, options?: RequestOptions<T.RoutesPutPreferencesPutInput>) {
    return this.client.request<T.RoutesPutPreferencesPutResponse, T.RoutesPutPreferencesPutInput>({ ...options, method: "PUT", url: `/api/v1/notification-preferences`, data: data });
  }
  /**
   * Performs the upsert performance policy operation for the routes capability.
   * Calls `PUT /api/v1/performance/policies` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesUpsertPerformancePolicyPut(data: T.RoutesUpsertPerformancePolicyPutInput, options?: RequestOptions<T.RoutesUpsertPerformancePolicyPutInput>) {
    return this.client.request<T.RoutesUpsertPerformancePolicyPutResponse, T.RoutesUpsertPerformancePolicyPutInput>({ ...options, method: "PUT", url: `/api/v1/performance/policies`, data: data });
  }
  /**
   * Performs the preferences operation for the routes capability.
   * Calls `GET /api/v1/planning-preferences` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  workspacePreferences(options?: RequestOptions) {
    return this.client.request<T.RoutesPreferencesGetResponse>({ ...options, method: "GET", url: `/api/v1/planning-preferences` });
  }
  /**
   * Performs the save preferences operation for the routes capability.
   * Calls `PUT /api/v1/planning-preferences` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  workspaceSavePreferences(data: T.RoutesSavePreferencesPutInput, options?: RequestOptions<T.RoutesSavePreferencesPutInput>) {
    return this.client.request<T.RoutesSavePreferencesPutResponse, T.RoutesSavePreferencesPutInput>({ ...options, method: "PUT", url: `/api/v1/planning-preferences`, data: data });
  }
  /**
   * Performs the get operation for the routes capability.
   * Calls `GET /api/v1/plans` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGetGetApiV1Plans(params?: T.RoutesGetGetApiV1PlansQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1PlansResponse>({ ...options, method: "GET", url: `/api/v1/plans`, params });
  }
  /**
   * Performs the income operation for the routes capability.
   * Calls `GET /api/v1/plans/admin/income` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesIncomeGet(params?: T.RoutesIncomeGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesIncomeGetResponse>({ ...options, method: "GET", url: `/api/v1/plans/admin/income`, params });
  }
  /**
   * Performs the configure operation for the routes capability.
   * Calls `PUT /api/v1/plans/admin/memory-limits` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesConfigurePut(data: T.RoutesConfigurePutInput, options?: RequestOptions<T.RoutesConfigurePutInput>) {
    return this.client.request<T.RoutesConfigurePutResponse, T.RoutesConfigurePutInput>({ ...options, method: "PUT", url: `/api/v1/plans/admin/memory-limits`, data: data });
  }
  /**
   * Performs the users operation for the routes capability.
   * Calls `GET /api/v1/plans/admin/users` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesUsersGet(params?: T.RoutesUsersGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesUsersGetResponse>({ ...options, method: "GET", url: `/api/v1/plans/admin/users`, params });
  }
  /**
   * Performs the checkout operation for the routes capability.
   * Calls `POST /api/v1/plans/checkout` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCheckoutPost(data: T.RoutesCheckoutPostInput, options?: RequestOptions<T.RoutesCheckoutPostInput>) {
    return this.client.request<T.RoutesCheckoutPostResponse, T.RoutesCheckoutPostInput>({ ...options, method: "POST", url: `/api/v1/plans/checkout`, data: data });
  }
  /**
   * Performs the redeem operation for the routes capability.
   * Calls `POST /api/v1/plans/gift` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesRedeemPost(data: T.RoutesRedeemPostInput, options?: RequestOptions<T.RoutesRedeemPostInput>) {
    return this.client.request<T.RoutesRedeemPostResponse, T.RoutesRedeemPostInput>({ ...options, method: "POST", url: `/api/v1/plans/gift`, data: data });
  }
  /**
   * Performs the gift operation for the routes capability.
   * Calls `POST /api/v1/plans/gift-tokens` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGiftPost(options?: RequestOptions) {
    return this.client.request<T.RoutesGiftPostResponse>({ ...options, method: "POST", url: `/api/v1/plans/gift-tokens` });
  }
  /**
   * Performs the catalog operation for the routes capability.
   * Calls `GET /api/v1/plans/memory-limits` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCatalogGetApiV1PlansMemoryLimits(options?: RequestOptions) {
    return this.client.request<T.RoutesCatalogGetApiV1PlansMemoryLimitsResponse>({ ...options, method: "GET", url: `/api/v1/plans/memory-limits` });
  }
  /**
   * Performs the reconcile operation for the routes capability.
   * Calls `POST /api/v1/plans/orders/{id}/reconcile` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesReconcilePost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesReconcilePostResponse>({ ...options, method: "POST", url: `/api/v1/plans/orders/${encodeURIComponent(id)}/reconcile` });
  }
  /**
   * Performs the point history operation for the routes capability.
   * Calls `GET /api/v1/points/history` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesPointHistoryGet(params?: T.RoutesPointHistoryGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesPointHistoryGetResponse>({ ...options, method: "GET", url: `/api/v1/points/history`, params });
  }
  /**
   * Performs the list projects operation for the routes capability.
   * Calls `GET /api/v1/projects` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListProjectsGet(params?: T.RoutesListProjectsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListProjectsGetResponse>({ ...options, method: "GET", url: `/api/v1/projects`, params });
  }
  /**
   * Performs the create project operation for the routes capability.
   * Calls `POST /api/v1/projects` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateProjectPost(data: T.RoutesCreateProjectPostInput, options?: RequestOptions<T.RoutesCreateProjectPostInput>) {
    return this.client.request<T.RoutesCreateProjectPostResponse, T.RoutesCreateProjectPostInput>({ ...options, method: "POST", url: `/api/v1/projects`, data: data });
  }
  /**
   * Performs the get project operation for the routes capability.
   * Calls `GET /api/v1/projects/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGetProjectGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetProjectGetResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update project operation for the routes capability.
   * Calls `PATCH /api/v1/projects/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesUpdateProjectPatch(id: Identifier, data: T.RoutesUpdateProjectPatchInput, options?: RequestOptions<T.RoutesUpdateProjectPatchInput>) {
    return this.client.request<T.RoutesUpdateProjectPatchResponse, T.RoutesUpdateProjectPatchInput>({ ...options, method: "PATCH", url: `/api/v1/projects/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the get operation for the routes capability.
   * Calls `GET /api/v1/projects/{id}/board-workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGetGetApiV1ProjectsIdBoardWorkflow(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1ProjectsIdBoardWorkflowResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/board-workflow` });
  }
  /**
   * Performs the put operation for the routes capability.
   * Calls `PUT /api/v1/projects/{id}/board-workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesPutPutApiV1ProjectsIdBoardWorkflow(id: Identifier, data: T.RoutesPutPutApiV1ProjectsIdBoardWorkflowInput, options?: RequestOptions<T.RoutesPutPutApiV1ProjectsIdBoardWorkflowInput>) {
    return this.client.request<T.RoutesPutPutApiV1ProjectsIdBoardWorkflowResponse, T.RoutesPutPutApiV1ProjectsIdBoardWorkflowInput>({ ...options, method: "PUT", url: `/api/v1/projects/${encodeURIComponent(id)}/board-workflow`, data: data });
  }
  /**
   * Performs the project checklists operation for the routes capability.
   * Calls `GET /api/v1/projects/{id}/checklists` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesProjectChecklistsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesProjectChecklistsGetResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/checklists` });
  }
  /**
   * Performs the grant project access operation for the routes capability.
   * Calls `POST /api/v1/projects/{id}/grants` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGrantProjectAccessPost(id: Identifier, data: T.RoutesGrantProjectAccessPostInput, options?: RequestOptions<T.RoutesGrantProjectAccessPostInput>) {
    return this.client.request<T.RoutesGrantProjectAccessPostResponse, T.RoutesGrantProjectAccessPostInput>({ ...options, method: "POST", url: `/api/v1/projects/${encodeURIComponent(id)}/grants`, data: data });
  }
  /**
   * Performs the members operation for the routes capability.
   * Calls `GET /api/v1/projects/{id}/members` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesMembersGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesMembersGetResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/members` });
  }
  /**
   * Performs the remove member operation for the routes capability.
   * Calls `DELETE /api/v1/projects/{id}/members/{user_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesRemoveMemberDelete(id: Identifier, userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRemoveMemberDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/projects/${encodeURIComponent(id)}/members/${encodeURIComponent(userId)}` });
  }
  /**
   * Performs the get operation for the routes capability.
   * Calls `GET /api/v1/projects/{id}/memory-usage` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGetGetApiV1ProjectsIdMemoryUsage(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1ProjectsIdMemoryUsageResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/memory-usage` });
  }
  /**
   * Performs the get operation for the routes capability.
   * Calls `GET /api/v1/projects/{id}/report` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGetGetApiV1ProjectsIdReport(id: Identifier, params?: T.RoutesGetGetApiV1ProjectsIdReportQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1ProjectsIdReportResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/report`, params });
  }
  /**
   * Performs the workflow states operation for the routes capability.
   * Calls `GET /api/v1/projects/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesWorkflowStatesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesWorkflowStatesGetResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/workflow` });
  }
  /**
   * Performs the ensure personal project operation for the routes capability.
   * Calls `POST /api/v1/projects/personal` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesEnsurePersonalProjectPost(options?: RequestOptions) {
    return this.client.request<T.RoutesEnsurePersonalProjectPostResponse>({ ...options, method: "POST", url: `/api/v1/projects/personal` });
  }
  /**
   * Performs the create shared project operation for the routes capability.
   * Calls `POST /api/v1/projects/shared` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateSharedProjectPost(data: T.RoutesCreateSharedProjectPostInput, options?: RequestOptions<T.RoutesCreateSharedProjectPostInput>) {
    return this.client.request<T.RoutesCreateSharedProjectPostResponse, T.RoutesCreateSharedProjectPostInput>({ ...options, method: "POST", url: `/api/v1/projects/shared`, data: data });
  }
  /**
   * Performs the report summary operation for the routes capability.
   * Calls `GET /api/v1/reports/summary` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesReportSummaryGet(params?: T.RoutesReportSummaryGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesReportSummaryGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/summary`, params });
  }
  /**
   * Performs the team monitoring operation for the routes capability.
   * Calls `GET /api/v1/reports/team-monitoring` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesTeamMonitoringGet(params?: T.RoutesTeamMonitoringGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesTeamMonitoringGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/team-monitoring`, params });
  }
  /**
   * Performs the propose operation for the routes capability.
   * Calls `POST /api/v1/review-proposals` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  workspacePropose(data: T.RoutesProposePostInput, options?: RequestOptions<T.RoutesProposePostInput>) {
    return this.client.request<T.RoutesProposePostResponse, T.RoutesProposePostInput>({ ...options, method: "POST", url: `/api/v1/review-proposals`, data: data });
  }
  /**
   * Performs the get operation for the routes capability.
   * Calls `GET /api/v1/review-proposals/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  workspaceProposal(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1ReviewProposalsIdResponse>({ ...options, method: "GET", url: `/api/v1/review-proposals/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the revise operation for the routes capability.
   * Calls `PUT /api/v1/review-proposals/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  workspaceRevise(id: Identifier, data: T.RoutesRevisePutInput, options?: RequestOptions<T.RoutesRevisePutInput>) {
    return this.client.request<T.RoutesRevisePutResponse, T.RoutesRevisePutInput>({ ...options, method: "PUT", url: `/api/v1/review-proposals/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the apply operation for the routes capability.
   * Calls `POST /api/v1/review-proposals/{id}/apply` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  workspaceApply(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesApplyPostApiV1ReviewProposalsIdApplyResponse>({ ...options, method: "POST", url: `/api/v1/review-proposals/${encodeURIComponent(id)}/apply` });
  }
  /**
   * Performs the refresh operation for the routes capability.
   * Calls `POST /api/v1/review-proposals/{id}/refresh` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  workspaceRefresh(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRefreshPostResponse>({ ...options, method: "POST", url: `/api/v1/review-proposals/${encodeURIComponent(id)}/refresh` });
  }
  /**
   * Performs the validate proposal operation for the routes capability.
   * Calls `POST /api/v1/review-proposals/validate` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  workspaceValidate(data: T.RoutesValidateProposalPostInput, options?: RequestOptions<T.RoutesValidateProposalPostInput>) {
    return this.client.request<T.RoutesValidateProposalPostResponse, T.RoutesValidateProposalPostInput>({ ...options, method: "POST", url: `/api/v1/review-proposals/validate`, data: data });
  }
  /**
   * Performs the list sprints operation for the routes capability.
   * Calls `GET /api/v1/sprints` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListSprintsGet(params?: T.RoutesListSprintsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListSprintsGetResponse>({ ...options, method: "GET", url: `/api/v1/sprints`, params });
  }
  /**
   * Performs the create sprint operation for the routes capability.
   * Calls `POST /api/v1/sprints` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateSprintPost(data: T.RoutesCreateSprintPostInput, options?: RequestOptions<T.RoutesCreateSprintPostInput>) {
    return this.client.request<T.RoutesCreateSprintPostResponse, T.RoutesCreateSprintPostInput>({ ...options, method: "POST", url: `/api/v1/sprints`, data: data });
  }
  /**
   * Performs the complete sprint operation for the routes capability.
   * Calls `POST /api/v1/sprints/{id}/complete` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCompleteSprintPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesCompleteSprintPostResponse>({ ...options, method: "POST", url: `/api/v1/sprints/${encodeURIComponent(id)}/complete` });
  }
  /**
   * Performs the start sprint operation for the routes capability.
   * Calls `POST /api/v1/sprints/{id}/start` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesStartSprintPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesStartSprintPostResponse>({ ...options, method: "POST", url: `/api/v1/sprints/${encodeURIComponent(id)}/start` });
  }
  /**
   * Performs the list teams operation for the routes capability.
   * Calls `GET /api/v1/teams` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListTeamsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesListTeamsGetResponse>({ ...options, method: "GET", url: `/api/v1/teams` });
  }
  /**
   * Performs the create team operation for the routes capability.
   * Calls `POST /api/v1/teams` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateTeamPost(data: T.RoutesCreateTeamPostInput, options?: RequestOptions<T.RoutesCreateTeamPostInput>) {
    return this.client.request<T.RoutesCreateTeamPostResponse, T.RoutesCreateTeamPostInput>({ ...options, method: "POST", url: `/api/v1/teams`, data: data });
  }
  /**
   * Performs the get team operation for the routes capability.
   * Calls `GET /api/v1/teams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGetTeamGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetTeamGetResponse>({ ...options, method: "GET", url: `/api/v1/teams/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update team operation for the routes capability.
   * Calls `PATCH /api/v1/teams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesUpdateTeamPatch(id: Identifier, data: T.RoutesUpdateTeamPatchInput, options?: RequestOptions<T.RoutesUpdateTeamPatchInput>) {
    return this.client.request<T.RoutesUpdateTeamPatchResponse, T.RoutesUpdateTeamPatchInput>({ ...options, method: "PATCH", url: `/api/v1/teams/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list work items operation for the routes capability.
   * Calls `GET /api/v1/work-items` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListWorkItemsGet(params?: T.RoutesListWorkItemsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListWorkItemsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items`, params });
  }
  /**
   * Performs the create work item operation for the routes capability.
   * Calls `POST /api/v1/work-items` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateWorkItemPost(data: T.RoutesCreateWorkItemPostInput, options?: RequestOptions<T.RoutesCreateWorkItemPostInput>) {
    return this.client.request<T.RoutesCreateWorkItemPostResponse, T.RoutesCreateWorkItemPostInput>({ ...options, method: "POST", url: `/api/v1/work-items`, data: data });
  }
  /**
   * Performs the remove work item operation for the routes capability.
   * Calls `DELETE /api/v1/work-items/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesRemoveWorkItemDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRemoveWorkItemDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/work-items/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get work item operation for the routes capability.
   * Calls `GET /api/v1/work-items/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGetWorkItemGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetWorkItemGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update work item operation for the routes capability.
   * Calls `PATCH /api/v1/work-items/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesUpdateWorkItemPatch(id: Identifier, data: T.RoutesUpdateWorkItemPatchInput, options?: RequestOptions<T.RoutesUpdateWorkItemPatchInput>) {
    return this.client.request<T.RoutesUpdateWorkItemPatchResponse, T.RoutesUpdateWorkItemPatchInput>({ ...options, method: "PATCH", url: `/api/v1/work-items/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the work item activity operation for the routes capability.
   * Calls `GET /api/v1/work-items/{id}/activity` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesWorkItemActivityGet(id: Identifier, params?: T.RoutesWorkItemActivityGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesWorkItemActivityGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/activity`, params });
  }
  /**
   * Performs the create operation for the routes capability.
   * Calls `POST /api/v1/work-items/{id}/attachments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreatePostApiV1WorkItemsIdAttachments(id: Identifier, data: T.RoutesCreatePostApiV1WorkItemsIdAttachmentsInput, options?: RequestOptions<T.RoutesCreatePostApiV1WorkItemsIdAttachmentsInput>) {
    return this.client.request<T.RoutesCreatePostApiV1WorkItemsIdAttachmentsResponse, T.RoutesCreatePostApiV1WorkItemsIdAttachmentsInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/attachments`, data: data });
  }
  /**
   * Performs the work item checklist operation for the routes capability.
   * Calls `GET /api/v1/work-items/{id}/checklist` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesWorkItemChecklistGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesWorkItemChecklistGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/checklist` });
  }
  /**
   * Performs the replace checklist operation for the routes capability.
   * Calls `PUT /api/v1/work-items/{id}/checklist` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesReplaceChecklistPut(id: Identifier, data: T.RoutesReplaceChecklistPutInput, options?: RequestOptions<T.RoutesReplaceChecklistPutInput>) {
    return this.client.request<T.RoutesReplaceChecklistPutResponse, T.RoutesReplaceChecklistPutInput>({ ...options, method: "PUT", url: `/api/v1/work-items/${encodeURIComponent(id)}/checklist`, data: data });
  }
  /**
   * Performs the list comments operation for the routes capability.
   * Calls `GET /api/v1/work-items/{id}/comments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListCommentsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListCommentsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/comments` });
  }
  /**
   * Performs the create comment operation for the routes capability.
   * Calls `POST /api/v1/work-items/{id}/comments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateCommentPost(id: Identifier, data: T.RoutesCreateCommentPostInput, options?: RequestOptions<T.RoutesCreateCommentPostInput>) {
    return this.client.request<T.RoutesCreateCommentPostResponse, T.RoutesCreateCommentPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/comments`, data: data });
  }
  /**
   * Performs the comment page operation for the routes capability.
   * Calls `GET /api/v1/work-items/{id}/comments/page` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCommentPageGet(id: Identifier, params?: T.RoutesCommentPageGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesCommentPageGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/comments/page`, params });
  }
  /**
   * Performs the list commits operation for the routes capability.
   * Calls `GET /api/v1/work-items/{id}/commits` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListCommitsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListCommitsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/commits` });
  }
  /**
   * Performs the attach commit operation for the routes capability.
   * Calls `POST /api/v1/work-items/{id}/commits` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesAttachCommitPost(id: Identifier, data: T.RoutesAttachCommitPostInput, options?: RequestOptions<T.RoutesAttachCommitPostInput>) {
    return this.client.request<T.RoutesAttachCommitPostResponse, T.RoutesAttachCommitPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/commits`, data: data });
  }
  /**
   * Performs the add points operation for the routes capability.
   * Calls `POST /api/v1/work-items/{id}/points` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesAddPointsPost(id: Identifier, data: T.RoutesAddPointsPostInput, options?: RequestOptions<T.RoutesAddPointsPostInput>) {
    return this.client.request<T.RoutesAddPointsPostResponse, T.RoutesAddPointsPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/points`, data: data });
  }
  /**
   * Performs the remove operation for the routes capability.
   * Calls `DELETE /api/v1/work-items/{id}/reminder` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesRemoveDeleteApiV1WorkItemsIdReminder(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRemoveDeleteApiV1WorkItemsIdReminderResponse>({ ...options, method: "DELETE", url: `/api/v1/work-items/${encodeURIComponent(id)}/reminder` });
  }
  /**
   * Performs the get operation for the routes capability.
   * Calls `GET /api/v1/work-items/{id}/reminder` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesGetGetApiV1WorkItemsIdReminder(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1WorkItemsIdReminderResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/reminder` });
  }
  /**
   * Performs the put operation for the routes capability.
   * Calls `PUT /api/v1/work-items/{id}/reminder` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesPutPutApiV1WorkItemsIdReminder(id: Identifier, data: T.RoutesPutPutApiV1WorkItemsIdReminderInput, options?: RequestOptions<T.RoutesPutPutApiV1WorkItemsIdReminderInput>) {
    return this.client.request<T.RoutesPutPutApiV1WorkItemsIdReminderResponse, T.RoutesPutPutApiV1WorkItemsIdReminderInput>({ ...options, method: "PUT", url: `/api/v1/work-items/${encodeURIComponent(id)}/reminder`, data: data });
  }
  /**
   * Performs the transition work item operation for the routes capability.
   * Calls `POST /api/v1/work-items/{id}/transition` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesTransitionWorkItemPost(id: Identifier, data: T.RoutesTransitionWorkItemPostInput, options?: RequestOptions<T.RoutesTransitionWorkItemPostInput>) {
    return this.client.request<T.RoutesTransitionWorkItemPostResponse, T.RoutesTransitionWorkItemPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/transition`, data: data });
  }
  /**
   * Performs the list work logs operation for the routes capability.
   * Calls `GET /api/v1/work-items/{id}/work-logs` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListWorkLogsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListWorkLogsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/work-logs` });
  }
  /**
   * Performs the create work log operation for the routes capability.
   * Calls `POST /api/v1/work-items/{id}/work-logs` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesCreateWorkLogPost(id: Identifier, data: T.RoutesCreateWorkLogPostInput, options?: RequestOptions<T.RoutesCreateWorkLogPostInput>) {
    return this.client.request<T.RoutesCreateWorkLogPostResponse, T.RoutesCreateWorkLogPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/work-logs`, data: data });
  }
  /**
   * Performs the list work sessions operation for the routes capability.
   * Calls `GET /api/v1/work-items/{id}/work-sessions` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesListWorkSessionsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListWorkSessionsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/work-sessions` });
  }
  /**
   * Performs the start work session operation for the routes capability.
   * Calls `POST /api/v1/work-items/{id}/work-sessions/start` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesStartWorkSessionPost(id: Identifier, data: T.RoutesStartWorkSessionPostInput, options?: RequestOptions<T.RoutesStartWorkSessionPostInput>) {
    return this.client.request<T.RoutesStartWorkSessionPostResponse, T.RoutesStartWorkSessionPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/work-sessions/start`, data: data });
  }
  /**
   * Performs the heartbeat work session operation for the routes capability.
   * Calls `POST /api/v1/work-sessions/{id}/heartbeat` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesHeartbeatWorkSessionPost(id: Identifier, data: T.RoutesHeartbeatWorkSessionPostInput, options?: RequestOptions<T.RoutesHeartbeatWorkSessionPostInput>) {
    return this.client.request<T.RoutesHeartbeatWorkSessionPostResponse, T.RoutesHeartbeatWorkSessionPostInput>({ ...options, method: "POST", url: `/api/v1/work-sessions/${encodeURIComponent(id)}/heartbeat`, data: data });
  }
  /**
   * Performs the stop work session operation for the routes capability.
   * Calls `POST /api/v1/work-sessions/{id}/stop` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesStopWorkSessionPost(id: Identifier, data: T.RoutesStopWorkSessionPostInput, options?: RequestOptions<T.RoutesStopWorkSessionPostInput>) {
    return this.client.request<T.RoutesStopWorkSessionPostResponse, T.RoutesStopWorkSessionPostInput>({ ...options, method: "POST", url: `/api/v1/work-sessions/${encodeURIComponent(id)}/stop`, data: data });
  }
  /**
   * Performs the active work sessions operation for the routes capability.
   * Calls `GET /api/v1/work-sessions/active` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesActiveWorkSessionsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesActiveWorkSessionsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-sessions/active` });
  }
  /**
   * Performs the workspace operation for the routes capability.
   * Calls `GET /api/v1/workspace` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesWorkspaceGet(options?: RequestOptions) {
    return this.client.request<T.RoutesWorkspaceGetResponse>({ ...options, method: "GET", url: `/api/v1/workspace` });
  }
  /**
   * Performs the ready operation for the routes capability.
   * Calls `GET /health/dependencies` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesReadyGetHealthDependencies(options?: RequestOptions) {
    return this.client.request<T.RoutesReadyGetHealthDependenciesResponse>({ ...options, method: "GET", url: `/health/dependencies` });
  }
  /**
   * Performs the live operation for the routes capability.
   * Calls `GET /health/live` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesLiveGet(options?: RequestOptions) {
    return this.client.request<T.RoutesLiveGetResponse>({ ...options, method: "GET", url: `/health/live` });
  }
  /**
   * Performs the ready operation for the routes capability.
   * Calls `GET /health/ready` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesReadyGetHealthReady(options?: RequestOptions) {
    return this.client.request<T.RoutesReadyGetHealthReadyResponse>({ ...options, method: "GET", url: `/health/ready` });
  }
  /**
   * Performs the metrics operation for the routes capability.
   * Calls `GET /metrics` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routesMetricsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesMetricsGetResponse>({ ...options, method: "GET", url: `/metrics` });
  }
}
