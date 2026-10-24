import {ServiceApi,type ApiEnvelope,type RequestOptions} from "@faiber/sdk-core";
import type * as T from "./summaries.types.js";
/** Role summaries stored and served by Profile. Every call retains the full Axios response. */
export class ProfileSummariesApi extends ServiceApi {
    /** settings: calls GET /api/v1/ai-summaries/settings.
     * Requires profile:ai_summary:configure. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    settings(options?:RequestOptions) { return this.client.request<ApiEnvelope<T.SummarySettings>>({ ...options, method:"GET", url:`/api/v1/ai-summaries/settings` }); }
    /** updateSettings: calls PUT /api/v1/ai-summaries/settings.
     * Requires profile:ai_summary:configure. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    updateSettings(data:T.SummarySettings,options?:RequestOptions<T.SummarySettings>) { return this.client.request<ApiEnvelope<T.SummarySettings>,T.SummarySettings>({ ...options, method:"PUT", url:`/api/v1/ai-summaries/settings`,data }); }
    /** roles: calls GET /api/v1/ai-summaries/roles.
     * Requires profile:ai_summary:configure. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    roles(options?:RequestOptions) { return this.client.request<ApiEnvelope<T.SummaryRole[]>>({ ...options, method:"GET", url:`/api/v1/ai-summaries/roles` }); }
    /** models: calls GET /api/v1/ai-summaries/models.
     * Requires profile:ai_summary:configure. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    models(options?:RequestOptions) { return this.client.request<ApiEnvelope<T.SummaryModel[]>>({ ...options, method:"GET", url:`/api/v1/ai-summaries/models` }); }
    /** sources: calls GET /api/v1/ai-summaries/sources.
     * Requires profile:ai_summary:configure. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    sources(options?:RequestOptions) { return this.client.request<ApiEnvelope<T.SummaryCapability[]>>({ ...options, method:"GET", url:`/api/v1/ai-summaries/sources` }); }
    /** checkSource: calls POST /api/v1/ai-summaries/sources/{source}/check.
     * Requires profile:ai_summary:configure. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    checkSource(source:T.SummarySource,options?:RequestOptions) { return this.client.request<ApiEnvelope<T.SummarySourceCheck>>({ ...options, method:"POST", url:`/api/v1/ai-summaries/sources/${encodeURIComponent(source)}/check` }); }
    /** configurations: calls GET /api/v1/ai-summaries/configurations.
     * Requires profile:ai_summary:configure. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    configurations(options?:RequestOptions) { return this.client.request<ApiEnvelope<T.SummaryConfigurationRecord[]>>({ ...options, method:"GET", url:`/api/v1/ai-summaries/configurations` }); }
    /** createConfiguration: calls POST /api/v1/ai-summaries/configurations.
     * Requires profile:ai_summary:configure. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    createConfiguration(data:T.SummaryConfigurationWrite,options?:RequestOptions<T.SummaryConfigurationWrite>) { return this.client.request<ApiEnvelope<T.SummaryConfigurationRecord>,T.SummaryConfigurationWrite>({ ...options, method:"POST", url:`/api/v1/ai-summaries/configurations`,data }); }
    /** configuration: calls GET /api/v1/ai-summaries/configurations/{id}.
     * Requires profile:ai_summary:configure. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    configuration(id:string,options?:RequestOptions) { return this.client.request<ApiEnvelope<T.SummaryConfigurationRecord>>({ ...options, method:"GET", url:`/api/v1/ai-summaries/configurations/${encodeURIComponent(id)}` }); }
    /** updateConfiguration: calls PUT /api/v1/ai-summaries/configurations/{id}.
     * Requires profile:ai_summary:configure. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    updateConfiguration(id:string,data:T.SummaryConfigurationUpdate,options?:RequestOptions<T.SummaryConfigurationUpdate>) { return this.client.request<ApiEnvelope<T.SummaryConfigurationRecord>,T.SummaryConfigurationUpdate>({ ...options, method:"PUT", url:`/api/v1/ai-summaries/configurations/${encodeURIComponent(id)}`,data }); }
    /** validate: calls POST /api/v1/ai-summaries/configurations/{id}/validate.
     * Requires profile:ai_summary:configure. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    validate(id:string,options?:RequestOptions) { return this.client.request<ApiEnvelope<T.SummaryValidation>>({ ...options, method:"POST", url:`/api/v1/ai-summaries/configurations/${encodeURIComponent(id)}/validate` }); }
    /** publish: calls POST /api/v1/ai-summaries/configurations/{id}/publish.
     * Requires profile:ai_summary:configure. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    publish(id:string,options?:RequestOptions) { return this.client.request<ApiEnvelope<T.SummaryConfigurationRecord>>({ ...options, method:"POST", url:`/api/v1/ai-summaries/configurations/${encodeURIComponent(id)}/publish` }); }
    /** preview: calls POST /api/v1/ai-summaries/configurations/{id}/preview.
     * Global generation must be enabled (409 when off). A disabled role may preview its draft; preview never publishes it.
     * Requires profile:ai_summary:configure. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    preview(id:string,data:T.SummaryPreviewWrite,options?:RequestOptions<T.SummaryPreviewWrite>) { return this.client.request<ApiEnvelope<T.SummaryPreviewResponse>,T.SummaryPreviewWrite>({ ...options, method:"POST", url:`/api/v1/ai-summaries/configurations/${encodeURIComponent(id)}/preview`,data }); }
    /** setStatus: calls PATCH /api/v1/ai-summaries/configurations/{id}/status.
     * Requires profile:ai_summary:configure. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    setStatus(id:string,data:T.SummaryStatusWrite,options?:RequestOptions<T.SummaryStatusWrite>) { return this.client.request<ApiEnvelope<T.SummaryConfigurationRecord>,T.SummaryStatusWrite>({ ...options, method:"PATCH", url:`/api/v1/ai-summaries/configurations/${encodeURIComponent(id)}/status`,data }); }
    /** latest: calls GET /api/v1/ai-summaries/latest.
     * Requires profile:ai_summary:read_own or profile:ai_summary:read_all. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    latest(query:T.SummaryLatestQuery,options?:RequestOptions) { return this.client.request<ApiEnvelope<T.SummaryLatest>>({ ...options, method:"GET", url:`/api/v1/ai-summaries/latest`,params:query }); }
    /** summaries: calls GET /api/v1/ai-summaries/summaries.
     * Requires profile:ai_summary:read_own or profile:ai_summary:read_all. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    summaries(query?:T.SummaryListQuery,options?:RequestOptions) { return this.client.request<ApiEnvelope<T.SummaryPage<T.SummaryRun>>>({ ...options, method:"GET", url:`/api/v1/ai-summaries/summaries`,params:query }); }
    /** run: calls GET /api/v1/ai-summaries/runs/{id}.
     * Requires profile:ai_summary:read_own or profile:ai_summary:read_all. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    run(id:string,options?:RequestOptions) { return this.client.request<ApiEnvelope<T.SummaryRun>>({ ...options, method:"GET", url:`/api/v1/ai-summaries/runs/${encodeURIComponent(id)}` }); }
    /** jobs: calls GET /api/v1/ai-summaries/jobs.
     * Requires profile:ai_summary:manage. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    jobs(query?:T.SummaryListQuery,options?:RequestOptions) { return this.client.request<ApiEnvelope<T.SummaryPage<T.SummaryJob>>>({ ...options, method:"GET", url:`/api/v1/ai-summaries/jobs`,params:query }); }
    /** refresh: calls POST /api/v1/ai-summaries/refresh.
     * Requires profile:ai_summary:manage. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    refresh(data:T.SummaryRefreshWrite,options?:RequestOptions<T.SummaryRefreshWrite>) { return this.client.request<ApiEnvelope<T.SummaryRefreshResponse>,T.SummaryRefreshWrite>({ ...options, method:"POST", url:`/api/v1/ai-summaries/refresh`,data }); }
    /** retry: calls POST /api/v1/ai-summaries/jobs/{id}/retry.
     * Requires profile:ai_summary:manage. Own reads are restricted to the authenticated subject.
     * @param options Standard Axios headers, credentials, timeout, adapter and cancellation signal.
     * @returns Full Axios response with the typed Profile envelope.
     * @throws AxiosError on 401/403, invalid input (422), conflicting draft/state (409), or service failure.
     */
    retry(id:string,options?:RequestOptions) { return this.client.request<ApiEnvelope<T.SummaryRetryResponse>>({ ...options, method:"POST", url:`/api/v1/ai-summaries/jobs/${encodeURIComponent(id)}/retry` }); }
}
