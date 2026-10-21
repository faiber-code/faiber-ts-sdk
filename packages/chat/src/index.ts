import { PersonalChatApi } from "./personal.js";
import { LearningTeacherApi } from "./learning.js";
import { ChatWorkspaceOperations } from "./workspace.js";
import { ServiceApi, type Identifier, type RequestOptions, type AxiosResponse } from "@faiber/sdk-core";
import type * as T from "./types.js";
import type * as O from "./operations.types.js";
import { ChatOperations } from "./operations.js";
const id = (value: Identifier) => encodeURIComponent(value);
export class ChatApi extends ServiceApi {
  readonly personal = new PersonalChatApi(this.client);
  /** Metered assistant voice; requires chat:ai and current Task project access.
   * Stable UUIDs and chunk sequences preserve retries. Reserve 65 input seconds or
   * 120 output seconds (max 600 characters), settling actual provider duration.
   * Batch fallback accepts canonical mono 16kHz PCM WAV, at most 60 seconds.
   * 409 reports exhausted allowance or conflicting retries; quick dictation stays separate.
   */
  assistantVoice(input:import('./assistant-voice.js').AssistantVoiceInput,options?:RequestOptions<import('./assistant-voice.js').AssistantVoiceInput>){return this.client.post<import('./assistant-voice.js').AssistantVoiceResponse,import('./assistant-voice.js').AssistantVoiceInput>('/api/v1/speech/voice',input,options);}
  /** Start, push, finalize or cancel an ordered speech session; chat:ai required.
   * 400 rejects unsupported codecs/languages, 502 means capacity/provider unavailable.
   * No task/note/message is saved. Uses normal authenticated Axios transport. */
  liveSpeech(input: import('./speech-live.js').LiveSpeechInput, options?: RequestOptions<import('./speech-live.js').LiveSpeechInput>) {
    return this.client.post<import('./speech-live.js').LiveSpeechResponse, import('./speech-live.js').LiveSpeechInput>('/api/v1/speech/live',input,options);
  }


  readonly learning = new LearningTeacherApi(this.client);
  readonly workspaceAssistant = new ChatWorkspaceOperations(this.client);
  readonly operations = new ChatOperations(this.client);
  /** Check configured local transcription availability; requires chat:ai. */
  speechStatus(options?: RequestOptions) { return this.client.get<T.SpeechStatusResponse>("/api/v1/speech/status", undefined, options); }
  /** Read organization speech routing; requires assistant:manage. */
  speechSettings(options?:RequestOptions){return this.client.get<T.SpeechSettingsResponse>('/api/v1/admin/speech-settings',undefined,options);}
  /** Save versioned defaults and optional English/Persian model overrides. */
  saveSpeechSettings(input:import("./reviewed-wire.js").SpeechSettingsInput,options?:RequestOptions<import("./reviewed-wire.js").SpeechSettingsInput>){return this.client.put<T.SpeechSettingsResponse,import("./reviewed-wire.js").SpeechSettingsInput>('/api/v1/admin/speech-settings',input,options);}
  /** Transcribe raw webm/ogg/mp4/wav audio (8 MiB maximum). Requires chat:ai; private storage is cleaned up after processing.
   * Does not send a chat message. Supports abort signals and a 200-second default timeout. */
  transcribe(recording: Blob, language: T.SpeechLanguage = 'auto', options?: RequestOptions<Blob>) {
    return this.client.request<T.SpeechTranscriptResponse,Blob>({...options, method:'POST',url:'/api/v1/speech/transcribe',params:{language},data:recording,timeout:options?.timeout ?? 200000,headers:{...options?.headers,'Content-Type':recording.type}});
  }

