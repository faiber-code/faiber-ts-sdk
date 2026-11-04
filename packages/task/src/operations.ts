import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";
import { AxiosHeaders, type RawAxiosHeaders } from "axios";

export class TaskOperations extends ServiceApi {
  /**
   * Openapi.
   * Calls `GET /api/openapi.json` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local identity extractor; deployment ingress policy is separate. Shared FaiberClient still forwards configured credentials.
   */
  workspaceQuery(options?: RequestOptions) {
    return this.client.request<T.RoutesOpenapiGetResponse>({ ...options, method: "GET", url: `/api/openapi.json` });
  }
  /**
   * Effective access. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/access/effective` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesEffectiveAccessGet(params?: T.RoutesEffectiveAccessGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesEffectiveAccessGetResponse>({ ...options, method: "GET", url: `/api/v1/access/effective`, params });
  }
  /**
   * Create agent proposal. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.
   * Calls `POST /api/v1/agent-proposals` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local agent.propose; verified Bearer/cookie identity through FaiberClient; source checks agent.propose.
   */
  routesCreateAgentProposalPost(data: T.RoutesCreateAgentProposalPostInput, options?: RequestOptions<T.RoutesCreateAgentProposalPostInput>) {
    return this.client.request<T.RoutesCreateAgentProposalPostResponse, T.RoutesCreateAgentProposalPostInput>({ ...options, method: "POST", url: `/api/v1/agent-proposals`, data: data });
  }
  /**
   * Mark an agent proposal approved without executing its opaque payload; the proposer cannot approve their own proposal. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/agent-proposals/{id}/approve` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks agent.approve.
   */
  routesApproveAgentProposalPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesApproveAgentProposalPostResponse>({ ...options, method: "POST", url: `/api/v1/agent-proposals/${encodeURIComponent(id)}/approve` });
  }
  /**
   * Query. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.
   * Calls `POST /api/v1/assistant/query` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient; source checks project.read.
   */
  routesQueryPost(data: T.RoutesQueryPostInput, options?: RequestOptions<T.RoutesQueryPostInput>) {
    return this.client.request<T.RoutesQueryPostResponse, T.RoutesQueryPostInput>({ ...options, method: "POST", url: `/api/v1/assistant/query`, data: data });
  }
  /**
   * Remove. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.
   * Calls `DELETE /api/v1/attachments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks attachment.delete_own, attachment.manage.
   */
  routesRemoveDeleteApiV1AttachmentsId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRemoveDeleteApiV1AttachmentsIdResponse>({ ...options, method: "DELETE", url: `/api/v1/attachments/${encodeURIComponent(id)}` });
  }
  /**
   * Status. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.
   * Calls `GET /api/v1/attachments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read.
   */
  routesStatusGetApiV1AttachmentsId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesStatusGetApiV1AttachmentsIdResponse>({ ...options, method: "GET", url: `/api/v1/attachments/${encodeURIComponent(id)}` });
  }
  /**
   * Content. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.
   * Calls `PUT /api/v1/attachments/{id}/content` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed multipart form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks attachment.create.
   */
  routesContentPut(id: Identifier, data: T.RoutesContentPutInput, options?: RequestOptions<T.RoutesContentPutInput>) {
    return this.client.request<T.RoutesContentPutResponse, T.RoutesContentPutInput>({ ...options, method: "PUT", url: `/api/v1/attachments/${encodeURIComponent(id)}/content`, data: data });
  }
  /**
   * Download. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.
   * Calls `GET /api/v1/attachments/{id}/download` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read.
   */
  routesDownloadGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDownloadGetResponse>({ ...options, method: "GET", url: `/api/v1/attachments/${encodeURIComponent(id)}/download`, responseType: "arraybuffer" });
  }
  /**
   * Lists own assignments or a permitted moderation/appeals queue.
   * Calls `ANY /api/v1/campaign-assignments` through the shared IDP-aware Faiber client.
   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsProxyAnyApiV1CampaignAssignments(method: import("@faiber/sdk-core").HttpRequestMethod, params?: T.CampaignsProxyAnyApiV1CampaignAssignmentsQuery, options?: RequestOptions) {
    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");
    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");
    return this.client.request<T.CampaignsProxyAnyApiV1CampaignAssignmentsResponse>({ ...options, method: method, url: `/api/v1/campaign-assignments`, params });
  }
  /**
   * Gets private evidence, submission versions and review history.
   * Calls `ANY /api/v1/campaign-assignments/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsProxyAnyApiV1CampaignAssignmentsId(id: Identifier, method: import("@faiber/sdk-core").HttpRequestMethod, options?: RequestOptions) {
    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");
    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");
    return this.client.request<T.CampaignsProxyAnyApiV1CampaignAssignmentsIdResponse>({ ...options, method: method, url: `/api/v1/campaign-assignments/${encodeURIComponent(id)}` });
  }
  /**
   * Uploads one private proof file. The server scans and validates it before acceptance.
   * Calls `ANY /api/v1/campaign-assignments/{id}/files` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsProxyAnyApiV1CampaignAssignmentsIdFiles(id: Identifier, method: import("@faiber/sdk-core").HttpRequestMethod, options?: RequestOptions<T.CampaignsProxyAnyApiV1CampaignAssignmentsIdFilesInput> & { data?: T.CampaignsProxyAnyApiV1CampaignAssignmentsIdFilesInput }) {
    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");
    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");
    return this.client.request<T.CampaignsProxyAnyApiV1CampaignAssignmentsIdFilesResponse, T.CampaignsProxyAnyApiV1CampaignAssignmentsIdFilesInput>({ ...options, method: method, url: `/api/v1/campaign-assignments/${encodeURIComponent(id)}/files` });
  }
  /**
   * Reviews or appeals a submission; self-approval is forbidden.
   * Calls `ANY /api/v1/campaign-assignments/{id}/review` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsProxyAnyApiV1CampaignAssignmentsIdReview(id: Identifier, method: import("@faiber/sdk-core").HttpRequestMethod, options?: RequestOptions<T.CampaignsProxyAnyApiV1CampaignAssignmentsIdReviewInput> & { data?: T.CampaignsProxyAnyApiV1CampaignAssignmentsIdReviewInput }) {
    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");
    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");
    return this.client.request<T.CampaignsProxyAnyApiV1CampaignAssignmentsIdReviewResponse, T.CampaignsProxyAnyApiV1CampaignAssignmentsIdReviewInput>({ ...options, method: method, url: `/api/v1/campaign-assignments/${encodeURIComponent(id)}/review` });
  }
  /**
   * Submits clean attachment IDs or HTTPS proof links using the current assignment version.
   * Calls `ANY /api/v1/campaign-assignments/{id}/submit` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsProxyAnyApiV1CampaignAssignmentsIdSubmit(id: Identifier, method: import("@faiber/sdk-core").HttpRequestMethod, options?: RequestOptions<T.CampaignsProxyAnyApiV1CampaignAssignmentsIdSubmitInput> & { data?: T.CampaignsProxyAnyApiV1CampaignAssignmentsIdSubmitInput }) {
    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");
    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");
    return this.client.request<T.CampaignsProxyAnyApiV1CampaignAssignmentsIdSubmitResponse, T.CampaignsProxyAnyApiV1CampaignAssignmentsIdSubmitInput>({ ...options, method: method, url: `/api/v1/campaign-assignments/${encodeURIComponent(id)}/submit` });
  }
  /**
   * Downloads evidence only for its participant, moderator or authorized appeal operator.
   * Calls `ANY /api/v1/campaign-files/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsProxyAnyApiV1CampaignFilesId(id: Identifier, method: import("@faiber/sdk-core").HttpRequestMethod, options?: RequestOptions) {
    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");
    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");
    return this.client.request<T.CampaignsProxyAnyApiV1CampaignFilesIdResponse>({ ...options, method: method, url: `/api/v1/campaign-files/${encodeURIComponent(id)}`, responseType: "arraybuffer" });
  }
  /**
   * Starts an eligible job; pending funding must complete before submission.
   * Calls `ANY /api/v1/campaign-jobs/{id}/start` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsProxyAnyApiV1CampaignJobsIdStart(id: Identifier, method: import("@faiber/sdk-core").HttpRequestMethod, options?: RequestOptions<T.CampaignsProxyAnyApiV1CampaignJobsIdStartInput> & { data?: T.CampaignsProxyAnyApiV1CampaignJobsIdStartInput }) {
    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");
    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");
    return this.client.request<T.CampaignsProxyAnyApiV1CampaignJobsIdStartResponse, T.CampaignsProxyAnyApiV1CampaignJobsIdStartInput>({ ...options, method: method, url: `/api/v1/campaign-jobs/${encodeURIComponent(id)}/start` });
  }
  /**
   * Lists authorized campaigns, 25 per page; view=public never includes private campaigns. Creates a draft; Dox requires a private authorized space.
   * Calls `ANY /api/v1/campaigns` through the shared IDP-aware Faiber client.
   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.
   * @param data Typed JSON request body.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsProxyAnyApiV1Campaigns(method: import("@faiber/sdk-core").HttpRequestMethod, params?: T.CampaignsProxyAnyApiV1CampaignsQuery, options?: RequestOptions<T.CampaignsProxyAnyApiV1CampaignsInput> & { data?: T.CampaignsProxyAnyApiV1CampaignsInput }) {
    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");
    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");
    return this.client.request<T.CampaignsProxyAnyApiV1CampaignsResponse, T.CampaignsProxyAnyApiV1CampaignsInput>({ ...options, method: method, url: `/api/v1/campaigns`, params });
  }
  /**
   * Gets visible campaign metadata and jobs. Proof and participant identities are private. Mutates membership, publication, budget or closure; owner permissions apply.
   * Calls `ANY /api/v1/campaigns/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsProxyAnyApiV1CampaignsId(id: Identifier, method: import("@faiber/sdk-core").HttpRequestMethod, options?: RequestOptions<T.CampaignsProxyAnyApiV1CampaignsIdInput> & { data?: T.CampaignsProxyAnyApiV1CampaignsIdInput }) {
    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");
    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");
    return this.client.request<T.CampaignsProxyAnyApiV1CampaignsIdResponse, T.CampaignsProxyAnyApiV1CampaignsIdInput>({ ...options, method: method, url: `/api/v1/campaigns/${encodeURIComponent(id)}` });
  }
  /**
   * Adds a job to an owned draft; accepted reward terms are immutable.
   * Calls `ANY /api/v1/campaigns/{id}/jobs` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param method HTTP method accepted by the mounted ANY handler; CONNECT requires an explicit tunnel-capable Axios adapter. The SDK never sends an ANY verb.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsProxyAnyApiV1CampaignsIdJobs(id: Identifier, method: import("@faiber/sdk-core").HttpRequestMethod, options?: RequestOptions<T.CampaignsProxyAnyApiV1CampaignsIdJobsInput> & { data?: T.CampaignsProxyAnyApiV1CampaignsIdJobsInput }) {
    if (!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS","TRACE","CONNECT"].includes(method)) throw new TypeError("Invalid HTTP method");
    if (method === "CONNECT" && !options?.adapter) throw new TypeError("CONNECT requires an explicit tunnel-capable Axios adapter");
    return this.client.request<T.CampaignsProxyAnyApiV1CampaignsIdJobsResponse, T.CampaignsProxyAnyApiV1CampaignsIdJobsInput>({ ...options, method: method, url: `/api/v1/campaigns/${encodeURIComponent(id)}/jobs` });
  }
  /**
   * Config. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.
   * Calls `GET /api/v1/collaboration/config` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesConfigGetApiV1CollaborationConfig(options?: RequestOptions) {
    return this.client.request<T.RoutesConfigGetApiV1CollaborationConfigResponse>({ ...options, method: "GET", url: `/api/v1/collaboration/config` });
  }
  /**
   * Community gifts. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.
   * Calls `GET /api/v1/community/gifts` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityGiftsGet(options?: RequestOptions) {
    return this.client.request<T.CommunityProxyGetApiV1CommunityGiftsResponse>({ ...options, method: "GET", url: `/api/v1/community/gifts` });
  }
  /**
   * Community me. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.
   * Calls `GET /api/v1/community/me` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityMeGet(options?: RequestOptions) {
    return this.client.request<T.CommunityProxyGetApiV1CommunityMeResponse>({ ...options, method: "GET", url: `/api/v1/community/me` });
  }
  /**
   * Community analyze. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.
   * Calls `POST /api/v1/community/me/analyze` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityAnalyzePost(options?: RequestOptions) {
    return this.client.request<T.CommunityProxyPostApiV1CommunityMeAnalyzeResponse>({ ...options, method: "POST", url: `/api/v1/community/me/analyze` });
  }
  /**
   * Community publish. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.
   * Calls `POST /api/v1/community/me/publish` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityPublishPost(options?: RequestOptions) {
    return this.client.request<T.CommunityProxyPostApiV1CommunityMePublishResponse>({ ...options, method: "POST", url: `/api/v1/community/me/publish` });
  }
  /**
   * Community inbox. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.
   * Calls `GET /api/v1/community/messages` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityInboxGet(options?: RequestOptions) {
    return this.client.request<T.CommunityProxyGetApiV1CommunityMessagesResponse>({ ...options, method: "GET", url: `/api/v1/community/messages` });
  }
  /**
   * Community people. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.
   * Calls `GET /api/v1/community/people` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityPeopleGet(params?: T.CommunityProxyGetApiV1CommunityPeopleQuery, options?: RequestOptions) {
    return this.client.request<T.CommunityProxyGetApiV1CommunityPeopleResponse>({ ...options, method: "GET", url: `/api/v1/community/people`, params });
  }
  /**
   * Community person. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.
   * Calls `GET /api/v1/community/people/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityPersonGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommunityProxyGetApiV1CommunityPeopleIdResponse>({ ...options, method: "GET", url: `/api/v1/community/people/${encodeURIComponent(id)}` });
  }
  /**
   * Community ask. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.
   * Calls `POST /api/v1/community/people/{id}/ask` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityAskPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommunityProxyPostApiV1CommunityPeopleIdAskResponse>({ ...options, method: "POST", url: `/api/v1/community/people/${encodeURIComponent(id)}/ask` });
  }
  /**
   * Community block. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.
   * Calls `POST /api/v1/community/people/{id}/block` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityBlockPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommunityProxyPostApiV1CommunityPeopleIdBlockResponse>({ ...options, method: "POST", url: `/api/v1/community/people/${encodeURIComponent(id)}/block` });
  }
  /**
   * Community gift. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.
   * Calls `POST /api/v1/community/people/{id}/gifts` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityGiftPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommunityProxyPostApiV1CommunityPeopleIdGiftsResponse>({ ...options, method: "POST", url: `/api/v1/community/people/${encodeURIComponent(id)}/gifts` });
  }
  /**
   * Community interest. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.
   * Calls `POST /api/v1/community/people/{id}/interest` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityInterestPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommunityProxyPostApiV1CommunityPeopleIdInterestResponse>({ ...options, method: "POST", url: `/api/v1/community/people/${encodeURIComponent(id)}/interest` });
  }
  /**
   * Community messages. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.
   * Calls `GET /api/v1/community/people/{id}/messages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityMessagesGet(id: Identifier, params?: T.CommunityProxyGetApiV1CommunityPeopleIdMessagesQuery, options?: RequestOptions) {
    return this.client.request<T.CommunityProxyGetApiV1CommunityPeopleIdMessagesResponse>({ ...options, method: "GET", url: `/api/v1/community/people/${encodeURIComponent(id)}/messages`, params });
  }
  /**
   * Community send. Authenticated organization/profile scope; public discovery and messages require both profiles public; assistant questions and gifts additionally require mutual interest. Does not grant task or note access. Reuse request_id for retries when present; stale versions or unavailable configuration return 409.
   * Calls `POST /api/v1/community/people/{id}/messages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communitySendPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommunityProxyPostApiV1CommunityPeopleIdMessagesResponse>({ ...options, method: "POST", url: `/api/v1/community/people/${encodeURIComponent(id)}/messages` });
  }
  /**
   * delete a message within the authenticated conversation. Edit/delete require sender ownership and current version. Reactions set an absolute enabled state. Privacy and blocks are enforced; stale versions return 409. Preserve request IDs on retry.
   * Calls `POST /api/v1/community/people/{id}/messages/{message_id}/delete` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param messageId Backend path identifier `message_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityProxyPostApiV1CommunityPeopleIdMessagesMessageIdDelete(id: Identifier, messageId: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommunityProxyPostApiV1CommunityPeopleIdMessagesMessageIdDeleteResponse>({ ...options, method: "POST", url: `/api/v1/community/people/${encodeURIComponent(id)}/messages/${encodeURIComponent(messageId)}/delete` });
  }
  /**
   * edit a message within the authenticated conversation. Edit/delete require sender ownership and current version. Reactions set an absolute enabled state. Privacy and blocks are enforced; stale versions return 409. Preserve request IDs on retry.
   * Calls `POST /api/v1/community/people/{id}/messages/{message_id}/edit` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param messageId Backend path identifier `message_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityProxyPostApiV1CommunityPeopleIdMessagesMessageIdEdit(id: Identifier, messageId: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommunityProxyPostApiV1CommunityPeopleIdMessagesMessageIdEditResponse>({ ...options, method: "POST", url: `/api/v1/community/people/${encodeURIComponent(id)}/messages/${encodeURIComponent(messageId)}/edit` });
  }
  /**
   * reaction a message within the authenticated conversation. Edit/delete require sender ownership and current version. Reactions set an absolute enabled state. Privacy and blocks are enforced; stale versions return 409. Preserve request IDs on retry.
   * Calls `POST /api/v1/community/people/{id}/messages/{message_id}/reaction` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param messageId Backend path identifier `message_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use; Task global admission and TASK_COMMUNITY_ENABLED; Social enforces caller scope and consent.
   */
  communityProxyPostApiV1CommunityPeopleIdMessagesMessageIdReaction(id: Identifier, messageId: Identifier, options?: RequestOptions) {
    return this.client.request<T.CommunityProxyPostApiV1CommunityPeopleIdMessagesMessageIdReactionResponse>({ ...options, method: "POST", url: `/api/v1/community/people/${encodeURIComponent(id)}/messages/${encodeURIComponent(messageId)}/reaction` });
  }
  /**
   * Events. Raw SSE invalidate/changed frames, no JSON envelope; permission rechecked per event and keepalive every 15 seconds. Reconnect and refetch current snapshots; no replay cursor.
   * Calls `GET /api/v1/events` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local project.read; verified Bearer/cookie identity through FaiberClient; source checks project.read, work_item.read.
   */
  routesEventsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesEventsGetResponse>({ ...options, method: "GET", url: `/api/v1/events`, responseType: "stream", adapter: options?.adapter ?? "fetch" });
  }
  /**
   * Read or mutate the scoped service resource; preserve the full response and service validation errors.
   * Calls `GET /api/v1/faiber-feedback/capabilities` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Short-lived x-faiber-feedback-grant bound to exact GET path/query plus workspace-owned developer read policy; not a tenant identity. mine=true is forbidden..
   */
  feedbackCapabilitiesGetApiV1FaiberFeedbackCapabilities(options?: RequestOptions) {
    return this.client.request<T.FeedbackCapabilitiesGetApiV1FaiberFeedbackCapabilitiesResponse>({ ...options, method: "GET", url: `/api/v1/faiber-feedback/capabilities` });
  }
  /**
   * Read or mutate the scoped service resource; preserve the full response and service validation errors.
   * Calls `GET /api/v1/faiber-feedback/requests` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Short-lived x-faiber-feedback-grant bound to exact GET path/query plus workspace-owned developer read policy; not a tenant identity. mine=true is forbidden..
   */
  feedbackIndexGetApiV1FaiberFeedbackRequests(params?: T.FeedbackIndexGetApiV1FaiberFeedbackRequestsQuery, options?: RequestOptions) {
    return this.client.request<T.FeedbackIndexGetApiV1FaiberFeedbackRequestsResponse>({ ...options, method: "GET", url: `/api/v1/faiber-feedback/requests`, params });
  }
  /**
   * Read or mutate the scoped service resource; preserve the full response and service validation errors.
   * Calls `GET /api/v1/faiber-feedback/requests/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Short-lived x-faiber-feedback-grant bound to exact GET path/query plus workspace-owned developer read policy; not a tenant identity. mine=true is forbidden..
   */
  feedbackShowGetApiV1FaiberFeedbackRequestsId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FeedbackShowGetApiV1FaiberFeedbackRequestsIdResponse>({ ...options, method: "GET", url: `/api/v1/faiber-feedback/requests/${encodeURIComponent(id)}` });
  }
  /**
   * Assignees. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.
   * Calls `GET /api/v1/feedback/assignees` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:feedback:assign; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  feedbackAssigneesGet(options?: RequestOptions) {
    return this.client.request<T.FeedbackAssigneesGetResponse>({ ...options, method: "GET", url: `/api/v1/feedback/assignees` });
  }
  /**
   * Initialize. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.
   * Calls `POST /api/v1/feedback/attachments` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:feedback:submit; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  feedbackInitializePost(data: T.FeedbackInitializePostInput, options?: RequestOptions<T.FeedbackInitializePostInput>) {
    return this.client.request<T.FeedbackInitializePostResponse, T.FeedbackInitializePostInput>({ ...options, method: "POST", url: `/api/v1/feedback/attachments`, data: data });
  }
  /**
   * Complete. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.
   * Calls `POST /api/v1/feedback/attachments/{id}/complete` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  feedbackCompletePost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FeedbackCompletePostResponse>({ ...options, method: "POST", url: `/api/v1/feedback/attachments/${encodeURIComponent(id)}/complete` });
  }
  /**
   * Upload. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.
   * Calls `PUT /api/v1/feedback/attachments/{id}/content` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed binary byte stream.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  feedbackUploadPut(id: Identifier, data: T.FeedbackUploadPutInput, options?: RequestOptions<T.FeedbackUploadPutInput>) {
    return this.client.request<T.FeedbackUploadPutResponse, T.FeedbackUploadPutInput>({ ...options, method: "PUT", url: `/api/v1/feedback/attachments/${encodeURIComponent(id)}/content`, data: data, headers: { "Content-Type": (typeof Blob !== "undefined" && data instanceof Blob && data.type ? data.type : "application/octet-stream"), ...options?.headers } });
  }
  /**
   * Capabilities. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.
   * Calls `GET /api/v1/feedback/capabilities` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:feedback:submit; handler-specific local scope; verified Bearer/cookie identity through FaiberClient; source checks workspace.manage.
   */
  feedbackCapabilitiesGet(options?: RequestOptions) {
    return this.client.request<T.FeedbackCapabilitiesGetResponse>({ ...options, method: "GET", url: `/api/v1/feedback/capabilities` });
  }
  /**
   * Get policy. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.
   * Calls `GET /api/v1/feedback/policy` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  feedbackGetPolicyGet(options?: RequestOptions) {
    return this.client.request<T.FeedbackGetPolicyGetResponse>({ ...options, method: "GET", url: `/api/v1/feedback/policy` });
  }
  /**
   * Put policy. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.
   * Calls `PUT /api/v1/feedback/policy` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  feedbackPutPolicyPut(data: T.FeedbackPutPolicyPutInput, options?: RequestOptions<T.FeedbackPutPolicyPutInput>) {
    return this.client.request<T.FeedbackPutPolicyPutResponse, T.FeedbackPutPolicyPutInput>({ ...options, method: "PUT", url: `/api/v1/feedback/policy`, data: data });
  }
  /**
   * Index. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.
   * Calls `GET /api/v1/feedback/requests` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:feedback:self:read; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  feedbackIndexGet(params?: T.FeedbackIndexGetQuery, options?: RequestOptions) {
    return this.client.request<T.FeedbackIndexGetResponse>({ ...options, method: "GET", url: `/api/v1/feedback/requests`, params });
  }
  /**
   * Create. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.
   * Calls `POST /api/v1/feedback/requests` through the shared IDP-aware Faiber client.
   * @param idempotencyKey Stable printable ASCII key (1–128 characters, without spaces); reuse for identical retries.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:feedback:submit; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  feedbackCreatePost(data: T.FeedbackCreatePostInput, idempotencyKey: string, options?: RequestOptions<T.FeedbackCreatePostInput>) {
    if (!/^[\x21-\x7e]{1,128}$/.test(idempotencyKey)) throw new TypeError("Idempotency-Key must be 1–128 printable ASCII characters without spaces");
    const headers = new AxiosHeaders(options?.headers as RawAxiosHeaders | AxiosHeaders | undefined);
    headers.set("Idempotency-Key", idempotencyKey);
    return this.client.request<T.FeedbackCreatePostResponse, T.FeedbackCreatePostInput>({ ...options, method: "POST", url: `/api/v1/feedback/requests`, headers, data: data });
  }
  /**
   * Show. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.
   * Calls `GET /api/v1/feedback/requests/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  feedbackShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.FeedbackShowGetResponse>({ ...options, method: "GET", url: `/api/v1/feedback/requests/${encodeURIComponent(id)}` });
  }
  /**
   * Content. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.
   * Calls `GET /api/v1/feedback/requests/{id}/attachments/{attachment}/content` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param attachment Backend path identifier `attachment`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  feedbackContentGet(id: Identifier, attachment: Identifier, options?: RequestOptions) {
    return this.client.request<T.FeedbackContentGetResponse>({ ...options, method: "GET", url: `/api/v1/feedback/requests/${encodeURIComponent(id)}/attachments/${encodeURIComponent(attachment)}/content`, responseType: "arraybuffer" });
  }
  /**
   * Decision. Returns the Task status/message/data envelope with the full Axios status and headers. Feedback realm identity is required; no platform fallback. Optional X-Feedback-Reporter-Id fences capture identity (409 requires fresh capture); IDP role grants and branch/stage checks remain authoritative.
   * Calls `POST /api/v1/feedback/requests/{id}/decisions` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param idempotencyKey Stable printable ASCII key (1–128 characters, without spaces); reuse for identical retries.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  feedbackDecisionPost(id: Identifier, data: T.FeedbackDecisionPostInput, idempotencyKey: string, options?: RequestOptions<T.FeedbackDecisionPostInput>) {
    if (!/^[\x21-\x7e]{1,128}$/.test(idempotencyKey)) throw new TypeError("Idempotency-Key must be 1–128 printable ASCII characters without spaces");
    const headers = new AxiosHeaders(options?.headers as RawAxiosHeaders | AxiosHeaders | undefined);
    headers.set("Idempotency-Key", idempotencyKey);
    return this.client.request<T.FeedbackDecisionPostResponse, T.FeedbackDecisionPostInput>({ ...options, method: "POST", url: `/api/v1/feedback/requests/${encodeURIComponent(id)}/decisions`, headers, data: data });
  }
  /**
   * Use guest link. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/guest-links/use` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Guest token in body; no IDP identity extractor. Expiry, active link and sandbox are checked by repository.
   */
  routesUseGuestLinkPost(data: T.RoutesUseGuestLinkPostInput, options?: RequestOptions<T.RoutesUseGuestLinkPostInput>) {
    return this.client.request<T.RoutesUseGuestLinkPostResponse, T.RoutesUseGuestLinkPostInput>({ ...options, method: "POST", url: `/api/v1/guest-links/use`, data: data });
  }
  /**
   * Read this actor's Faiber project synchronization settings. Requires task:access:use; settings are actor-scoped.
   * Calls `GET /api/v1/integrations/faiber/{project}/sync` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  faiberSyncSettingsGet(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.FaiberSyncSettingsGetResponse>({ ...options, method: "GET", url: `/api/v1/integrations/faiber/${encodeURIComponent(project)}/sync` });
  }
  /**
   * Save versioned settings after checking source connection and destination project permissions. 409 for stale settings; disabling remains possible after revocation.
   * Calls `PUT /api/v1/integrations/faiber/{project}/sync` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  faiberSyncSavePut(project: Identifier, data: T.FaiberSyncSavePutInput, options?: RequestOptions<T.FaiberSyncSavePutInput>) {
    return this.client.request<T.FaiberSyncSavePutResponse, T.FaiberSyncSavePutInput>({ ...options, method: "PUT", url: `/api/v1/integrations/faiber/${encodeURIComponent(project)}/sync`, data: data });
  }
  /**
   * Queue a sync attempt; does not imply imported data is already available.
   * Calls `POST /api/v1/integrations/faiber/{project}/sync/run` through the shared IDP-aware Faiber client.
   * @param project Backend path identifier `project`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  faiberSyncRetryPost(project: Identifier, options?: RequestOptions) {
    return this.client.request<T.FaiberSyncRetryPostResponse>({ ...options, method: "POST", url: `/api/v1/integrations/faiber/${encodeURIComponent(project)}/sync/run` });
  }
  /**
   * Read or mutate the scoped service resource; preserve the full response and service validation errors.
   * Calls `POST /api/v1/internal/campaign-notification` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted CAMPAIGN_SCOPE_SERVICE_TOKEN Bearer credential; caller must enforce actor permissions. Never put this credential in browser code..
   */
  campaignsNotificationPost(data: T.CampaignsNotificationPostInput, options?: RequestOptions<T.CampaignsNotificationPostInput>) {
    return this.client.request<T.CampaignsNotificationPostResponse, T.CampaignsNotificationPostInput>({ ...options, method: "POST", url: `/api/v1/internal/campaign-notification`, data: data });
  }
  /**
   * Read or mutate the scoped service resource; preserve the full response and service validation errors.
   * Calls `POST /api/v1/internal/campaign-referral-facts` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted CAMPAIGN_SCOPE_SERVICE_TOKEN Bearer credential; caller must enforce actor permissions. Never put this credential in browser code..
   */
  campaignsFactsPost(data: T.CampaignsFactsPostInput, options?: RequestOptions<T.CampaignsFactsPostInput>) {
    return this.client.request<T.CampaignsFactsPostResponse, T.CampaignsFactsPostInput>({ ...options, method: "POST", url: `/api/v1/internal/campaign-referral-facts`, data: data });
  }
  /**
   * Read or mutate the scoped service resource; preserve the full response and service validation errors.
   * Calls `POST /api/v1/internal/campaign-scope` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted CAMPAIGN_SCOPE_SERVICE_TOKEN Bearer credential; caller must enforce actor permissions. Never put this credential in browser code..
   */
  campaignsScopePost(data: T.CampaignsScopePostInput, options?: RequestOptions<T.CampaignsScopePostInput>) {
    return this.client.request<T.CampaignsScopePostResponse, T.CampaignsScopePostInput>({ ...options, method: "POST", url: `/api/v1/internal/campaign-scope`, data: data });
  }
  /**
   * List. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/internal/plans/gifts` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers.
   */
  routesListGet(params?: T.RoutesListGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/plans/gifts`, params });
  }
  /**
   * Create. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/internal/plans/gifts` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers.
   */
  routesCreatePostApiV1InternalPlansGifts(data: T.RoutesCreatePostApiV1InternalPlansGiftsInput, options?: RequestOptions<T.RoutesCreatePostApiV1InternalPlansGiftsInput>) {
    return this.client.request<T.RoutesCreatePostApiV1InternalPlansGiftsResponse, T.RoutesCreatePostApiV1InternalPlansGiftsInput>({ ...options, method: "POST", url: `/api/v1/internal/plans/gifts`, data: data });
  }
  /**
   * Show. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/internal/plans/gifts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers.
   */
  routesShowGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesShowGetResponse>({ ...options, method: "GET", url: `/api/v1/internal/plans/gifts/${encodeURIComponent(id)}` });
  }
  /**
   * Update. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `PUT /api/v1/internal/plans/gifts/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers.
   */
  routesUpdatePut(id: Identifier, data: T.RoutesUpdatePutInput, options?: RequestOptions<T.RoutesUpdatePutInput>) {
    return this.client.request<T.RoutesUpdatePutResponse, T.RoutesUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/internal/plans/gifts/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Reserve internal. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/internal/plans/memory-reservations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers.
   */
  routesReserveInternalPost(data: T.RoutesReserveInternalPostInput, options?: RequestOptions<T.RoutesReserveInternalPostInput>) {
    return this.client.request<T.RoutesReserveInternalPostResponse, T.RoutesReserveInternalPostInput>({ ...options, method: "POST", url: `/api/v1/internal/plans/memory-reservations`, data: data });
  }
  /**
   * Settle internal. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/internal/plans/memory-reservations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers.
   */
  routesSettleInternalPost(id: Identifier, data: T.RoutesSettleInternalPostInput, options?: RequestOptions<T.RoutesSettleInternalPostInput>) {
    return this.client.request<T.RoutesSettleInternalPostResponse, T.RoutesSettleInternalPostInput>({ ...options, method: "POST", url: `/api/v1/internal/plans/memory-reservations/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Reserve. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/internal/plans/reservations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers.
   */
  routesReservePost(data: T.RoutesReservePostInput, options?: RequestOptions<T.RoutesReservePostInput>) {
    return this.client.request<T.RoutesReservePostResponse, T.RoutesReservePostInput>({ ...options, method: "POST", url: `/api/v1/internal/plans/reservations`, data: data });
  }
  /**
   * Finish. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/internal/plans/reservations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Trusted backend service Bearer credential (PRODUCT_CHAT_SERVICE_TOKEN; gifts use PRODUCT_TRIAL_GIFT_SERVICE_TOKEN), workspace and actor/owner scope; never expose service credentials to browser callers.
   */
  routesFinishPost(id: Identifier, data: T.RoutesFinishPostInput, options?: RequestOptions<T.RoutesFinishPostInput>) {
    return this.client.request<T.RoutesFinishPostResponse, T.RoutesFinishPostInput>({ ...options, method: "POST", url: `/api/v1/internal/plans/reservations/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Own. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/memory-usage` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesOwnGet(options?: RequestOptions) {
    return this.client.request<T.RoutesOwnGetResponse>({ ...options, method: "GET", url: `/api/v1/memory-usage` });
  }
  /**
   * Folders. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.
   * Calls `GET /api/v1/note-folders` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient; source checks project.read.
   */
  workspaceFolders(params: T.RoutesFoldersGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesFoldersGetResponse>({ ...options, method: "GET", url: `/api/v1/note-folders`, params });
  }
  /**
   * Get. Returns the Task status/message/data envelope with the full Axios status and headers. Feature flags may return 404. Jobs are actor-owned and note edit access is rechecked; extraction creates a preview and requires explicit apply.
   * Calls `GET /api/v1/note-imports/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  routesGetGetApiV1NoteImportsId(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1NoteImportsIdResponse>({ ...options, method: "GET", url: `/api/v1/note-imports/${encodeURIComponent(id)}` });
  }
  /**
   * Control. Returns the Task status/message/data envelope with the full Axios status and headers. Feature flags may return 404. Jobs are actor-owned and note edit access is rechecked; extraction creates a preview and requires explicit apply.
   * Calls `POST /api/v1/note-imports/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read.
   */
  routesControlPost(id: Identifier, data: T.RoutesControlPostInput, options?: RequestOptions<T.RoutesControlPostInput>) {
    return this.client.request<T.RoutesControlPostResponse, T.RoutesControlPostInput>({ ...options, method: "POST", url: `/api/v1/note-imports/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Apply. Returns the Task status/message/data envelope with the full Axios status and headers. Feature flags may return 404. Jobs are actor-owned and note edit access is rechecked; extraction creates a preview and requires explicit apply.
   * Calls `POST /api/v1/note-imports/{id}/apply` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.assign, work_item.read, work_item.update.
   */
  routesApplyPostApiV1NoteImportsIdApply(id: Identifier, data: T.RoutesApplyPostApiV1NoteImportsIdApplyInput, options?: RequestOptions<T.RoutesApplyPostApiV1NoteImportsIdApplyInput>) {
    return this.client.request<T.RoutesApplyPostApiV1NoteImportsIdApplyResponse, T.RoutesApplyPostApiV1NoteImportsIdApplyInput>({ ...options, method: "POST", url: `/api/v1/note-imports/${encodeURIComponent(id)}/apply`, data: data });
  }
  /**
   * Cover. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.
   * Calls `PUT /api/v1/notes/{id}/cover` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read, work_item.update.
   */
  routesCoverPut(id: Identifier, data: T.RoutesCoverPutInput, options?: RequestOptions<T.RoutesCoverPutInput>) {
    return this.client.request<T.RoutesCoverPutResponse, T.RoutesCoverPutInput>({ ...options, method: "PUT", url: `/api/v1/notes/${encodeURIComponent(id)}/cover`, data: data });
  }
  /**
   * Document. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/notes/{id}/document` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  routesDocumentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDocumentGetResponse>({ ...options, method: "GET", url: `/api/v1/notes/${encodeURIComponent(id)}/document` });
  }
  /**
   * Update. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/notes/{id}/document` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  routesUpdatePost(id: Identifier, data: T.RoutesUpdatePostInput, options?: RequestOptions<T.RoutesUpdatePostInput>) {
    return this.client.request<T.RoutesUpdatePostResponse, T.RoutesUpdatePostInput>({ ...options, method: "POST", url: `/api/v1/notes/${encodeURIComponent(id)}/document`, data: data });
  }
  /**
   * Create. Returns the Task status/message/data envelope with the full Axios status and headers. Feature flags may return 404. Jobs are actor-owned and note edit access is rechecked; extraction creates a preview and requires explicit apply.
   * Calls `POST /api/v1/notes/{id}/imports` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read.
   */
  routesCreatePostApiV1NotesIdImports(id: Identifier, data: T.RoutesCreatePostApiV1NotesIdImportsInput, options?: RequestOptions<T.RoutesCreatePostApiV1NotesIdImportsInput>) {
    return this.client.request<T.RoutesCreatePostApiV1NotesIdImportsResponse, T.RoutesCreatePostApiV1NotesIdImportsInput>({ ...options, method: "POST", url: `/api/v1/notes/${encodeURIComponent(id)}/imports`, data: data });
  }
  /**
   * Status. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/notes/{id}/indexing` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read.
   */
  routesStatusGetApiV1NotesIdIndexing(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesStatusGetApiV1NotesIdIndexingResponse>({ ...options, method: "GET", url: `/api/v1/notes/${encodeURIComponent(id)}/indexing` });
  }
  /**
   * Retry. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/notes/{id}/indexing` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read, work_item.update.
   */
  routesRetryPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRetryPostResponse>({ ...options, method: "POST", url: `/api/v1/notes/${encodeURIComponent(id)}/indexing` });
  }
  /**
   * Get. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.
   * Calls `GET /api/v1/notes/{id}/media` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  routesGetGetApiV1NotesIdMedia(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1NotesIdMediaResponse>({ ...options, method: "GET", url: `/api/v1/notes/${encodeURIComponent(id)}/media` });
  }
  /**
   * Add. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.
   * Calls `POST /api/v1/notes/{id}/media` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read, work_item.update.
   */
  routesAddPost(id: Identifier, data: T.RoutesAddPostInput, options?: RequestOptions<T.RoutesAddPostInput>) {
    return this.client.request<T.RoutesAddPostResponse, T.RoutesAddPostInput>({ ...options, method: "POST", url: `/api/v1/notes/${encodeURIComponent(id)}/media`, data: data });
  }
  /**
   * Remove. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.
   * Calls `DELETE /api/v1/notes/{id}/media/{attachment}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param attachment Backend path identifier `attachment`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read, work_item.update.
   */
  routesRemoveDeleteApiV1NotesIdMediaAttachment(id: Identifier, attachment: Identifier, data: T.RoutesRemoveDeleteApiV1NotesIdMediaAttachmentInput, options?: RequestOptions<T.RoutesRemoveDeleteApiV1NotesIdMediaAttachmentInput>) {
    return this.client.request<T.RoutesRemoveDeleteApiV1NotesIdMediaAttachmentResponse, T.RoutesRemoveDeleteApiV1NotesIdMediaAttachmentInput>({ ...options, method: "DELETE", url: `/api/v1/notes/${encodeURIComponent(id)}/media/${encodeURIComponent(attachment)}`, data: data });
  }
  /**
   * Authorize. Raw {auth} signature for the exact private-note channel and numeric/dot socket ID after note-read access; no Task envelope, WebSocket, or credential in query.
   * Calls `POST /api/v1/notes/{id}/realtime/auth` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  routesAuthorizePost(id: Identifier, data: T.RoutesAuthorizePostInput, options?: RequestOptions<T.RoutesAuthorizePostInput>) {
    return this.client.request<T.RoutesAuthorizePostResponse, T.RoutesAuthorizePostInput>({ ...options, method: "POST", url: `/api/v1/notes/${encodeURIComponent(id)}/realtime/auth`, data: data });
  }
  /**
   * Config. Returns the Task status/message/data envelope with the full Axios status and headers. Reads note-scoped Sockudo configuration; 503 when required realtime configuration is absent.
   * Calls `GET /api/v1/notes/{id}/realtime/config` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks note.updated.
   */
  routesConfigGetApiV1NotesIdRealtimeConfig(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesConfigGetApiV1NotesIdRealtimeConfigResponse>({ ...options, method: "GET", url: `/api/v1/notes/${encodeURIComponent(id)}/realtime/config` });
  }
  /**
   * Create. Returns the Task status/message/data envelope with the full Axios status and headers. Feature flags may return 404. Jobs are actor-owned and note edit access is rechecked; extraction creates a preview and requires explicit apply.
   * Calls `POST /api/v1/notes/{id}/source-imports` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read.
   */
  routesCreatePostApiV1NotesIdSourceImports(id: Identifier, data: T.RoutesCreatePostApiV1NotesIdSourceImportsInput, options?: RequestOptions<T.RoutesCreatePostApiV1NotesIdSourceImportsInput>) {
    return this.client.request<T.RoutesCreatePostApiV1NotesIdSourceImportsResponse, T.RoutesCreatePostApiV1NotesIdSourceImportsInput>({ ...options, method: "POST", url: `/api/v1/notes/${encodeURIComponent(id)}/source-imports`, data: data });
  }
  /**
   * Catalog. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/notes/data/catalog` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read.
   */
  routesCatalogGetApiV1NotesDataCatalog(params?: T.RoutesCatalogGetApiV1NotesDataCatalogQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesCatalogGetApiV1NotesDataCatalogResponse>({ ...options, method: "GET", url: `/api/v1/notes/data/catalog`, params });
  }
  /**
   * Search. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/notes/knowledge/search` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local work_item.read; verified Bearer/cookie identity through FaiberClient; source checks project.read, work_item.read.
   */
  routesSearchPost(data: T.RoutesSearchPostInput, options?: RequestOptions<T.RoutesSearchPostInput>) {
    return this.client.request<T.RoutesSearchPostResponse, T.RoutesSearchPostInput>({ ...options, method: "POST", url: `/api/v1/notes/knowledge/search`, data: data });
  }
  /**
   * Get preferences. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/notification-preferences` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesGetPreferencesGet(options?: RequestOptions) {
    return this.client.request<T.RoutesGetPreferencesGetResponse>({ ...options, method: "GET", url: `/api/v1/notification-preferences` });
  }
  /**
   * Put preferences. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `PUT /api/v1/notification-preferences` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesPutPreferencesPut(data: T.RoutesPutPreferencesPutInput, options?: RequestOptions<T.RoutesPutPreferencesPutInput>) {
    return this.client.request<T.RoutesPutPreferencesPutResponse, T.RoutesPutPreferencesPutInput>({ ...options, method: "PUT", url: `/api/v1/notification-preferences`, data: data });
  }
  /**
   * Read or mutate the scoped service resource; preserve the full response and service validation errors.
   * Calls `GET /api/v1/offline-sync` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  routesCapabilitiesGet(options?: RequestOptions) {
    return this.client.request<T.RoutesCapabilitiesGetResponse>({ ...options, method: "GET", url: `/api/v1/offline-sync` });
  }
  /**
   * Read or mutate the scoped service resource; preserve the full response and service validation errors.
   * Calls `POST /api/v1/offline-sync` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  routesApplyPostApiV1OfflineSync(data: T.RoutesApplyPostApiV1OfflineSyncInput, options?: RequestOptions<T.RoutesApplyPostApiV1OfflineSyncInput>) {
    return this.client.request<T.RoutesApplyPostApiV1OfflineSyncResponse, T.RoutesApplyPostApiV1OfflineSyncInput>({ ...options, method: "POST", url: `/api/v1/offline-sync`, data: data });
  }
  /**
   * Upsert performance policy. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `PUT /api/v1/performance/policies` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local performance.manage; verified Bearer/cookie identity through FaiberClient; source checks performance.manage.
   */
  routesUpsertPerformancePolicyPut(data: T.RoutesUpsertPerformancePolicyPutInput, options?: RequestOptions<T.RoutesUpsertPerformancePolicyPutInput>) {
    return this.client.request<T.RoutesUpsertPerformancePolicyPutResponse, T.RoutesUpsertPerformancePolicyPutInput>({ ...options, method: "PUT", url: `/api/v1/performance/policies`, data: data });
  }
  /**
   * Preferences. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.
   * Calls `GET /api/v1/planning-preferences` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  workspacePreferences(options?: RequestOptions) {
    return this.client.request<T.RoutesPreferencesGetResponse>({ ...options, method: "GET", url: `/api/v1/planning-preferences` });
  }
  /**
   * Save preferences. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.
   * Calls `PUT /api/v1/planning-preferences` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  workspaceSavePreferences(data: T.RoutesSavePreferencesPutInput, options?: RequestOptions<T.RoutesSavePreferencesPutInput>) {
    return this.client.request<T.RoutesSavePreferencesPutResponse, T.RoutesSavePreferencesPutInput>({ ...options, method: "PUT", url: `/api/v1/planning-preferences`, data: data });
  }
  /**
   * Get. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/plans` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesGetGetApiV1Plans(params?: T.RoutesGetGetApiV1PlansQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1PlansResponse>({ ...options, method: "GET", url: `/api/v1/plans`, params });
  }
  /**
   * Income. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/plans/admin/income` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesIncomeGet(params: T.RoutesIncomeGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesIncomeGetResponse>({ ...options, method: "GET", url: `/api/v1/plans/admin/income`, params });
  }
  /**
   * Configure. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `PUT /api/v1/plans/admin/memory-limits` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesConfigurePut(data: T.RoutesConfigurePutInput, options?: RequestOptions<T.RoutesConfigurePutInput>) {
    return this.client.request<T.RoutesConfigurePutResponse, T.RoutesConfigurePutInput>({ ...options, method: "PUT", url: `/api/v1/plans/admin/memory-limits`, data: data });
  }
  /**
   * Users. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/plans/admin/users` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesUsersGet(params: T.RoutesUsersGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesUsersGetResponse>({ ...options, method: "GET", url: `/api/v1/plans/admin/users`, params });
  }
  /**
   * Inspect an authorized admin target's subscription and credit balance. Upstream failure sets credit_unavailable without inventing a balance.
   * Calls `GET /api/v1/plans/admin/users/{user_id}` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  routesAdminUserGet(userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesAdminUserGetResponse>({ ...options, method: "GET", url: `/api/v1/plans/admin/users/${encodeURIComponent(userId)}` });
  }
  /**
   * Record an explicit, audited entitlement adjustment. Stable request IDs prevent double grants; plan changes require the returned state precondition. queued means durable delivery is pending.
   * Calls `POST /api/v1/plans/admin/users/{user_id}/adjustments` through the shared IDP-aware Faiber client.
   * @param userId Backend path identifier `user_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  routesAdminAdjustPost(userId: Identifier, data: T.RoutesAdminAdjustPostInput, options?: RequestOptions<T.RoutesAdminAdjustPostInput>) {
    return this.client.request<T.RoutesAdminAdjustPostResponse, T.RoutesAdminAdjustPostInput>({ ...options, method: "POST", url: `/api/v1/plans/admin/users/${encodeURIComponent(userId)}/adjustments`, data: data });
  }
  /**
   * Checkout. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/plans/checkout` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesCheckoutPost(data: T.RoutesCheckoutPostInput, options?: RequestOptions<T.RoutesCheckoutPostInput>) {
    return this.client.request<T.RoutesCheckoutPostResponse, T.RoutesCheckoutPostInput>({ ...options, method: "POST", url: `/api/v1/plans/checkout`, data: data });
  }
  /**
   * Redeem. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/plans/gift` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesRedeemPost(data: T.RoutesRedeemPostInput, options?: RequestOptions<T.RoutesRedeemPostInput>) {
    return this.client.request<T.RoutesRedeemPostResponse, T.RoutesRedeemPostInput>({ ...options, method: "POST", url: `/api/v1/plans/gift`, data: data });
  }
  /**
   * Gift. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/plans/gift-tokens` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesGiftPost(options?: RequestOptions) {
    return this.client.request<T.RoutesGiftPostResponse>({ ...options, method: "POST", url: `/api/v1/plans/gift-tokens` });
  }
  /**
   * Catalog. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/plans/memory-limits` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesCatalogGetApiV1PlansMemoryLimits(options?: RequestOptions) {
    return this.client.request<T.RoutesCatalogGetApiV1PlansMemoryLimitsResponse>({ ...options, method: "GET", url: `/api/v1/plans/memory-limits` });
  }
  /**
   * Reconcile. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/plans/orders/{id}/reconcile` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  routesReconcilePost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesReconcilePostResponse>({ ...options, method: "POST", url: `/api/v1/plans/orders/${encodeURIComponent(id)}/reconcile` });
  }
  /**
   * Point history. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/points/history` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local report.read; verified Bearer/cookie identity through FaiberClient; source checks report.read.
   */
  routesPointHistoryGet(params?: T.RoutesPointHistoryGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesPointHistoryGetResponse>({ ...options, method: "GET", url: `/api/v1/points/history`, params });
  }
  /**
   * List projects. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/projects` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local project.read; verified Bearer/cookie identity through FaiberClient.
   */
  routesListProjectsGet(params?: T.RoutesListProjectsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListProjectsGetResponse>({ ...options, method: "GET", url: `/api/v1/projects`, params });
  }
  /**
   * Create project. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.
   * Calls `POST /api/v1/projects` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local project.create; verified Bearer/cookie identity through FaiberClient.
   */
  routesCreateProjectPost(data: T.RoutesCreateProjectPostInput, options?: RequestOptions<T.RoutesCreateProjectPostInput>) {
    return this.client.request<T.RoutesCreateProjectPostResponse, T.RoutesCreateProjectPostInput>({ ...options, method: "POST", url: `/api/v1/projects`, data: data });
  }
  /**
   * Get project. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/projects/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read.
   */
  routesGetProjectGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetProjectGetResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}` });
  }
  /**
   * Update project. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `PATCH /api/v1/projects/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.update.
   */
  routesUpdateProjectPatch(id: Identifier, data: T.RoutesUpdateProjectPatchInput, options?: RequestOptions<T.RoutesUpdateProjectPatchInput>) {
    return this.client.request<T.RoutesUpdateProjectPatchResponse, T.RoutesUpdateProjectPatchInput>({ ...options, method: "PATCH", url: `/api/v1/projects/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Get. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/projects/{id}/board-workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read.
   */
  routesGetGetApiV1ProjectsIdBoardWorkflow(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1ProjectsIdBoardWorkflowResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/board-workflow` });
  }
  /**
   * Put. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `PUT /api/v1/projects/{id}/board-workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.members.manage, work_item.rank, work_item.transition.
   */
  routesPutPutApiV1ProjectsIdBoardWorkflow(id: Identifier, data: T.RoutesPutPutApiV1ProjectsIdBoardWorkflowInput, options?: RequestOptions<T.RoutesPutPutApiV1ProjectsIdBoardWorkflowInput>) {
    return this.client.request<T.RoutesPutPutApiV1ProjectsIdBoardWorkflowResponse, T.RoutesPutPutApiV1ProjectsIdBoardWorkflowInput>({ ...options, method: "PUT", url: `/api/v1/projects/${encodeURIComponent(id)}/board-workflow`, data: data });
  }
  /**
   * Project checklists. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/projects/{id}/checklists` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read.
   */
  routesProjectChecklistsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesProjectChecklistsGetResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/checklists` });
  }
  /**
   * Reads one's private Dox score in an authorized space. Read settings, wallet, products and a 100-entry history page. Pass history_cursor as before to continue. Requires project.read and current membership.
   * Calls `GET /api/v1/projects/{id}/dox` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsReadGet(id: Identifier, params?: T.CampaignsReadGetQuery, options?: RequestOptions) {
    return this.client.request<T.CampaignsReadGetResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/dox`, params });
  }
  /**
   * Configure rewards as the creator with project.update. Starts disabled; managed requires selected members. 409 on stale version; allocation is 500 per member, once.
   * Calls `POST /api/v1/projects/{id}/dox` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsConfigurePost(id: Identifier, data: T.CampaignsConfigurePostInput, options?: RequestOptions<T.CampaignsConfigurePostInput>) {
    return this.client.request<T.CampaignsConfigurePostResponse, T.CampaignsConfigurePostInput>({ ...options, method: "POST", url: `/api/v1/projects/${encodeURIComponent(id)}/dox`, data: data });
  }
  /**
   * Create or update an owner-managed product. Positive integer amounts, title <=300; updates require its current version.
   * Calls `POST /api/v1/projects/{id}/dox/products` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsProductPost(id: Identifier, data: T.CampaignsProductPostInput, options?: RequestOptions<T.CampaignsProductPostInput>) {
    return this.client.request<T.CampaignsProductPostResponse, T.CampaignsProductPostInput>({ ...options, method: "POST", url: `/api/v1/projects/${encodeURIComponent(id)}/dox/products`, data: data });
  }
  /**
   * Purchase a versioned product with reward.redeem; durable settlement may remain processing. Successful transfers notify current members.
   * Calls `POST /api/v1/projects/{id}/dox/purchase` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsPurchasePost(id: Identifier, data: T.CampaignsPurchasePostInput, options?: RequestOptions<T.CampaignsPurchasePostInput>) {
    return this.client.request<T.CampaignsPurchasePostResponse, T.CampaignsPurchasePostInput>({ ...options, method: "POST", url: `/api/v1/projects/${encodeURIComponent(id)}/dox/purchase`, data: data });
  }
  /**
   * Grant project access. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/projects/{id}/grants` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.members.manage, workspace.manage.
   */
  routesGrantProjectAccessPost(id: Identifier, data: T.RoutesGrantProjectAccessPostInput, options?: RequestOptions<T.RoutesGrantProjectAccessPostInput>) {
    return this.client.request<T.RoutesGrantProjectAccessPostResponse, T.RoutesGrantProjectAccessPostInput>({ ...options, method: "POST", url: `/api/v1/projects/${encodeURIComponent(id)}/grants`, data: data });
  }
  /**
   * Members. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/projects/{id}/members` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read.
   */
  routesMembersGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesMembersGetResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/members` });
  }
  /**
   * Remove member. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `DELETE /api/v1/projects/{id}/members/{user_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.members.manage.
   */
  routesRemoveMemberDelete(id: Identifier, userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRemoveMemberDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/projects/${encodeURIComponent(id)}/members/${encodeURIComponent(userId)}` });
  }
  /**
   * Get. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/projects/{id}/memory-usage` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read.
   */
  routesGetGetApiV1ProjectsIdMemoryUsage(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1ProjectsIdMemoryUsageResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/memory-usage` });
  }
  /**
   * Get the next completed task and remaining count, optionally a specific task. Requires selected managed-reward moderator, membership and approval.review. Own tasks are excluded.
   * Calls `GET /api/v1/projects/{id}/moderation` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use and local approval.review; enabled managed rewards, selected active moderator; no self review.
   */
  campaignsQueueReadGet(id: Identifier, params?: T.CampaignsQueueReadGetQuery, options?: RequestOptions) {
    return this.client.request<T.CampaignsQueueReadGetResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/moderation`, params });
  }
  /**
   * Approve/lock with an integer Dox amount (zero allowed), reject to Todo, or skip to the queue end. Requires moderator access and current task version. 409 on concurrent review; never pays twice.
   * Calls `POST /api/v1/projects/{id}/moderation/{task}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param task Backend path identifier `task`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsDecidePost(id: Identifier, task: Identifier, data: T.CampaignsDecidePostInput, options?: RequestOptions<T.CampaignsDecidePostInput>) {
    return this.client.request<T.CampaignsDecidePostResponse, T.CampaignsDecidePostInput>({ ...options, method: "POST", url: `/api/v1/projects/${encodeURIComponent(id)}/moderation/${encodeURIComponent(task)}`, data: data });
  }
  /**
   * Page all visible tasks by review status. Requires moderator access; page is one-based, page_size 1..100 (default20).
   * Calls `GET /api/v1/projects/{id}/moderation/tasks` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use and local approval.review; enabled managed rewards, selected active moderator; no self review.
   */
  campaignsListGet(id: Identifier, params?: T.CampaignsListGetQuery, options?: RequestOptions) {
    return this.client.request<T.CampaignsListGetResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/moderation/tasks`, params });
  }
  /**
   * Page the full space ledger or processing/failed attempts; moderator-only. account is space or user:UUID; direction requires account. Summary includes all space balances, independent of filters.
   * Calls `GET /api/v1/projects/{id}/moderation/transactions` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: task:access:use and local approval.review; enabled managed rewards, selected active moderator; no self review.
   */
  campaignsTransactionsGet(id: Identifier, params?: T.CampaignsTransactionsGetQuery, options?: RequestOptions) {
    return this.client.request<T.CampaignsTransactionsGetResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/moderation/transactions`, params });
  }
  /**
   * Get. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/projects/{id}/report` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks report.read.
   */
  routesGetGetApiV1ProjectsIdReport(id: Identifier, params: T.RoutesGetGetApiV1ProjectsIdReportQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1ProjectsIdReportResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/report`, params });
  }
  /**
   * Workflow states. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/projects/{id}/workflow` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read.
   */
  routesWorkflowStatesGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesWorkflowStatesGetResponse>({ ...options, method: "GET", url: `/api/v1/projects/${encodeURIComponent(id)}/workflow` });
  }
  /**
   * Ensure personal project. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/projects/personal` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesEnsurePersonalProjectPost(options?: RequestOptions) {
    return this.client.request<T.RoutesEnsurePersonalProjectPostResponse>({ ...options, method: "POST", url: `/api/v1/projects/personal` });
  }
  /**
   * Create shared project. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.
   * Calls `POST /api/v1/projects/shared` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  routesCreateSharedProjectPost(data: T.RoutesCreateSharedProjectPostInput, options?: RequestOptions<T.RoutesCreateSharedProjectPostInput>) {
    return this.client.request<T.RoutesCreateSharedProjectPostResponse, T.RoutesCreateSharedProjectPostInput>({ ...options, method: "POST", url: `/api/v1/projects/shared`, data: data });
  }
  /**
   * Report summary. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/reports/summary` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local report.read; verified Bearer/cookie identity through FaiberClient; source checks report.read.
   */
  routesReportSummaryGet(params: T.RoutesReportSummaryGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesReportSummaryGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/summary`, params });
  }
  /**
   * Team monitoring. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/reports/team-monitoring` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local report.read; verified Bearer/cookie identity through FaiberClient; source checks report.read.
   */
  routesTeamMonitoringGet(params?: T.RoutesTeamMonitoringGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesTeamMonitoringGetResponse>({ ...options, method: "GET", url: `/api/v1/reports/team-monitoring`, params });
  }
  /**
   * Propose. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.
   * Calls `POST /api/v1/review-proposals` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  workspacePropose(data: T.RoutesProposePostInput, options?: RequestOptions<T.RoutesProposePostInput>) {
    return this.client.request<T.RoutesProposePostResponse, T.RoutesProposePostInput>({ ...options, method: "POST", url: `/api/v1/review-proposals`, data: data });
  }
  /**
   * Get. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.
   * Calls `GET /api/v1/review-proposals/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read, work_item.read.
   */
  workspaceProposal(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1ReviewProposalsIdResponse>({ ...options, method: "GET", url: `/api/v1/review-proposals/${encodeURIComponent(id)}` });
  }
  /**
   * Revise. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.
   * Calls `PUT /api/v1/review-proposals/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  workspaceRevise(id: Identifier, data: T.RoutesRevisePutInput, options?: RequestOptions<T.RoutesRevisePutInput>) {
    return this.client.request<T.RoutesRevisePutResponse, T.RoutesRevisePutInput>({ ...options, method: "PUT", url: `/api/v1/review-proposals/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Apply. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.
   * Calls `POST /api/v1/review-proposals/{id}/apply` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  workspaceApply(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesApplyPostApiV1ReviewProposalsIdApplyResponse>({ ...options, method: "POST", url: `/api/v1/review-proposals/${encodeURIComponent(id)}/apply` });
  }
  /**
   * Refresh. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.
   * Calls `POST /api/v1/review-proposals/{id}/refresh` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  workspaceRefresh(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRefreshPostResponse>({ ...options, method: "POST", url: `/api/v1/review-proposals/${encodeURIComponent(id)}/refresh` });
  }
  /**
   * Validate proposal. Returns the Task status/message/data envelope with the full Axios status and headers. Queries enforce SQL visibility; reviewed mutations validate each domain grant. Proposal apply rechecks revision and preview atomically; conflicts apply nothing.
   * Calls `POST /api/v1/review-proposals/validate` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; handler-specific local scope; verified Bearer/cookie identity through FaiberClient.
   */
  workspaceValidate(data: T.RoutesValidateProposalPostInput, options?: RequestOptions<T.RoutesValidateProposalPostInput>) {
    return this.client.request<T.RoutesValidateProposalPostResponse, T.RoutesValidateProposalPostInput>({ ...options, method: "POST", url: `/api/v1/review-proposals/validate`, data: data });
  }
  /**
   * Gets the global Do wallet, catalog, offers and account-wide streak.
   * Calls `GET /api/v1/rewards` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsOverviewGet(options?: RequestOptions) {
    return this.client.request<T.CampaignsOverviewGetResponse>({ ...options, method: "GET", url: `/api/v1/rewards` });
  }
  /**
   * Records one server-dated check-in, with replay protection.
   * Calls `POST /api/v1/rewards/checkin` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsCheckinPost(data: T.CampaignsCheckinPostInput, options?: RequestOptions<T.CampaignsCheckinPostInput>) {
    return this.client.request<T.CampaignsCheckinPostResponse, T.CampaignsCheckinPostInput>({ ...options, method: "POST", url: `/api/v1/rewards/checkin`, data: data });
  }
  /**
   * Prepares a server-priced coin-pack payment. Never grants coins at checkout.
   * Calls `POST /api/v1/rewards/packs` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsPackPost(data: T.CampaignsPackPostInput, options?: RequestOptions<T.CampaignsPackPostInput>) {
    return this.client.request<T.CampaignsPackPostResponse, T.CampaignsPackPostInput>({ ...options, method: "POST", url: `/api/v1/rewards/packs`, data: data });
  }
  /**
   * Reconciles a provider-verified pack payment; duplicate callbacks do not mint twice.
   * Calls `POST /api/v1/rewards/packs/{id}/reconcile` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsReconcilePackPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CampaignsReconcilePackPostResponse>({ ...options, method: "POST", url: `/api/v1/rewards/packs/${encodeURIComponent(id)}/reconcile` });
  }
  /**
   * Reserves only an untouched original purchased pack for refund. Stable request IDs replay safely; committed, transferred or spent origins cannot be refunded.
   * Calls `POST /api/v1/rewards/packs/{id}/refund` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsRefundPackPost(id: Identifier, data: T.CampaignsRefundPackPostInput, options?: RequestOptions<T.CampaignsRefundPackPostInput>) {
    return this.client.request<T.CampaignsRefundPackPostResponse, T.CampaignsRefundPackPostInput>({ ...options, method: "POST", url: `/api/v1/rewards/packs/${encodeURIComponent(id)}/refund`, data: data });
  }
  /**
   * Buys an enabled catalog item; entitlement delivery may remain pending.
   * Calls `POST /api/v1/rewards/redeem` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsRedeemPost(data: T.CampaignsRedeemPostInput, options?: RequestOptions<T.CampaignsRedeemPostInput>) {
    return this.client.request<T.CampaignsRedeemPostResponse, T.CampaignsRedeemPostInput>({ ...options, method: "POST", url: `/api/v1/rewards/redeem`, data: data });
  }
  /**
   * Appeals a risk hold using a stable request ID. Requires authenticated Task access; the operator's reason stays visible in overview. 409 if an appeal is already open.
   * Calls `POST /api/v1/rewards/risk-appeal` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsRiskAppealPost(data: T.CampaignsRiskAppealPostInput, options?: RequestOptions<T.CampaignsRiskAppealPostInput>) {
    return this.client.request<T.CampaignsRiskAppealPostResponse, T.CampaignsRiskAppealPostInput>({ ...options, method: "POST", url: `/api/v1/rewards/risk-appeal`, data: data });
  }
  /**
   * List sprints. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/sprints` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local sprint.read; verified Bearer/cookie identity through FaiberClient.
   */
  routesListSprintsGet(params?: T.RoutesListSprintsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListSprintsGetResponse>({ ...options, method: "GET", url: `/api/v1/sprints`, params });
  }
  /**
   * Create sprint. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.
   * Calls `POST /api/v1/sprints` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local sprint.manage; verified Bearer/cookie identity through FaiberClient; source checks sprint.manage.
   */
  routesCreateSprintPost(data: T.RoutesCreateSprintPostInput, options?: RequestOptions<T.RoutesCreateSprintPostInput>) {
    return this.client.request<T.RoutesCreateSprintPostResponse, T.RoutesCreateSprintPostInput>({ ...options, method: "POST", url: `/api/v1/sprints`, data: data });
  }
  /**
   * Complete sprint. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/sprints/{id}/complete` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks sprint.complete.
   */
  routesCompleteSprintPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesCompleteSprintPostResponse>({ ...options, method: "POST", url: `/api/v1/sprints/${encodeURIComponent(id)}/complete` });
  }
  /**
   * Start sprint. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/sprints/{id}/start` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks sprint.start.
   */
  routesStartSprintPost(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesStartSprintPostResponse>({ ...options, method: "POST", url: `/api/v1/sprints/${encodeURIComponent(id)}/start` });
  }
  /**
   * List teams. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/teams` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local team.read; verified Bearer/cookie identity through FaiberClient.
   */
  routesListTeamsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesListTeamsGetResponse>({ ...options, method: "GET", url: `/api/v1/teams` });
  }
  /**
   * Create team. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.
   * Calls `POST /api/v1/teams` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local team.manage; verified Bearer/cookie identity through FaiberClient; source checks team.manage, team.read.
   */
  routesCreateTeamPost(data: T.RoutesCreateTeamPostInput, options?: RequestOptions<T.RoutesCreateTeamPostInput>) {
    return this.client.request<T.RoutesCreateTeamPostResponse, T.RoutesCreateTeamPostInput>({ ...options, method: "POST", url: `/api/v1/teams`, data: data });
  }
  /**
   * Get team. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/teams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks team.read.
   */
  routesGetTeamGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetTeamGetResponse>({ ...options, method: "GET", url: `/api/v1/teams/${encodeURIComponent(id)}` });
  }
  /**
   * Update team. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `PATCH /api/v1/teams/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks team.manage, team.read.
   */
  routesUpdateTeamPatch(id: Identifier, data: T.RoutesUpdateTeamPatchInput, options?: RequestOptions<T.RoutesUpdateTeamPatchInput>) {
    return this.client.request<T.RoutesUpdateTeamPatchResponse, T.RoutesUpdateTeamPatchInput>({ ...options, method: "PATCH", url: `/api/v1/teams/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List work items. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/work-items` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local work_item.read; verified Bearer/cookie identity through FaiberClient.
   */
  routesListWorkItemsGet(params?: T.RoutesListWorkItemsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesListWorkItemsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items`, params });
  }
  /**
   * Create work item. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.
   * Calls `POST /api/v1/work-items` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local work_item.create; verified Bearer/cookie identity through FaiberClient; source checks work_item.assign, work_item.create.
   */
  routesCreateWorkItemPost(data: T.RoutesCreateWorkItemPostInput, options?: RequestOptions<T.RoutesCreateWorkItemPostInput>) {
    return this.client.request<T.RoutesCreateWorkItemPostResponse, T.RoutesCreateWorkItemPostInput>({ ...options, method: "POST", url: `/api/v1/work-items`, data: data });
  }
  /**
   * Remove work item. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns HTTP 204 with no response body.
   * Calls `DELETE /api/v1/work-items/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read.
   */
  routesRemoveWorkItemDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRemoveWorkItemDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/work-items/${encodeURIComponent(id)}` });
  }
  /**
   * Get work item. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/work-items/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read.
   */
  routesGetWorkItemGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetWorkItemGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}` });
  }
  /**
   * Update work item. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `PATCH /api/v1/work-items/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.assign, work_item.update.
   */
  routesUpdateWorkItemPatch(id: Identifier, data: T.RoutesUpdateWorkItemPatchInput, options?: RequestOptions<T.RoutesUpdateWorkItemPatchInput>) {
    return this.client.request<T.RoutesUpdateWorkItemPatchResponse, T.RoutesUpdateWorkItemPatchInput>({ ...options, method: "PATCH", url: `/api/v1/work-items/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Work item activity. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/work-items/{id}/activity` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read.
   */
  routesWorkItemActivityGet(id: Identifier, params?: T.RoutesWorkItemActivityGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesWorkItemActivityGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/activity`, params });
  }
  /**
   * Create. Returns the Task status/message/data envelope with the full Axios status and headers. Private uploads remain quarantined until accepted; current task/note scope and binding rules are rechecked.
   * Calls `POST /api/v1/work-items/{id}/attachments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks attachment.create, comment.create, project.read, work_item.update.
   */
  routesCreatePostApiV1WorkItemsIdAttachments(id: Identifier, data: T.RoutesCreatePostApiV1WorkItemsIdAttachmentsInput, options?: RequestOptions<T.RoutesCreatePostApiV1WorkItemsIdAttachmentsInput>) {
    return this.client.request<T.RoutesCreatePostApiV1WorkItemsIdAttachmentsResponse, T.RoutesCreatePostApiV1WorkItemsIdAttachmentsInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/attachments`, data: data });
  }
  /**
   * Work item checklist. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/work-items/{id}/checklist` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read.
   */
  routesWorkItemChecklistGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesWorkItemChecklistGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/checklist` });
  }
  /**
   * Replace checklist. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `PUT /api/v1/work-items/{id}/checklist` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks project.read, work_item.read, work_item.update.
   */
  routesReplaceChecklistPut(id: Identifier, data: T.RoutesReplaceChecklistPutInput, options?: RequestOptions<T.RoutesReplaceChecklistPutInput>) {
    return this.client.request<T.RoutesReplaceChecklistPutResponse, T.RoutesReplaceChecklistPutInput>({ ...options, method: "PUT", url: `/api/v1/work-items/${encodeURIComponent(id)}/checklist`, data: data });
  }
  /**
   * List comments. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/work-items/{id}/comments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read.
   */
  routesListCommentsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListCommentsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/comments` });
  }
  /**
   * Create comment. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.
   * Calls `POST /api/v1/work-items/{id}/comments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks comment.create.
   */
  routesCreateCommentPost(id: Identifier, data: T.RoutesCreateCommentPostInput, options?: RequestOptions<T.RoutesCreateCommentPostInput>) {
    return this.client.request<T.RoutesCreateCommentPostResponse, T.RoutesCreateCommentPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/comments`, data: data });
  }
  /**
   * Comment page. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/work-items/{id}/comments/page` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read.
   */
  routesCommentPageGet(id: Identifier, params?: T.RoutesCommentPageGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesCommentPageGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/comments/page`, params });
  }
  /**
   * List commits. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/work-items/{id}/commits` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read.
   */
  routesListCommitsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListCommitsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/commits` });
  }
  /**
   * Attach commit. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.
   * Calls `POST /api/v1/work-items/{id}/commits` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.update.
   */
  routesAttachCommitPost(id: Identifier, data: T.RoutesAttachCommitPostInput, options?: RequestOptions<T.RoutesAttachCommitPostInput>) {
    return this.client.request<T.RoutesAttachCommitPostResponse, T.RoutesAttachCommitPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/commits`, data: data });
  }
  /**
   * Reads the authorized task's private recognition request and available approval actions. Requires Task access and work_item.read; inaccessible IDs return 404. Read a task's estimate, transfer status and available actions. Requires work_item.read. locked means approval prevents task mutations.
   * Calls `GET /api/v1/work-items/{id}/dox` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsTaskReadGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.CampaignsTaskReadGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/dox` });
  }
  /**
   * Offer as creator before completion, or approve as authorized creator/moderator. Self-review is forbidden; failed payouts are retryable.
   * Calls `POST /api/v1/work-items/{id}/dox` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified service identity and handler-specific actor/resource scope. Shared FaiberClient credentials are forwarded..
   */
  campaignsTaskChangePost(id: Identifier, data: T.CampaignsTaskChangePostInput, options?: RequestOptions<T.CampaignsTaskChangePostInput>) {
    return this.client.request<T.CampaignsTaskChangePostResponse, T.CampaignsTaskChangePostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/dox`, data: data });
  }
  /**
   * Add points. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.
   * Calls `POST /api/v1/work-items/{id}/points` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks points.manage.
   */
  routesAddPointsPost(id: Identifier, data: T.RoutesAddPointsPostInput, options?: RequestOptions<T.RoutesAddPointsPostInput>) {
    return this.client.request<T.RoutesAddPointsPostResponse, T.RoutesAddPointsPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/points`, data: data });
  }
  /**
   * Remove. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `DELETE /api/v1/work-items/{id}/reminder` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  routesRemoveDeleteApiV1WorkItemsIdReminder(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRemoveDeleteApiV1WorkItemsIdReminderResponse>({ ...options, method: "DELETE", url: `/api/v1/work-items/${encodeURIComponent(id)}/reminder` });
  }
  /**
   * Get. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/work-items/{id}/reminder` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  routesGetGetApiV1WorkItemsIdReminder(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetGetApiV1WorkItemsIdReminderResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/reminder` });
  }
  /**
   * Put. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `PUT /api/v1/work-items/{id}/reminder` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants.
   */
  routesPutPutApiV1WorkItemsIdReminder(id: Identifier, data: T.RoutesPutPutApiV1WorkItemsIdReminderInput, options?: RequestOptions<T.RoutesPutPutApiV1WorkItemsIdReminderInput>) {
    return this.client.request<T.RoutesPutPutApiV1WorkItemsIdReminderResponse, T.RoutesPutPutApiV1WorkItemsIdReminderInput>({ ...options, method: "PUT", url: `/api/v1/work-items/${encodeURIComponent(id)}/reminder`, data: data });
  }
  /**
   * Transition work item. Supply the current integer If-Match; missing preconditions return 428 and stale versions return 409. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/work-items/{id}/transition` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.rank, work_item.transition.
   */
  routesTransitionWorkItemPost(id: Identifier, data: T.RoutesTransitionWorkItemPostInput, options?: RequestOptions<T.RoutesTransitionWorkItemPostInput>) {
    return this.client.request<T.RoutesTransitionWorkItemPostResponse, T.RoutesTransitionWorkItemPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/transition`, data: data });
  }
  /**
   * List work logs. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/work-items/{id}/work-logs` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read.
   */
  routesListWorkLogsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListWorkLogsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/work-logs` });
  }
  /**
   * Create work log. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.
   * Calls `POST /api/v1/work-items/{id}/work-logs` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks time_log.create.
   */
  routesCreateWorkLogPost(id: Identifier, data: T.RoutesCreateWorkLogPostInput, options?: RequestOptions<T.RoutesCreateWorkLogPostInput>) {
    return this.client.request<T.RoutesCreateWorkLogPostResponse, T.RoutesCreateWorkLogPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/work-logs`, data: data });
  }
  /**
   * List work sessions. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/work-items/{id}/work-sessions` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks work_item.read.
   */
  routesListWorkSessionsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesListWorkSessionsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-items/${encodeURIComponent(id)}/work-sessions` });
  }
  /**
   * Start work session. Returns HTTP 201 with the Task status/message/data envelope; ETag is preserved when supplied.
   * Calls `POST /api/v1/work-items/{id}/work-sessions/start` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks time_log.create.
   */
  routesStartWorkSessionPost(id: Identifier, data: T.RoutesStartWorkSessionPostInput, options?: RequestOptions<T.RoutesStartWorkSessionPostInput>) {
    return this.client.request<T.RoutesStartWorkSessionPostResponse, T.RoutesStartWorkSessionPostInput>({ ...options, method: "POST", url: `/api/v1/work-items/${encodeURIComponent(id)}/work-sessions/start`, data: data });
  }
  /**
   * Heartbeat work session. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/work-sessions/{id}/heartbeat` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks time_log.create.
   */
  routesHeartbeatWorkSessionPost(id: Identifier, data: T.RoutesHeartbeatWorkSessionPostInput, options?: RequestOptions<T.RoutesHeartbeatWorkSessionPostInput>) {
    return this.client.request<T.RoutesHeartbeatWorkSessionPostResponse, T.RoutesHeartbeatWorkSessionPostInput>({ ...options, method: "POST", url: `/api/v1/work-sessions/${encodeURIComponent(id)}/heartbeat`, data: data });
  }
  /**
   * Stop work session. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `POST /api/v1/work-sessions/{id}/stop` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Verified IDP Bearer/cookie identity through FaiberClient; configured task:access:use and current workspace/resource grants; source checks time_log.create, time_log.manage.
   */
  routesStopWorkSessionPost(id: Identifier, data: T.RoutesStopWorkSessionPostInput, options?: RequestOptions<T.RoutesStopWorkSessionPostInput>) {
    return this.client.request<T.RoutesStopWorkSessionPostResponse, T.RoutesStopWorkSessionPostInput>({ ...options, method: "POST", url: `/api/v1/work-sessions/${encodeURIComponent(id)}/stop`, data: data });
  }
  /**
   * Active work sessions. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/work-sessions/active` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local time_log.create; verified Bearer/cookie identity through FaiberClient.
   */
  routesActiveWorkSessionsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesActiveWorkSessionsGetResponse>({ ...options, method: "GET", url: `/api/v1/work-sessions/active` });
  }
  /**
   * Workspace. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /api/v1/workspace` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: IDP route policy task:access:use; local project.read; verified Bearer/cookie identity through FaiberClient.
   */
  routesWorkspaceGet(options?: RequestOptions) {
    return this.client.request<T.RoutesWorkspaceGetResponse>({ ...options, method: "GET", url: `/api/v1/workspace` });
  }
  /**
   * Ready. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /health/dependencies` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local identity extractor; deployment ingress policy is separate. Shared FaiberClient still forwards configured credentials.
   */
  routesReadyGetHealthDependencies(options?: RequestOptions) {
    return this.client.request<T.RoutesReadyGetHealthDependenciesResponse>({ ...options, method: "GET", url: `/health/dependencies` });
  }
  /**
   * Live. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /health/live` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local identity extractor; deployment ingress policy is separate. Shared FaiberClient still forwards configured credentials.
   */
  routesLiveGet(options?: RequestOptions) {
    return this.client.request<T.RoutesLiveGetResponse>({ ...options, method: "GET", url: `/health/live` });
  }
  /**
   * Ready. Returns the Task status/message/data envelope with the full Axios status and headers.
   * Calls `GET /health/ready` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local identity extractor; deployment ingress policy is separate. Shared FaiberClient still forwards configured credentials.
   */
  routesReadyGetHealthReady(options?: RequestOptions) {
    return this.client.request<T.RoutesReadyGetHealthReadyResponse>({ ...options, method: "GET", url: `/health/ready` });
  }
  /**
   * Metrics.
   * Calls `GET /metrics` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No local identity extractor; deployment ingress policy is separate. Shared FaiberClient still forwards configured credentials.
   */
  routesMetricsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesMetricsGetResponse>({ ...options, method: "GET", url: `/metrics`, responseType: "text" });
  }
}
