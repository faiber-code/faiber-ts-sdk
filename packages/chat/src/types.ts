import type { ChatEnvelope } from './reviewed-wire.js';
import type { JsonObject, JsonValue, QueryParams } from "@faiber/sdk-core";
export interface ChatRealtimeConfig { ws_url: string; app_key: string; channel: string }
export interface ChatRealtimeConfigResponse extends ChatEnvelope<ChatRealtimeConfig> {}
export type ChatEventChunk = Uint8Array | string;
export interface ChatEventAsyncStream extends AsyncIterable<ChatEventChunk> {}
/** SSE response body returned by Axios in browser-stream or Node async-iterable runtimes. */
export type ChatEventStream = ReadableStream<Uint8Array> | ChatEventAsyncStream;
export interface ChatListQuery extends QueryParams { before?: number; after?: number; limit?: number; q?: string; }
/** Stored conversation; JSON title, description, avatar and settings are deliberately application-defined. */
export interface Conversation extends JsonObject {
 id:string; organization_id:string; kind:string; slug:string|null; title:JsonValue; description:JsonValue; avatar:JsonValue;
 owner_id:string; direct_key:string|null; agent_slug:string|null; assistant_id:string|null; agentic_thread_id:string|null;
 settings:JsonValue; last_sequence:number; last_message_at:string|null; status:string; version:number;
 created_at:string; updated_at:string; deleted_at:string|null; legacy_source:string|null; legacy_id:string|null;
}
export interface ConversationMember extends JsonObject { id:string; conversation_id:string; user_id:string; role:string; state:string; notification_level:string; last_read_sequence:number; joined_at:string; updated_at:string; left_at:string|null; }
export interface ChatAttachment extends JsonObject {
  id: string;
  organization_id: string;
  conversation_id: string;
  message_id: string | null;
  uploader_id: string | null;
  storage_provider: string;
  bucket: string;
  object_key: string;
  /** Storage/CDN metadata; not an authenticated download URL. Use downloadAttachment(id). */
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
export interface CreateConversationInput extends JsonObject { kind?: import('./reviewed-wire.js').ChatConversationKind; slug?: string | null; title?: JsonValue; description?: JsonValue; member_ids?: string[]; agent_slug?: string | null; settings?: JsonValue; }
export interface UpdateConversationInput extends JsonObject { title?: JsonValue; description?: JsonValue; settings?: JsonValue; status?: string | null; expected_version?: number | null; }
export interface MemberInput extends JsonObject { user_id: string; role?: string; }
/** content and metadata are arbitrary user/application JSON stored unchanged by Chat. */
export interface SendMessageInput extends JsonObject { message_type?: string; content: JsonValue; metadata?: JsonValue; reply_to_id?: string | null; thread_root_id?: string | null; client_id?: string | null; attachment_ids?: string[]; }
export interface EditMessageInput extends JsonObject { content: JsonValue; }
export interface ReactionInput extends JsonObject { emoji: string; }
export interface ReadInput extends JsonObject { sequence: number; unread?: boolean; message_id?: string | null; }
/** profile, props, meta and inputs carry dynamic governed Agentic/Knowledge context, not a fixed local DTO. */
export interface AiMessageInput extends JsonObject { message: string; client_id?: string | null; model_ref?: string | null; profile?: JsonValue; props?: JsonValue; meta?: JsonValue; inputs?: JsonValue; knowledge_group_slugs?: string[]; knowledge_level?: number | null; drm_media_ids?: string[]; session_room_id?: string | null; }
export type ConversationResponse = import('./reviewed-wire.js').ChatEnvelope<Conversation>;
export type ConversationListResponse = import('./reviewed-wire.js').ChatEnvelope<Conversation[]>;
export type MemberResponse = import('./reviewed-wire.js').ChatEnvelope<ConversationMember>;
export type MemberListResponse = import('./reviewed-wire.js').ChatEnvelope<ConversationMember[]>;
export type MessageResponse = import('./reviewed-wire.js').ChatEnvelope<ChatMessage>;
export type MessageListResponse = import('./reviewed-wire.js').ChatEnvelope<import('./reviewed-wire.js').ChatHistoryMessage[], import('./reviewed-wire.js').ChatMessagePageMeta>;
export interface ChatAiTurn extends JsonObject {
 id:string; conversation_id:string; user_message_id:string; assistant_message_id:string|null; agentic_thread_id:string;
 agent_slug:string; agentic_request_id:string|null; model_ref:string|null; status:string;
 /** Agentic usage receipt is provider-defined JSON stored without a local schema. */ usage:JsonValue;
 error:string|null; created_at:string; completed_at:string|null;
}
export interface ChatReaction extends JsonObject {id:string;message_id:string;user_id:string;emoji:string;created_at:string}
export type ReactionResponse = import('./reviewed-wire.js').ChatEnvelope<ChatReaction>;
export interface ChatAiMessageResult extends JsonObject {user_message:ChatMessage;assistant_message:ChatMessage;ai_turn:ChatAiTurn;billing_authority:'infera-agentic'}
export type AiMessageResponse = import('./reviewed-wire.js').ChatEnvelope<ChatAiMessageResult>;

export interface SpeechStatus { available:boolean; engine:'faiber-stt'|'cloudflare'|'gapgpt'; model_ref:string; max_bytes:number }
export interface SpeechLanguageModels {model_ref:string;tts_model_ref:string}
export interface SpeechSettings {enabled:boolean;model_ref:string;tts_enabled:boolean;tts_model_ref:string;version:number;language_models?:Partial<Record<'en'|'fa',SpeechLanguageModels>>}
export interface SpeechSettingsResponse extends ChatEnvelope<SpeechSettings> {}
export interface SpeechStatusResponse extends ChatEnvelope<SpeechStatus> {}
export interface SpeechTranscript { text:string; engine:string; model_ref:string }
export interface SpeechTranscriptResponse extends ChatEnvelope<SpeechTranscript> {}
export type SpeechLanguage = 'en'|'fa'|'auto';

export type SpeechAudioFormat = 'mp3' | 'wav';
export interface SpeechSynthesisInput { text:string; language?: SpeechLanguage | null; /** Compact mono MP3 by default; WAV for lossless processing. */ format?: SpeechAudioFormat | null }

export interface ManagedAssistantRecord extends JsonObject {
  id:string; organization_id:string; owner_id:string; name:string; system_prompt:string; model_ref:string; billing_payer:string;
  knowledge_group_slugs:string[]; knowledge_level:number|null; knowledge_base_ids:string[]; recommender_group_ids:string[];
  short_memory_enabled:boolean; long_memory_enabled:boolean; short_memory_turns:number; long_memory_limit:number;
  context_mode:string; context_budget_tokens:number; max_knowledge_results:number; max_chunks_per_document:number;
  knowledge_enabled:boolean; recommenders_enabled:boolean; selected_media_enabled:boolean; session_access:boolean; drm_access:boolean;
  customer_actions:import('./reviewed-wire.js').CustomerAction[]; status:string; version:number; created_at:string; updated_at:string; deleted_at:string|null;
}
export interface ManagedAssistantDetail extends ManagedAssistantRecord { expected_knowledge_policy_revision:number; }
export type ManagedAssistantDetailResponse=ChatEnvelope<ManagedAssistantDetail>;
export interface AssistantConfigurationIntent extends JsonObject {
  id:string; organization_id:string; assistant_id:string; actor_id:string; expected_chat_version:number;
  /** Exact retained create/update request, including normalization metadata. */ request:JsonObject; proposed:ManagedAssistantRecord; policy_request:import('./reviewed-wire.js').AssistantKnowledgePolicyRequest; status:"pending"|"applied"|"cancelled";
  /** Raw Knowledge outcome receipt, preserved for reconciliation. */ outcome:JsonValue; created_at:string; updated_at:string;
}
export type AssistantConfigurationIntentResponse=ChatEnvelope<AssistantConfigurationIntent>;
export interface AssistantPolicyReconciliationInput extends JsonObject { action:"recover"|"cancel"; }
export interface AssistantPolicyCancellationReceipt extends JsonObject { configuration_id:string; assistant_id:string; status:"cancelled"; }
export type AssistantPolicyReconciliationResponse=ChatEnvelope<ManagedAssistantRecord|AssistantPolicyCancellationReceipt>;