  /** Synthesize speech through the configured metered provider; requires chat:ai.
   * Returns compact MP3 by default, or explicit WAV. Preserves Axios metadata and cancellation.
   * Browser default is Blob; Node callers select arraybuffer for lossless bytes.
   * Disabled voices return 400; unavailable/mismatched provider output returns 502. */
  synthesize(input:T.SpeechSynthesisInput, options:RequestOptions<T.SpeechSynthesisInput>&{responseType:'arraybuffer'}):Promise<AxiosResponse<ArrayBuffer|Uint8Array,T.SpeechSynthesisInput>>;
  synthesize(input:T.SpeechSynthesisInput, options?:RequestOptions<T.SpeechSynthesisInput>):Promise<AxiosResponse<Blob,T.SpeechSynthesisInput>>;
  synthesize(input:T.SpeechSynthesisInput, options?:RequestOptions<T.SpeechSynthesisInput>) {
    return this.client.request<Blob|ArrayBuffer|Uint8Array,T.SpeechSynthesisInput>({responseType:'blob',...options,method:'POST',url:'/api/v1/speech/tts',data:{...input,format:input.format ?? 'mp3'}});
  }
  /** List current active memberships in nondeleted, nonquarantined organization conversations ordered by last message; direct rooms must retain exactly their private pair.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:read.
   */
  conversations(options?: RequestOptions) { return this.client.get<T.ConversationListResponse>("/api/v1/conversations", undefined, options); }
  /** Create a conversation (201); direct rooms require exactly two distinct members and deduplicate by pair. Reserved learning slugs/settings are rejected. Configured LMS contact policy and guest assistant restrictions are enforced.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:write.
   */
  createConversation(data: T.CreateConversationInput, options?: RequestOptions<T.CreateConversationInput>) { return this.client.post<T.ConversationResponse, T.CreateConversationInput>("/api/v1/conversations", data, options); }
  /** Read one accessible conversation; membership, organization, deleted/quarantined state and private direct-room rules are rechecked.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:read.
   */
  conversation(conversationId: Identifier, options?: RequestOptions) { return this.client.get<T.ConversationResponse>(`/api/v1/conversations/${id(conversationId)}`, undefined, options); }
  /** Update conversation fields with optional expected_version; null preserves optional values. Stale versions conflict. Conversation access and write role are checked.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:write.
   */
  updateConversation(conversationId: Identifier, data: T.UpdateConversationInput, options?: RequestOptions<T.UpdateConversationInput>) { return this.client.put<T.ConversationResponse, T.UpdateConversationInput>(`/api/v1/conversations/${id(conversationId)}`, data, options); }
  /** Archive the accessible conversation; requires the owner and returns 204 with no body.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:delete.
   */
  archiveConversation(conversationId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/conversations/${id(conversationId)}`, options); }
  /** List active members of an accessible conversation ordered by joined_at; includes state, notification settings and read sequence.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:read.
   */
  members(conversationId: Identifier, options?: RequestOptions) { return this.client.get<T.MemberListResponse>(`/api/v1/conversations/${id(conversationId)}/members`, undefined, options); }
  /** Add a member (201); owner/admin role and contact/direct-room restrictions apply.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:manage.
   */
  addMember(conversationId: Identifier, data: T.MemberInput, options?: RequestOptions<T.MemberInput>) { return this.client.post<T.MemberResponse, T.MemberInput>(`/api/v1/conversations/${id(conversationId)}/members`, data, options); }
  /** Mark an active member left; self-removal is allowed, other removals require owner/admin. The conversation owner cannot be removed; returns 409 until ownership is transferred. Returns 204.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:manage.
   */
  removeMember(conversationId: Identifier, userId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/conversations/${id(conversationId)}/members/${id(userId)}`, options); }
  /** Read descending undeleted message history with ready attachments. before/after are exclusive sequences; limit defaults to 50 and clamps 1..200. q is accepted but not applied. meta contains limit and has_more.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:read.
   */
  messages(conversationId: Identifier, params?: T.ChatListQuery, options?: RequestOptions) { return this.client.get<T.MessageListResponse>(`/api/v1/conversations/${id(conversationId)}/messages`, params, options); }
  /** Send a message (201); conversation and assigned contact policy are rechecked. Reuse client_id for an identical retry; changed request content conflicts. Attachments must belong to the current conversation/uploader and be ready.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:write.
   */
  sendMessage(conversationId: Identifier, data: T.SendMessageInput, options?: RequestOptions<T.SendMessageInput>) { return this.client.post<T.MessageResponse, T.SendMessageInput>(`/api/v1/conversations/${id(conversationId)}/messages`, data, options); }
  /** Run governed AI for an accessible conversation and return user_message, assistant_message, ai_turn and Agentic billing authority. Assistant, context, fitness, workspace, plan and current upstream authority checks apply.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:ai.
   */
  sendAiMessage(conversationId: Identifier, data: T.AiMessageInput, options?: RequestOptions<T.AiMessageInput>) { return this.client.post<T.AiMessageResponse, T.AiMessageInput>(`/api/v1/conversations/${id(conversationId)}/ai/messages`, data, options); }
  /** Advance the current active member read sequence monotonically. Sequence cannot be negative or exceed the conversation head; message_id, when provided, must have that exact sequence. Returns 204.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:write.
   */
  markRead(conversationId: Identifier, data: T.ReadInput, options?: RequestOptions<T.ReadInput>) { return this.client.post<void, T.ReadInput>(`/api/v1/conversations/${id(conversationId)}/read`, data, options); }
  /** Subscribe to conversation SSE after access checks; stream includes named events and 15-second keep-alives. Retain authenticated transport and abort on exit.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:read.
   */
  events(conversationId: Identifier, options?: RequestOptions) { return this.client.get<T.ChatEventStream>(`/api/v1/conversations/${id(conversationId)}/events`, undefined, { ...options, responseType: "stream" }); }
  /** Replace content of an accessible message; only the original sender may edit it.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:write.
   */
  editMessage(messageId: Identifier, data: T.EditMessageInput, options?: RequestOptions<T.EditMessageInput>) { return this.client.put<T.MessageResponse, T.EditMessageInput>(`/api/v1/messages/${id(messageId)}`, data, options); }
  /** Soft-delete an accessible message subject to sender/manager checks; returns 204.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:delete.
   */
  deleteMessage(messageId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/messages/${id(messageId)}`, options); }
  /** Insert a reaction and return its own reaction record (201), rather than the message. Emoji is at most 16 characters; duplicate reaction returns 409.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:write.
   */
  react(messageId: Identifier, data: T.ReactionInput, options?: RequestOptions<T.ReactionInput>) { return this.client.post<T.ReactionResponse, T.ReactionInput>(`/api/v1/messages/${id(messageId)}/reactions`, data, options); }
  /** List active nondeleted assistant catalog items (id, name, status) ordered by update time; this repository list has no organization predicate.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; assistant:read.
   */
  assistants(options?: RequestOptions) { return this.operations.routesListAssistantsGet(options); }
  /** Read one active nondeleted assistant catalog item (id, name, status); this lookup has no organization predicate.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; assistant:read.
   */
  assistant(assistantId: Identifier, options?: RequestOptions) { return this.operations.routesGetAssistantGet(assistantId, options); }
  /** List nondeleted managed assistant records ordered by updated_at; the repository has no organization filter on this list, so caller/gateway authority remains essential.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; assistant:manage.
   */
  managedAssistants(options?: RequestOptions) { return this.operations.routesListManagedAssistantsGet(options); }
  /** Read managed assistant detail for this organization including expected_knowledge_policy_revision; capture both revisions when opening an edit draft.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; assistant:manage.
   */
  managedAssistant(assistantId: Identifier, options?: RequestOptions) { return this.operations.routesGetManagedAssistantGet(assistantId, options); }
  /** Create a managed assistant (201) using a non-nil caller configuration UUID. Keep the UUID and exact request for retries; governed configuration reconciles Knowledge policy before application.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; assistant:manage.
   */
  createAssistant(data: O.RoutesCreateAssistantPostInput, options?: RequestOptions<O.RoutesCreateAssistantPostInput>) {
    if(!validConfigurationId(data.configuration_id))throw new TypeError("A non-nil configuration UUID is required");
    return this.operations.routesCreateAssistantPost(data,options);
  }
  /** Send the UUID and both revisions captured with the draft; no automatic GET/rebase. */
  /** Apply a managed assistant edit with configuration_id and both captured Chat/Knowledge revisions. Omitted knowledge_level preserves it; explicit null clears it. Stale or pending competing edits return 409.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; assistant:manage.
   */
  updateAssistant(assistantId: Identifier, data: O.RoutesUpdateAssistantPutInput, options?: RequestOptions<O.RoutesUpdateAssistantPutInput>) {
    if(!validConfigurationId(data.configuration_id)||!Number.isSafeInteger(data.expected_version)||data.expected_version<1||!Number.isSafeInteger(data.expected_knowledge_policy_revision)||data.expected_knowledge_policy_revision<0)throw new TypeError("Configuration UUID and both captured revisions are required");
    return this.operations.routesUpdateAssistantPut(assistantId,data,options);
  }
  /** Read the tenant-scoped retained configuration intent. Current assistant:manage is required; credentials/grants are never retained.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; assistant:manage.
   */
  assistantPolicyOperation(operationId:Identifier,options?:RequestOptions){return this.client.get<T.AssistantConfigurationIntentResponse>('/api/v1/admin/assistant-policy-operations/'+id(operationId),undefined,options);}
  /** Recover or cancel an exact durable assistant configuration intent using current assistant:manage and fitness settings guard. Applied operations return their retained result; conflicts require explicit review.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; assistant:manage.
   */
  reconcileAssistantPolicy(operationId:Identifier,input:T.AssistantPolicyReconciliationInput,options?:RequestOptions<T.AssistantPolicyReconciliationInput>){return this.client.post<T.AssistantPolicyReconciliationResponse,T.AssistantPolicyReconciliationInput>('/api/v1/admin/assistant-policy-operations/'+id(operationId),input,options);}
  /** Soft-delete a managed assistant after fitness and pending configuration guards; returns 204.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; assistant:manage.
   */
  deleteAssistant(assistantId: Identifier, options?: RequestOptions) { return this.operations.routesDeleteAssistantDelete(assistantId, options); }
  /** Return Agentic model catalog unchanged for billing_payer user or project_owner (default project_owner); upstream errors return 502.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; assistant:manage.
   */
  assistantModels(params?: O.RoutesAssistantModelsGetQuery, options?: RequestOptions) { return this.operations.routesAssistantModelsGet(params, options); }
  /** Return Knowledge platform catalog data unchanged; upstream missing data is null. Requires assistant:manage.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; assistant:manage.
   */
  assistantContextCatalog(options?: RequestOptions) { return this.operations.routesAssistantContextCatalogGet(options); }
  /** Discover up to the upstream first 100 products, LMS courses or weblog posts and normalize content links. q is trimmed and case-insensitively filters title/description; products also forward search.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; assistant:manage.
   */
  customerActionContent(params: O.RoutesCustomerActionContentGetQuery, options?: RequestOptions) { return this.operations.routesCustomerActionContentGet(params, options); }
  /** Reserve an attachment (201) for an accessible conversation, returning attachment, expiring upload_url and expires_in_seconds. Size is 0..100 MiB; download through the authenticated content route.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:write.
   */
  createAttachment(conversationId: Identifier, data: O.RoutesCreateAttachmentPostInput, options?: RequestOptions<O.RoutesCreateAttachmentPostInput>) { return this.operations.routesCreateAttachmentPost(conversationId, data, options); }
  /** Finalize an existing presigned upload or upload raw application/octet-stream bytes (100 MiB maximum). Reserved byte size/checksum and conversation/uploader authority are checked; returns the stored attachment.
   * @returns Complete Axios response with backend status and headers.
   * @throws AxiosError on validation, current authority, access, conflict or transport failure; Authenticated IDP session; chat:write.
   */
  completeAttachment(attachmentId: Identifier, options?: RequestOptions) { return this.operations.routesCompleteAttachmentPost(attachmentId, options); }
  /** Upload reservation bytes and mark the attachment ready (chat:write).
   * Maximum 100 MiB; size/checksum must match the reservation. Supports onUploadProgress and cancellation.
   * Returns the attachment envelope; validation/access/storage errors reject with AxiosError. */
  uploadAttachmentContent(attachmentId: Identifier, data: O.AttachmentUploadBody, options?: RequestOptions<O.AttachmentUploadBody>) {
    return this.operations.routesCompleteAttachmentPost(attachmentId, options, data);
  }
  /** Download a ready attachment as a Blob in browsers and Node 18+ (chat:read).
   * Preserves Axios metadata and cancellation. 403/404 deny access; 502 indicates storage failure.
   * Use URL.createObjectURL for preview/download and revoke it only after the consumer finishes. */
  async downloadAttachment(attachmentId: Identifier, options?: RequestOptions) {
    const response = await this.operations.routesDownloadAttachmentGet(attachmentId, options);
    const bytes = response.data instanceof ArrayBuffer ? response.data : Uint8Array.from(response.data).buffer;
    const contentType = response.headers["content-type"];
    return { ...response, data: new Blob([bytes], { type: typeof contentType === "string" ? contentType : "application/octet-stream" }) };
  }
  realtimeAuth(conversationId: Identifier, data: O.RoutesRealtimeAuthPostInput, options?: RequestOptions<URLSearchParams>) { return this.operations.routesRealtimeAuthPost(conversationId, data, options); }
  /** Return browser-safe Sockudo configuration after checking conversation membership (chat:read).
   * Preserves Axios response metadata; 401/403 deny access and 502 means realtime is unconfigured. */
  realtimeConfig(conversationId: Identifier, options?: RequestOptions) { return this.client.get<T.ChatRealtimeConfigResponse>(`/api/v1/conversations/${id(conversationId)}/realtime-config`, undefined, options); }
  aiRuntimeInputs(conversationId: Identifier, options?: RequestOptions) { return this.operations.routesAiRuntimeInputsGet(conversationId, options); }
  completeAiRuntimeInput(conversationId: Identifier, inputId: Identifier, data: O.RoutesAiCompleteRuntimeInputPostInput, options?: RequestOptions<O.RoutesAiCompleteRuntimeInputPostInput>) { return this.operations.routesAiCompleteRuntimeInputPost(conversationId, inputId, data, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";

export * from "./workspace.js";

export * from "./learning.js";

export * from "./speech-recorder.js";

export * from "./speech-playback.js";
export * from "./speech-live.js";
export * from "./assistant-voice.js";

export * from "./personal.js";

function validConfigurationId(value:unknown):value is string{return typeof value==="string"&&/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(value)&&value.replaceAll("-","")!=="0".repeat(32);}

export * from "./reviewed-wire.js";
