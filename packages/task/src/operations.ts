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
