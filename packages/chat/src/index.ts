import { LearningTeacherApi } from "./learning.js";
import { ChatWorkspaceOperations } from "./workspace.js";
import { ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
import type * as O from "./operations.types.js";
import { ChatOperations } from "./operations.js";
const id = (value: Identifier) => encodeURIComponent(value);
export class ChatApi extends ServiceApi {
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
  /** Transcribe raw webm/ogg/mp4/wav audio (8 MiB maximum). Requires chat:ai; private storage is cleaned up after processing.
   * Does not send a chat message. Supports abort signals and a 200-second default timeout. */
  transcribe(recording: Blob, language: T.SpeechLanguage = 'auto', options?: RequestOptions<Blob>) {
    return this.client.request<T.SpeechTranscriptResponse,Blob>({...options, method:'POST',url:'/api/v1/speech/transcribe',params:{language},data:recording,timeout:options?.timeout ?? 200000,headers:{...options?.headers,'Content-Type':recording.type}});
  }

  /** Synthesize speech through the configured metered provider; requires chat:ai.
   * Returns compact MP3 by default, or explicit WAV. Preserves Axios metadata and cancellation.
   * Disabled voices return 400; unavailable/mismatched provider output returns 502. */
  synthesize(input:T.SpeechSynthesisInput, options?:RequestOptions<T.SpeechSynthesisInput>) {
    return this.client.request<Blob,T.SpeechSynthesisInput>({...options,method:'POST',url:'/api/v1/speech/tts',data:{...input,format:input.format ?? 'mp3'},responseType:'blob'});
  }
  conversations(options?: RequestOptions) { return this.client.get<T.ConversationListResponse>("/api/v1/conversations", undefined, options); }
  createConversation(data: T.CreateConversationInput, options?: RequestOptions<T.CreateConversationInput>) { return this.client.post<T.ConversationResponse, T.CreateConversationInput>("/api/v1/conversations", data, options); }
  conversation(conversationId: Identifier, options?: RequestOptions) { return this.client.get<T.ConversationResponse>(`/api/v1/conversations/${id(conversationId)}`, undefined, options); }
  updateConversation(conversationId: Identifier, data: T.UpdateConversationInput, options?: RequestOptions<T.UpdateConversationInput>) { return this.client.put<T.ConversationResponse, T.UpdateConversationInput>(`/api/v1/conversations/${id(conversationId)}`, data, options); }
  archiveConversation(conversationId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/conversations/${id(conversationId)}`, options); }
  members(conversationId: Identifier, options?: RequestOptions) { return this.client.get<T.MemberListResponse>(`/api/v1/conversations/${id(conversationId)}/members`, undefined, options); }
  addMember(conversationId: Identifier, data: T.MemberInput, options?: RequestOptions<T.MemberInput>) { return this.client.post<T.MemberResponse, T.MemberInput>(`/api/v1/conversations/${id(conversationId)}/members`, data, options); }
  removeMember(conversationId: Identifier, userId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/conversations/${id(conversationId)}/members/${id(userId)}`, options); }
  messages(conversationId: Identifier, params?: T.ChatListQuery, options?: RequestOptions) { return this.client.get<T.MessageListResponse>(`/api/v1/conversations/${id(conversationId)}/messages`, params, options); }
  sendMessage(conversationId: Identifier, data: T.SendMessageInput, options?: RequestOptions<T.SendMessageInput>) { return this.client.post<T.MessageResponse, T.SendMessageInput>(`/api/v1/conversations/${id(conversationId)}/messages`, data, options); }
  sendAiMessage(conversationId: Identifier, data: T.AiMessageInput, options?: RequestOptions<T.AiMessageInput>) { return this.client.post<T.AiMessageResponse, T.AiMessageInput>(`/api/v1/conversations/${id(conversationId)}/ai/messages`, data, options); }
  markRead(conversationId: Identifier, data: T.ReadInput, options?: RequestOptions<T.ReadInput>) { return this.client.post<void, T.ReadInput>(`/api/v1/conversations/${id(conversationId)}/read`, data, options); }
  events(conversationId: Identifier, options?: RequestOptions) { return this.client.get<T.ChatEventStream>(`/api/v1/conversations/${id(conversationId)}/events`, undefined, { ...options, responseType: "stream" }); }
  editMessage(messageId: Identifier, data: T.EditMessageInput, options?: RequestOptions<T.EditMessageInput>) { return this.client.put<T.MessageResponse, T.EditMessageInput>(`/api/v1/messages/${id(messageId)}`, data, options); }
  deleteMessage(messageId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/messages/${id(messageId)}`, options); }
  react(messageId: Identifier, data: T.ReactionInput, options?: RequestOptions<T.ReactionInput>) { return this.client.post<T.MessageResponse, T.ReactionInput>(`/api/v1/messages/${id(messageId)}/reactions`, data, options); }
  assistants(options?: RequestOptions) { return this.operations.routesListAssistantsGet(options); }
  assistant(assistantId: Identifier, options?: RequestOptions) { return this.operations.routesGetAssistantGet(assistantId, options); }
  managedAssistants(options?: RequestOptions) { return this.operations.routesListManagedAssistantsGet(options); }
  managedAssistant(assistantId: Identifier, options?: RequestOptions) { return this.operations.routesGetManagedAssistantGet(assistantId, options); }
  createAssistant(data: O.RoutesCreateAssistantPostInput, options?: RequestOptions<O.RoutesCreateAssistantPostInput>) { return this.operations.routesCreateAssistantPost(data, options); }
  updateAssistant(assistantId: Identifier, data: O.RoutesUpdateAssistantPutInput, options?: RequestOptions<O.RoutesUpdateAssistantPutInput>) { return this.operations.routesUpdateAssistantPut(assistantId, data, options); }
  deleteAssistant(assistantId: Identifier, options?: RequestOptions) { return this.operations.routesDeleteAssistantDelete(assistantId, options); }
  assistantModels(params?: O.RoutesAssistantModelsGetQuery, options?: RequestOptions) { return this.operations.routesAssistantModelsGet(params, options); }
  assistantContextCatalog(options?: RequestOptions) { return this.operations.routesAssistantContextCatalogGet(options); }
  customerActionContent(params?: O.RoutesCustomerActionContentGetQuery, options?: RequestOptions) { return this.operations.routesCustomerActionContentGet(params, options); }
  createAttachment(conversationId: Identifier, data: O.RoutesCreateAttachmentPostInput, options?: RequestOptions<O.RoutesCreateAttachmentPostInput>) { return this.operations.routesCreateAttachmentPost(conversationId, data, options); }
  completeAttachment(attachmentId: Identifier, options?: RequestOptions) { return this.operations.routesCompleteAttachmentPost(attachmentId, options); }
  realtimeAuth(conversationId: Identifier, data: O.RoutesRealtimeAuthPostInput, options?: RequestOptions<O.RoutesRealtimeAuthPostInput>) { return this.operations.routesRealtimeAuthPost(conversationId, data, options); }
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
