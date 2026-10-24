import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class ProfileOperations extends ServiceApi {
  /**
   * Read raw generated OpenAPI JSON; annotations do not establish complete mounted-route coverage.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  routerOpenapiJsonGet(options?: RequestOptions) {
    return this.client.request<T.RouterOpenapiJsonGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Read stored addresses by resolving supplied IDP user_ids to Profile UUIDs. The local mount is public.
   * Calls `POST /api/v1/address/get` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  optionAddressGetPost(data: T.OptionAddressGetPostInput, options?: RequestOptions<T.OptionAddressGetPostInput>) {
    return this.client.request<T.OptionAddressGetPostResponse, T.OptionAddressGetPostInput>({ ...options, method: "POST", url: `/api/v1/address/get`, data: data });
  }
  /**
   * List all deployment summary configuration rows, newest first.
   * Calls `GET /api/v1/ai-summaries/configurations` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:configure.
   */
  aiSummaryConfigurationsGet(options?: RequestOptions) {
    return this.client.request<T.AiSummaryConfigurationsGetResponse>({ ...options, method: "GET", url: `/api/v1/ai-summaries/configurations` });
  }
  /**
   * Create a role configuration after confirming the IDP role exists; duplicate role configuration returns 409. Success status is 201.
   * Calls `POST /api/v1/ai-summaries/configurations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:configure.
   */
  aiSummaryConfigurationCreatePost(data: T.AiSummaryConfigurationCreatePostInput, options?: RequestOptions<T.AiSummaryConfigurationCreatePostInput>) {
    return this.client.request<T.AiSummaryConfigurationCreatePostResponse, T.AiSummaryConfigurationCreatePostInput>({ ...options, method: "POST", url: `/api/v1/ai-summaries/configurations`, data: data });
  }
  /**
   * Read one deployment configuration row by UUID.
   * Calls `GET /api/v1/ai-summaries/configurations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:configure.
   */
  aiSummaryConfigurationGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AiSummaryConfigurationGetResponse>({ ...options, method: "GET", url: `/api/v1/ai-summaries/configurations/${encodeURIComponent(id)}` });
  }
  /**
   * Replace a configuration draft with required expected_version; role_id is immutable, missing version returns 422, changed version returns 409.
   * Calls `PUT /api/v1/ai-summaries/configurations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:configure.
   */
  aiSummaryConfigurationPut(id: Identifier, data: T.AiSummaryConfigurationPutInput, options?: RequestOptions<T.AiSummaryConfigurationPutInput>) {
    return this.client.request<T.AiSummaryConfigurationPutResponse, T.AiSummaryConfigurationPutInput>({ ...options, method: "PUT", url: `/api/v1/ai-summaries/configurations/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Queue an eligible subject draft preview and return job_id/run_id with status 202. Global generation must be on; preview also requires subject read permission. Preview does not publish.
   * Calls `POST /api/v1/ai-summaries/configurations/{id}/preview` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:configure.
   */
  aiSummaryPreviewPost(id: Identifier, data: T.AiSummaryPreviewPostInput, options?: RequestOptions<T.AiSummaryPreviewPostInput>) {
    return this.client.request<T.AiSummaryPreviewPostResponse, T.AiSummaryPreviewPostInput>({ ...options, method: "POST", url: `/api/v1/ai-summaries/configurations/${encodeURIComponent(id)}/preview`, data: data });
  }
  /**
   * Publish an immutable next revision using draft version concurrency, then enqueue eligible role members. Duplicate identical publication or changed draft returns 409.
   * Calls `POST /api/v1/ai-summaries/configurations/{id}/publish` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:configure.
   */
  aiSummaryPublishPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AiSummaryPublishPostResponse>({ ...options, method: "POST", url: `/api/v1/ai-summaries/configurations/${encodeURIComponent(id)}/publish` });
  }
  /**
   * Enable a published role configuration and enqueue eligible subjects, or disable it and cancel its jobs; enabling without a publication returns 409.
   * Calls `PATCH /api/v1/ai-summaries/configurations/{id}/status` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:configure.
   */
  aiSummaryStatusPatch(id: Identifier, data: T.AiSummaryStatusPatchInput, options?: RequestOptions<T.AiSummaryStatusPatchInput>) {
    return this.client.request<T.AiSummaryStatusPatchResponse, T.AiSummaryStatusPatchInput>({ ...options, method: "PATCH", url: `/api/v1/ai-summaries/configurations/${encodeURIComponent(id)}/status`, data: data });
  }
  /**
   * Validate draft formulas, budgets, sources, IDP role and tool-capable model without publishing; invalid drafts return 422.
   * Calls `POST /api/v1/ai-summaries/configurations/{id}/validate` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:configure.
   */
  aiSummaryValidatePost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AiSummaryValidatePostResponse>({ ...options, method: "POST", url: `/api/v1/ai-summaries/configurations/${encodeURIComponent(id)}/validate` });
  }
  /**
   * Page deployment jobs using subject/role/status; defaults 1/25 and caps 100. Preview configuration, lease token and requested_by are withheld.
   * Calls `GET /api/v1/ai-summaries/jobs` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:manage.
   */
  aiSummaryJobsGet(params?: T.AiSummaryJobsGetQuery, options?: RequestOptions) {
    return this.client.request<T.AiSummaryJobsGetResponse>({ ...options, method: "GET", url: `/api/v1/ai-summaries/jobs`, params });
  }
  /**
   * Reset a failed reviewable/terminal job for this deployment and return 202. Nonretryable or missing jobs return 409.
   * Calls `POST /api/v1/ai-summaries/jobs/{id}/retry` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:manage.
   */
  aiSummaryRetryPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AiSummaryRetryPostResponse>({ ...options, method: "POST", url: `/api/v1/ai-summaries/jobs/${encodeURIComponent(id)}/retry` });
  }
  /**
   * Read persisted deployment/subject/role latest state with availability/freshness and nullable job_status. Required role_id; read_own restricts to current subject, read_all permits others. GET never generates.
   * Calls `GET /api/v1/ai-summaries/latest` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:read_own.
   */
  aiSummaryLatestGet(params: T.AiSummaryLatestGetQuery, options?: RequestOptions) {
    return this.client.request<T.AiSummaryLatestGetResponse>({ ...options, method: "GET", url: `/api/v1/ai-summaries/latest`, params });
  }
  /**
   * Read the configured Agentic project-funded model catalog, including tool support.
   * Calls `GET /api/v1/ai-summaries/models` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:configure.
   */
  aiSummaryModelsGet(options?: RequestOptions) {
    return this.client.request<T.AiSummaryModelsGetResponse>({ ...options, method: "GET", url: `/api/v1/ai-summaries/models` });
  }
  /**
   * Queue 1–100 eligible subject-role pairs from published configurations and return 202 with job IDs; global and role generation must be enabled.
   * Calls `POST /api/v1/ai-summaries/refresh` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:manage.
   */
  aiSummaryRefreshPost(data: T.AiSummaryRefreshPostInput, options?: RequestOptions<T.AiSummaryRefreshPostInput>) {
    return this.client.request<T.AiSummaryRefreshPostResponse, T.AiSummaryRefreshPostInput>({ ...options, method: "POST", url: `/api/v1/ai-summaries/refresh`, data: data });
  }
  /**
   * Read IDP role catalog enriched with matching deployment summary configuration IDs/enabled flags.
   * Calls `GET /api/v1/ai-summaries/roles` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:configure.
   */
  aiSummaryRolesGet(options?: RequestOptions) {
    return this.client.request<T.AiSummaryRolesGetResponse>({ ...options, method: "GET", url: `/api/v1/ai-summaries/roles` });
  }
  /**
   * Read a persisted deployment run only with subject read_own/read_all authority.
   * Calls `GET /api/v1/ai-summaries/runs/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:read_own.
   */
  aiSummaryRunGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AiSummaryRunGetResponse>({ ...options, method: "GET", url: `/api/v1/ai-summaries/runs/${encodeURIComponent(id)}` });
  }
  /**
   * Read deployment-scoped global generation, concurrency and retention settings; reading does not invoke a model.
   * Calls `GET /api/v1/ai-summaries/settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:configure.
   */
  aiSummarySettingsGet(options?: RequestOptions) {
    return this.client.request<T.AiSummarySettingsGetResponse>({ ...options, method: "GET", url: `/api/v1/ai-summaries/settings` });
  }
  /**
   * Set concurrency 1–16 and retention 1–3650 days; disabling generation cancels pending/retry/generating jobs for this deployment.
   * Calls `PUT /api/v1/ai-summaries/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:configure.
   */
  aiSummarySettingsPut(data: T.AiSummarySettingsPutInput, options?: RequestOptions<T.AiSummarySettingsPutInput>) {
    return this.client.request<T.AiSummarySettingsPutResponse, T.AiSummarySettingsPutInput>({ ...options, method: "PUT", url: `/api/v1/ai-summaries/settings`, data: data });
  }
  /**
   * Read source capabilities, configured availability and concrete tool input/output JSON schemas.
   * Calls `GET /api/v1/ai-summaries/sources` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:configure.
   */
  aiSummarySourcesGet(options?: RequestOptions) {
    return this.client.request<T.AiSummarySourcesGetResponse>({ ...options, method: "GET", url: `/api/v1/ai-summaries/sources` });
  }
  /**
   * Check an authenticated source adapter through Agentic. Connectivity alone does not establish eligible subject evidence or activate a configuration.
   * Calls `POST /api/v1/ai-summaries/sources/{source}/check` through the shared IDP-aware Faiber client.
   * @param source Backend path identifier `source`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:configure.
   */
  aiSummarySourceCheckPost(source: Identifier, options?: RequestOptions) {
    return this.client.request<T.AiSummarySourceCheckPostResponse>({ ...options, method: "POST", url: `/api/v1/ai-summaries/sources/${encodeURIComponent(source)}/check` });
  }
  /**
   * Page persisted deployment summary runs using subject/role/status; defaults page=1/per_page=25 with size cap 100. read_own restricts the subject unless read_all is present.
   * Calls `GET /api/v1/ai-summaries/summaries` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP-validated Bearer/cookie actor; profile:ai_summary:read_own.
   */
  aiSummarySummariesGet(params?: T.AiSummarySummariesGetQuery, options?: RequestOptions) {
    return this.client.request<T.AiSummarySummariesGetResponse>({ ...options, method: "GET", url: `/api/v1/ai-summaries/summaries`, params });
  }
  /**
   * Read Chat-scope context: remove id, user_id, properties and services from the profile; return visible properties as a separate object. Office/LMS histories are omitted.
   * Calls `GET /api/v1/auth/chat-context` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  sessionGetChatContextGet(options?: RequestOptions) {
    return this.client.request<T.SessionGetChatContextGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/chat-context` });
  }
  /**
   * Read current gateway identity roles, permissions and Full-scope profile.
   * Calls `GET /api/v1/auth/self` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  sessionGetSelfGet(options?: RequestOptions) {
    return this.client.request<T.SessionGetSelfGetResponse>({ ...options, method: "GET", url: `/api/v1/auth/self` });
  }
  /**
   * Set current identity fa/en name strings; first name must be nonempty, each name at most 100 characters, locale fa/en, and embedded control characters are rejected with 422.
   * Calls `PATCH /api/v1/auth/self` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  sessionUpdateSelfNamePatch(data: T.SessionUpdateSelfNamePatchInput, options?: RequestOptions<T.SessionUpdateSelfNamePatchInput>) {
    return this.client.request<T.SessionUpdateSelfNamePatchResponse, T.SessionUpdateSelfNamePatchInput>({ ...options, method: "PATCH", url: `/api/v1/auth/self`, data: data });
  }
  /**
   * Validate age/height/weight/goal, merge onboarding app fields in PostgreSQL, and return the current session. Caller-supplied identity/role fields are rejected.
   * Calls `PUT /api/v1/auth/self/onboarding` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  sessionCompleteOnboardingPut(data: T.SessionCompleteOnboardingPutInput, options?: RequestOptions<T.SessionCompleteOnboardingPutInput>) {
    return this.client.request<T.SessionCompleteOnboardingPutResponse, T.SessionCompleteOnboardingPutInput>({ ...options, method: "PUT", url: `/api/v1/auth/self/onboarding`, data: data });
  }
  /**
   * List the city records. List pagination defaults 1/15 and caps at 100; filters apply before pagination, and deleted records are hidden unless filter[trashed]=only/with.
   * Calls `GET /api/v1/city` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission city:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  cityIndexGet(params?: T.CityIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.CityIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/city`, params });
  }
  /**
   * Create the city record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `POST /api/v1/city` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission city:create; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  cityStorePost(data: T.CityStorePostInput, options?: RequestOptions<T.CityStorePostInput>) {
    return this.client.request<T.CityStorePostResponse, T.CityStorePostInput>({ ...options, method: "POST", url: `/api/v1/city`, data: data });
  }
  /**
   * Soft-delete the city record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `DELETE /api/v1/city/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission city:delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  cityDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CityDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/city/${encodeURIComponent(id)}` });
  }
  /**
   * Read the city record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `GET /api/v1/city/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission city:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  cityShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CityShowGetResponse>({ ...options, method: "GET", url: `/api/v1/city/${encodeURIComponent(id)}` });
  }
  /**
   * Update supplied fields on the city record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `PATCH /api/v1/city/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission city:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  cityUpdatePatch(id: Identifier, data: T.CityUpdatePatchInput, options?: RequestOptions<T.CityUpdatePatchInput>) {
    return this.client.request<T.CityUpdatePatchResponse, T.CityUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/city/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update supplied fields on the city record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `PUT /api/v1/city/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission city:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  cityUpdatePut(id: Identifier, data: T.CityUpdatePutInput, options?: RequestOptions<T.CityUpdatePutInput>) {
    return this.client.request<T.CityUpdatePutResponse, T.CityUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/city/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Permanently delete the city record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `DELETE /api/v1/city/force/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission city:delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  cityForceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CityForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/city/force/${encodeURIComponent(id)}` });
  }
  /**
   * Restore the city record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `GET /api/v1/city/undo/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission city:delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  cityRestoreGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CityRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/city/undo/${encodeURIComponent(id)}` });
  }
  /**
   * List the country records. List pagination defaults 1/15 and caps at 100; filters apply before pagination, and deleted records are hidden unless filter[trashed]=only/with.
   * Calls `GET /api/v1/country` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission country:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  countryIndexGet(params?: T.CountryIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.CountryIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/country`, params });
  }
  /**
   * Create the country record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `POST /api/v1/country` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission country:create; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  countryStorePost(data: T.CountryStorePostInput, options?: RequestOptions<T.CountryStorePostInput>) {
    return this.client.request<T.CountryStorePostResponse, T.CountryStorePostInput>({ ...options, method: "POST", url: `/api/v1/country`, data: data });
  }
  /**
   * Soft-delete the country record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `DELETE /api/v1/country/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission country:delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  countryDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CountryDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/country/${encodeURIComponent(id)}` });
  }
  /**
   * Read the country record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `GET /api/v1/country/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission country:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  countryShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CountryShowGetResponse>({ ...options, method: "GET", url: `/api/v1/country/${encodeURIComponent(id)}` });
  }
  /**
   * Update supplied fields on the country record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `PATCH /api/v1/country/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission country:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  countryUpdatePatch(id: Identifier, data: T.CountryUpdatePatchInput, options?: RequestOptions<T.CountryUpdatePatchInput>) {
    return this.client.request<T.CountryUpdatePatchResponse, T.CountryUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/country/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update supplied fields on the country record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `PUT /api/v1/country/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission country:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  countryUpdatePut(id: Identifier, data: T.CountryUpdatePutInput, options?: RequestOptions<T.CountryUpdatePutInput>) {
    return this.client.request<T.CountryUpdatePutResponse, T.CountryUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/country/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Permanently delete the country record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `DELETE /api/v1/country/force/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission country:delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  countryForceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CountryForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/country/force/${encodeURIComponent(id)}` });
  }
  /**
   * Restore the country record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `GET /api/v1/country/undo/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission country:delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  countryRestoreGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CountryRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/country/undo/${encodeURIComponent(id)}` });
  }
  /**
   * Page undeleted custom types by name; filter[search] is a name substring, defaults 1/15 and size caps 100.
   * Calls `GET /api/v1/custom-type` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  customTypeIndexGet(params?: T.CustomTypeIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.CustomTypeIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/custom-type`, params });
  }
  /**
   * Create a custom type with at least one option matching value_type; invalid options return 422 and duplicate names 409. Options may be raw values or {value,code,labels} objects.
   * Calls `POST /api/v1/custom-type` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  customTypeStorePost(data: T.CustomTypeStorePostInput, options?: RequestOptions<T.CustomTypeStorePostInput>) {
    return this.client.request<T.CustomTypeStorePostResponse, T.CustomTypeStorePostInput>({ ...options, method: "POST", url: `/api/v1/custom-type`, data: data });
  }
  /**
   * Soft-delete a custom type; acknowledgement data is an empty object.
   * Calls `DELETE /api/v1/custom-type/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  customTypeDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CustomTypeDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/custom-type/${encodeURIComponent(id)}` });
  }
  /**
   * Read an undeleted custom type by UUID.
   * Calls `GET /api/v1/custom-type/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  customTypeShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CustomTypeShowGetResponse>({ ...options, method: "GET", url: `/api/v1/custom-type/${encodeURIComponent(id)}` });
  }
  /**
   * Update supplied custom type fields and validate the resulting option list against value_type.
   * Calls `PATCH /api/v1/custom-type/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  customTypeUpdatePatch(id: Identifier, data: T.CustomTypeUpdatePatchInput, options?: RequestOptions<T.CustomTypeUpdatePatchInput>) {
    return this.client.request<T.CustomTypeUpdatePatchResponse, T.CustomTypeUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/custom-type/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read constant gender/status/employee_type choices.
   * Calls `GET /api/v1/dependency` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission dependency:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  optionDependencyGet(options?: RequestOptions) {
    return this.client.request<T.OptionDependencyGetResponse>({ ...options, method: "GET", url: `/api/v1/dependency` });
  }
  /**
   * List active undeleted education {id,name} options ordered by name/id.
   * Calls `GET /api/v1/education` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  educationIndexGet(options?: RequestOptions) {
    return this.client.request<T.EducationIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/education` });
  }
  /**
   * Create an education option from a trimmed name containing 1–255 characters; invalid names return 422.
   * Calls `POST /api/v1/education` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  educationStorePost(data: T.EducationStorePostInput, options?: RequestOptions<T.EducationStorePostInput>) {
    return this.client.request<T.EducationStorePostResponse, T.EducationStorePostInput>({ ...options, method: "POST", url: `/api/v1/education`, data: data });
  }
  /**
   * Read attendance choices, active referral source codes and level_max_length=64.
   * Calls `GET /api/v1/education/dependencies` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  educationDependenciesGet(options?: RequestOptions) {
    return this.client.request<T.EducationDependenciesGetResponse>({ ...options, method: "GET", url: `/api/v1/education/dependencies` });
  }
  /**
   * As fitness admin, import validated active catalog items from an immutable published Knowledge release in one transaction.
   * Calls `POST /api/v1/fitness/admin/catalog` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission fitness:admin; gateway enforces ACL metadata, local annotation itself is not a permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessImportCatalogPost(data: T.FitnessImportCatalogPostInput, options?: RequestOptions<T.FitnessImportCatalogPostInput>) {
    return this.client.request<T.FitnessImportCatalogPostResponse, T.FitnessImportCatalogPostInput>({ ...options, method: "POST", url: `/api/v1/fitness/admin/catalog`, data: data });
  }
  /**
   * As fitness admin, idempotently provision the main gym and Asset products. Validate manager/AI-coach profiles and required model/assistant choices; enabling requires a complete catalog.
   * Calls `POST /api/v1/fitness/admin/provision` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission fitness:admin; gateway enforces ACL metadata, local annotation itself is not a permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessProvisionPost(data: T.FitnessProvisionPostInput, options?: RequestOptions<T.FitnessProvisionPostInput>) {
    return this.client.request<T.FitnessProvisionPostResponse, T.FitnessProvisionPostInput>({ ...options, method: "POST", url: `/api/v1/fitness/admin/provision`, data: data });
  }
  /**
   * Read enabled catalog entries as an enabled member, manager or enabled main-gym coach. kind/category/name query filters apply, offset floors at zero, and at most 100 rows are returned.
   * Calls `GET /api/v1/fitness/catalog` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessListCatalogGet(params?: T.FitnessListCatalogGetQuery, options?: RequestOptions) {
    return this.client.request<T.FitnessListCatalogGetResponse>({ ...options, method: "GET", url: `/api/v1/fitness/catalog`, params });
  }
  /**
   * List enabled coaches and enabled published tariffs for the current enabled member gym, with bilingual coach_name.
   * Calls `GET /api/v1/fitness/coaches` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessCoachesGet(options?: RequestOptions) {
    return this.client.request<T.FitnessCoachesGetResponse>({ ...options, method: "GET", url: `/api/v1/fitness/coaches` });
  }
  /**
   * Read current enabled member entitled coaching context, active AI/trial plans, Full-scope profile and compact catalog. Does not accept a target user ID.
   * Calls `GET /api/v1/fitness/context` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessContextGet(options?: RequestOptions) {
    return this.client.request<T.FitnessContextGetResponse>({ ...options, method: "GET", url: `/api/v1/fitness/context` });
  }
  /**
   * Read the current enabled member intake draft, or null if no draft exists.
   * Calls `GET /api/v1/fitness/intake` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessIntakeGet(options?: RequestOptions) {
    return this.client.request<T.FitnessIntakeGetResponse>({ ...options, method: "GET", url: `/api/v1/fitness/intake` });
  }
  /**
   * Validate and save current member intake using expected_version; stale versions return 409 and no duplicate draft is created.
   * Calls `PUT /api/v1/fitness/intake` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessSaveIntakePut(data: T.FitnessSaveIntakePutInput, options?: RequestOptions<T.FitnessSaveIntakePutInput>) {
    return this.client.request<T.FitnessSaveIntakePutResponse, T.FitnessSaveIntakePutInput>({ ...options, method: "PUT", url: `/api/v1/fitness/intake`, data: data });
  }
  /**
   * Read at most 100 unread current-user order events, newest first.
   * Calls `GET /api/v1/fitness/notifications` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessNotificationsGet(options?: RequestOptions) {
    return this.client.request<T.FitnessNotificationsGetResponse>({ ...options, method: "GET", url: `/api/v1/fitness/notifications` });
  }
  /**
   * Mark a current-user order notification read; returns {read:true} even when no owned row matched.
   * Calls `POST /api/v1/fitness/notifications/{id}/read` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessReadNotificationPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FitnessReadNotificationPostResponse>({ ...options, method: "POST", url: `/api/v1/fitness/notifications/${encodeURIComponent(id)}/read` });
  }
  /**
   * List up to 200 own/assigned/managed orders, or all orders for fitness admin; job_token and model_snapshot are withheld.
   * Calls `GET /api/v1/fitness/orders` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessOrdersGet(options?: RequestOptions) {
    return this.client.request<T.FitnessOrdersGetResponse>({ ...options, method: "GET", url: `/api/v1/fitness/orders` });
  }
  /**
   * Purchase at server-owned prices or selected human tariff. Idempotency UUID is scoped to the current member; conflicting reuse returns 422. Trial bundles consume explicit entitlement; paid orders create Payment transactions.
   * Calls `POST /api/v1/fitness/orders` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessPurchasePost(data: T.FitnessPurchasePostInput, options?: RequestOptions<T.FitnessPurchasePostInput>) {
    return this.client.request<T.FitnessPurchasePostResponse, T.FitnessPurchasePostInput>({ ...options, method: "POST", url: `/api/v1/fitness/orders`, data: data });
  }
  /**
   * Read an authorized order with current plan and pending proposals; owner, selected coach, gym manager or fitness admin may read.
   * Calls `GET /api/v1/fitness/orders/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessShowGetApiV1FitnessOrdersId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FitnessShowGetApiV1FitnessOrdersIdResponse>({ ...options, method: "GET", url: `/api/v1/fitness/orders/${encodeURIComponent(id)}` });
  }
  /**
   * Apply a versioned order transition: owner retry/retry_payment/refund, selected enabled coach accept/decline. Invalid transitions return 422; stale update returns 409.
   * Calls `POST /api/v1/fitness/orders/{id}/action` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessActionPost(id: Identifier, data: T.FitnessActionPostInput, options?: RequestOptions<T.FitnessActionPostInput>) {
    return this.client.request<T.FitnessActionPostResponse, T.FitnessActionPostInput>({ ...options, method: "POST", url: `/api/v1/fitness/orders/${encodeURIComponent(id)}/action`, data: data });
  }
  /**
   * Assign and activate a validated human coaching plan as the selected enabled coach; base revision detects stale writes.
   * Calls `POST /api/v1/fitness/orders/{id}/plan` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessAssignPost(id: Identifier, data: T.FitnessAssignPostInput, options?: RequestOptions<T.FitnessAssignPostInput>) {
    return this.client.request<T.FitnessAssignPostResponse, T.FitnessAssignPostInput>({ ...options, method: "POST", url: `/api/v1/fitness/orders/${encodeURIComponent(id)}/plan`, data: data });
  }
  /**
   * Read server-owned one-time plan prices in IRR and support credit quotas. Human tariffs and meal upgrades are separate workflows.
   * Calls `GET /api/v1/fitness/products` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessProductsGet(options?: RequestOptions) {
    return this.client.request<T.FitnessProductsGetResponse>({ ...options, method: "GET", url: `/api/v1/fitness/products` });
  }
  /**
   * Validate a revision for an owned AI/trial order using base_revision_id; create a proposal without activating it.
   * Calls `POST /api/v1/fitness/proposals` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessProposePost(data: T.FitnessProposePostInput, options?: RequestOptions<T.FitnessProposePostInput>) {
    return this.client.request<T.FitnessProposePostResponse, T.FitnessProposePostInput>({ ...options, method: "POST", url: `/api/v1/fitness/proposals`, data: data });
  }
  /**
   * Read a plan revision only after authorizing its owning order.
   * Calls `GET /api/v1/fitness/revisions/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessRevisionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FitnessRevisionGetResponse>({ ...options, method: "GET", url: `/api/v1/fitness/revisions/${encodeURIComponent(id)}` });
  }
  /**
   * As the order owner, accept a proposed revision using its base revision or reject it. Returns a revision receipt on accept and {status:rejected} on rejection.
   * Calls `POST /api/v1/fitness/revisions/{id}/review` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessReviewPost(id: Identifier, data: T.FitnessReviewPostInput, options?: RequestOptions<T.FitnessReviewPostInput>) {
    return this.client.request<T.FitnessReviewPostResponse, T.FitnessReviewPostInput>({ ...options, method: "POST", url: `/api/v1/fitness/revisions/${encodeURIComponent(id)}/review`, data: data });
  }
  /**
   * Read current membership, active plans, manager flag, assistant ID, paid/trial chat balance and optional trial entitlement.
   * Calls `GET /api/v1/fitness/self` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessMeGet(options?: RequestOptions) {
    return this.client.request<T.FitnessMeGetResponse>({ ...options, method: "GET", url: `/api/v1/fitness/self` });
  }
  /**
   * Read the main gym configuration as its manager or fitness admin.
   * Calls `GET /api/v1/fitness/settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessSettingsGet(options?: RequestOptions) {
    return this.client.request<T.FitnessSettingsGetResponse>({ ...options, method: "GET", url: `/api/v1/fitness/settings` });
  }
  /**
   * Save manager model/STT/TTS selections after Chat validates them; expected_version detects stale configuration with 409.
   * Calls `PUT /api/v1/fitness/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessSaveSettingsPut(data: T.FitnessSaveSettingsPutInput, options?: RequestOptions<T.FitnessSaveSettingsPutInput>) {
    return this.client.request<T.FitnessSaveSettingsPutResponse, T.FitnessSaveSettingsPutInput>({ ...options, method: "PUT", url: `/api/v1/fitness/settings`, data: data });
  }
  /**
   * As manager or the selected coach, validate and version a tariff and publish its Asset product. Expected-version conflicts return 409.
   * Calls `POST /api/v1/fitness/tariffs` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessSaveTariffPost(data: T.FitnessSaveTariffPostInput, options?: RequestOptions<T.FitnessSaveTariffPostInput>) {
    return this.client.request<T.FitnessSaveTariffPostResponse, T.FitnessSaveTariffPostInput>({ ...options, method: "POST", url: `/api/v1/fitness/tariffs`, data: data });
  }
  /**
   * Read the manager gym coach roster with profile names and tariff snapshots.
   * Calls `GET /api/v1/fitness/team` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessTeamGet(options?: RequestOptions) {
    return this.client.request<T.FitnessTeamGetResponse>({ ...options, method: "GET", url: `/api/v1/fitness/team` });
  }
  /**
   * As manager, enroll/disable a coach within the same gym after verifying a Profile exists; the AI coach cannot be assigned here.
   * Calls `PUT /api/v1/fitness/team` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessSaveCoachPut(data: T.FitnessSaveCoachPutInput, options?: RequestOptions<T.FitnessSaveCoachPutInput>) {
    return this.client.request<T.FitnessSaveCoachPutResponse, T.FitnessSaveCoachPutInput>({ ...options, method: "PUT", url: `/api/v1/fitness/team`, data: data });
  }
  /**
   * Redeem a valid gift for an eligible verified new gym member. Returns frozen trial entitlement; duplicate same-gift redemption reuses it, other prior trials are rejected.
   * Calls `POST /api/v1/fitness/trial/redeem` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessRedeemPost(data: T.FitnessRedeemPostInput, options?: RequestOptions<T.FitnessRedeemPostInput>) {
    return this.client.request<T.FitnessRedeemPostResponse, T.FitnessRedeemPostInput>({ ...options, method: "POST", url: `/api/v1/fitness/trial/redeem`, data: data });
  }
  /**
   * Read model/STT/TTS choices and version as an enabled member or manager; payment is not required.
   * Calls `GET /api/v1/fitness/voice-settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check; operation also enforces its current-member/order/coach/manager role as documented.
   */
  fitnessVoiceSettingsGet(options?: RequestOptions) {
    return this.client.request<T.FitnessVoiceSettingsGetResponse>({ ...options, method: "GET", url: `/api/v1/fitness/voice-settings` });
  }
  /**
   * Read the current gateway identity profile using Get-scope property/service visibility.
   * Calls `GET /api/v1/identity` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  optionIdentityGet(options?: RequestOptions) {
    return this.client.request<T.OptionIdentityGetResponse>({ ...options, method: "GET", url: `/api/v1/identity` });
  }
  /**
   * Read HTTP integration metadata and SDK snippets; optional direct transport fields are omitted when absent.
   * Calls `GET /api/v1/integration/docs` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission admin:integration:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  integrationIntegrationDocsShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationIntegrationDocsShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/docs` });
  }
  /**
   * Read the broker queue and event payload field metadata for Profile Flow integration; this does not execute workflows.
   * Calls `GET /api/v1/integration/flow` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  integrationFlowIntegrationShowGet(options?: RequestOptions) {
    return this.client.request<T.IntegrationFlowIntegrationShowGetResponse>({ ...options, method: "GET", url: `/api/v1/integration/flow` });
  }
  /**
   * Reserve one response credit for a trusted Chat turn. Locks quota, checks user/turn binding, consumes paid grant or trial balance, and creates a fifteen-minute reservation lease.
   * Calls `POST /api/v1/internal/fitness-chat/reserve` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: dedicated FITNESS_CHAT_TOKEN Bearer service credential; user IDP credentials do not satisfy this guard.
   */
  fitnessReservePost(data: T.FitnessReservePostInput, options?: RequestOptions<T.FitnessReservePostInput>) {
    return this.client.request<T.FitnessReservePostResponse, T.FitnessReservePostInput>({ ...options, method: "POST", url: `/api/v1/internal/fitness-chat/reserve`, data: data });
  }
  /**
   * Settle a trusted Chat turn with required success: consume a reserved response on success or refund once on failure; already-settled turns are idempotent.
   * Calls `POST /api/v1/internal/fitness-chat/settle` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: dedicated FITNESS_CHAT_TOKEN Bearer service credential; user IDP credentials do not satisfy this guard.
   */
  fitnessSettlePost(data: T.FitnessSettlePostInput, options?: RequestOptions<T.FitnessSettlePostInput>) {
    return this.client.request<T.FitnessSettlePostResponse, T.FitnessSettlePostInput>({ ...options, method: "POST", url: `/api/v1/internal/fitness-chat/settle`, data: data });
  }
  /**
   * Read Asset-only trial gifts with page/per_page/search. Defaults 1/25, size caps at 100, page at 100000, and search length at 200. Token hashes are withheld.
   * Calls `GET /api/v1/internal/plans/gifts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: dedicated PRODUCT_TRIAL_GIFT_SERVICE_TOKEN Bearer service credential; intended for Asset adapter.
   */
  fitnessListGet(params?: T.FitnessListGetQuery, options?: RequestOptions) {
    return this.client.request<T.FitnessListGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/plans/gifts`, params });
  }
  /**
   * Create an Asset-only gift idempotently by request_id and created_by. Limits require responses 1–59/plans 1–2; token is returned only on initial creation.
   * Calls `POST /api/v1/internal/plans/gifts` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: dedicated PRODUCT_TRIAL_GIFT_SERVICE_TOKEN Bearer service credential; intended for Asset adapter.
   */
  fitnessCreatePost(data: T.FitnessCreatePostInput, options?: RequestOptions<T.FitnessCreatePostInput>) {
    return this.client.request<T.FitnessCreatePostResponse, T.FitnessCreatePostInput>({ ...options, method: "POST", url: `/api/v1/internal/plans/gifts`, data: data });
  }
  /**
   * Read an Asset-only gift record without its token hash.
   * Calls `GET /api/v1/internal/plans/gifts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: dedicated PRODUCT_TRIAL_GIFT_SERVICE_TOKEN Bearer service credential; intended for Asset adapter.
   */
  fitnessShowGetApiV1InternalPlansGiftsId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FitnessShowGetApiV1InternalPlansGiftsIdResponse>({ ...options, method: "GET", url: `/api/v1/internal/plans/gifts/${encodeURIComponent(id)}` });
  }
  /**
   * Edit future gift redemption settings; existing entitlement remains frozen. max_uses cannot fall below used_count; token rotation is rejected after first redemption.
   * Calls `PUT /api/v1/internal/plans/gifts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: dedicated PRODUCT_TRIAL_GIFT_SERVICE_TOKEN Bearer service credential; intended for Asset adapter.
   */
  fitnessUpdatePut(id: Identifier, data: T.FitnessUpdatePutInput, options?: RequestOptions<T.FitnessUpdatePutInput>) {
    return this.client.request<T.FitnessUpdatePutResponse, T.FitnessUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/internal/plans/gifts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Insert an action/meta audit row and return its stored ID/timestamp. meta is arbitrary JSON.
   * Calls `POST /api/v1/log-action` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission log_action:create; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  logActionStorePost(data: T.LogActionStorePostInput, options?: RequestOptions<T.LogActionStorePostInput>) {
    return this.client.request<T.LogActionStorePostResponse, T.LogActionStorePostInput>({ ...options, method: "POST", url: `/api/v1/log-action`, data: data });
  }
  /**
   * Insert an audit row with the path slug overriding request action; metadata remains arbitrary JSON.
   * Calls `POST /api/v1/log-action/{slug}` through the shared IDP-aware Faiber client.
   * @param slug Backend path identifier `slug`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission log_action:create; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  logActionStoreSlugPost(slug: Identifier, data: T.LogActionStoreSlugPostInput, options?: RequestOptions<T.LogActionStoreSlugPostInput>) {
    return this.client.request<T.LogActionStoreSlugPostResponse, T.LogActionStoreSlugPostInput>({ ...options, method: "POST", url: `/api/v1/log-action/${encodeURIComponent(slug)}`, data: data });
  }
  /**
   * Insert an audit row through the public direct mount with the path slug overriding request action.
   * Calls `POST /api/v1/log-action/direct/{slug}` through the shared IDP-aware Faiber client.
   * @param slug Backend path identifier `slug`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  logActionStoreDirectPost(slug: Identifier, data: T.LogActionStoreDirectPostInput, options?: RequestOptions<T.LogActionStoreDirectPostInput>) {
    return this.client.request<T.LogActionStoreDirectPostResponse, T.LogActionStoreDirectPostInput>({ ...options, method: "POST", url: `/api/v1/log-action/direct/${encodeURIComponent(slug)}`, data: data });
  }
  /**
   * Read all stored audit logs without pagination; local router has no authentication middleware. request/response/meta remain arbitrary JSON.
   * Calls `GET /api/v1/logger` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  loggerIndexGet(options?: RequestOptions) {
    return this.client.request<T.LoggerIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/logger` });
  }
  /**
   * Read a stored audit log by UUID; missing row returns data:null.
   * Calls `GET /api/v1/logger/{log}` through the shared IDP-aware Faiber client.
   * @param log Backend path identifier `log`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  loggerShowGet(log: Identifier, options?: RequestOptions) {
    return this.client.request<T.LoggerShowGetResponse>({ ...options, method: "GET", url: `/api/v1/logger/${encodeURIComponent(log)}` });
  }
  /**
   * Read children for parent user_ids, merging legacy links with active parent/child relation types and deduplicating pairs. The local mount is public.
   * Calls `POST /api/v1/parent/children/get` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  optionParentChildrenGetPost(data: T.OptionParentChildrenGetPostInput, options?: RequestOptions<T.OptionParentChildrenGetPostInput>) {
    return this.client.request<T.OptionParentChildrenGetPostResponse, T.OptionParentChildrenGetPostInput>({ ...options, method: "POST", url: `/api/v1/parent/children/get`, data: data });
  }
  /**
   * Read legacy parent-link rows for student user_ids. The local mount is public.
   * Calls `POST /api/v1/parent/get` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  optionParentGetPost(data: T.OptionParentGetPostInput, options?: RequestOptions<T.OptionParentGetPostInput>) {
    return this.client.request<T.OptionParentGetPostResponse, T.OptionParentGetPostInput>({ ...options, method: "POST", url: `/api/v1/parent/get`, data: data });
  }
  /**
   * List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles.
   * Calls `GET /api/v1/profile` through the shared IDP-aware Faiber client.
   * Supports live core/property/trusted-event filters, repeated date ranges and sorting before pagination; invalid clauses return HTTP 400.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileIndexGet(params?: T.ProfileIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile`, params });
  }
  /**
   * Read binary image or private media bytes. Required key must belong to the supplied owner UUID and must not contain traversal; 403 rejects unsafe keys, 404 means the object is unavailable. Returns raw bytes with service Content-Type and Cache-Control headers.
   * Calls `GET /api/v1/profile-media/{uuid}/avatar` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public read; key restricted to requested owner UUID.
   */
  profileAvatarShowGetApiV1ProfileMediaUuidAvatar(uuid: Identifier, params: T.ProfileAvatarShowGetApiV1ProfileMediaUuidAvatarQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileAvatarShowGetApiV1ProfileMediaUuidAvatarResponse>({ ...options, method: "GET", url: `/api/v1/profile-media/${encodeURIComponent(uuid)}/avatar`, params, responseType: "arraybuffer" });
  }
  /**
   * Read binary image or private media bytes. Required key must belong to the supplied owner UUID and must not contain traversal; 403 rejects unsafe keys, 404 means the object is unavailable. Returns raw bytes with service Content-Type and Cache-Control headers.
   * Calls `GET /api/v1/profile-media/{uuid}/images` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public read; key restricted to requested owner UUID.
   */
  profileImageShowGet(uuid: Identifier, params: T.ProfileImageShowGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileImageShowGetResponse>({ ...options, method: "GET", url: `/api/v1/profile-media/${encodeURIComponent(uuid)}/images`, params, responseType: "arraybuffer" });
  }
  /**
   * List the property definition records. List pagination defaults 1/15 and caps at 100; filters apply before pagination, and deleted records are hidden unless filter[trashed]=only/with.
   * Calls `GET /api/v1/profile-property-definition` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile_property_definition:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profilePropertyIndexGet(params?: T.ProfilePropertyIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile-property-definition`, params });
  }
  /**
   * Create the property definition record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `POST /api/v1/profile-property-definition` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile_property_definition:create; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profilePropertyStorePost(data: T.ProfilePropertyStorePostInput, options?: RequestOptions<T.ProfilePropertyStorePostInput>) {
    return this.client.request<T.ProfilePropertyStorePostResponse, T.ProfilePropertyStorePostInput>({ ...options, method: "POST", url: `/api/v1/profile-property-definition`, data: data });
  }
  /**
   * Soft-delete the property definition record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `DELETE /api/v1/profile-property-definition/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile_property_definition:delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profilePropertyDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile-property-definition/${encodeURIComponent(id)}` });
  }
  /**
   * Read the property definition record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `GET /api/v1/profile-property-definition/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile_property_definition:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profilePropertyShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyShowGetResponse>({ ...options, method: "GET", url: `/api/v1/profile-property-definition/${encodeURIComponent(id)}` });
  }
  /**
   * Update supplied fields on the property definition record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `PATCH /api/v1/profile-property-definition/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile_property_definition:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profilePropertyUpdatePatch(id: Identifier, data: T.ProfilePropertyUpdatePatchInput, options?: RequestOptions<T.ProfilePropertyUpdatePatchInput>) {
    return this.client.request<T.ProfilePropertyUpdatePatchResponse, T.ProfilePropertyUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile-property-definition/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update supplied fields on the property definition record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `PUT /api/v1/profile-property-definition/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile_property_definition:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profilePropertyUpdatePut(id: Identifier, data: T.ProfilePropertyUpdatePutInput, options?: RequestOptions<T.ProfilePropertyUpdatePutInput>) {
    return this.client.request<T.ProfilePropertyUpdatePutResponse, T.ProfilePropertyUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/profile-property-definition/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Permanently delete the property definition record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `DELETE /api/v1/profile-property-definition/force/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile_property_definition:force_delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profilePropertyForceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile-property-definition/force/${encodeURIComponent(id)}` });
  }
  /**
   * Restore the property definition record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `GET /api/v1/profile-property-definition/undo/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile_property_definition:restore; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profilePropertyRestoreGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfilePropertyRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/profile-property-definition/undo/${encodeURIComponent(id)}` });
  }
  /**
   * Read the raw Profile row by local Profile UUID; this is not the shaped public profile response.
   * Calls `GET /api/v1/profile-referral/{profile_id}` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  referralShowProfileReferralGet(profileId: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReferralShowProfileReferralGetResponse>({ ...options, method: "GET", url: `/api/v1/profile-referral/${encodeURIComponent(profileId)}` });
  }
  /**
   * Replace referral source/referrer by local Profile UUID; null/omitted fields clear them. Reject self/cyclic referrals, chains beyond 64 levels and inactive/missing sources or referrers.
   * Calls `PUT /api/v1/profile-referral/{profile_id}` through the shared IDP-aware Faiber client.
   * @param profileId Backend path identifier `profile_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  referralAssignPut(profileId: Identifier, data: T.ReferralAssignPutInput, options?: RequestOptions<T.ReferralAssignPutInput>) {
    return this.client.request<T.ReferralAssignPutResponse, T.ReferralAssignPutInput>({ ...options, method: "PUT", url: `/api/v1/profile-referral/${encodeURIComponent(profileId)}`, data: data });
  }
  /**
   * List relations by optional endpoint profile_id and active flag, newest first.
   * Calls `GET /api/v1/profile-relation` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  relationListRelationsGet(params?: T.RelationListRelationsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RelationListRelationsGetResponse>({ ...options, method: "GET", url: `/api/v1/profile-relation`, params });
  }
  /**
   * Create relation plus managed inverse atomically after active-type, endpoint, self-link and cardinality/status constraint checks. Returns one or two rows.
   * Calls `POST /api/v1/profile-relation` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  relationCreateRelationPost(data: T.RelationCreateRelationPostInput, options?: RequestOptions<T.RelationCreateRelationPostInput>) {
    return this.client.request<T.RelationCreateRelationPostResponse, T.RelationCreateRelationPostInput>({ ...options, method: "POST", url: `/api/v1/profile-relation`, data: data });
  }
  /**
   * Permanently delete a relation and its inverse atomically.
   * Calls `DELETE /api/v1/profile-relation/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  relationDeleteRelationDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RelationDeleteRelationDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile-relation/${encodeURIComponent(id)}` });
  }
  /**
   * Read a relation by UUID.
   * Calls `GET /api/v1/profile-relation/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  relationShowRelationGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RelationShowRelationGetResponse>({ ...options, method: "GET", url: `/api/v1/profile-relation/${encodeURIComponent(id)}` });
  }
  /**
   * Update object metadata/active flag on a relation and its managed inverse atomically; returns updated rows.
   * Calls `PUT /api/v1/profile-relation/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  relationUpdateRelationPut(id: Identifier, data: T.RelationUpdateRelationPutInput, options?: RequestOptions<T.RelationUpdateRelationPutInput>) {
    return this.client.request<T.RelationUpdateRelationPutResponse, T.RelationUpdateRelationPutInput>({ ...options, method: "PUT", url: `/api/v1/profile-relation/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Delete matching legacy student/parent IDP UUID links and return an empty acknowledgement.
   * Calls `DELETE /api/v1/profile/{student_uuid}/delete/parent/{parent_uuid}` through the shared IDP-aware Faiber client.
   * @param studentUuid Backend path identifier `student_uuid`.
   * @param parentUuid Backend path identifier `parent_uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileDeleteParentDelete(studentUuid: Identifier, parentUuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileDeleteParentDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/${encodeURIComponent(studentUuid)}/delete/parent/${encodeURIComponent(parentUuid)}` });
  }
  /**
   * Soft-delete a profile by IDP user UUID; returns an empty acknowledgement.
   * Calls `DELETE /api/v1/profile/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileDestroyDelete(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/${encodeURIComponent(uuid)}` });
  }
  /**
   * Read a profile by IDP user UUID first, falling back to local Profile UUID; return Get-scope properties/services and Office/LMS projections.
   * Calls `GET /api/v1/profile/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileShowGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileShowGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/${encodeURIComponent(uuid)}` });
  }
  /**
   * Atomically patch profile scalars, app/meta and validated properties, then rebuild search. Resolves IDP user UUID first and local Profile UUID second. Omission preserves values; job:null clears, while other nullable scalar nulls deserialize as omission in this pinned model.
   * Calls `PATCH /api/v1/profile/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileUpdatePatch(uuid: Identifier, data: T.ProfileUpdatePatchInput, options?: RequestOptions<T.ProfileUpdatePatchInput>) {
    return this.client.request<T.ProfileUpdatePatchResponse, T.ProfileUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Read an admin profile by IDP user UUID with admin-visible properties and trusted service data.
   * Calls `GET /api/v1/profile/{uuid}/admin` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read_admin; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileShowAdminGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileShowAdminGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/${encodeURIComponent(uuid)}/admin` });
  }
  /**
   * Clear the owned/authorized user avatar reference and attempt object cleanup; returns an empty acknowledgement.
   * Calls `DELETE /api/v1/profile/{uuid}/avatar` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  profileAvatarDeleteDelete(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileAvatarDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/${encodeURIComponent(uuid)}/avatar` });
  }
  /**
   * Read binary image or private media bytes. Required key must belong to the supplied owner UUID and must not contain traversal; 403 rejects unsafe keys, 404 means the object is unavailable. Returns raw bytes with service Content-Type and Cache-Control headers.
   * Calls `GET /api/v1/profile/{uuid}/avatar` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public read; key restricted to requested owner UUID.
   */
  profileAvatarShowGetApiV1ProfileUuidAvatar(uuid: Identifier, params: T.ProfileAvatarShowGetApiV1ProfileUuidAvatarQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileAvatarShowGetApiV1ProfileUuidAvatarResponse>({ ...options, method: "GET", url: `/api/v1/profile/${encodeURIComponent(uuid)}/avatar`, params, responseType: "arraybuffer" });
  }
  /**
   * Upload the multipart file field as JPEG, PNG or WebP (up to 5 MiB). Returns url and key; 413 rejects oversize, 415 unsupported media, 422 absent/empty file, and 503 unconfigured storage.
   * Calls `POST /api/v1/profile/{uuid}/avatar` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated target user or profile:update permission.
   */
  profileAvatarStorePost(uuid: Identifier, data: T.ProfileAvatarStorePostInput, options?: RequestOptions<T.ProfileAvatarStorePostInput>) {
    return this.client.request<T.ProfileAvatarStorePostResponse, T.ProfileAvatarStorePostInput>({ ...options, method: "POST", url: `/api/v1/profile/${encodeURIComponent(uuid)}/avatar`, data: data });
  }
  /**
   * Delete an address by exact title and IDP user UUID; returns an empty acknowledgement even if the title has no row.
   * Calls `DELETE /api/v1/profile/{uuid}/delete/address/{title}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param title Backend path identifier `title`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileDeleteAddressDelete(uuid: Identifier, title: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileDeleteAddressDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/${encodeURIComponent(uuid)}/delete/address/${encodeURIComponent(title)}` });
  }
  /**
   * Set employee_type for an IDP user UUID and return the Get-scope profile.
   * Calls `PATCH /api/v1/profile/{uuid}/employee-type` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update_employee_type; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileUpdateEmployeeTypePatch(uuid: Identifier, data: T.ProfileUpdateEmployeeTypePatchInput, options?: RequestOptions<T.ProfileUpdateEmployeeTypePatchInput>) {
    return this.client.request<T.ProfileUpdateEmployeeTypePatchResponse, T.ProfileUpdateEmployeeTypePatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}/employee-type`, data: data });
  }
  /**
   * Set employee_type for an IDP user UUID and return the Get-scope profile.
   * Calls `PUT /api/v1/profile/{uuid}/employee-type` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update_employee_type; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileUpdateEmployeeTypePut(uuid: Identifier, data: T.ProfileUpdateEmployeeTypePutInput, options?: RequestOptions<T.ProfileUpdateEmployeeTypePutInput>) {
    return this.client.request<T.ProfileUpdateEmployeeTypePutResponse, T.ProfileUpdateEmployeeTypePutInput>({ ...options, method: "PUT", url: `/api/v1/profile/${encodeURIComponent(uuid)}/employee-type`, data: data });
  }
  /**
   * Set freemium_session_limit for an IDP user UUID and return the Get-scope profile.
   * Calls `PATCH /api/v1/profile/{uuid}/freemium-session-limit` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:freemium_session_limit; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileUpdateFreemiumPatch(uuid: Identifier, data: T.ProfileUpdateFreemiumPatchInput, options?: RequestOptions<T.ProfileUpdateFreemiumPatchInput>) {
    return this.client.request<T.ProfileUpdateFreemiumPatchResponse, T.ProfileUpdateFreemiumPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}/freemium-session-limit`, data: data });
  }
  /**
   * Set freemium_session_limit for an IDP user UUID and return the Get-scope profile.
   * Calls `PUT /api/v1/profile/{uuid}/freemium-session-limit` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:freemium_session_limit; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileUpdateFreemiumPut(uuid: Identifier, data: T.ProfileUpdateFreemiumPutInput, options?: RequestOptions<T.ProfileUpdateFreemiumPutInput>) {
    return this.client.request<T.ProfileUpdateFreemiumPutResponse, T.ProfileUpdateFreemiumPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/${encodeURIComponent(uuid)}/freemium-session-limit`, data: data });
  }
  /**
   * Read by IDP user UUID or fallback Profile UUID with Full-scope properties/services and Office/LMS projections.
   * Calls `GET /api/v1/profile/{uuid}/full` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileShowFullGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileShowFullGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/${encodeURIComponent(uuid)}/full` });
  }
  /**
   * Upload the multipart file field as JPEG, PNG or WebP (up to 5 MiB). Returns url and key; 413 rejects oversize, 415 unsupported media, 422 absent/empty file, and 503 unconfigured storage.
   * Calls `POST /api/v1/profile/{uuid}/images` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated target user or profile:update permission.
   */
  profileImageStorePost(uuid: Identifier, data: T.ProfileImageStorePostInput, options?: RequestOptions<T.ProfileImageStorePostInput>) {
    return this.client.request<T.ProfileImageStorePostResponse, T.ProfileImageStorePostInput>({ ...options, method: "POST", url: `/api/v1/profile/${encodeURIComponent(uuid)}/images`, data: data });
  }
  /**
   * Read binary image or private media bytes. Required key must belong to the supplied owner UUID and must not contain traversal; 403 rejects unsafe keys, 404 means the object is unavailable. Returns raw bytes with service Content-Type and Cache-Control headers.
   * Calls `GET /api/v1/profile/{uuid}/media` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: authenticated IDP context; key restricted to requested profile UUID.
   */
  profileMediaShowGet(uuid: Identifier, params: T.ProfileMediaShowGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileMediaShowGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/${encodeURIComponent(uuid)}/media`, params, responseType: "arraybuffer" });
  }
  /**
   * Validate active configured properties, update them atomically and rebuild search. Returns updated_keys and array-item added/removed IDs and counts; unknown/inactive keys return 422.
   * Calls `PATCH /api/v1/profile/{uuid}/properties` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileUpdatePropertiesPatch(uuid: Identifier, data: T.ProfileUpdatePropertiesPatchInput, options?: RequestOptions<T.ProfileUpdatePropertiesPatchInput>) {
    return this.client.request<T.ProfileUpdatePropertiesPatchResponse, T.ProfileUpdatePropertiesPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}/properties`, data: data });
  }
  /**
   * Validate active configured properties, update them atomically and rebuild search. Returns updated_keys and array-item added/removed IDs and counts; unknown/inactive keys return 422.
   * Calls `PUT /api/v1/profile/{uuid}/properties` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileUpdatePropertiesPut(uuid: Identifier, data: T.ProfileUpdatePropertiesPutInput, options?: RequestOptions<T.ProfileUpdatePropertiesPutInput>) {
    return this.client.request<T.ProfileUpdatePropertiesPutResponse, T.ProfileUpdatePropertiesPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/${encodeURIComponent(uuid)}/properties`, data: data });
  }
  /**
   * Set status for an IDP user UUID and return the Get-scope profile.
   * Calls `PATCH /api/v1/profile/{uuid}/status` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update_status; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileUpdateStatusPatch(uuid: Identifier, data: T.ProfileUpdateStatusPatchInput, options?: RequestOptions<T.ProfileUpdateStatusPatchInput>) {
    return this.client.request<T.ProfileUpdateStatusPatchResponse, T.ProfileUpdateStatusPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/${encodeURIComponent(uuid)}/status`, data: data });
  }
  /**
   * Set status for an IDP user UUID and return the Get-scope profile.
   * Calls `PUT /api/v1/profile/{uuid}/status` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update_status; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileUpdateStatusPut(uuid: Identifier, data: T.ProfileUpdateStatusPutInput, options?: RequestOptions<T.ProfileUpdateStatusPutInput>) {
    return this.client.request<T.ProfileUpdateStatusPutResponse, T.ProfileUpdateStatusPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/${encodeURIComponent(uuid)}/status`, data: data });
  }
  /**
   * List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to accountant.
   * Calls `GET /api/v1/profile/accountant` through the shared IDP-aware Faiber client.
   * Supports live core/property/trusted-event filters, repeated date ranges and sorting before pagination; invalid clauses return HTTP 400.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read_accountant; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileAccountantIndexGet(params?: T.ProfileAccountantIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileAccountantIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/accountant`, params });
  }
  /**
   * Replace the address with the same title for an IDP user UUID in a transaction; blank titles return 422. Returns an empty acknowledgement.
   * Calls `PATCH /api/v1/profile/add/address/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileAddAddressPatch(uuid: Identifier, data: T.ProfileAddAddressPatchInput, options?: RequestOptions<T.ProfileAddAddressPatchInput>) {
    return this.client.request<T.ProfileAddAddressPatchResponse, T.ProfileAddAddressPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/add/address/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Replace the address with the same title for an IDP user UUID in a transaction; blank titles return 422. Returns an empty acknowledgement.
   * Calls `PUT /api/v1/profile/add/address/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileAddAddressPut(uuid: Identifier, data: T.ProfileAddAddressPutInput, options?: RequestOptions<T.ProfileAddAddressPutInput>) {
    return this.client.request<T.ProfileAddAddressPutResponse, T.ProfileAddAddressPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/add/address/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Replace schema-free app JSON for an IDP user UUID and return an empty acknowledgement.
   * Calls `PATCH /api/v1/profile/add/app/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileAddAppPatch(uuid: Identifier, data: T.ProfileAddAppPatchInput, options?: RequestOptions<T.ProfileAddAppPatchInput>) {
    return this.client.request<T.ProfileAddAppPatchResponse, T.ProfileAddAppPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/add/app/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Replace schema-free app JSON for an IDP user UUID and return an empty acknowledgement.
   * Calls `PUT /api/v1/profile/add/app/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileAddAppPut(uuid: Identifier, data: T.ProfileAddAppPutInput, options?: RequestOptions<T.ProfileAddAppPutInput>) {
    return this.client.request<T.ProfileAddAppPutResponse, T.ProfileAddAppPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/add/app/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Replace the legacy parent link for a student IDP UUID; request user_id is the parent IDP UUID. Returns an empty acknowledgement.
   * Calls `PATCH /api/v1/profile/add/parent/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileAddParentPatch(uuid: Identifier, data: T.ProfileAddParentPatchInput, options?: RequestOptions<T.ProfileAddParentPatchInput>) {
    return this.client.request<T.ProfileAddParentPatchResponse, T.ProfileAddParentPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/add/parent/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Replace the legacy parent link for a student IDP UUID; request user_id is the parent IDP UUID. Returns an empty acknowledgement.
   * Calls `PUT /api/v1/profile/add/parent/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileAddParentPut(uuid: Identifier, data: T.ProfileAddParentPutInput, options?: RequestOptions<T.ProfileAddParentPutInput>) {
    return this.client.request<T.ProfileAddParentPutResponse, T.ProfileAddParentPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/add/parent/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Read undeleted profiles matching any requested city UUID, optionally restricted by nonempty user_ids.
   * Calls `POST /api/v1/profile/city/get` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  profileCityGetPost(data: T.ProfileCityGetPostInput, options?: RequestOptions<T.ProfileCityGetPostInput>) {
    return this.client.request<T.ProfileCityGetPostResponse, T.ProfileCityGetPostInput>({ ...options, method: "POST", url: `/api/v1/profile/city/get`, data: data });
  }
  /**
   * List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to consultant.
   * Calls `GET /api/v1/profile/consultant` through the shared IDP-aware Faiber client.
   * Supports live core/property/trusted-event filters, repeated date ranges and sorting before pagination; invalid clauses return HTTP 400.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read_consultant; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileConsultantIndexGet(params?: T.ProfileConsultantIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileConsultantIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/consultant`, params });
  }
  /**
   * Read undeleted profiles matching any requested country UUID, optionally restricted by nonempty user_ids.
   * Calls `POST /api/v1/profile/country/get` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  profileCountryGetPost(data: T.ProfileCountryGetPostInput, options?: RequestOptions<T.ProfileCountryGetPostInput>) {
    return this.client.request<T.ProfileCountryGetPostResponse, T.ProfileCountryGetPostInput>({ ...options, method: "POST", url: `/api/v1/profile/country/get`, data: data });
  }
  /**
   * Permanently delete an undeleted profile by IDP user UUID; returns an empty acknowledgement.
   * Calls `DELETE /api/v1/profile/force/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:force_delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileForceDestroyDelete(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/force/${encodeURIComponent(uuid)}` });
  }
  /**
   * Read undeleted profiles for IDP user UUIDs and attach legacy parent summaries. Empty batches return an empty list; the local mount has no auth middleware.
   * Calls `POST /api/v1/profile/get` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  profileBulkGetPost(data: T.ProfileBulkGetPostInput, options?: RequestOptions<T.ProfileBulkGetPostInput>) {
    return this.client.request<T.ProfileBulkGetPostResponse, T.ProfileBulkGetPostInput>({ ...options, method: "POST", url: `/api/v1/profile/get`, data: data });
  }
  /**
   * Read the compatibility chat-list route, which currently always returns an empty array.
   * Calls `GET /api/v1/profile/get-chat-list/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  profileChatListGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileChatListGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/get-chat-list/${encodeURIComponent(uuid)}` });
  }
  /**
   * Read stored addresses by IDP user UUID, resolving the separate local Profile UUID.
   * Calls `GET /api/v1/profile/get/address/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileGetAddressGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileGetAddressGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/get/address/${encodeURIComponent(uuid)}` });
  }
  /**
   * Read schema-free stored app JSON for an IDP user UUID; missing data becomes an empty object.
   * Calls `GET /api/v1/profile/get/app/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileGetAppGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileGetAppGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/get/app/${encodeURIComponent(uuid)}` });
  }
  /**
   * Read the optional legacy parent-link row by student IDP UUID; missing link is data:null.
   * Calls `GET /api/v1/profile/get/parent/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileGetParentGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileGetParentGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/get/parent/${encodeURIComponent(uuid)}` });
  }
  /**
   * List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to manager.
   * Calls `GET /api/v1/profile/manager` through the shared IDP-aware Faiber client.
   * Supports live core/property/trusted-event filters, repeated date ranges and sorting before pagination; invalid clauses return HTTP 400.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read_manager; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileManagerIndexGet(params?: T.ProfileManagerIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileManagerIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/manager`, params });
  }
  /**
   * Read addresses for the identity supplied by the authenticated gateway context.
   * Calls `GET /api/v1/profile/me/addresses` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  profileGetMyAddressesGet(options?: RequestOptions) {
    return this.client.request<T.ProfileGetMyAddressesGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/me/addresses` });
  }
  /**
   * Replace an address by title for the current gateway identity. Other addresses remain unchanged; blank titles return 422.
   * Calls `PATCH /api/v1/profile/me/addresses` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  profileSaveMyAddressPatch(data: T.ProfileSaveMyAddressPatchInput, options?: RequestOptions<T.ProfileSaveMyAddressPatchInput>) {
    return this.client.request<T.ProfileSaveMyAddressPatchResponse, T.ProfileSaveMyAddressPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/me/addresses`, data: data });
  }
  /**
   * Replace an address by title for the current gateway identity. Other addresses remain unchanged; blank titles return 422.
   * Calls `PUT /api/v1/profile/me/addresses` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  profileSaveMyAddressPut(data: T.ProfileSaveMyAddressPutInput, options?: RequestOptions<T.ProfileSaveMyAddressPutInput>) {
    return this.client.request<T.ProfileSaveMyAddressPutResponse, T.ProfileSaveMyAddressPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/me/addresses`, data: data });
  }
  /**
   * Delete the current gateway identity address by exact title and return an empty acknowledgement.
   * Calls `DELETE /api/v1/profile/me/addresses/{title}` through the shared IDP-aware Faiber client.
   * @param title Backend path identifier `title`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  profileDeleteMyAddressDelete(title: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileDeleteMyAddressDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/profile/me/addresses/${encodeURIComponent(title)}` });
  }
  /**
   * List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to other.
   * Calls `GET /api/v1/profile/other` through the shared IDP-aware Faiber client.
   * Supports live core/property/trusted-event filters, repeated date ranges and sorting before pagination; invalid clauses return HTTP 400.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileOtherIndexGet(params?: T.ProfileOtherIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileOtherIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/other`, params });
  }
  /**
   * List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to parent.
   * Calls `GET /api/v1/profile/parent` through the shared IDP-aware Faiber client.
   * Supports live core/property/trusted-event filters, repeated date ranges and sorting before pagination; invalid clauses return HTTP 400.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read_parent; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileParentIndexGet(params?: T.ProfileParentIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileParentIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/parent`, params });
  }
  /**
   * Resolve 1–200 requested active undeleted IDP user UUIDs. Results preserve names, set email/phone null, and has_more=false. Does not decide external space membership.
   * Calls `POST /api/v1/profile/people/resolve` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:lookup; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  workspaceResolvePeople(data: T.ProfileSearchResolvePostInput, options?: RequestOptions<T.ProfileSearchResolvePostInput>) {
    return this.client.request<T.ProfileSearchResolvePostResponse, T.ProfileSearchResolvePostInput>({ ...options, method: "POST", url: `/api/v1/profile/people/resolve`, data: data });
  }
  /**
   * Search active profiles by literal name, email, phone, national code, or exact short ID. Requires 2–160 characters and at most 8 terms; returns up to 20 minimal results and has_more, without national codes.
   * Calls `POST /api/v1/profile/people/search` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:lookup; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileSearchSearchPostApiV1ProfilePeopleSearch(data: T.ProfileSearchSearchPostApiV1ProfilePeopleSearchInput, options?: RequestOptions<T.ProfileSearchSearchPostApiV1ProfilePeopleSearchInput>) {
    return this.client.request<T.ProfileSearchSearchPostApiV1ProfilePeopleSearchResponse, T.ProfileSearchSearchPostApiV1ProfilePeopleSearchInput>({ ...options, method: "POST", url: `/api/v1/profile/people/search`, data: data });
  }
  /**
   * Read undeleted profiles matching any requested province UUID, optionally restricted by nonempty user_ids.
   * Calls `POST /api/v1/profile/province/get` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  profileProvinceGetPost(data: T.ProfileProvinceGetPostInput, options?: RequestOptions<T.ProfileProvinceGetPostInput>) {
    return this.client.request<T.ProfileProvinceGetPostResponse, T.ProfileProvinceGetPostInput>({ ...options, method: "POST", url: `/api/v1/profile/province/get`, data: data });
  }
  /**
   * Search by email, names, phone, national code, exact UUID-derived short ID, or dynamic predicates; at least one filter or search term is required. Short-ID collisions return all matches with pagination. Maximum 50 filters/10 sorts, page defaults 1, per_page defaults 20 and caps at 100. include selects core/properties/services snapshots.
   * Calls `POST /api/v1/profile/search` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:search; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileSearchSearchPost(data: T.ProfileSearchSearchPostInput, options?: RequestOptions<T.ProfileSearchSearchPostInput>) {
    return this.client.request<T.ProfileSearchSearchPostResponse, T.ProfileSearchSearchPostInput>({ ...options, method: "POST", url: `/api/v1/profile/search`, data: data });
  }
  /**
   * List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to student.
   * Calls `GET /api/v1/profile/student` through the shared IDP-aware Faiber client.
   * Supports live core/property/trusted-event filters, repeated date ranges and sorting before pagination; invalid clauses return HTTP 400.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read_student; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileStudentIndexGet(params?: T.ProfileStudentIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileStudentIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/student`, params });
  }
  /**
   * Aggregate enrolled nonarchived enrollments across undeleted profiles: count and amount minus discount.
   * Calls `GET /api/v1/profile/students/pes` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  profileStudentPesGet(options?: RequestOptions) {
    return this.client.request<T.ProfileStudentPesGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/students/pes` });
  }
  /**
   * Read the constant PES schema descriptor {count:integer,amount:number}.
   * Calls `GET /api/v1/profile/students/pes/schema` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  profileStudentPesSchemaGet(options?: RequestOptions) {
    return this.client.request<T.ProfileStudentPesSchemaGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/students/pes/schema` });
  }
  /**
   * List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to support.
   * Calls `GET /api/v1/profile/support` through the shared IDP-aware Faiber client.
   * Supports live core/property/trusted-event filters, repeated date ranges and sorting before pagination; invalid clauses return HTTP 400.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read_support; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileSupportIndexGet(params?: T.ProfileSupportIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileSupportIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/support`, params });
  }
  /**
   * Aggregate pending nonarchived enrollments across undeleted profiles: count and amount minus discount.
   * Calls `GET /api/v1/profile/supports/pes` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  profileSupportPesGet(options?: RequestOptions) {
    return this.client.request<T.ProfileSupportPesGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/supports/pes` });
  }
  /**
   * Read the constant PES schema descriptor {count:integer,amount:number}.
   * Calls `GET /api/v1/profile/supports/pes/schema` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  profileSupportPesSchemaGet(options?: RequestOptions) {
    return this.client.request<T.ProfileSupportPesSchemaGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/supports/pes/schema` });
  }
  /**
   * List undeleted profiles with role, active-enrollment, status, normalized literal identity search and dynamic filters applied before pagination. Defaults page=1/per_page=15; per_page caps at 100. filter[trashed] is accepted but does not expose deleted profiles. This mounted route fixes the role to teacher.
   * Calls `GET /api/v1/profile/teacher` through the shared IDP-aware Faiber client.
   * Supports live core/property/trusted-event filters, repeated date ranges and sorting before pagination; invalid clauses return HTTP 400.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:read_teacher; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileTeacherIndexGet(params?: T.ProfileTeacherIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProfileTeacherIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/teacher`, params });
  }
  /**
   * Restore a profile by IDP user UUID, including a previously deleted row; returns an empty acknowledgement.
   * Calls `GET /api/v1/profile/undo/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:restore; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileRestoreGet(uuid: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProfileRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/profile/undo/${encodeURIComponent(uuid)}` });
  }
  /**
   * Replace schema-free metadata JSON for an IDP user UUID and return an empty acknowledgement.
   * Calls `PATCH /api/v1/profile/update/{uuid}/meta` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileAddMetaPatch(uuid: Identifier, data: T.ProfileAddMetaPatchInput, options?: RequestOptions<T.ProfileAddMetaPatchInput>) {
    return this.client.request<T.ProfileAddMetaPatchResponse, T.ProfileAddMetaPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/update/${encodeURIComponent(uuid)}/meta`, data: data });
  }
  /**
   * Replace schema-free metadata JSON for an IDP user UUID and return an empty acknowledgement.
   * Calls `PUT /api/v1/profile/update/{uuid}/meta` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileAddMetaPut(uuid: Identifier, data: T.ProfileAddMetaPutInput, options?: RequestOptions<T.ProfileAddMetaPutInput>) {
    return this.client.request<T.ProfileAddMetaPutResponse, T.ProfileAddMetaPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/update/${encodeURIComponent(uuid)}/meta`, data: data });
  }
  /**
   * Atomically update education fields by IDP user UUID. Omission preserves and null clears; invalid attendance/level/referral/education/referrer values return 422. Level is a nonempty string up to 64 characters and description up to 10000.
   * Calls `PUT /api/v1/profile/update/education-information/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  educationUpdatePut(uuid: Identifier, data: T.EducationUpdatePutInput, options?: RequestOptions<T.EducationUpdatePutInput>) {
    return this.client.request<T.EducationUpdatePutResponse, T.EducationUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/profile/update/education-information/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Update supplied personal fields for an IDP user UUID. Localized name objects merge fa/en string members; job:null clears the job. Other absent/null optional scalar members are preserved.
   * Calls `PATCH /api/v1/profile/update/personal-information/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileUpdatePersonalPatch(uuid: Identifier, data: T.ProfileUpdatePersonalPatchInput, options?: RequestOptions<T.ProfileUpdatePersonalPatchInput>) {
    return this.client.request<T.ProfileUpdatePersonalPatchResponse, T.ProfileUpdatePersonalPatchInput>({ ...options, method: "PATCH", url: `/api/v1/profile/update/personal-information/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * Update supplied personal fields for an IDP user UUID. Localized name objects merge fa/en string members; job:null clears the job. Other absent/null optional scalar members are preserved.
   * Calls `PUT /api/v1/profile/update/personal-information/{uuid}` through the shared IDP-aware Faiber client.
   * @param uuid Backend path identifier `uuid`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission profile:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  profileUpdatePersonalPut(uuid: Identifier, data: T.ProfileUpdatePersonalPutInput, options?: RequestOptions<T.ProfileUpdatePersonalPutInput>) {
    return this.client.request<T.ProfileUpdatePersonalPutResponse, T.ProfileUpdatePersonalPutInput>({ ...options, method: "PUT", url: `/api/v1/profile/update/personal-information/${encodeURIComponent(uuid)}`, data: data });
  }
  /**
   * List the province records. List pagination defaults 1/15 and caps at 100; filters apply before pagination, and deleted records are hidden unless filter[trashed]=only/with.
   * Calls `GET /api/v1/province` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission province:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  provinceIndexGet(params?: T.ProvinceIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.ProvinceIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/province`, params });
  }
  /**
   * Create the province record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `POST /api/v1/province` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission province:create; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  provinceStorePost(data: T.ProvinceStorePostInput, options?: RequestOptions<T.ProvinceStorePostInput>) {
    return this.client.request<T.ProvinceStorePostResponse, T.ProvinceStorePostInput>({ ...options, method: "POST", url: `/api/v1/province`, data: data });
  }
  /**
   * Soft-delete the province record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `DELETE /api/v1/province/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission province:delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  provinceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProvinceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/province/${encodeURIComponent(id)}` });
  }
  /**
   * Read the province record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `GET /api/v1/province/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission province:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  provinceShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProvinceShowGetResponse>({ ...options, method: "GET", url: `/api/v1/province/${encodeURIComponent(id)}` });
  }
  /**
   * Update supplied fields on the province record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `PATCH /api/v1/province/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission province:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  provinceUpdatePatch(id: Identifier, data: T.ProvinceUpdatePatchInput, options?: RequestOptions<T.ProvinceUpdatePatchInput>) {
    return this.client.request<T.ProvinceUpdatePatchResponse, T.ProvinceUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/province/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update supplied fields on the province record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `PUT /api/v1/province/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission province:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  provinceUpdatePut(id: Identifier, data: T.ProvinceUpdatePutInput, options?: RequestOptions<T.ProvinceUpdatePutInput>) {
    return this.client.request<T.ProvinceUpdatePutResponse, T.ProvinceUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/province/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Permanently delete the province record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `DELETE /api/v1/province/force/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission province:delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  provinceForceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProvinceForceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/province/force/${encodeURIComponent(id)}` });
  }
  /**
   * Restore the province record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `GET /api/v1/province/undo/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission province:delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  provinceRestoreGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ProvinceRestoreGetResponse>({ ...options, method: "GET", url: `/api/v1/province/undo/${encodeURIComponent(id)}` });
  }
  /**
   * List undeleted referral sources ordered by sort_order.
   * Calls `GET /api/v1/referral-source` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  referralListGet(options?: RequestOptions) {
    return this.client.request<T.ReferralListGetResponse>({ ...options, method: "GET", url: `/api/v1/referral-source` });
  }
  /**
   * Create a referral source requiring nonblank code and object labels/metadata.
   * Calls `POST /api/v1/referral-source` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  referralCreatePost(data: T.ReferralCreatePostInput, options?: RequestOptions<T.ReferralCreatePostInput>) {
    return this.client.request<T.ReferralCreatePostResponse, T.ReferralCreatePostInput>({ ...options, method: "POST", url: `/api/v1/referral-source`, data: data });
  }
  /**
   * Soft-delete and deactivate a referral source.
   * Calls `DELETE /api/v1/referral-source/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  referralDeleteDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReferralDeleteDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/referral-source/${encodeURIComponent(id)}` });
  }
  /**
   * Read a referral source by UUID.
   * Calls `GET /api/v1/referral-source/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  referralShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.ReferralShowGetResponse>({ ...options, method: "GET", url: `/api/v1/referral-source/${encodeURIComponent(id)}` });
  }
  /**
   * Replace a referral source requiring nonblank code and object labels/metadata.
   * Calls `PUT /api/v1/referral-source/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  referralUpdatePut(id: Identifier, data: T.ReferralUpdatePutInput, options?: RequestOptions<T.ReferralUpdatePutInput>) {
    return this.client.request<T.ReferralUpdatePutResponse, T.ReferralUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/referral-source/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List undeleted relation types ordered by sort_order.
   * Calls `GET /api/v1/relation-type` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  relationListTypesGet(options?: RequestOptions) {
    return this.client.request<T.RelationListTypesGetResponse>({ ...options, method: "GET", url: `/api/v1/relation-type` });
  }
  /**
   * Create a validated relation type with object labels/constraints; directional managed inverses require an active inverse type.
   * Calls `POST /api/v1/relation-type` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  relationCreateTypePost(data: T.RelationCreateTypePostInput, options?: RequestOptions<T.RelationCreateTypePostInput>) {
    return this.client.request<T.RelationCreateTypePostResponse, T.RelationCreateTypePostInput>({ ...options, method: "POST", url: `/api/v1/relation-type`, data: data });
  }
  /**
   * Soft-delete and deactivate a relation type.
   * Calls `DELETE /api/v1/relation-type/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  relationDeleteTypeDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RelationDeleteTypeDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/relation-type/${encodeURIComponent(id)}` });
  }
  /**
   * Read a relation type by UUID.
   * Calls `GET /api/v1/relation-type/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  relationShowTypeGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RelationShowTypeGetResponse>({ ...options, method: "GET", url: `/api/v1/relation-type/${encodeURIComponent(id)}` });
  }
  /**
   * Replace a validated relation type definition.
   * Calls `PUT /api/v1/relation-type/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  relationUpdateTypePut(id: Identifier, data: T.RelationUpdateTypePutInput, options?: RequestOptions<T.RelationUpdateTypePutInput>) {
    return this.client.request<T.RelationUpdateTypePutResponse, T.RelationUpdateTypePutInput>({ ...options, method: "PUT", url: `/api/v1/relation-type/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read all numeric settings, newest first, under data.setting.
   * Calls `GET /api/v1/setting` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission setting:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  settingIndexGet(options?: RequestOptions) {
    return this.client.request<T.SettingIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/setting` });
  }
  /**
   * Create a numeric setting from key/title/value and return data.setting.
   * Calls `POST /api/v1/setting` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission setting:create; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  settingStorePost(data: T.SettingStorePostInput, options?: RequestOptions<T.SettingStorePostInput>) {
    return this.client.request<T.SettingStorePostResponse, T.SettingStorePostInput>({ ...options, method: "POST", url: `/api/v1/setting`, data: data });
  }
  /**
   * List state actions, optionally by state_id, ordered by sort_order.
   * Calls `GET /api/v1/state-action` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleActionsListGet(params?: T.LifecycleActionsListGetQuery, options?: RequestOptions) {
    return this.client.request<T.LifecycleActionsListGetResponse>({ ...options, method: "GET", url: `/api/v1/state-action`, params });
  }
  /**
   * Create a validated enter/exit action of type event/webhook/message/external_flag with retry configuration.
   * Calls `POST /api/v1/state-action` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleCreateActionPost(data: T.LifecycleCreateActionPostInput, options?: RequestOptions<T.LifecycleCreateActionPostInput>) {
    return this.client.request<T.LifecycleCreateActionPostResponse, T.LifecycleCreateActionPostInput>({ ...options, method: "POST", url: `/api/v1/state-action`, data: data });
  }
  /**
   * Disable an action; this command does not physically delete its row.
   * Calls `DELETE /api/v1/state-action/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleDeleteActionDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LifecycleDeleteActionDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/state-action/${encodeURIComponent(id)}` });
  }
  /**
   * Read a state action by UUID.
   * Calls `GET /api/v1/state-action/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleShowActionGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LifecycleShowActionGetResponse>({ ...options, method: "GET", url: `/api/v1/state-action/${encodeURIComponent(id)}` });
  }
  /**
   * Replace a validated state action configuration.
   * Calls `PUT /api/v1/state-action/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleUpdateActionPut(id: Identifier, data: T.LifecycleUpdateActionPutInput, options?: RequestOptions<T.LifecycleUpdateActionPutInput>) {
    return this.client.request<T.LifecycleUpdateActionPutResponse, T.LifecycleUpdateActionPutInput>({ ...options, method: "PUT", url: `/api/v1/state-action/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Validate action configuration and evaluate its condition against empty facts; returns execution eligibility without executing or enqueueing.
   * Calls `POST /api/v1/state-action/dry-run` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleDryRunActionPost(data: T.LifecycleDryRunActionPostInput, options?: RequestOptions<T.LifecycleDryRunActionPostInput>) {
    return this.client.request<T.LifecycleDryRunActionPostResponse, T.LifecycleDryRunActionPostInput>({ ...options, method: "POST", url: `/api/v1/state-action/dry-run`, data: data });
  }
  /**
   * List undeleted state definitions, optionally by system_id, highest priority first.
   * Calls `GET /api/v1/state-definition` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleStatesGet(params?: T.LifecycleStatesGetQuery, options?: RequestOptions) {
    return this.client.request<T.LifecycleStatesGetResponse>({ ...options, method: "GET", url: `/api/v1/state-definition`, params });
  }
  /**
   * Create a validated state under an existing system; each system may have one undeleted fallback. Immediate systems trigger reevaluation.
   * Calls `POST /api/v1/state-definition` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleCreateStatePost(data: T.LifecycleCreateStatePostInput, options?: RequestOptions<T.LifecycleCreateStatePostInput>) {
    return this.client.request<T.LifecycleCreateStatePostResponse, T.LifecycleCreateStatePostInput>({ ...options, method: "POST", url: `/api/v1/state-definition`, data: data });
  }
  /**
   * Soft-delete/deactivate a state definition and trigger immediate-system reevaluation.
   * Calls `DELETE /api/v1/state-definition/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleDeleteStateDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LifecycleDeleteStateDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/state-definition/${encodeURIComponent(id)}` });
  }
  /**
   * Read a state definition row by UUID.
   * Calls `GET /api/v1/state-definition/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleShowStateGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LifecycleShowStateGetResponse>({ ...options, method: "GET", url: `/api/v1/state-definition/${encodeURIComponent(id)}` });
  }
  /**
   * Replace a validated state configuration and increment version; immediate systems trigger reevaluation.
   * Calls `PUT /api/v1/state-definition/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleUpdateStatePut(id: Identifier, data: T.LifecycleUpdateStatePutInput, options?: RequestOptions<T.LifecycleUpdateStatePutInput>) {
    return this.client.request<T.LifecycleUpdateStatePutResponse, T.LifecycleUpdateStatePutInput>({ ...options, method: "PUT", url: `/api/v1/state-definition/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List action attempts optionally by outbox_id, newest first.
   * Calls `GET /api/v1/state-evaluation/action-attempts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleActionAttemptsGet(params?: T.LifecycleActionAttemptsGetQuery, options?: RequestOptions) {
    return this.client.request<T.LifecycleActionAttemptsGetResponse>({ ...options, method: "GET", url: `/api/v1/state-evaluation/action-attempts`, params });
  }
  /**
   * Persist a changed eligible selected state under a profile/system lock, record its transition, and enqueue enter/exit actions; unchanged/ineligible results do not create transitions.
   * Calls `POST /api/v1/state-evaluation/evaluate` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleEvaluatePost(data: T.LifecycleEvaluatePostInput, options?: RequestOptions<T.LifecycleEvaluatePostInput>) {
    return this.client.request<T.LifecycleEvaluatePostResponse, T.LifecycleEvaluatePostInput>({ ...options, method: "POST", url: `/api/v1/state-evaluation/evaluate`, data: data });
  }
  /**
   * List outbox rows optionally filtered by status.
   * Calls `GET /api/v1/state-evaluation/outbox` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleOutboxGet(params?: T.LifecycleOutboxGetQuery, options?: RequestOptions) {
    return this.client.request<T.LifecycleOutboxGetResponse>({ ...options, method: "GET", url: `/api/v1/state-evaluation/outbox`, params });
  }
  /**
   * Reset only a failed outbox row to pending; missing rows return 404 and other states 409.
   * Calls `POST /api/v1/state-evaluation/outbox/{id}/retry` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleRetryPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LifecycleRetryPostResponse>({ ...options, method: "POST", url: `/api/v1/state-evaluation/outbox/${encodeURIComponent(id)}/retry` });
  }
  /**
   * Process up to 100 ready actions and return the count completed; may publish broker events or call configured webhooks.
   * Calls `POST /api/v1/state-evaluation/outbox/process` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleProcessOutboxPost(options?: RequestOptions) {
    return this.client.request<T.LifecycleProcessOutboxPostResponse>({ ...options, method: "POST", url: `/api/v1/state-evaluation/outbox/process` });
  }
  /**
   * Evaluate system eligibility and choose the highest-priority matching active state or fallback without persisting transitions.
   * Calls `POST /api/v1/state-evaluation/preview` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecyclePreviewPost(data: T.LifecyclePreviewPostInput, options?: RequestOptions<T.LifecyclePreviewPostInput>) {
    return this.client.request<T.LifecyclePreviewPostResponse, T.LifecyclePreviewPostInput>({ ...options, method: "POST", url: `/api/v1/state-evaluation/preview`, data: data });
  }
  /**
   * List transitions optionally filtered by Profile UUID and system UUID, newest first.
   * Calls `GET /api/v1/state-evaluation/transitions` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleTransitionsGet(params?: T.LifecycleTransitionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.LifecycleTransitionsGetResponse>({ ...options, method: "GET", url: `/api/v1/state-evaluation/transitions`, params });
  }
  /**
   * Validate and evaluate the lifecycle AST against supplied JSON facts; returns valid/matched, invalid rules return 422.
   * Calls `POST /api/v1/state-evaluation/validate-rule` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleValidateRulePost(data: T.LifecycleValidateRulePostInput, options?: RequestOptions<T.LifecycleValidateRulePostInput>) {
    return this.client.request<T.LifecycleValidateRulePostResponse, T.LifecycleValidateRulePostInput>({ ...options, method: "POST", url: `/api/v1/state-evaluation/validate-rule`, data: data });
  }
  /**
   * List undeleted lifecycle systems ordered by code.
   * Calls `GET /api/v1/state-system` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleSystemsGet(options?: RequestOptions) {
    return this.client.request<T.LifecycleSystemsGetResponse>({ ...options, method: "GET", url: `/api/v1/state-system` });
  }
  /**
   * Create a lifecycle system with object labels/description, validated rule and optional valid cron schedule.
   * Calls `POST /api/v1/state-system` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleCreateSystemPost(data: T.LifecycleCreateSystemPostInput, options?: RequestOptions<T.LifecycleCreateSystemPostInput>) {
    return this.client.request<T.LifecycleCreateSystemPostResponse, T.LifecycleCreateSystemPostInput>({ ...options, method: "POST", url: `/api/v1/state-system`, data: data });
  }
  /**
   * Soft-delete and deactivate a lifecycle system; acknowledge with an empty object.
   * Calls `DELETE /api/v1/state-system/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleDeleteSystemDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LifecycleDeleteSystemDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/state-system/${encodeURIComponent(id)}` });
  }
  /**
   * Read a lifecycle system row by local UUID, including a soft-deleted row if present.
   * Calls `GET /api/v1/state-system/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleShowSystemGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.LifecycleShowSystemGetResponse>({ ...options, method: "GET", url: `/api/v1/state-system/${encodeURIComponent(id)}` });
  }
  /**
   * Replace lifecycle system configuration, increment version and trigger reevaluation for immediate publication mode.
   * Calls `PUT /api/v1/state-system/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  lifecycleUpdateSystemPut(id: Identifier, data: T.LifecycleUpdateSystemPutInput, options?: RequestOptions<T.LifecycleUpdateSystemPutInput>) {
    return this.client.request<T.LifecycleUpdateSystemPutResponse, T.LifecycleUpdateSystemPutInput>({ ...options, method: "PUT", url: `/api/v1/state-system/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read all survey rows without pagination. meta is arbitrary stored JSON.
   * Calls `GET /api/v1/survey` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission survey:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  surveyIndexGet(options?: RequestOptions) {
    return this.client.request<T.SurveyIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/survey` });
  }
  /**
   * Create a survey row. Request key type is serialized as survey_type on the returned row; enrollment_id/type/meta may be omitted or null.
   * Calls `POST /api/v1/survey` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission survey:create; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  surveyStorePost(data: T.SurveyStorePostInput, options?: RequestOptions<T.SurveyStorePostInput>) {
    return this.client.request<T.SurveyStorePostResponse, T.SurveyStorePostInput>({ ...options, method: "POST", url: `/api/v1/survey`, data: data });
  }
  /**
   * List the trusted service records. List pagination defaults 1/15 and caps at 100; filters apply before pagination, and deleted records are hidden unless filter[trashed]=only/with.
   * Calls `GET /api/v1/trusted-service` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission trusted_service:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  trustedServiceIndexGet(params?: T.TrustedServiceIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/trusted-service`, params });
  }
  /**
   * Create the trusted service record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `POST /api/v1/trusted-service` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission trusted_service:create; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  trustedServiceStorePost(data: T.TrustedServiceStorePostInput, options?: RequestOptions<T.TrustedServiceStorePostInput>) {
    return this.client.request<T.TrustedServiceStorePostResponse, T.TrustedServiceStorePostInput>({ ...options, method: "POST", url: `/api/v1/trusted-service`, data: data });
  }
  /**
   * Soft-delete the trusted service record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `DELETE /api/v1/trusted-service/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission trusted_service:delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  trustedServiceDestroyDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/trusted-service/${encodeURIComponent(id)}` });
  }
  /**
   * Read the trusted service record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `GET /api/v1/trusted-service/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission trusted_service:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  trustedServiceShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceShowGetResponse>({ ...options, method: "GET", url: `/api/v1/trusted-service/${encodeURIComponent(id)}` });
  }
  /**
   * Update supplied fields on the trusted service record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `PATCH /api/v1/trusted-service/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission trusted_service:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  trustedServiceUpdatePatch(id: Identifier, data: T.TrustedServiceUpdatePatchInput, options?: RequestOptions<T.TrustedServiceUpdatePatchInput>) {
    return this.client.request<T.TrustedServiceUpdatePatchResponse, T.TrustedServiceUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/trusted-service/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Update supplied fields on the trusted service record. Local IDs are UUIDs; responses retain the named backend envelope.
   * Calls `PUT /api/v1/trusted-service/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission trusted_service:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  trustedServiceUpdatePut(id: Identifier, data: T.TrustedServiceUpdatePutInput, options?: RequestOptions<T.TrustedServiceUpdatePutInput>) {
    return this.client.request<T.TrustedServiceUpdatePutResponse, T.TrustedServiceUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/trusted-service/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Manage trusted-service event visibility and arbitrary payload_schema within the path service UUID. Event reads/updates/deletes verify event ownership and deleted status.
   * Calls `GET /api/v1/trusted-service/{id}/event` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission trusted_service:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  trustedServiceEventIndexGet(id: Identifier, params?: T.TrustedServiceEventIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceEventIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event`, params });
  }
  /**
   * Manage trusted-service event visibility and arbitrary payload_schema within the path service UUID. Event reads/updates/deletes verify event ownership and deleted status.
   * Calls `POST /api/v1/trusted-service/{id}/event` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission trusted_service:create; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  trustedServiceEventStorePost(id: Identifier, data: T.TrustedServiceEventStorePostInput, options?: RequestOptions<T.TrustedServiceEventStorePostInput>) {
    return this.client.request<T.TrustedServiceEventStorePostResponse, T.TrustedServiceEventStorePostInput>({ ...options, method: "POST", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event`, data: data });
  }
  /**
   * Manage trusted-service event visibility and arbitrary payload_schema within the path service UUID. Event reads/updates/deletes verify event ownership and deleted status.
   * Calls `DELETE /api/v1/trusted-service/{id}/event/{event_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param eventId Backend path identifier `event_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission trusted_service:delete; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  trustedServiceEventDestroyDelete(id: Identifier, eventId: Identifier, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceEventDestroyDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event/${encodeURIComponent(eventId)}` });
  }
  /**
   * Manage trusted-service event visibility and arbitrary payload_schema within the path service UUID. Event reads/updates/deletes verify event ownership and deleted status.
   * Calls `GET /api/v1/trusted-service/{id}/event/{event_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param eventId Backend path identifier `event_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission trusted_service:read; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  trustedServiceEventShowGet(id: Identifier, eventId: Identifier, options?: RequestOptions) {
    return this.client.request<T.TrustedServiceEventShowGetResponse>({ ...options, method: "GET", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event/${encodeURIComponent(eventId)}` });
  }
  /**
   * Manage trusted-service event visibility and arbitrary payload_schema within the path service UUID. Event reads/updates/deletes verify event ownership and deleted status.
   * Calls `PATCH /api/v1/trusted-service/{id}/event/{event_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param eventId Backend path identifier `event_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission trusted_service:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  trustedServiceEventUpdatePatch(id: Identifier, eventId: Identifier, data: T.TrustedServiceEventUpdatePatchInput, options?: RequestOptions<T.TrustedServiceEventUpdatePatchInput>) {
    return this.client.request<T.TrustedServiceEventUpdatePatchResponse, T.TrustedServiceEventUpdatePatchInput>({ ...options, method: "PATCH", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event/${encodeURIComponent(eventId)}`, data: data });
  }
  /**
   * Manage trusted-service event visibility and arbitrary payload_schema within the path service UUID. Event reads/updates/deletes verify event ownership and deleted status.
   * Calls `PUT /api/v1/trusted-service/{id}/event/{event_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param eventId Backend path identifier `event_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: declared IDP permission trusted_service:update; gateway enforces ACL metadata, local annotation itself is not a permission check.
   */
  trustedServiceEventUpdatePut(id: Identifier, eventId: Identifier, data: T.TrustedServiceEventUpdatePutInput, options?: RequestOptions<T.TrustedServiceEventUpdatePutInput>) {
    return this.client.request<T.TrustedServiceEventUpdatePutResponse, T.TrustedServiceEventUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/trusted-service/${encodeURIComponent(id)}/event/${encodeURIComponent(eventId)}`, data: data });
  }
  /**
   * Read active campaigns in their current date window, ordered by sort_order and creation time. visibility metadata is returned as data and is not a row predicate.
   * Calls `GET /campaign` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  campaignIndexGet(options?: RequestOptions) {
    return this.client.request<T.CampaignIndexGetResponse>({ ...options, method: "GET", url: `/campaign` });
  }
  /**
   * Read current user contribution history with purpose snapshots; confirmed_at is not serialized.
   * Calls `GET /campaign-profile/me/contributions` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  campaignMyContributionsGet(options?: RequestOptions) {
    return this.client.request<T.CampaignMyContributionsGetResponse>({ ...options, method: "GET", url: `/campaign-profile/me/contributions` });
  }
  /**
   * Read one campaign projection by UUID; the detail query does not restrict status or date window.
   * Calls `GET /campaign/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  campaignShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CampaignShowGetResponse>({ ...options, method: "GET", url: `/campaign/${encodeURIComponent(id)}` });
  }
  /**
   * Record a positive money/sha contribution for an available campaign using current user and idempotency_key. Disabled methods return 409, invalid amount/method 422; duplicate user/key reuses the existing receipt.
   * Calls `POST /campaign/{id}/contributions` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: gateway AuthContext; no additional named handler permission check.
   */
  campaignContributePost(id: Identifier, data: T.CampaignContributePostInput, options?: RequestOptions<T.CampaignContributePostInput>) {
    return this.client.request<T.CampaignContributePostResponse, T.CampaignContributePostInput>({ ...options, method: "POST", url: `/campaign/${encodeURIComponent(id)}/contributions`, data: data });
  }
  /**
   * Read process health and the package version; no dependency readiness check is performed.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  routerHealthGetHealth(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetHealthResponse>({ ...options, method: "GET", url: `/health` });
  }
  /**
   * Read process health and the package version; no dependency readiness check is performed.
   * Calls `GET /up` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: no local authentication or permission check; deployment gateway policy is separate.
   */
  routerHealthGetUp(options?: RequestOptions) {
    return this.client.request<T.RouterHealthGetUpResponse>({ ...options, method: "GET", url: `/up` });
  }
}
