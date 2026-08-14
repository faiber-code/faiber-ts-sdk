import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class ProfileOperations extends ServiceApi {
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
   * Performs the address get operation for the option capability.
   * Calls `POST /api/v1/address/get` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  optionAddressGetPost(data: T.OptionAddressGetPostInput, options?: RequestOptions<T.OptionAddressGetPostInput>) {
    return this.client.request<T.OptionAddressGetPostResponse, T.OptionAddressGetPostInput>({ ...options, method: "POST", url: `/api/v1/address/get`, data: data });
  }
  /**
   * Performs the get chat context operation for the session capability.
   * Calls `GET /api/v1/auth/chat-context` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  sessionGetChatContextGet(options?: RequestOptions) {
    return this.client.request<T.SessionGetChatContextGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/chat-context` });
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
   * Performs the index operation for the campaign capability.
   * Calls `GET /api/v1/campaign` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  campaignIndexGet(options?: RequestOptions) {
    return this.client.request<T.CampaignIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/campaign` });
  }
  /**
   * Performs the my contributions operation for the campaign capability.
   * Calls `GET /api/v1/campaign-profile/me/contributions` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  campaignMyContributionsGet(options?: RequestOptions) {
    return this.client.request<T.CampaignMyContributionsGetResponse>({ ...options, method: "GET", url: `/api/v1/campaign-profile/me/contributions` });
  }
  /**
   * Performs the show operation for the campaign capability.
   * Calls `GET /api/v1/campaign/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  campaignShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CampaignShowGetResponse>({ ...options, method: "GET", url: `/api/v1/campaign/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the contribute operation for the campaign capability.
   * Calls `POST /api/v1/campaign/{id}/contributions` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  campaignContributePost(id: Identifier, data: T.CampaignContributePostInput, options?: RequestOptions<T.CampaignContributePostInput>) {
    return this.client.request<T.CampaignContributePostResponse, T.CampaignContributePostInput>({ ...options, method: "POST", url: `/api/v1/campaign/${encodeURIComponent(id)}/contributions`, data: data });
  }
  /**
   * Performs the index operation for the city capability.
   * Calls `GET /api/v1/city` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: city:read.
   */
  cityIndexGet(params?: T.CityIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.CityIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/city`, params });
  }
  /**
   * Performs the store operation for the city capability.
   * Calls `POST /api/v1/city` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: city:create.
   */
  cityStorePost(data: T.CityStorePostInput, options?: RequestOptions<T.CityStorePostInput>) {
    return this.client.request<T.CityStorePostResponse, T.CityStorePostInput>({ ...options, method: "POST", url: `/api/v1/city`, data: data });
  }
  /**
   * Performs the destroy operation for the city capability.
   * Calls `DELETE /api/v1/city/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: city:delete.
   */
  cityDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CityDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/city/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the city capability.
   * Calls `GET /api/v1/city/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: city:read.
   */
  cityShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CityShowGetResponse>({ ...options, method: "GET", url: `/api/v1/city/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the city capability.
   * Calls `PATCH /api/v1/city/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: city:update.
   */
  cityUpdatePatch(id: Identifier, data: T.CityUpdatePatchInput, options?: RequestOptions<T.CityUpdatePatchInput>) {
    return this.client.request<T.CityUpdatePatchResponse, T.CityUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/city/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update operation for the city capability.
   * Calls `PUT /api/v1/city/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: city:update.
   */
  cityUpdatePut(id: Identifier, data: T.CityUpdatePutInput, options?: RequestOptions<T.CityUpdatePutInput>) {
    return this.client.request<T.CityUpdatePutResponse, T.CityUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/city/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the force destroy operation for the city capability.
   * Calls `DELETE /api/v1/city/force/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: city:delete.
   */
  cityForceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CityForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/city/force/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the restore operation for the city capability.
   * Calls `GET /api/v1/city/undo/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: city:delete.
   */
  cityRestoreGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CityRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/city/undo/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the index operation for the country capability.
   * Calls `GET /api/v1/country` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: country:read.
   */
  countryIndexGet(params?: T.CountryIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.CountryIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/country`, params });
  }
  /**
   * Performs the store operation for the country capability.
   * Calls `POST /api/v1/country` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: country:create.
   */
  countryStorePost(data: T.CountryStorePostInput, options?: RequestOptions<T.CountryStorePostInput>) {
    return this.client.request<T.CountryStorePostResponse, T.CountryStorePostInput>({ ...options, method: "POST", url: `/api/v1/country`, data: data });
  }
  /**
   * Performs the destroy operation for the country capability.
   * Calls `DELETE /api/v1/country/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: country:delete.
   */
  countryDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CountryDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/country/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the country capability.
   * Calls `GET /api/v1/country/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: country:read.
   */
  countryShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CountryShowGetResponse>({ ...options, method: "GET", url: `/api/v1/country/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the country capability.
   * Calls `PATCH /api/v1/country/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: country:update.
   */
  countryUpdatePatch(id: Identifier, data: T.CountryUpdatePatchInput, options?: RequestOptions<T.CountryUpdatePatchInput>) {
    return this.client.request<T.CountryUpdatePatchResponse, T.CountryUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/country/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update operation for the country capability.
   * Calls `PUT /api/v1/country/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: country:update.
   */
  countryUpdatePut(id: Identifier, data: T.CountryUpdatePutInput, options?: RequestOptions<T.CountryUpdatePutInput>) {
    return this.client.request<T.CountryUpdatePutResponse, T.CountryUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/country/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the force destroy operation for the country capability.
   * Calls `DELETE /api/v1/country/force/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: country:delete.
   */
  countryForceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CountryForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/country/force/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the restore operation for the country capability.
   * Calls `GET /api/v1/country/undo/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: country:delete.
   */
  countryRestoreGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CountryRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/country/undo/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the dependency operation for the option capability.
   * Calls `GET /api/v1/dependency` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: dependency:read.
   */
  optionDependencyGet(options?: RequestOptions) {
    return this.client.request<T.OptionDependencyGetResponse>({ ...options, method: "GET", url: `/api/v1/dependency` });
  }
  /**
   * Performs the identity operation for the option capability.
   * Calls `GET /api/v1/identity` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  optionIdentityGet(options?: RequestOptions) {
    return this.client.request<T.OptionIdentityGetResponse>({ ...options, method: "GET", url: `/api/v1/identity` });
  }
  /**
   * Performs the integration docs show operation for the integration capability.
   * Calls `GET /api/v1/integration/docs` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: admin:integration:read.
   */
  integrationIntegrationDocsShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationIntegrationDocsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/docs` });
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
   * Performs the store operation for the log action capability.
   * Calls `POST /api/v1/log-action` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: log_action:create.
   */
  logActionStorePost(data: T.LogActionStorePostInput, options?: RequestOptions<T.LogActionStorePostInput>) {
    return this.client.request<T.LogActionStorePostResponse, T.LogActionStorePostInput>({ ...options, method: "POST", url: `/api/v1/log-action`, data: data });
  }
  /**
   * Performs the store slug operation for the log action capability.
   * Calls `POST /api/v1/log-action/{slug}` through the shared IDP-aware Faiber client.
   * @param slug Backend path identifier `slug`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: log_action:create.
   */
  logActionStoreSlugPost(slug: Identifier, data: T.LogActionStoreSlugPostInput, options?: RequestOptions<T.LogActionStoreSlugPostInput>) {
    return this.client.request<T.LogActionStoreSlugPostResponse, T.LogActionStoreSlugPostInput>({ ...options, method: "POST", url: `/api/v1/log-action/${encodeURIComponent(slug)}`, data: data });
  }
  /**
   * Performs the store direct operation for the log action capability.
   * Calls `POST /api/v1/log-action/direct/{slug}` through the shared IDP-aware Faiber client.
   * @param slug Backend path identifier `slug`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  logActionStoreDirectPost(slug: Identifier, data: T.LogActionStoreDirectPostInput, options?: RequestOptions<T.LogActionStoreDirectPostInput>) {
    return this.client.request<T.LogActionStoreDirectPostResponse, T.LogActionStoreDirectPostInput>({ ...options, method: "POST", url: `/api/v1/log-action/direct/${encodeURIComponent(slug)}`, data: data });
  }
  /**
   * Performs the index operation for the logger capability.
   * Calls `GET /api/v1/logger` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  loggerIndexGet(options?: RequestOptions) {
    return this.client.request<T.LoggerIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/logger` });
  }
  /**
   * Performs the show operation for the logger capability.
   * Calls `GET /api/v1/logger/{log}` through the shared IDP-aware Faiber client.
   * @param log Backend path identifier `log`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  loggerShowGet(log: Identifier, options?: RequestOptions) {
    return this.client.request<T.LoggerShowGetResponse>({ ...options, method: "GET", url: `/api/v1/logger/${encodeURIComponent(log)}` });
  }
  /**
   * Performs the parent get operation for the option capability.
   * Calls `POST /api/v1/parent/get` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  optionParentGetPost(data: T.OptionParentGetPostInput, options?: RequestOptions<T.OptionParentGetPostInput>) {
    return this.client.request<T.OptionParentGetPostResponse, T.OptionParentGetPostInput>({ ...options, method: "POST", url: `/api/v1/parent/get`, data: data });
  }
  /**
   * Performs the index operation for the profile capability.
   * Calls `GET /api/v1/profile` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: /api/v1/profile, profile:read.
   */
  profileIndexGet(params?: T.ProfileIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile`, params });
  }
  /**
   * Performs the avatar show operation for the profile capability.
   * Calls `GET /api/v1/profile-media/{uuid}/avatar` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileAvatarShowGetApiV1ProfileMediaUuidAvatar(uuid: Identifier, params?: T.ProfileAvatarShowGetApiV1ProfileMediaUuidAvatarQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileAvatarShowGetApiV1ProfileMediaUuidAvatarResponse>({ ...options, method: "GET", url: `/api/v1/profile-media/${encodeURIComponent(uuid)}/avatar`, params });
  }
  /**
   * Performs the index operation for the profile property capability.
   * Calls `GET /api/v1/profile-property-definition` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile_property_definition:read.
   */
  profilePropertyIndexGet(params?: T.ProfilePropertyIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile-property-definition`, params });
  }
  /**
   * Performs the store operation for the profile property capability.
   * Calls `POST /api/v1/profile-property-definition` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile_property_definition:create.
   */
  profilePropertyStorePost(data: T.ProfilePropertyStorePostInput, options?: RequestOptions<T.ProfilePropertyStorePostInput>) {
    return this.client.request<T.ProfilePropertyStorePostResponse, T.ProfilePropertyStorePostInput>({ ...options, method: "POST", url: `/api/v1/profile-property-definition`, data: data });
  }
  /**
   * Performs the destroy operation for the profile property capability.
   * Calls `DELETE /api/v1/profile-property-definition/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile_property_definition:delete.
   */
  profilePropertyDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile-property-definition/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the profile property capability.
   * Calls `GET /api/v1/profile-property-definition/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile_property_definition:read.
   */
  profilePropertyShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyShowGetResponse>({ ...options, method: "GET", url: `/api/v1/profile-property-definition/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the profile property capability.
   * Calls `PATCH /api/v1/profile-property-definition/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile_property_definition:update.
   */
  profilePropertyUpdatePatch(id: Identifier, data: T.ProfilePropertyUpdatePatchInput, options?: RequestOptions<T.ProfilePropertyUpdatePatchInput>) {
    return this.client.request<T.ProfilePropertyUpdatePatchResponse, T.ProfilePropertyUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile-property-definition/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update operation for the profile property capability.
   * Calls `PUT /api/v1/profile-property-definition/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile_property_definition:update.
   */
  profilePropertyUpdatePut(id: Identifier, data: T.ProfilePropertyUpdatePutInput, options?: RequestOptions<T.ProfilePropertyUpdatePutInput>) {
    return this.client.request<T.ProfilePropertyUpdatePutResponse, T.ProfilePropertyUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/profile-property-definition/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the force destroy operation for the profile property capability.
   * Calls `DELETE /api/v1/profile-property-definition/force/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile_property_definition:force_delete.
   */
  profilePropertyForceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile-property-definition/force/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the restore operation for the profile property capability.
   * Calls `GET /api/v1/profile-property-definition/undo/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile_property_definition:restore.
   */
  profilePropertyRestoreGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/profile-property-definition/undo/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the delete parent operation for the profile capability.
   * Calls `DELETE /api/v1/profile/{student_uuid}/delete/parent/{parent_uuid}` through the shared IDP-aware Faiber client.
   * @param studentUuid Backend path identifier `student_uuid`.
   * @param parentUuid Backend path identifier `parent_uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileDeleteParentDelete(studentUuid: Identifier, parentUuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileDeleteParentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/${encodeURIComponent(studentUuid)}/delete/parent/${encodeURIComponent(parentUuid)}` });
  }
  /**
   * Performs the destroy operation for the profile capability.
   * Calls `DELETE /api/v1/profile/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:delete.
   */
  profileDestroyDelete(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/${encodeURIComponent(uuid)}` });
  }
  /**
   * Performs the show operation for the profile capability.
   * Calls `GET /api/v1/profile/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:read.
   */
  profileShowGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileShowGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/${encodeURIComponent(uuid)}` });
  }
  /**
   * Performs the update operation for the profile capability.
   * Calls `PATCH /api/v1/profile/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileUpdatePatch(uuid: Identifier, data: T.ProfileUpdatePatchInput, options?: RequestOptions<T.ProfileUpdatePatchInput>) {
    return this.client.request<T.ProfileUpdatePatchResponse, T.ProfileUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Performs the show admin operation for the profile capability.
   * Calls `GET /api/v1/profile/{uuid}/admin` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:read_admin.
   */
  profileShowAdminGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileShowAdminGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/${encodeURIComponent(uuid)}/admin` });
  }
  /**
   * Performs the avatar delete operation for the profile capability.
   * Calls `DELETE /api/v1/profile/{uuid}/avatar` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileAvatarDeleteDelete(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileAvatarDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/${encodeURIComponent(uuid)}/avatar` });
  }
  /**
   * Performs the avatar show operation for the profile capability.
   * Calls `GET /api/v1/profile/{uuid}/avatar` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileAvatarShowGetApiV1ProfileUuidAvatar(uuid: Identifier, params?: T.ProfileAvatarShowGetApiV1ProfileUuidAvatarQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileAvatarShowGetApiV1ProfileUuidAvatarResponse>({ ...options, method: "GET", url: `/api/v1/profile/${encodeURIComponent(uuid)}/avatar`, params });
  }
  /**
   * Performs the avatar store operation for the profile capability.
   * Calls `POST /api/v1/profile/{uuid}/avatar` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileAvatarStorePost(uuid: Identifier, data: T.ProfileAvatarStorePostInput, options?: RequestOptions<T.ProfileAvatarStorePostInput>) {
    return this.client.request<T.ProfileAvatarStorePostResponse, T.ProfileAvatarStorePostInput>({ ...options, method: "POST", url: `/api/v1/profile/${encodeURIComponent(uuid)}/avatar`, data: data });
  }
  /**
   * Performs the delete address operation for the profile capability.
   * Calls `DELETE /api/v1/profile/{uuid}/delete/address/{title}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param title Backend path identifier `title`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileDeleteAddressDelete(uuid: Identifier, title: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileDeleteAddressDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/${encodeURIComponent(uuid)}/delete/address/${encodeURIComponent(title)}` });
  }
  /**
   * Performs the update employee type operation for the profile capability.
   * Calls `PATCH /api/v1/profile/{uuid}/employee-type` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update_employee_type.
   */
  profileUpdateEmployeeTypePatch(uuid: Identifier, data: T.ProfileUpdateEmployeeTypePatchInput, options?: RequestOptions<T.ProfileUpdateEmployeeTypePatchInput>) {
    return this.client.request<T.ProfileUpdateEmployeeTypePatchResponse, T.ProfileUpdateEmployeeTypePatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}/employee-type`, data: data });
  }
  /**
   * Performs the update employee type operation for the profile capability.
   * Calls `PUT /api/v1/profile/{uuid}/employee-type` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update_employee_type.
   */
  profileUpdateEmployeeTypePut(uuid: Identifier, data: T.ProfileUpdateEmployeeTypePutInput, options?: RequestOptions<T.ProfileUpdateEmployeeTypePutInput>) {
    return this.client.request<T.ProfileUpdateEmployeeTypePutResponse, T.ProfileUpdateEmployeeTypePutInput>({ ...options, method: "PUT", url: `/api/v1/profile/${encodeURIComponent(uuid)}/employee-type`, data: data });
  }
  /**
   * Performs the update freemium operation for the profile capability.
   * Calls `PATCH /api/v1/profile/{uuid}/freemium-session-limit` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:freemium_session_limit.
   */
  profileUpdateFreemiumPatch(uuid: Identifier, data: T.ProfileUpdateFreemiumPatchInput, options?: RequestOptions<T.ProfileUpdateFreemiumPatchInput>) {
    return this.client.request<T.ProfileUpdateFreemiumPatchResponse, T.ProfileUpdateFreemiumPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}/freemium-session-limit`, data: data });
  }
  /**
   * Performs the update freemium operation for the profile capability.
   * Calls `PUT /api/v1/profile/{uuid}/freemium-session-limit` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:freemium_session_limit.
   */
  profileUpdateFreemiumPut(uuid: Identifier, data: T.ProfileUpdateFreemiumPutInput, options?: RequestOptions<T.ProfileUpdateFreemiumPutInput>) {
    return this.client.request<T.ProfileUpdateFreemiumPutResponse, T.ProfileUpdateFreemiumPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/${encodeURIComponent(uuid)}/freemium-session-limit`, data: data });
  }
  /**
   * Performs the show full operation for the profile capability.
   * Calls `GET /api/v1/profile/{uuid}/full` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:read.
   */
  profileShowFullGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileShowFullGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/${encodeURIComponent(uuid)}/full` });
  }
  /**
   * Performs the media show operation for the profile capability.
   * Calls `GET /api/v1/profile/{uuid}/media` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileMediaShowGet(uuid: Identifier, params?: T.ProfileMediaShowGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileMediaShowGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/${encodeURIComponent(uuid)}/media`, params });
  }
  /**
   * Performs the update properties operation for the profile capability.
   * Calls `PATCH /api/v1/profile/{uuid}/properties` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileUpdatePropertiesPatch(uuid: Identifier, data: T.ProfileUpdatePropertiesPatchInput, options?: RequestOptions<T.ProfileUpdatePropertiesPatchInput>) {
    return this.client.request<T.ProfileUpdatePropertiesPatchResponse, T.ProfileUpdatePropertiesPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}/properties`, data: data });
  }
  /**
   * Performs the update properties operation for the profile capability.
   * Calls `PUT /api/v1/profile/{uuid}/properties` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileUpdatePropertiesPut(uuid: Identifier, data: T.ProfileUpdatePropertiesPutInput, options?: RequestOptions<T.ProfileUpdatePropertiesPutInput>) {
    return this.client.request<T.ProfileUpdatePropertiesPutResponse, T.ProfileUpdatePropertiesPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/${encodeURIComponent(uuid)}/properties`, data: data });
  }
  /**
   * Performs the update status operation for the profile capability.
   * Calls `PATCH /api/v1/profile/{uuid}/status` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update_status.
   */
  profileUpdateStatusPatch(uuid: Identifier, data: T.ProfileUpdateStatusPatchInput, options?: RequestOptions<T.ProfileUpdateStatusPatchInput>) {
    return this.client.request<T.ProfileUpdateStatusPatchResponse, T.ProfileUpdateStatusPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}/status`, data: data });
  }
  /**
   * Performs the update status operation for the profile capability.
   * Calls `PUT /api/v1/profile/{uuid}/status` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update_status.
   */
  profileUpdateStatusPut(uuid: Identifier, data: T.ProfileUpdateStatusPutInput, options?: RequestOptions<T.ProfileUpdateStatusPutInput>) {
    return this.client.request<T.ProfileUpdateStatusPutResponse, T.ProfileUpdateStatusPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/${encodeURIComponent(uuid)}/status`, data: data });
  }
  /**
   * Performs the accountant index operation for the profile capability.
   * Calls `GET /api/v1/profile/accountant` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileAccountantIndexGet(params?: T.ProfileAccountantIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileAccountantIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/accountant`, params });
  }
  /**
   * Performs the add address operation for the profile capability.
   * Calls `PATCH /api/v1/profile/add/address/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileAddAddressPatch(uuid: Identifier, data: T.ProfileAddAddressPatchInput, options?: RequestOptions<T.ProfileAddAddressPatchInput>) {
    return this.client.request<T.ProfileAddAddressPatchResponse, T.ProfileAddAddressPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/add/address/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Performs the add address operation for the profile capability.
   * Calls `PUT /api/v1/profile/add/address/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileAddAddressPut(uuid: Identifier, data: T.ProfileAddAddressPutInput, options?: RequestOptions<T.ProfileAddAddressPutInput>) {
    return this.client.request<T.ProfileAddAddressPutResponse, T.ProfileAddAddressPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/add/address/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Performs the add app operation for the profile capability.
   * Calls `PATCH /api/v1/profile/add/app/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileAddAppPatch(uuid: Identifier, data: T.ProfileAddAppPatchInput, options?: RequestOptions<T.ProfileAddAppPatchInput>) {
    return this.client.request<T.ProfileAddAppPatchResponse, T.ProfileAddAppPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/add/app/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Performs the add app operation for the profile capability.
   * Calls `PUT /api/v1/profile/add/app/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileAddAppPut(uuid: Identifier, data: T.ProfileAddAppPutInput, options?: RequestOptions<T.ProfileAddAppPutInput>) {
    return this.client.request<T.ProfileAddAppPutResponse, T.ProfileAddAppPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/add/app/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Performs the add parent operation for the profile capability.
   * Calls `PATCH /api/v1/profile/add/parent/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileAddParentPatch(uuid: Identifier, data: T.ProfileAddParentPatchInput, options?: RequestOptions<T.ProfileAddParentPatchInput>) {
    return this.client.request<T.ProfileAddParentPatchResponse, T.ProfileAddParentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/add/parent/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Performs the add parent operation for the profile capability.
   * Calls `PUT /api/v1/profile/add/parent/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileAddParentPut(uuid: Identifier, data: T.ProfileAddParentPutInput, options?: RequestOptions<T.ProfileAddParentPutInput>) {
    return this.client.request<T.ProfileAddParentPutResponse, T.ProfileAddParentPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/add/parent/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Performs the city get operation for the profile capability.
   * Calls `POST /api/v1/profile/city/get` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileCityGetPost(data: T.ProfileCityGetPostInput, options?: RequestOptions<T.ProfileCityGetPostInput>) {
    return this.client.request<T.ProfileCityGetPostResponse, T.ProfileCityGetPostInput>({ ...options, method: "POST", url: `/api/v1/profile/city/get`, data: data });
  }
  /**
   * Performs the consultant index operation for the profile capability.
   * Calls `GET /api/v1/profile/consultant` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileConsultantIndexGet(params?: T.ProfileConsultantIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileConsultantIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/consultant`, params });
  }
  /**
   * Performs the country get operation for the profile capability.
   * Calls `POST /api/v1/profile/country/get` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileCountryGetPost(data: T.ProfileCountryGetPostInput, options?: RequestOptions<T.ProfileCountryGetPostInput>) {
    return this.client.request<T.ProfileCountryGetPostResponse, T.ProfileCountryGetPostInput>({ ...options, method: "POST", url: `/api/v1/profile/country/get`, data: data });
  }
  /**
   * Performs the force destroy operation for the profile capability.
   * Calls `DELETE /api/v1/profile/force/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:force_delete.
   */
  profileForceDestroyDelete(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/force/${encodeURIComponent(uuid)}` });
  }
  /**
   * Performs the bulk get operation for the profile capability.
   * Calls `POST /api/v1/profile/get` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileBulkGetPost(data: T.ProfileBulkGetPostInput, options?: RequestOptions<T.ProfileBulkGetPostInput>) {
    return this.client.request<T.ProfileBulkGetPostResponse, T.ProfileBulkGetPostInput>({ ...options, method: "POST", url: `/api/v1/profile/get`, data: data });
  }
  /**
   * Performs the chat list operation for the profile capability.
   * Calls `GET /api/v1/profile/get-chat-list/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileChatListGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileChatListGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/get-chat-list/${encodeURIComponent(uuid)}` });
  }
  /**
   * Performs the get address operation for the profile capability.
   * Calls `GET /api/v1/profile/get/address/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:read.
   */
  profileGetAddressGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileGetAddressGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/get/address/${encodeURIComponent(uuid)}` });
  }
  /**
   * Performs the get app operation for the profile capability.
   * Calls `GET /api/v1/profile/get/app/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:read.
   */
  profileGetAppGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileGetAppGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/get/app/${encodeURIComponent(uuid)}` });
  }
  /**
   * Performs the get parent operation for the profile capability.
   * Calls `GET /api/v1/profile/get/parent/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:read.
   */
  profileGetParentGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileGetParentGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/get/parent/${encodeURIComponent(uuid)}` });
  }
  /**
   * Performs the manager index operation for the profile capability.
   * Calls `GET /api/v1/profile/manager` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileManagerIndexGet(params?: T.ProfileManagerIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileManagerIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/manager`, params });
  }
  /**
   * Performs the other index operation for the profile capability.
   * Calls `GET /api/v1/profile/other` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileOtherIndexGet(params?: T.ProfileOtherIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileOtherIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/other`, params });
  }
  /**
   * Performs the parent index operation for the profile capability.
   * Calls `GET /api/v1/profile/parent` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileParentIndexGet(params?: T.ProfileParentIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileParentIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/parent`, params });
  }
  /**
   * Performs the province get operation for the profile capability.
   * Calls `POST /api/v1/profile/province/get` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileProvinceGetPost(data: T.ProfileProvinceGetPostInput, options?: RequestOptions<T.ProfileProvinceGetPostInput>) {
    return this.client.request<T.ProfileProvinceGetPostResponse, T.ProfileProvinceGetPostInput>({ ...options, method: "POST", url: `/api/v1/profile/province/get`, data: data });
  }
  /**
   * Performs the search operation for the profile search capability.
   * Calls `POST /api/v1/profile/search` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:search.
   */
  profileSearchSearchPost(data: T.ProfileSearchSearchPostInput, options?: RequestOptions<T.ProfileSearchSearchPostInput>) {
    return this.client.request<T.ProfileSearchSearchPostResponse, T.ProfileSearchSearchPostInput>({ ...options, method: "POST", url: `/api/v1/profile/search`, data: data });
  }
  /**
   * Performs the student index operation for the profile capability.
   * Calls `GET /api/v1/profile/student` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileStudentIndexGet(params?: T.ProfileStudentIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileStudentIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/student`, params });
  }
  /**
   * Performs the student pes operation for the profile capability.
   * Calls `GET /api/v1/profile/students/pes` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileStudentPesGet(options?: RequestOptions) {
    return this.client.request<T.ProfileStudentPesGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/students/pes` });
  }
  /**
   * Performs the student pes schema operation for the profile capability.
   * Calls `GET /api/v1/profile/students/pes/schema` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileStudentPesSchemaGet(options?: RequestOptions) {
    return this.client.request<T.ProfileStudentPesSchemaGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/students/pes/schema` });
  }
  /**
   * Performs the support index operation for the profile capability.
   * Calls `GET /api/v1/profile/support` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileSupportIndexGet(params?: T.ProfileSupportIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileSupportIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/support`, params });
  }
  /**
   * Performs the support pes operation for the profile capability.
   * Calls `GET /api/v1/profile/supports/pes` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileSupportPesGet(options?: RequestOptions) {
    return this.client.request<T.ProfileSupportPesGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/supports/pes` });
  }
  /**
   * Performs the support pes schema operation for the profile capability.
   * Calls `GET /api/v1/profile/supports/pes/schema` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileSupportPesSchemaGet(options?: RequestOptions) {
    return this.client.request<T.ProfileSupportPesSchemaGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/supports/pes/schema` });
  }
  /**
   * Performs the teacher index operation for the profile capability.
   * Calls `GET /api/v1/profile/teacher` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  profileTeacherIndexGet(params?: T.ProfileTeacherIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileTeacherIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/teacher`, params });
  }
  /**
   * Performs the restore operation for the profile capability.
   * Calls `GET /api/v1/profile/undo/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:restore.
   */
  profileRestoreGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/undo/${encodeURIComponent(uuid)}` });
  }
  /**
   * Performs the add meta operation for the profile capability.
   * Calls `PATCH /api/v1/profile/update/{uuid}/meta` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileAddMetaPatch(uuid: Identifier, data: T.ProfileAddMetaPatchInput, options?: RequestOptions<T.ProfileAddMetaPatchInput>) {
    return this.client.request<T.ProfileAddMetaPatchResponse, T.ProfileAddMetaPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/update/${encodeURIComponent(uuid)}/meta`, data: data });
  }
  /**
   * Performs the add meta operation for the profile capability.
   * Calls `PUT /api/v1/profile/update/{uuid}/meta` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileAddMetaPut(uuid: Identifier, data: T.ProfileAddMetaPutInput, options?: RequestOptions<T.ProfileAddMetaPutInput>) {
    return this.client.request<T.ProfileAddMetaPutResponse, T.ProfileAddMetaPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/update/${encodeURIComponent(uuid)}/meta`, data: data });
  }
  /**
   * Performs the update personal operation for the profile capability.
   * Calls `PATCH /api/v1/profile/update/personal-information/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileUpdatePersonalPatch(uuid: Identifier, data: T.ProfileUpdatePersonalPatchInput, options?: RequestOptions<T.ProfileUpdatePersonalPatchInput>) {
    return this.client.request<T.ProfileUpdatePersonalPatchResponse, T.ProfileUpdatePersonalPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/update/personal-information/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Performs the update personal operation for the profile capability.
   * Calls `PUT /api/v1/profile/update/personal-information/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: profile:update.
   */
  profileUpdatePersonalPut(uuid: Identifier, data: T.ProfileUpdatePersonalPutInput, options?: RequestOptions<T.ProfileUpdatePersonalPutInput>) {
    return this.client.request<T.ProfileUpdatePersonalPutResponse, T.ProfileUpdatePersonalPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/update/personal-information/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Performs the index operation for the province capability.
   * Calls `GET /api/v1/province` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: province:read.
   */
  provinceIndexGet(params?: T.ProvinceIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProvinceIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/province`, params });
  }
  /**
   * Performs the store operation for the province capability.
   * Calls `POST /api/v1/province` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: province:create.
   */
  provinceStorePost(data: T.ProvinceStorePostInput, options?: RequestOptions<T.ProvinceStorePostInput>) {
    return this.client.request<T.ProvinceStorePostResponse, T.ProvinceStorePostInput>({ ...options, method: "POST", url: `/api/v1/province`, data: data });
  }
  /**
   * Performs the destroy operation for the province capability.
   * Calls `DELETE /api/v1/province/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: province:delete.
   */
  provinceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProvinceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/province/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the province capability.
   * Calls `GET /api/v1/province/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: province:read.
   */
  provinceShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProvinceShowGetResponse>({ ...options, method: "GET", url: `/api/v1/province/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the province capability.
   * Calls `PATCH /api/v1/province/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: province:update.
   */
  provinceUpdatePatch(id: Identifier, data: T.ProvinceUpdatePatchInput, options?: RequestOptions<T.ProvinceUpdatePatchInput>) {
    return this.client.request<T.ProvinceUpdatePatchResponse, T.ProvinceUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/province/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update operation for the province capability.
   * Calls `PUT /api/v1/province/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: province:update.
   */
  provinceUpdatePut(id: Identifier, data: T.ProvinceUpdatePutInput, options?: RequestOptions<T.ProvinceUpdatePutInput>) {
    return this.client.request<T.ProvinceUpdatePutResponse, T.ProvinceUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/province/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the force destroy operation for the province capability.
   * Calls `DELETE /api/v1/province/force/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: province:delete.
   */
  provinceForceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProvinceForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/province/force/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the restore operation for the province capability.
   * Calls `GET /api/v1/province/undo/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: province:delete.
   */
  provinceRestoreGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProvinceRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/province/undo/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the index operation for the setting capability.
   * Calls `GET /api/v1/setting` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: setting:read.
   */
  settingIndexGet(options?: RequestOptions) {
    return this.client.request<T.SettingIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/setting` });
  }
  /**
   * Performs the store operation for the setting capability.
   * Calls `POST /api/v1/setting` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: setting:create.
   */
  settingStorePost(data: T.SettingStorePostInput, options?: RequestOptions<T.SettingStorePostInput>) {
    return this.client.request<T.SettingStorePostResponse, T.SettingStorePostInput>({ ...options, method: "POST", url: `/api/v1/setting`, data: data });
  }
  /**
   * Performs the index operation for the survey capability.
   * Calls `GET /api/v1/survey` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: survey:read.
   */
  surveyIndexGet(options?: RequestOptions) {
    return this.client.request<T.SurveyIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/survey` });
  }
  /**
   * Performs the store operation for the survey capability.
   * Calls `POST /api/v1/survey` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: survey:create.
   */
  surveyStorePost(data: T.SurveyStorePostInput, options?: RequestOptions<T.SurveyStorePostInput>) {
    return this.client.request<T.SurveyStorePostResponse, T.SurveyStorePostInput>({ ...options, method: "POST", url: `/api/v1/survey`, data: data });
  }
  /**
   * Performs the index operation for the trusted service capability.
   * Calls `GET /api/v1/trusted-service` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted_service:read.
   */
  trustedServiceIndexGet(params?: T.TrustedServiceIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/trusted-service`, params });
  }
  /**
   * Performs the store operation for the trusted service capability.
   * Calls `POST /api/v1/trusted-service` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted_service:create.
   */
  trustedServiceStorePost(data: T.TrustedServiceStorePostInput, options?: RequestOptions<T.TrustedServiceStorePostInput>) {
    return this.client.request<T.TrustedServiceStorePostResponse, T.TrustedServiceStorePostInput>({ ...options, method: "POST", url: `/api/v1/trusted-service`, data: data });
  }
  /**
   * Performs the destroy operation for the trusted service capability.
   * Calls `DELETE /api/v1/trusted-service/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted_service:delete.
   */
  trustedServiceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/trusted-service/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the show operation for the trusted service capability.
   * Calls `GET /api/v1/trusted-service/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted_service:read.
   */
  trustedServiceShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceShowGetResponse>({ ...options, method: "GET", url: `/api/v1/trusted-service/${encodeURIComponent(id)}` });
  }
  /**
   * Performs the update operation for the trusted service capability.
   * Calls `PATCH /api/v1/trusted-service/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted_service:update.
   */
  trustedServiceUpdatePatch(id: Identifier, data: T.TrustedServiceUpdatePatchInput, options?: RequestOptions<T.TrustedServiceUpdatePatchInput>) {
    return this.client.request<T.TrustedServiceUpdatePatchResponse, T.TrustedServiceUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/trusted-service/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the update operation for the trusted service capability.
   * Calls `PUT /api/v1/trusted-service/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted_service:update.
   */
  trustedServiceUpdatePut(id: Identifier, data: T.TrustedServiceUpdatePutInput, options?: RequestOptions<T.TrustedServiceUpdatePutInput>) {
    return this.client.request<T.TrustedServiceUpdatePutResponse, T.TrustedServiceUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/trusted-service/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Performs the event index operation for the trusted service capability.
   * Calls `GET /api/v1/trusted-service/{id}/event` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted_service:read.
   */
  trustedServiceEventIndexGet(id: Identifier, params?: T.TrustedServiceEventIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceEventIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event`, params });
  }
  /**
   * Performs the event store operation for the trusted service capability.
   * Calls `POST /api/v1/trusted-service/{id}/event` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted_service:create.
   */
  trustedServiceEventStorePost(id: Identifier, data: T.TrustedServiceEventStorePostInput, options?: RequestOptions<T.TrustedServiceEventStorePostInput>) {
    return this.client.request<T.TrustedServiceEventStorePostResponse, T.TrustedServiceEventStorePostInput>({ ...options, method: "POST", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event`, data: data });
  }
  /**
   * Performs the event destroy operation for the trusted service capability.
   * Calls `DELETE /api/v1/trusted-service/{id}/event/{event_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param eventId Backend path identifier `event_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted_service:delete.
   */
  trustedServiceEventDestroyDelete(id: Identifier, eventId: Identifier, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceEventDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event/${encodeURIComponent(eventId)}` });
  }
  /**
   * Performs the event show operation for the trusted service capability.
   * Calls `GET /api/v1/trusted-service/{id}/event/{event_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param eventId Backend path identifier `event_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted_service:read.
   */
  trustedServiceEventShowGet(id: Identifier, eventId: Identifier, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceEventShowGetResponse>({ ...options, method: "GET", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event/${encodeURIComponent(eventId)}` });
  }
  /**
   * Performs the event update operation for the trusted service capability.
   * Calls `PATCH /api/v1/trusted-service/{id}/event/{event_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param eventId Backend path identifier `event_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted_service:update.
   */
  trustedServiceEventUpdatePatch(id: Identifier, eventId: Identifier, data: T.TrustedServiceEventUpdatePatchInput, options?: RequestOptions<T.TrustedServiceEventUpdatePatchInput>) {
    return this.client.request<T.TrustedServiceEventUpdatePatchResponse, T.TrustedServiceEventUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event/${encodeURIComponent(eventId)}`, data: data });
  }
  /**
   * Performs the event update operation for the trusted service capability.
   * Calls `PUT /api/v1/trusted-service/{id}/event/{event_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param eventId Backend path identifier `event_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: trusted_service:update.
   */
  trustedServiceEventUpdatePut(id: Identifier, eventId: Identifier, data: T.TrustedServiceEventUpdatePutInput, options?: RequestOptions<T.TrustedServiceEventUpdatePutInput>) {
    return this.client.request<T.TrustedServiceEventUpdatePutResponse, T.TrustedServiceEventUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event/${encodeURIComponent(eventId)}`, data: data });
  }
  /**
   * Performs the health operation for the router capability.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerHealthGetHealth(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Performs the health operation for the router capability.
   * Calls `GET /up` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed service envelope, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: session-derived or public bootstrap route.
   */
  routerHealthGetUp(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetUpResponse>({ ...options, method: "GET", url: `/up` });
  }
}

