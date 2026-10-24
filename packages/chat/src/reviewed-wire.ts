import type { JsonObject, JsonValue, QueryParams } from '@faiber/sdk-core';
import type { ChatMessage, Conversation, ConversationMember, ManagedAssistantRecord, ChatAiMessageResult, ChatReaction, ChatAttachment, SpeechStatus, SpeechTranscript } from './types.js';
/** Chat's concrete success envelope. Nonpaginated operations serialize meta:null. */
export interface ChatEnvelope<T, M = null> { status:'success'; data:T; meta:M }
export interface ChatMessagePageMeta { limit:number; has_more:boolean }
export interface ChatHistoryMessage extends ChatMessage { attachments:ChatAttachment[] }
export type ChatConversationResponse = ChatEnvelope<Conversation>;
export type ChatConversationsResponse = ChatEnvelope<Conversation[]>;
export type ChatMemberResponse = ChatEnvelope<ConversationMember>;
export type ChatMembersResponse = ChatEnvelope<ConversationMember[]>;
export type ChatMessageResponse = ChatEnvelope<ChatMessage>;
export type ChatMessagesResponse = ChatEnvelope<ChatHistoryMessage[],ChatMessagePageMeta>;
export type ChatReactionResponse = ChatEnvelope<ChatReaction>;
export type ChatAiResponse = ChatEnvelope<ChatAiMessageResult>;
export interface AssistantCatalogItem extends JsonObject { id:string; name:string; status:string }
export type AssistantCatalogResponse = ChatEnvelope<AssistantCatalogItem[]>;
export type AssistantCatalogItemResponse = ChatEnvelope<AssistantCatalogItem>;
export type ManagedAssistantsResponse = ChatEnvelope<ManagedAssistantRecord[]>;
export type ManagedAssistantResponse = ChatEnvelope<ManagedAssistantRecord>;
export type AssistantBillingPayer = 'user'|'project_owner';
export type AssistantStatus = 'active'|'disabled';
export type AssistantContextMode = 'economy'|'balanced'|'deep'|'custom';
export type CustomerActionContentType = 'product'|'lms_course'|'weblog_post';
export interface CustomerActionBase extends JsonObject {
 id:string;label:Partial<Record<'en'|'fa',string>>;url:string;style:'primary'|'secondary'|'link';open_in_new_tab:boolean;enabled:boolean;
}
export interface CustomerActionContentInput extends CustomerActionBase {kind:'content';content_type:CustomerActionContentType;content_id:string}
export interface CustomerActionLinkInput extends CustomerActionBase {kind:'custom_link';content_type?:string|null;content_id?:string|null}
export type CustomerActionInput = CustomerActionContentInput|CustomerActionLinkInput;
/** Stored serde CustomerAction always emits both optional Rust fields as strings or null. */
export interface CustomerAction extends CustomerActionBase {kind:'content'|'custom_link';content_type:string|null;content_id:string|null}
export interface CustomerActionContentQuery extends QueryParams {content_type:CustomerActionContentType;q?:string|null}
export interface AssistantModelsQuery extends QueryParams {billing_payer?:AssistantBillingPayer|null}
export interface CustomerActionContentItem extends JsonObject {
 id:string;title:string;description:string|null;content_type:CustomerActionContentType;url:string;
 /** Forwarded Modules/LMS status without local coercion or schema validation. */ status:JsonValue;
}
export interface CustomerActionContentCatalog {supported_content_types:CustomerActionContentType[];items:CustomerActionContentItem[]}
export type CustomerActionContentResponse = ChatEnvelope<CustomerActionContentCatalog>;
/** Agentic /integrations/chat/models is returned as raw JSON by chat_models, without local schema validation. */
export type AgenticModelCatalog = JsonValue;
export type AssistantModelsResponse = ChatEnvelope<AgenticModelCatalog>;
/** Knowledge platform catalog data is forwarded unchanged; null is preserved if upstream data is absent. */
export type AssistantContextCatalog = JsonValue;
export type AssistantContextCatalogResponse = ChatEnvelope<AssistantContextCatalog>;
/** Speech provider model catalog passes through speech::call without local deserialization. */
export type SpeechModelCatalog = JsonValue;
export type SpeechModelsResponse = ChatEnvelope<SpeechModelCatalog>;
export interface FitnessModelCatalog {llm:AgenticModelCatalog;speech:SpeechModelCatalog}
export type FitnessModelsResponse = ChatEnvelope<FitnessModelCatalog>;
export interface ImageStatus {enabled:boolean}
export type ImageStatusResponse = ChatEnvelope<ImageStatus>;
/** Prompt-derived values are only key-filtered in fitness::extract_intake; their value types are not checked. */
export interface FitnessIntakeFields {
 age?:JsonValue;height_cm?:JsonValue;weight_kg?:JsonValue;waist_cm?:JsonValue;goal?:JsonValue;experience?:JsonValue;
 training_days?:JsonValue;session_minutes?:JsonValue;equipment?:JsonValue;dietary_preferences?:JsonValue;allergies?:JsonValue;
 injuries?:JsonValue;limitations?:JsonValue;pregnant?:JsonValue;medical_limitations?:JsonValue;
}
export type FitnessIntakeResponse = ChatEnvelope<FitnessIntakeFields>;
/** Internal generation parses model JSON but does not impose a Rust plan schema. */
export type FitnessGeneratedPlan = JsonValue;
export type FitnessGenerationResponse = ChatEnvelope<FitnessGeneratedPlan>;
export interface FitnessSettingsResult {model_ref:string;stt_model_ref:string;tts_model_ref:string}
export type FitnessSettingsResponse = ChatEnvelope<FitnessSettingsResult>;
/** Internal source bridge forwards Agentic's data unchanged, including null for missing data. */
export type ImportedSource = JsonValue;
export type ImportedSourceResponse = ChatEnvelope<ImportedSource>;
export interface ImportedTable {title:string;rows:string[][]}
export interface ImportedMedia {text:string;tables:ImportedTable[];warnings:string[];converter_version:'configured-vision-v1'|'configured-speech-v1';duration_ms?:number}
export type ImportedMediaResponse = ChatEnvelope<ImportedMedia>;
/** Projection keys are always emitted; upstream runtime-input fields are copied without coercion and may be null. */
export interface ChatRuntimeInput {id:JsonValue;prompt:JsonValue;kind:JsonValue;schema:JsonValue;ui:JsonValue;status:JsonValue;expires_at:JsonValue}
export type ChatRuntimeInputsResponse = ChatEnvelope<ChatRuntimeInput[]>;
export interface ChatRuntimeInputCompletion {ok:true}
export type ChatRuntimeInputCompletionResponse = ChatEnvelope<ChatRuntimeInputCompletion>;
export interface ChatRealtimeAuthorization {auth:string}
export type ChatSpeechStatusResponse = ChatEnvelope<SpeechStatus>;
export type ChatSpeechTranscriptResponse = ChatEnvelope<SpeechTranscript>;
export interface SpeechTranscriptionQuery extends QueryParams {language:'en'|'fa'|'auto'}
export type SpeechAudioBytes = ArrayBuffer|Uint8Array;
export interface SpeechSettingsInput {
 enabled:boolean;model_ref:string;tts_enabled:boolean;tts_model_ref:string;version:number;
 /** Omitted or null retains language overrides; an empty object clears them. */
 language_models?:Partial<Record<'en'|'fa',import('./types.js').SpeechLanguageModels>>|null;
}

