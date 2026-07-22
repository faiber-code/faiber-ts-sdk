import { ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
import { ChatOperations } from "./operations.js";
const id = (value: Identifier) => encodeURIComponent(value);
export class ChatApi extends ServiceApi {
  readonly operations = new ChatOperations(this.client);
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
  events(conversationId: Identifier, options?: RequestOptions) { return this.client.get<unknown>(`/api/v1/conversations/${id(conversationId)}/events`, undefined, { ...options, responseType: "stream" }); }
  editMessage(messageId: Identifier, data: T.EditMessageInput, options?: RequestOptions<T.EditMessageInput>) { return this.client.put<T.MessageResponse, T.EditMessageInput>(`/api/v1/messages/${id(messageId)}`, data, options); }
  deleteMessage(messageId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/messages/${id(messageId)}`, options); }
  react(messageId: Identifier, data: T.ReactionInput, options?: RequestOptions<T.ReactionInput>) { return this.client.post<T.MessageResponse, T.ReactionInput>(`/api/v1/messages/${id(messageId)}/reactions`, data, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";
