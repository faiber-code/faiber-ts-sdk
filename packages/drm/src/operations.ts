import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class DrmOperations extends ServiceApi {
  /**
   * Performs the list folders operation for the router capability.
   * Calls `GET /folders` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListFoldersGet(options?: RequestOptions) {
    return this.client.request<T.RouterListFoldersGetResponse>({ ...options, method: "GET", url: `/folders` });
  }
  /**
   * Performs the create folder operation for the router capability.
   * Calls `POST /folders` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreateFolderPost(data: T.RouterCreateFolderPostInput, options?: RequestOptions<T.RouterCreateFolderPostInput>) {
    return this.client.request<T.RouterCreateFolderPostResponse, T.RouterCreateFolderPostInput>({ ...options, method: "POST", url: `/folders`, data: data });
  }
  /**
   * Performs the delete folder operation for the router capability.
   * Calls `DELETE /folders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerDeleteFolderDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteFolderDeleteResponse>({ ...options, method: "DELETE", url: `/folders/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update folder operation for the router capability.
   * Calls `PATCH /folders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUpdateFolderPatch(id: Identifier, data: T.RouterUpdateFolderPatchInput, options?: RequestOptions<T.RouterUpdateFolderPatchInput>) {
    return this.client.request<T.RouterUpdateFolderPatchResponse, T.RouterUpdateFolderPatchInput>({ ...options, method: "PATCH", url: `/folders/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the list media operation for the router capability.
   * Calls `GET /media` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListMediaGet(params?: T.RouterListMediaGetQuery, options?: RequestOptions) {
    return this.client.request<T.RouterListMediaGetResponse>({ ...options, method: "GET", url: `/media`, params });
  }
  /**
   * Performs the upload media operation for the router capability.
   * Calls `POST /media` through the shared IDP-aware Faiber client.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUploadMediaPost(data: T.RouterUploadMediaPostInput, options?: RequestOptions<T.RouterUploadMediaPostInput>) {
    return this.client.request<T.RouterUploadMediaPostResponse, T.RouterUploadMediaPostInput>({ ...options, method: "POST", url: `/media`, data: data });
  }
  /**
   * Performs the delete media operation for the router capability.
   * Calls `DELETE /media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerDeleteMediaDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteMediaDeleteResponse>({ ...options, method: "DELETE", url: `/media/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the get media operation for the router capability.
   * Calls `GET /media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerGetMediaGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterGetMediaGetResponse>({ ...options, method: "GET", url: `/media/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update media operation for the router capability.
   * Calls `PATCH /media/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerUpdateMediaPatch(id: Identifier, data: T.RouterUpdateMediaPatchInput, options?: RequestOptions<T.RouterUpdateMediaPatchInput>) {
    return this.client.request<T.RouterUpdateMediaPatchResponse, T.RouterUpdateMediaPatchInput>({ ...options, method: "PATCH", url: `/media/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the playback operation for the router capability.
   * Calls `GET /media/{id}/playback` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerPlaybackGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterPlaybackGetResponse>({ ...options, method: "GET", url: `/media/${encodeURIComponent(id)}/playback` });
  }
  /**
   * Performs the status operation for the router capability.
   * Calls `GET /status` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerStatusGet(options?: RequestOptions) {
    return this.client.request<T.RouterStatusGetResponse>({ ...options, method: "GET", url: `/status` });
  }
  /**
   * Performs the list tags operation for the router capability.
   * Calls `GET /tags` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerListTagsGet(options?: RequestOptions) {
    return this.client.request<T.RouterListTagsGetResponse>({ ...options, method: "GET", url: `/tags` });
  }
  /**
   * Performs the create tag operation for the router capability.
   * Calls `POST /tags` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerCreateTagPost(data: T.RouterCreateTagPostInput, options?: RequestOptions<T.RouterCreateTagPostInput>) {
    return this.client.request<T.RouterCreateTagPostResponse, T.RouterCreateTagPostInput>({ ...options, method: "POST", url: `/tags`, data: data });
  }
  /**
   * Performs the delete tag operation for the router capability.
   * Calls `DELETE /tags/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerDeleteTagDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RouterDeleteTagDeleteResponse>({ ...options, method: "DELETE", url: `/tags/${encodeURIComponent(id)}` });
  }
}
