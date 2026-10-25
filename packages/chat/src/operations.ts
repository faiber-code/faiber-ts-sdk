import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class ChatOperations extends ServiceApi {
  /**
   * Return Knowledge platform catalog data unchanged; upstream missing data is null. Requires assistant:manage.
   * Calls `GET /api/v1/admin/assistant-context-catalog` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesAssistantContextCatalogGet(options?: RequestOptions) {
    return this.client.request<T.RoutesAssistantContextCatalogGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/assistant-context-catalog` });
  }
  /**
   * Return Agentic model catalog unchanged for billing_payer user or project_owner (default project_owner); upstream errors return 502.
   * Calls `GET /api/v1/admin/assistant-models` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesAssistantModelsGet(params?: T.RoutesAssistantModelsGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesAssistantModelsGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/assistant-models`, params });
  }
  /**
   * Read the tenant-scoped retained configuration intent. Current assistant:manage is required; credentials/grants are never retained.
   * Calls `GET /api/v1/admin/assistant-policy-operations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesGetPolicyOperationGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetPolicyOperationGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/assistant-policy-operations/${encodeURIComponent(id)}` });
  }
  /**
   * Recover or cancel an exact durable assistant configuration intent using current assistant:manage and fitness settings guard. Applied operations return their retained result; conflicts require explicit review.
   * Calls `POST /api/v1/admin/assistant-policy-operations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesReconcilePolicyOperationPost(id: Identifier, data: T.RoutesReconcilePolicyOperationPostInput, options?: RequestOptions<T.RoutesReconcilePolicyOperationPostInput>) {
    return this.client.request<T.RoutesReconcilePolicyOperationPostResponse, T.RoutesReconcilePolicyOperationPostInput>({ ...options, method: "POST", url: `/api/v1/admin/assistant-policy-operations/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List nondeleted managed assistant records ordered by updated_at; the repository has no organization filter on this list, so caller/gateway authority remains essential.
   * Calls `GET /api/v1/admin/assistants` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesListManagedAssistantsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesListManagedAssistantsGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/assistants` });
  }
  /**
   * Create a managed assistant (201) using a non-nil caller configuration UUID. Keep the UUID and exact request for retries; governed configuration reconciles Knowledge policy before application.
   * Calls `POST /api/v1/admin/assistants` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesCreateAssistantPost(data: T.RoutesCreateAssistantPostInput, options?: RequestOptions<T.RoutesCreateAssistantPostInput>) {
    return this.client.request<T.RoutesCreateAssistantPostResponse, T.RoutesCreateAssistantPostInput>({ ...options, method: "POST", url: `/api/v1/admin/assistants`, data: data });
  }
  /**
   * Soft-delete a managed assistant after fitness and pending configuration guards; returns 204.
   * Calls `DELETE /api/v1/admin/assistants/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesDeleteAssistantDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteAssistantDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/admin/assistants/${encodeURIComponent(id)}` });
  }
  /**
   * Read managed assistant detail for this organization including expected_knowledge_policy_revision; capture both revisions when opening an edit draft.
   * Calls `GET /api/v1/admin/assistants/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesGetManagedAssistantGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetManagedAssistantGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/assistants/${encodeURIComponent(id)}` });
  }
  /**
   * Apply a managed assistant edit with configuration_id and both captured Chat/Knowledge revisions. Omitted knowledge_level preserves it; explicit null clears it. Stale or pending competing edits return 409.
   * Calls `PUT /api/v1/admin/assistants/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesUpdateAssistantPut(id: Identifier, data: T.RoutesUpdateAssistantPutInput, options?: RequestOptions<T.RoutesUpdateAssistantPutInput>) {
    return this.client.request<T.RoutesUpdateAssistantPutResponse, T.RoutesUpdateAssistantPutInput>({ ...options, method: "PUT", url: `/api/v1/admin/assistants/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Discover up to the upstream first 100 products, LMS courses or weblog posts and normalize content links. q is trimmed and case-insensitively filters title/description; products also forward search.
   * Calls `GET /api/v1/admin/customer-action-content` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesCustomerActionContentGet(params: T.RoutesCustomerActionContentGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesCustomerActionContentGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/customer-action-content`, params });
  }
  /**
   * Read configured model catalog unchanged from upstream; image catalog filters vision-capable entries.
   * Calls `GET /api/v1/admin/image-models` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesModelsGetApiV1AdminImageModels(options?: RequestOptions) {
    return this.client.request<T.RoutesModelsGetApiV1AdminImageModelsResponse>({ ...options, method: "GET", url: `/api/v1/admin/image-models` });
  }
  /**
   * Read current organization versioned image settings; requires assistant:manage.
   * Calls `GET /api/v1/admin/image-settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesSettingsGetApiV1AdminImageSettings(options?: RequestOptions) {
    return this.client.request<T.RoutesSettingsGetApiV1AdminImageSettingsResponse>({ ...options, method: "GET", url: `/api/v1/admin/image-settings` });
  }
  /**
   * Save image capture settings with optimistic version (0 creates); enabled models must exist and support vision. Stale revisions return 409.
   * Calls `PUT /api/v1/admin/image-settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesSavePut(data: T.RoutesSavePutInput, options?: RequestOptions<T.RoutesSavePutInput>) {
    return this.client.request<T.RoutesSavePutResponse, T.RoutesSavePutInput>({ ...options, method: "PUT", url: `/api/v1/admin/image-settings`, data: data });
  }
  /**
   * Read configured model catalog unchanged from upstream; image catalog filters vision-capable entries.
   * Calls `GET /api/v1/admin/speech-models` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesModelsGetApiV1AdminSpeechModels(options?: RequestOptions) {
    return this.client.request<T.RoutesModelsGetApiV1AdminSpeechModelsResponse>({ ...options, method: "GET", url: `/api/v1/admin/speech-models` });
  }
  /**
   * Read current organization versioned speech settings; requires assistant:manage.
   * Calls `GET /api/v1/admin/speech-settings` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  routesSettingsGetApiV1AdminSpeechSettings(options?: RequestOptions) {
    return this.client.request<T.RoutesSettingsGetApiV1AdminSpeechSettingsResponse>({ ...options, method: "GET", url: `/api/v1/admin/speech-settings` });
  }
  /**
   * Save speech settings with optimistic version after the fitness settings boundary. Omitted/null language_models preserves overrides; {} clears them. Fitness instances reject generic changes.
   * Calls `PUT /api/v1/admin/speech-settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; current downstream authorization as documented.
   */
  routesPublicSpeechSettingsPut(data: T.RoutesPublicSpeechSettingsPutInput, options?: RequestOptions<T.RoutesPublicSpeechSettingsPutInput>) {
    return this.client.request<T.RoutesPublicSpeechSettingsPutResponse, T.RoutesPublicSpeechSettingsPutInput>({ ...options, method: "PUT", url: `/api/v1/admin/speech-settings`, data: data });
  }
  /**
   * List all stored organization workspace role bindings including disabled rows, ordered by role.
   * Calls `GET /api/v1/admin/workspace-assistants` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  workspaceManagedRoles(options?: RequestOptions) {
    return this.client.request<T.RoutesManagedRolesGetResponse>({ ...options, method: "GET", url: `/api/v1/admin/workspace-assistants` });
  }
  /**
   * Bind action/chat role using its matching 2done-action/2done-chat Knowledge slug. Enabling validates the published contract; expected_version 0 creates and stale revisions conflict.
   * Calls `PUT /api/v1/admin/workspace-assistants/{role}` through the shared IDP-aware Faiber client.
   * @param role Backend path identifier `role`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:manage.
   */
  workspaceBind(role: Identifier, data: T.RoutesBindPutInput, options?: RequestOptions<T.RoutesBindPutInput>) {
    return this.client.request<T.RoutesBindPutResponse, T.RoutesBindPutInput>({ ...options, method: "PUT", url: `/api/v1/admin/workspace-assistants/${encodeURIComponent(role)}`, data: data });
  }
  /**
   * List active nondeleted assistant catalog items (id, name, status) ordered by update time; this repository list has no organization predicate.
   * Calls `GET /api/v1/assistants` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:read.
   */
  routesListAssistantsGet(options?: RequestOptions) {
    return this.client.request<T.RoutesListAssistantsGetResponse>({ ...options, method: "GET", url: `/api/v1/assistants` });
  }
  /**
   * Read one active nondeleted assistant catalog item (id, name, status); this lookup has no organization predicate.
   * Calls `GET /api/v1/assistants/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:read.
   */
  routesGetAssistantGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetAssistantGetResponse>({ ...options, method: "GET", url: `/api/v1/assistants/${encodeURIComponent(id)}` });
  }
  /**
   * Finalize an existing presigned upload or upload raw application/octet-stream bytes (100 MiB maximum). Reserved byte size/checksum and conversation/uploader authority are checked; returns the stored attachment.
   * Calls `POST /api/v1/attachments/{id}/complete` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed binary byte stream.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:write.
   */
  routesCompleteAttachmentPost(id: Identifier, options?: RequestOptions<T.AttachmentUploadBody>, data?: T.AttachmentUploadBody) {
    return this.client.request<T.RoutesCompleteAttachmentPostResponse, T.AttachmentUploadBody>({ ...options, method: "POST", url: `/api/v1/attachments/${encodeURIComponent(id)}/complete`, ...(data === undefined ? {} : { data, headers: { ...options?.headers, "Content-Type": "application/octet-stream" } }) });
  }
  /**
   * Download private attachment bytes with original media type and no-store headers after conversation access checks; storage failures return 502.
   * Calls `GET /api/v1/attachments/{id}/content` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:read.
   */
  routesDownloadAttachmentGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDownloadAttachmentGetResponse>({ ...options, method: "GET", url: `/api/v1/attachments/${encodeURIComponent(id)}/content`, responseType: "arraybuffer" });
  }
  /**
   * List current active memberships in nondeleted, nonquarantined organization conversations ordered by last message; direct rooms must retain exactly their private pair.
   * Calls `GET /api/v1/conversations` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:read.
   */
  routesListGet(options?: RequestOptions) {
    return this.client.request<T.RoutesListGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations` });
  }
  /**
   * Create a conversation (201); direct rooms require exactly two distinct members and deduplicate by pair. Reserved learning slugs/settings are rejected. Configured LMS contact policy and guest assistant restrictions are enforced.
   * Calls `POST /api/v1/conversations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:write.
   */
  routesCreatePost(data: T.RoutesCreatePostInput, options?: RequestOptions<T.RoutesCreatePostInput>) {
    return this.client.request<T.RoutesCreatePostResponse, T.RoutesCreatePostInput>({ ...options, method: "POST", url: `/api/v1/conversations`, data: data });
  }
  /**
   * Archive the accessible conversation; requires the owner and returns 204 with no body.
   * Calls `DELETE /api/v1/conversations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:delete.
   */
  routesArchiveDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesArchiveDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/conversations/${encodeURIComponent(id)}` });
  }
  /**
   * Read one accessible conversation; membership, organization, deleted/quarantined state and private direct-room rules are rechecked.
   * Calls `GET /api/v1/conversations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:read.
   */
  routesGetOneGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesGetOneGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations/${encodeURIComponent(id)}` });
  }
  /**
   * Update conversation fields with optional expected_version; null preserves optional values. Stale versions conflict. Conversation access and write role are checked.
   * Calls `PUT /api/v1/conversations/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:write.
   */
  routesUpdatePut(id: Identifier, data: T.RoutesUpdatePutInput, options?: RequestOptions<T.RoutesUpdatePutInput>) {
    return this.client.request<T.RoutesUpdatePutResponse, T.RoutesUpdatePutInput>({ ...options, method: "PUT", url: `/api/v1/conversations/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Run governed AI for an accessible conversation and return user_message, assistant_message, ai_turn and Agentic billing authority. Assistant, context, fitness, workspace, plan and current upstream authority checks apply.
   * Calls `POST /api/v1/conversations/{id}/ai/messages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:ai.
   */
  routesAiSendPost(id: Identifier, data: T.RoutesAiSendPostInput, options?: RequestOptions<T.RoutesAiSendPostInput>) {
    return this.client.request<T.RoutesAiSendPostResponse, T.RoutesAiSendPostInput>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/ai/messages`, data: data });
  }
  /**
   * List only public pending runtime-input projection keys for the current Agentic thread; arbitrary schema/ui values are preserved and missing upstream keys become null.
   * Calls `GET /api/v1/conversations/{id}/ai/runtime-inputs` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:ai.
   */
  routesAiRuntimeInputsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesAiRuntimeInputsGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations/${encodeURIComponent(id)}/ai/runtime-inputs` });
  }
  /**
   * Complete an input currently pending on this accessible conversation thread; missing input returns 404 and success returns data:{ok:true}.
   * Calls `POST /api/v1/conversations/{id}/ai/runtime-inputs/{input_id}/complete` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param inputId Backend path identifier `input_id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:ai.
   */
  routesAiCompleteRuntimeInputPost(id: Identifier, inputId: Identifier, data: T.RoutesAiCompleteRuntimeInputPostInput, options?: RequestOptions<T.RoutesAiCompleteRuntimeInputPostInput>) {
    return this.client.request<T.RoutesAiCompleteRuntimeInputPostResponse, T.RoutesAiCompleteRuntimeInputPostInput>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/ai/runtime-inputs/${encodeURIComponent(inputId)}/complete`, data: data });
  }
  /**
   * Reserve an attachment (201) for an accessible conversation, returning attachment, expiring upload_url and expires_in_seconds. Size is 0..100 MiB; download through the authenticated content route.
   * Calls `POST /api/v1/conversations/{id}/attachments` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:write.
   */
  routesCreateAttachmentPost(id: Identifier, data: T.RoutesCreateAttachmentPostInput, options?: RequestOptions<T.RoutesCreateAttachmentPostInput>) {
    return this.client.request<T.RoutesCreateAttachmentPostResponse, T.RoutesCreateAttachmentPostInput>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/attachments`, data: data });
  }
  /**
   * Subscribe to conversation SSE after access checks; stream includes named events and 15-second keep-alives. Retain authenticated transport and abort on exit.
   * Calls `GET /api/v1/conversations/{id}/events` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:read.
   */
  routesEventsGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesEventsGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations/${encodeURIComponent(id)}/events` });
  }
  /**
   * List active members of an accessible conversation ordered by joined_at; includes state, notification settings and read sequence.
   * Calls `GET /api/v1/conversations/{id}/members` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:read.
   */
  routesMembersGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesMembersGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations/${encodeURIComponent(id)}/members` });
  }
  /**
   * Add a member (201); owner/admin role and contact/direct-room restrictions apply.
   * Calls `POST /api/v1/conversations/{id}/members` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:manage.
   */
  routesAddMemberPost(id: Identifier, data: T.RoutesAddMemberPostInput, options?: RequestOptions<T.RoutesAddMemberPostInput>) {
    return this.client.request<T.RoutesAddMemberPostResponse, T.RoutesAddMemberPostInput>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/members`, data: data });
  }
  /**
   * Mark an active member left; self-removal is allowed, other removals require owner/admin. The conversation owner cannot be removed; returns 409 until ownership is transferred. Returns 204.
   * Calls `DELETE /api/v1/conversations/{id}/members/{user_id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param userId Backend path identifier `user_id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:manage.
   */
  routesRemoveMemberDelete(id: Identifier, userId: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRemoveMemberDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/conversations/${encodeURIComponent(id)}/members/${encodeURIComponent(userId)}` });
  }
  /**
   * Read descending undeleted message history with ready attachments. before/after are exclusive sequences; limit defaults to 50 and clamps 1..200. q is accepted but not applied. meta contains limit and has_more.
   * Calls `GET /api/v1/conversations/{id}/messages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:read.
   */
  routesMessagesGet(id: Identifier, params?: T.RoutesMessagesGetQuery, options?: RequestOptions) {
    return this.client.request<T.RoutesMessagesGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations/${encodeURIComponent(id)}/messages`, params });
  }
  /**
   * Send a message (201); conversation and assigned contact policy are rechecked. Reuse client_id for an identical retry; changed request content conflicts. Attachments must belong to the current conversation/uploader and be ready.
   * Calls `POST /api/v1/conversations/{id}/messages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:write.
   */
  routesSendPost(id: Identifier, data: T.RoutesSendPostInput, options?: RequestOptions<T.RoutesSendPostInput>) {
    return this.client.request<T.RoutesSendPostResponse, T.RoutesSendPostInput>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/messages`, data: data });
  }
  /**
   * Advance the current active member read sequence; unread:true instead marks an existing received message and subsequent messages unread. Sequence cannot be negative or exceed the conversation head; message_id, when provided, must have that exact sequence. Returns 204.
   * Calls `POST /api/v1/conversations/{id}/read` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:write.
   */
  routesReadPost(id: Identifier, data: T.RoutesReadPostInput, options?: RequestOptions<T.RoutesReadPostInput>) {
    return this.client.request<T.RoutesReadPostResponse, T.RoutesReadPostInput>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/read`, data: data });
  }
  /**
   * Authorize an accessible conversation private channel with a URL-encoded socket_id/channel_name form; mismatched channel returns 403 and success is raw {auth:string}.
   * Calls `POST /api/v1/conversations/{id}/realtime-auth` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed URL-encoded form.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:read.
   */
  routesRealtimeAuthPost(id: Identifier, data: T.RoutesRealtimeAuthPostInput, options?: RequestOptions<URLSearchParams>) {
    return this.client.request<T.RoutesRealtimeAuthPostResponse, URLSearchParams>({ ...options, method: "POST", url: `/api/v1/conversations/${encodeURIComponent(id)}/realtime-auth`, data: urlEncoded(data), headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
  }
  /**
   * Read the accessible conversation realtime ws_url/app_key/channel; unavailable configuration returns 502.
   * Calls `GET /api/v1/conversations/{id}/realtime-config` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:read.
   */
  routesRealtimeConfigGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesRealtimeConfigGetResponse>({ ...options, method: "GET", url: `/api/v1/conversations/${encodeURIComponent(id)}/realtime-config` });
  }
  /**
   * Server-only fitness plan generation using the deployment Bearer secret and deny-unknown-fields input. Returns parsed model JSON, which is not locally plan-schema validated; 180-second model timeout.
   * Calls `POST /api/v1/fitness/generate` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Server-only FITNESS_PROFILE_SERVICE_TOKEN as Bearer; never expose in browsers.
   */
  fitnessGeneratePost(data: T.FitnessGeneratePostInput, options?: RequestOptions<T.FitnessGeneratePostInput>) {
    return this.client.request<T.FitnessGeneratePostResponse, T.FitnessGeneratePostInput>({ ...options, method: "POST", url: `/api/v1/fitness/generate`, data: data });
  }
  /**
   * Extract only allowed intake keys for a current enabled fitness member. text is at most 12000 bytes; locale is en/fa. Model-produced values are not type-coerced by this backend.
   * Calls `POST /api/v1/fitness/intake-extract` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated current enabled fitness member, validated by Profile.
   */
  routesExtractIntakePost(data: T.RoutesExtractIntakePostInput, options?: RequestOptions<T.RoutesExtractIntakePostInput>) {
    return this.client.request<T.RoutesExtractIntakePostResponse, T.RoutesExtractIntakePostInput>({ ...options, method: "POST", url: `/api/v1/fitness/intake-extract`, data: data });
  }
  /**
   * Read fitness-authorized LLM and speech catalogs using current upstream fitness settings access.
   * Calls `GET /api/v1/fitness/models` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated current Profile fitness settings access.
   */
  routesModelsGetApiV1FitnessModels(options?: RequestOptions) {
    return this.client.request<T.RoutesModelsGetApiV1FitnessModelsResponse>({ ...options, method: "GET", url: `/api/v1/fitness/models` });
  }
  /**
   * Validate requested fitness model references using the server-only deployment Bearer credential; returns the three validated references without persisting a settings row.
   * Calls `PUT /api/v1/fitness/settings` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Server-only FITNESS_PROFILE_SERVICE_TOKEN as Bearer; never expose in browsers.
   */
  fitnessSaveSettingsPut(data: T.FitnessSaveSettingsPutInput, options?: RequestOptions<T.FitnessSaveSettingsPutInput>) {
    return this.client.request<T.FitnessSaveSettingsPutResponse, T.FitnessSaveSettingsPutInput>({ ...options, method: "PUT", url: `/api/v1/fitness/settings`, data: data });
  }
  /**
   * Read image capture enabled state; assistant:read OR assistant:manage is accepted.
   * Calls `GET /api/v1/image-status` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: assistant:read OR assistant:manage.
   */
  routesStatusGetApiV1ImageStatus(options?: RequestOptions) {
    return this.client.request<T.RoutesStatusGetApiV1ImageStatusResponse>({ ...options, method: "GET", url: `/api/v1/image-status` });
  }
  /**
   * Server-only LMS notification lookup using x-infera-lms-token; returns identifiers and active recipient read state without message content. Lookup is global by message UUID.
   * Calls `GET /api/v1/integrations/lms/messages/{id}/notification-context` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Server-only x-infera-lms-token matching CHAT_LMS_SERVICE_TOKEN; never expose in browsers.
   */
  humanChatNotificationContextGet(id: string, options?: RequestOptions) {
    return this.client.request<T.HumanChatNotificationContextGetResponse>({ ...options, method: "GET", url: `/api/v1/integrations/lms/messages/${encodeURIComponent(id)}/notification-context` });
  }
  /**
   * Server-only Task media import with x-task-import-token and stable UUID; changed source conflicts. OCR returns normalized text/tables/warnings; audio adds duration_ms and is limited to 60 seconds.
   * Calls `POST /api/v1/internal/memory/media` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Server-only x-task-import-token matching CHAT_TASK_IMPORT_TOKEN; never expose in browsers.
   */
  memoryImportExtractPost(data: T.MemoryImportExtractPostInput, options?: RequestOptions<T.MemoryImportExtractPostInput>) {
    return this.client.request<T.MemoryImportExtractPostResponse, T.MemoryImportExtractPostInput>({ ...options, method: "POST", url: `/api/v1/internal/memory/media`, data: data });
  }
  /**
   * Server-only Task source import with x-task-import-token, non-nil user/organization UUIDs and URL up to 4096 bytes. Forwards upstream data unchanged with a bounded 12.5 MB response.
   * Calls `POST /api/v1/internal/memory/source` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Server-only x-task-import-token matching CHAT_TASK_IMPORT_TOKEN; never expose in browsers.
   */
  memoryImportSourcePost(data: T.MemoryImportSourcePostInput, options?: RequestOptions<T.MemoryImportSourcePostInput>) {
    return this.client.request<T.MemoryImportSourcePostResponse, T.MemoryImportSourcePostInput>({ ...options, method: "POST", url: `/api/v1/internal/memory/source`, data: data });
  }
  /**
   * Read at most 40 current learner messages in chronological order after current LMS teacher-context authorization; returns id, role and extracted text only.
   * Calls `GET /api/v1/learning/runs/{id}/messages` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:read.
   */
  routesHistoryGet(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesHistoryGetResponse>({ ...options, method: "GET", url: `/api/v1/learning/runs/${encodeURIComponent(id)}/messages` });
  }
  /**
   * Ask the LMS-run teacher using a UUID idempotency_key. Current chat:ai and run ownership/access are checked; identical retries reuse the presentation and daily quota conflicts return 409.
   * Calls `POST /api/v1/learning/runs/{id}/questions` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:ai.
   */
  routesAskPost(id: Identifier, data: T.RoutesAskPostInput, options?: RequestOptions<T.RoutesAskPostInput>) {
    return this.client.request<T.RoutesAskPostResponse, T.RoutesAskPostInput>({ ...options, method: "POST", url: `/api/v1/learning/runs/${encodeURIComponent(id)}/questions`, data: data });
  }
  /**
   * Page current organization active-member summaries by ascending UUID, with incoming undeleted sent user-message unread counts. limit defaults 50 and clamps 1..100; next_cursor is null when exhausted.
   * Calls `GET /api/v1/me/conversations` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:read.
   */
  humanChatSummariesGet(params?: T.HumanChatSummariesGetQuery, options?: RequestOptions) {
    return this.client.request<T.HumanChatSummariesGetResponse>({ ...options, method: "GET", url: `/api/v1/me/conversations`, params });
  }
  /**
   * Read durable current-user invalidations. Missing cursor initializes at head; invalid cursor returns 400 and requires resynchronization. At most 100 events; wait_seconds defaults and caps at 25.
   * Calls `GET /api/v1/me/events` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:read.
   */
  humanChatEventsGet(params?: T.HumanChatEventsGetQuery, options?: RequestOptions) {
    return this.client.request<T.HumanChatEventsGetResponse>({ timeout: 35000, ...options, method: "GET", url: `/api/v1/me/events`, params });
  }
  /**
   * Authorize only the current organization/user private channel using JSON socket_id and channel_name; another channel returns 403.
   * Calls `POST /api/v1/me/realtime/auth` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:read.
   */
  humanChatRealtimeAuthPost(data: T.HumanChatRealtimeAuthPostInput, options?: RequestOptions<T.HumanChatRealtimeAuthPostInput>) {
    return this.client.request<T.HumanChatRealtimeAuthPostResponse, T.HumanChatRealtimeAuthPostInput>({ ...options, method: "POST", url: `/api/v1/me/realtime/auth`, data: data });
  }
  /**
   * Read configured private organization/user channel connection details; unavailable realtime returns 502.
   * Calls `GET /api/v1/me/realtime/config` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:read.
   */
  humanChatRealtimeConfigGet(options?: RequestOptions) {
    return this.client.request<T.HumanChatRealtimeConfigGetResponse>({ ...options, method: "GET", url: `/api/v1/me/realtime/config` });
  }
  /**
   * Count all incoming unread sent user messages for current organization active memberships; own/deleted messages are excluded.
   * Calls `GET /api/v1/me/unread-count` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:read.
   */
  humanChatUnreadGet(options?: RequestOptions) {
    return this.client.request<T.HumanChatUnreadGetResponse>({ ...options, method: "GET", url: `/api/v1/me/unread-count` });
  }
  /**
   * Soft-delete an accessible message subject to sender/manager checks; returns 204.
   * Calls `DELETE /api/v1/messages/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:delete.
   */
  routesDeleteMessageDelete(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RoutesDeleteMessageDeleteResponse>({ ...options, method: "DELETE", url: `/api/v1/messages/${encodeURIComponent(id)}` });
  }
  /**
   * Replace content of an accessible message; only the original sender may edit it.
   * Calls `PUT /api/v1/messages/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:write.
   */
  routesEditPut(id: Identifier, data: T.RoutesEditPutInput, options?: RequestOptions<T.RoutesEditPutInput>) {
    return this.client.request<T.RoutesEditPutResponse, T.RoutesEditPutInput>({ ...options, method: "PUT", url: `/api/v1/messages/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Insert a reaction and return its own reaction record (201), rather than the message. Emoji is at most 16 characters; duplicate reaction returns 409.
   * Calls `POST /api/v1/messages/{id}/reactions` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:write.
   */
  routesReactPost(id: Identifier, data: T.RoutesReactPostInput, options?: RequestOptions<T.RoutesReactPostInput>) {
    return this.client.request<T.RoutesReactPostResponse, T.RoutesReactPostInput>({ ...options, method: "POST", url: `/api/v1/messages/${encodeURIComponent(id)}/reactions`, data: data });
  }
  /**
   * Forward ordered live speech actions through current configured language model with chat:ai. JSON body limit is 72 KiB and audio_base64 is at most 65536 characters. Provider result passes through unchanged.
   * Calls `POST /api/v1/speech/live` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:ai.
   */
  routesLivePost(data: T.RoutesLivePostInput, options?: RequestOptions<T.RoutesLivePostInput>) {
    return this.client.request<T.RoutesLivePostResponse, T.RoutesLivePostInput>({ ...options, method: "POST", url: `/api/v1/speech/live`, data: data });
  }
  /**
   * Read speech availability, engine, model_ref and max_bytes using current configured models; requires chat:ai.
   * Calls `GET /api/v1/speech/status` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:ai.
   */
  routesStatusGetApiV1SpeechStatus(options?: RequestOptions) {
    return this.client.request<T.RoutesStatusGetApiV1SpeechStatusResponse>({ ...options, method: "GET", url: `/api/v1/speech/status` });
  }
  /**
   * Transcribe raw audio/webm, audio/ogg, audio/mp4, audio/wav or audio/mpeg, up to 8 MiB. Required language is en/fa/auto. Supply the audio Content-Type header; private temporary storage is cleaned up.
   * Calls `POST /api/v1/speech/transcribe` through the shared IDP-aware Faiber client.
   * @param data Typed binary byte stream.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:ai.
   */
  routesTranscribePost(data: T.RoutesTranscribePostInput, params: T.RoutesTranscribePostQuery, options?: RequestOptions<T.RoutesTranscribePostInput>) {
    return this.client.request<T.RoutesTranscribePostResponse, T.RoutesTranscribePostInput>({ ...options, method: "POST", url: `/api/v1/speech/transcribe`, data: data, params, headers: { "Content-Type": (typeof Blob !== "undefined" && data instanceof Blob && data.type ? data.type : "application/octet-stream"), ...options?.headers } });
  }
  /**
   * Synthesize 1..5000 trimmed characters with chat:ai. Wire format is lowercase mp3/wav; omitted/null format selects WAV on the backend. Returns raw audio bytes, no envelope; mismatched provider content type returns 502.
   * Calls `POST /api/v1/speech/tts` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:ai.
   */
  routesSynthesizePost(data: T.RoutesSynthesizePostInput, options?: RequestOptions<T.RoutesSynthesizePostInput>) {
    return this.client.request<T.RoutesSynthesizePostResponse, T.RoutesSynthesizePostInput>({ ...options, method: "POST", url: `/api/v1/speech/tts`, data: data, responseType: "arraybuffer" });
  }
  /**
   * Meter assistant voice under current Task project access and allowance; stable id/chunk sequence supports retries. Transcribe accepts canonical mono 16 kHz PCM WAV up to 60 seconds; TTS text is at most 600 characters. Feature disabled returns 404.
   * Calls `POST /api/v1/speech/voice` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; chat:ai.
   */
  routesHandlePost(data: T.RoutesHandlePostInput, options?: RequestOptions<T.RoutesHandlePostInput>) {
    return this.client.request<T.RoutesHandlePostResponse, T.RoutesHandlePostInput>({ ...options, method: "POST", url: `/api/v1/speech/voice`, data: data });
  }
  /**
   * Read or mutate current native observer policy with current IDP authority; Bearer-only authorization, exact revision and reason rules apply. See source summary observation policy.
   * Calls `GET /api/v1/summary-access` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current IDP Bearer chat:summary_access:manage; enabling also verifies collector chat:summary:read.
   */
  nativeSummaryAccessStatus(options?: RequestOptions) {
    return this.client.request<T.NativeAccessGetStatusGetResponse>({ ...options, method: "GET", url: `/api/v1/summary-access` });
  }
  /**
   * Read or mutate current native observer policy with current IDP authority; Bearer-only authorization, exact revision and reason rules apply. See source summary observation policy.
   * Calls `PUT /api/v1/summary-access` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current IDP Bearer chat:summary_access:manage; enabling also verifies collector chat:summary:read.
   */
  saveNativeSummaryAccessPolicy(data: T.NativeAccessUpdatePolicyPutInput, options?: RequestOptions<T.NativeAccessUpdatePolicyPutInput>) {
    return this.client.request<T.NativeAccessUpdatePolicyPutResponse, T.NativeAccessUpdatePolicyPutInput>({ ...options, method: "PUT", url: `/api/v1/summary-access`, data: data });
  }
  /**
   * Read or mutate current native observer policy with current IDP authority; Bearer-only authorization, exact revision and reason rules apply. See source summary observation policy.
   * Calls `POST /api/v1/summary-access/revocations` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current IDP Bearer chat:summary_access:manage; enabling also verifies collector chat:summary:read.
   */
  revokeNativeSummaryObject(data: T.NativeAccessRevokePostInput, options?: RequestOptions<T.NativeAccessRevokePostInput>) {
    return this.client.request<T.NativeAccessRevokePostResponse, T.NativeAccessRevokePostInput>({ ...options, method: "POST", url: `/api/v1/summary-access/revocations`, data: data });
  }
  /**
   * Read or mutate current native observer policy with current IDP authority; Bearer-only authorization, exact revision and reason rules apply. See source summary observation policy.
   * Calls `DELETE /api/v1/summary-access/revocations/{object}` through the shared IDP-aware Faiber client.
   * @param object Backend path identifier `object`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current IDP Bearer chat:summary_access:manage; enabling also verifies collector chat:summary:read.
   */
  restoreNativeSummaryObject(object: Identifier, data: T.NativeAccessRestoreDeleteInput, options?: RequestOptions<T.NativeAccessRestoreDeleteInput>) {
    return this.client.request<T.NativeAccessRestoreDeleteResponse, T.NativeAccessRestoreDeleteInput>({ ...options, method: "DELETE", url: `/api/v1/summary-access/revocations/${encodeURIComponent(object)}`, data: data });
  }
  /**
   * List active assistant workspace role bindings for this organization; enabled bindings are returned, plus staged bindings for configured pilot users.
   * Calls `GET /api/v1/workspace-assistants` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated IDP session; assistant:read.
   */
  workspaceRoles(options?: RequestOptions) {
    return this.client.request<T.RoutesRolesGetResponse>({ ...options, method: "GET", url: `/api/v1/workspace-assistants` });
  }
  /**
   * Read public process liveness/version/Agentic execution identity; this does not probe database readiness.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: public process liveness.
   */
  mainHealthGet(options?: RequestOptions) {
    return this.client.request<T.MainHealthGetResponse>({ ...options, method: "GET", url: `/health` });
  }
}
