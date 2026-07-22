import type { ApiEnvelope, JsonObject, JsonValue, QueryParams } from "@faiber/sdk-core";
export interface ChatListQuery extends QueryParams { before?: number; after?: number; limit?: number; q?: string; }
export interface Conversation extends JsonObject { id: string; organization_id: string; kind: string; slug?: string | null; title: JsonValue; description: JsonValue; agent_slug: string; settings: JsonValue; status: string; version: number; created_at: string; updated_at: string; }
export interface ConversationMember extends JsonObject { id: string; conversation_id: string; user_id: string; role: string; status: string; joined_at: string; }
export interface ChatMessage extends JsonObject { id: string; conversation_id: string; sender_user_id: string; sequence: number; message_type: string; content: JsonValue; metadata: JsonValue; reply_to_id?: string | null; thread_root_id?: string | null; client_id?: string | null; created_at: string; edited_at?: string | null; }
export interface CreateConversationInput extends JsonObject { kind?: string; slug?: string; title?: JsonValue; description?: JsonValue; member_ids?: string[]; agent_slug?: string; settings?: JsonValue; }
export interface UpdateConversationInput extends JsonObject { title?: JsonValue; description?: JsonValue; settings?: JsonValue; status?: string; expected_version?: number; }
export interface MemberInput extends JsonObject { user_id: string; role?: string; }
export interface SendMessageInput extends JsonObject { message_type?: string; content: JsonValue; metadata?: JsonValue; reply_to_id?: string; thread_root_id?: string; client_id?: string; }
export interface EditMessageInput extends JsonObject { content: JsonValue; }
export interface ReactionInput extends JsonObject { emoji: string; }
export interface ReadInput extends JsonObject { sequence: number; message_id?: string; }
export interface AiMessageInput extends JsonObject { message: string; client_id?: string; model_ref?: string; profile?: JsonValue; props?: JsonValue; meta?: JsonValue; inputs?: JsonValue; knowledge_group_slugs?: string[]; knowledge_level?: number; }
export type ConversationResponse = ApiEnvelope<Conversation>;
export type ConversationListResponse = ApiEnvelope<Conversation[]>;
export type MemberResponse = ApiEnvelope<ConversationMember>;
export type MemberListResponse = ApiEnvelope<ConversationMember[]>;
export type MessageResponse = ApiEnvelope<ChatMessage>;
export type MessageListResponse = ApiEnvelope<ChatMessage[]>;
export type AiMessageResponse = ApiEnvelope<{ user_message: ChatMessage; assistant_message: ChatMessage; ai_turn: JsonValue; billing_authority: string }>;