export interface ChatCreateAssistantInput extends JsonObject {
  "configuration_id": string;
  "status"?: AssistantStatus | null;
  "name": string;
  "system_prompt": string;
  "model_ref": string;
  "billing_payer"?: AssistantBillingPayer;
  "knowledge_group_slugs"?: string[];
  "knowledge_level"?: number | null;
  "knowledge_base_ids"?: string[];
  "recommender_group_ids"?: string[];
  "short_memory_enabled"?: boolean;
  "long_memory_enabled"?: boolean;
  "short_memory_turns"?: number;
  "long_memory_limit"?: number;
  "context_mode"?: AssistantContextMode;
  "context_budget_tokens"?: number;
  "max_knowledge_results"?: number;
  "max_chunks_per_document"?: number;
  "knowledge_enabled"?: boolean;
  "recommenders_enabled"?: boolean;
  "selected_media_enabled"?: boolean;
  "session_access"?: boolean;
  "drm_access"?: boolean;
  "customer_actions"?: CustomerActionInput[];
}

export interface ChatUpdateAssistantInput extends JsonObject {
  "configuration_id": string;
  "name"?: string | null;
  "system_prompt"?: string | null;
  "model_ref"?: string | null;
  "billing_payer"?: AssistantBillingPayer | null;
  "knowledge_group_slugs"?: string[] | null;
  "knowledge_level"?: number | null;
  "knowledge_base_ids"?: string[] | null;
  "recommender_group_ids"?: string[] | null;
  "short_memory_enabled"?: boolean | null;
  "long_memory_enabled"?: boolean | null;
  "short_memory_turns"?: number | null;
  "long_memory_limit"?: number | null;
  "context_mode"?: AssistantContextMode | null;
  "context_budget_tokens"?: number | null;
  "max_knowledge_results"?: number | null;
  "max_chunks_per_document"?: number | null;
  "knowledge_enabled"?: boolean | null;
  "recommenders_enabled"?: boolean | null;
  "selected_media_enabled"?: boolean | null;
  "session_access"?: boolean | null;
  "drm_access"?: boolean | null;
  "customer_actions"?: CustomerActionInput[] | null;
  "status"?: AssistantStatus | null;
  "expected_version": number;
  "expected_knowledge_policy_revision": number;
}

export interface FitnessIntakeInput {text:string;locale:'en'|'fa'}
export interface ImportedMediaInput {id:string;user_id:string;organization_id:string;content_type:string;data_base64:string;language:'en'|'fa'|'auto'}

export type ChatConversationKind = 'direct'|'group'|'channel'|'ai';
export interface AssistantKnowledgePolicyRequest extends JsonObject {
 configuration_id:string;expected_policy_revision:number;assistant_name:string;
 knowledge_base_ids:string[];recommender_group_ids:string[];short_memory_enabled:boolean;long_memory_enabled:boolean;
 short_memory_turns:number;long_memory_limit:number;context_mode:string;context_budget_tokens:number;
 max_knowledge_results:number;max_chunks_per_document:number;knowledge_enabled:boolean;recommenders_enabled:boolean;
 selected_media_enabled:boolean;session_enabled:boolean;
}
