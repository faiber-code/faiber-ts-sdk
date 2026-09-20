import type { ApiEnvelope, JsonObject, JsonValue, QueryParams } from "@faiber/sdk-core";
export interface ChatRealtimeConfig { ws_url: string; app_key: string; channel: string }
export interface ChatRealtimeConfigResponse extends ApiEnvelope<ChatRealtimeConfig> {}
export type ChatEventChunk = Uint8Array | string;
export interface ChatEventAsyncStream extends AsyncIterable<ChatEventChunk> {}
/** SSE response body returned by Axios in browser-stream or Node async-iterable runtimes. */
export type ChatEventStream = ReadableStream<Uint8Array> | ChatEventAsyncStream;
export interface ChatListQuery extends QueryParams { before?: number; after?: number; limit?: number; q?: string; }
export interface Conversation extends JsonObject { id: string; organization_id: string; kind: string; slug?: string | null; title: JsonValue; description: JsonValue; agent_slug: string; settings: JsonValue; status: string; version: number; created_at: string; updated_at: string; }
export interface ConversationMember extends JsonObject { id: string; conversation_id: string; user_id: string; role: string; status: string; joined_at: string; }
export interface ChatAttachment extends JsonObject {
  id: string;
  organization_id: string;
  conversation_id: string;
  message_id: string | null;
  uploader_id: string | null;
  storage_provider: string;
  bucket: string;
  object_key: string;
  cdn_url: string;
  file_name: string;
  media_type: string;
  byte_size: number;
  checksum_sha256: string | null;
  status: string;
  metadata: JsonValue;
  legacy_source: string | null;
  legacy_id: number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface ChatMessage extends JsonObject {
  id: string;
  conversation_id: string;
  sequence: number;
  /** Authenticated IDP user that sent the message; null for non-user senders. */
  sender_id: string | null;
  /** @deprecated Compatibility field for older Chat deployments. Prefer `sender_id`. */
  sender_user_id?: string | null;
  sender_kind: string;
  message_type: string;
  content: JsonValue;
  metadata: JsonValue;
  reply_to_id: string | null;
  thread_root_id: string | null;
  client_id: string | null;
  status: string;
  created_at: string;
  edited_at: string | null;
  deleted_at: string | null;
  legacy_source: string | null;
  legacy_id: string | null;
  /** Present when messages are returned by the conversation history endpoint. */
  attachments?: ChatAttachment[];
}
export interface CreateConversationInput extends JsonObject { kind?: string; slug?: string; title?: JsonValue; description?: JsonValue; member_ids?: string[]; agent_slug?: string; settings?: JsonValue; }
export interface UpdateConversationInput extends JsonObject { title?: JsonValue; description?: JsonValue; settings?: JsonValue; status?: string; expected_version?: number; }
export interface MemberInput extends JsonObject { user_id: string; role?: string; }
export interface SendMessageInput extends JsonObject { message_type?: string; content: JsonValue; metadata?: JsonValue; reply_to_id?: string; thread_root_id?: string; client_id?: string; attachment_ids?: string[]; }
export interface EditMessageInput extends JsonObject { content: JsonValue; }
export interface ReactionInput extends JsonObject { emoji: string; }
export interface ReadInput extends JsonObject { sequence: number; message_id?: string; }
export interface AiMessageInput extends JsonObject { message: string; client_id?: string; model_ref?: string; profile?: JsonValue; props?: JsonValue; meta?: JsonValue; inputs?: JsonValue; knowledge_group_slugs?: string[]; knowledge_level?: number; drm_media_ids?: string[]; session_room_id?: string; }
export type ConversationResponse = ApiEnvelope<Conversation>;
export type ConversationListResponse = ApiEnvelope<Conversation[]>;
export type MemberResponse = ApiEnvelope<ConversationMember>;
export type MemberListResponse = ApiEnvelope<ConversationMember[]>;
export type MessageResponse = ApiEnvelope<ChatMessage>;
export type MessageListResponse = ApiEnvelope<ChatMessage[]>;
export type AiMessageResponse = ApiEnvelope<{ user_message: ChatMessage; assistant_message: ChatMessage; ai_turn: JsonValue; billing_authority: string }>;

export interface SpeechStatus { available:boolean; engine?:string; max_bytes?:number }
export interface SpeechStatusResponse extends ApiEnvelope<SpeechStatus> {}
export interface SpeechTranscript { text:string; engine:string }
export interface SpeechTranscriptResponse extends ApiEnvelope<SpeechTranscript> {}
export type SpeechLanguage = 'en'|'fa'|'auto';
