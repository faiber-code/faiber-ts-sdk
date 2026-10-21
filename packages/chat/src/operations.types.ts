import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: Value. */
export interface RoutesAssistantContextCatalogGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: AssistantModelsQuery. */
export interface RoutesAssistantModelsGetQuery extends QueryParams {
  "billing_payer"?: string | null;
}
/** Backend response type: Value. */
export interface RoutesAssistantModelsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export type RoutesGetPolicyOperationGetResponse = import("./types.js").AssistantConfigurationIntentResponse;

/** Backend request type: PolicyReconciliation. */
export type RoutesReconcilePolicyOperationPostInput = import("./types.js").AssistantPolicyReconciliationInput;
/** Backend response type: Value. */
export type RoutesReconcilePolicyOperationPostResponse = import("./types.js").AssistantPolicyReconciliationResponse;

/** Backend response type: Value. */
export interface RoutesListManagedAssistantsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateAssistant. */
export interface RoutesCreateAssistantPostInputCustomerActions extends JsonObject {
  "id": string;
  "label": Record<string, string>;
  "kind": string;
  "content_type"?: string | null;
  "content_id"?: string | null;
  "url": string;
  "style": string;
  "open_in_new_tab": boolean;
  "enabled": boolean;
}
export interface RoutesCreateAssistantPostInput extends JsonObject {
  "configuration_id": string;
  "status"?: string | null;
  "name": string;
  "system_prompt": string;
  "model_ref": string;
  "billing_payer"?: string;
  "knowledge_group_slugs"?: string[];
  "knowledge_level"?: number | null;
  "knowledge_base_ids"?: string[];
  "recommender_group_ids"?: string[];
  "short_memory_enabled"?: boolean;
  "long_memory_enabled"?: boolean;
  "short_memory_turns"?: number;
  "long_memory_limit"?: number;
  "context_mode"?: string;
  "context_budget_tokens"?: number;
  "max_knowledge_results"?: number;
  "max_chunks_per_document"?: number;
  "knowledge_enabled"?: boolean;
  "recommenders_enabled"?: boolean;
  "selected_media_enabled"?: boolean;
  "session_access"?: boolean;
  "drm_access"?: boolean;
  "customer_actions"?: RoutesCreateAssistantPostInputCustomerActions[];
}
/** Backend response type: Value. */
export interface RoutesCreateAssistantPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: no-content. */
export type RoutesDeleteAssistantDeleteResponse = void;

/** Backend response type: Value. */
export type RoutesGetManagedAssistantGetResponse = import("./types.js").ManagedAssistantDetailResponse;

/** Backend request type: UpdateAssistant. */
export interface RoutesUpdateAssistantPutInputCustomerActions extends JsonObject {
  "id": string;
  "label": Record<string, string>;
  "kind": string;
  "content_type"?: string | null;
  "content_id"?: string | null;
  "url": string;
  "style": string;
  "open_in_new_tab": boolean;
  "enabled": boolean;
}
export interface RoutesUpdateAssistantPutInput extends JsonObject {
  "configuration_id": string;
  "name"?: string | null;
  "system_prompt"?: string | null;
  "model_ref"?: string | null;
  "billing_payer"?: string | null;
  "knowledge_group_slugs"?: string[] | null;
  "knowledge_level"?: number | null;
  "knowledge_base_ids"?: string[] | null;
  "recommender_group_ids"?: string[] | null;
  "short_memory_enabled"?: boolean | null;
  "long_memory_enabled"?: boolean | null;
  "short_memory_turns"?: number | null;
  "long_memory_limit"?: number | null;
  "context_mode"?: string | null;
  "context_budget_tokens"?: number | null;
  "max_knowledge_results"?: number | null;
  "max_chunks_per_document"?: number | null;
  "knowledge_enabled"?: boolean | null;
  "recommenders_enabled"?: boolean | null;
  "selected_media_enabled"?: boolean | null;
  "session_access"?: boolean | null;
  "drm_access"?: boolean | null;
  "customer_actions"?: RoutesUpdateAssistantPutInputCustomerActions[] | null;
  "status"?: string | null;
  "expected_version": number;
  "expected_knowledge_policy_revision": number;
}
/** Backend response type: Value. */
export interface RoutesUpdateAssistantPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: CustomerActionContentQuery. */
export interface RoutesCustomerActionContentGetQuery extends QueryParams {
  "content_type": string;
  "q"?: string | null;
}
/** Backend response type: Value. */
export interface RoutesCustomerActionContentGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesModelsGetApiV1AdminImageModelsResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Settings. */
export interface RoutesSettingsGetApiV1AdminImageSettingsResponseData extends JsonObject {
  "enabled": boolean;
  "model_ref": string;
  "version": number;
}
export interface RoutesSettingsGetApiV1AdminImageSettingsResponse extends ApiEnvelope<RoutesSettingsGetApiV1AdminImageSettingsResponseData> {
}

/** Backend request type: Settings. */
export interface RoutesSavePutInput extends JsonObject {
  "enabled": boolean;
  "model_ref": string;
  "version": number;
}
/** Backend response type: Settings. */
export interface RoutesSavePutResponseData extends JsonObject {
  "enabled": boolean;
  "model_ref": string;
  "version": number;
}
export interface RoutesSavePutResponse extends ApiEnvelope<RoutesSavePutResponseData> {
}

/** Backend response type: Value. */
export interface RoutesModelsGetApiV1AdminSpeechModelsResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: SpeechSettings. */
export type RoutesSettingsGetApiV1AdminSpeechSettingsResponse = import("./types.js").SpeechSettingsResponse;

/** Backend request type: crate::speech::SpeechSettingsInput. */
export type RoutesPublicSpeechSettingsPutInput = import("./types.js").SpeechSettings;
/** Backend response type: crate::speech::SpeechSettings. */
export type RoutesPublicSpeechSettingsPutResponse = import("./types.js").SpeechSettingsResponse;

/** Backend response type: Value. */
export interface RoutesManagedRolesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: BindRole. */
export interface RoutesBindPutInput extends JsonObject {
  "assistant_id": string;
  "knowledge_slug": string;
  "enabled": boolean;
  "expected_version": number;
}
/** Backend response type: Value. */
export interface RoutesBindPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesListAssistantsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesGetAssistantGetResponse extends ApiEnvelope<JsonValue> {
}

export type AttachmentUploadBody = Blob | ArrayBuffer | Uint8Array;
/** Backend request type: binary byte stream. */
export type RoutesCompleteAttachmentPostInput = Blob | ArrayBuffer | ArrayBufferView;
/** Backend response type: entity::attachment::Model. */
export interface RoutesCompleteAttachmentPostResponseData extends JsonObject {
  "id": string;
  "organization_id": string;
  "conversation_id": string;
  "message_id": string | null;
  "uploader_id": string | null;
  "storage_provider": string;
  "bucket": string;
  "object_key": string;
  "cdn_url": string;
  "file_name": string;
  "media_type": string;
  "byte_size": number;
  "checksum_sha256": string | null;
  "status": string;
  "metadata": BackendJson<"Json">;
  "legacy_source": string | null;
  "legacy_id": number | null;
  "created_at": string;
  "updated_at": string;
  "deleted_at": string | null;
}
export interface RoutesCompleteAttachmentPostResponse extends ApiEnvelope<RoutesCompleteAttachmentPostResponseData> {
}

/** Backend response type: raw-response. */
export type RoutesDownloadAttachmentGetResponse = ArrayBuffer | Uint8Array;

/** Backend response type: Value. */
export interface RoutesListGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateConversation. */
export interface RoutesCreatePostInput extends JsonObject {
  "kind"?: string;
  "slug"?: string | null;
  "title"?: JsonValue;
  "description"?: JsonValue;
  "member_ids"?: string[];
  "agent_slug"?: string;
  "assistant_id"?: string | null;
  "settings"?: JsonValue;
}
/** Backend response type: Value. */
export interface RoutesCreatePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: no-content. */
export type RoutesArchiveDeleteResponse = void;

/** Backend response type: Value. */
export interface RoutesGetOneGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateConversation. */
export interface RoutesUpdatePutInput extends JsonObject {
  "title"?: JsonValue | null;
  "description"?: JsonValue | null;
  "settings"?: JsonValue | null;
  "status"?: string | null;
  "expected_version"?: number | null;
}
/** Backend response type: Value. */
export interface RoutesUpdatePutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: AiMessage. */
export interface RoutesAiSendPostInput extends JsonObject {
  "message": string;
  "client_id"?: string | null;
  "model_ref"?: string | null;
  "profile"?: JsonValue;
  "props"?: JsonValue;
  "meta"?: JsonValue;
  "inputs"?: JsonValue;
  "knowledge_group_slugs"?: string[];
  "knowledge_level"?: number | null;
  "drm_media_ids"?: string[];
  "session_room_id"?: string | null;
}
/** Backend response type: Value. */
export interface RoutesAiSendPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesAiRuntimeInputsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CompleteAiRuntimeInput. */
export interface RoutesAiCompleteRuntimeInputPostInput extends JsonObject {
  "value"?: JsonValue;
  "cancelled"?: boolean;
}
/** Backend response type: Value. */
export interface RoutesAiCompleteRuntimeInputPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateAttachment. */
export interface RoutesCreateAttachmentPostInput extends JsonObject {
  "file_name": string;
  "media_type": string;
  "byte_size": number;
  "checksum_sha256"?: string | null;
  "metadata"?: JsonValue;
}
/** Backend response type: AttachmentUpload. */
export interface RoutesCreateAttachmentPostResponseDataAttachment extends JsonObject {
  "id": string;
  "organization_id": string;
  "conversation_id": string;
  "message_id": string | null;
  "uploader_id": string | null;
  "storage_provider": string;
  "bucket": string;
  "object_key": string;
  "cdn_url": string;
  "file_name": string;
  "media_type": string;
  "byte_size": number;
  "checksum_sha256": string | null;
  "status": string;
  "metadata": BackendJson<"Json">;
  "legacy_source": string | null;
  "legacy_id": number | null;
  "created_at": string;
  "updated_at": string;
  "deleted_at": string | null;
}
export interface RoutesCreateAttachmentPostResponseData extends JsonObject {
  "attachment": RoutesCreateAttachmentPostResponseDataAttachment;
  "upload_url": string;
  "expires_in_seconds": number;
}
export interface RoutesCreateAttachmentPostResponse extends ApiEnvelope<RoutesCreateAttachmentPostResponseData> {
}

/** Backend response type: raw-response. */
export type RoutesEventsGetResponse = import("./types.js").ChatEventStream;

/** Backend response type: Value. */
export interface RoutesMembersGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: MemberInput. */
export interface RoutesAddMemberPostInput extends JsonObject {
  "user_id": string;
  "role"?: string;
}
/** Backend response type: Value. */
export interface RoutesAddMemberPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: no-content. */
export type RoutesRemoveMemberDeleteResponse = void;

/** Backend query type: ListQuery. */
export interface RoutesMessagesGetQuery extends QueryParams {
  "before"?: number | null;
  "after"?: number | null;
  "limit"?: number | null;
  "q"?: string | null;
}
/** Backend response type: Value. */
export interface RoutesMessagesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: SendMessage. */
export interface RoutesSendPostInput extends JsonObject {
  "message_type"?: string;
  "content": JsonValue;
  "metadata"?: JsonValue;
  "reply_to_id"?: string | null;
  "thread_root_id"?: string | null;
  "client_id"?: string | null;
  "attachment_ids"?: string[];
}
/** Backend response type: Value. */
export interface RoutesSendPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ReadInput. */
export interface RoutesReadPostInput extends JsonObject {
  "sequence": number;
  "message_id"?: string | null;
}
/** Backend response type: no-content. */
export type RoutesReadPostResponse = void;

/** Backend request type: RealtimeAuthInput. */
export interface RoutesRealtimeAuthPostInput extends JsonObject {
  "socket_id": string;
  "channel_name": string;
}
/** Backend response type: Value. */
export type RoutesRealtimeAuthPostResponse = JsonValue;

/** Backend response type: Value. */
export interface RoutesRealtimeConfigGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: Generation. */
export interface FitnessGeneratePostInput extends JsonObject {
  "order_id": string;
  "user_id": string;
  "job_token": string;
  "intake": JsonValue;
  "includes_meals": boolean;
  "workouts"?: boolean;
  "model_snapshot": JsonValue;
  "catalog": JsonValue;
  "reference_time": JsonValue;
}
/** Backend response type: Value. */
export interface FitnessGeneratePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ExtractIntake. */
export interface RoutesExtractIntakePostInput extends JsonObject {
  "text": string;
  "locale": string;
}
/** Backend response type: Value. */
export interface RoutesExtractIntakePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesModelsGetApiV1FitnessModelsResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: Models. */
export interface FitnessSaveSettingsPutInput extends JsonObject {
  "model_ref": string;
  "stt_model_ref": string;
  "tts_model_ref": string;
}
/** Backend response type: Value. */
export interface FitnessSaveSettingsPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesStatusGetApiV1ImageStatusResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export type HumanChatNotificationContextGetResponse = import("./personal.js").PersonalChatResponse<import("./personal.js").ChatNotificationContext>;

/** Backend request type: MediaInput. */
export interface MemoryImportExtractPostInput extends JsonObject {
  "id": string;
  "user_id": string;
  "organization_id": string;
  "content_type": string;
  "data_base64": string;
  "language": string;
}
/** Backend response type: Value. */
export interface MemoryImportExtractPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: SourceInput. */
export interface MemoryImportSourcePostInput extends JsonObject {
  "user_id": string;
  "organization_id": string;
  "url": string;
}
/** Backend response type: Value. */
export interface MemoryImportSourcePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<LearningMessage>. */
export interface RoutesHistoryGetResponseItem extends JsonObject {
  "id": string;
  "role": string;
  "text": string;
}
export interface RoutesHistoryGetResponse extends ApiEnvelope<RoutesHistoryGetResponseItem[]> {
}

/** Backend request type: Question. */
export interface RoutesAskPostInput extends JsonObject {
  "question": string;
  "idempotency_key": string;
}
/** Backend response type: Value. */
export interface RoutesAskPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: PageQuery. */
export type HumanChatSummariesGetQuery = import("./personal.js").ConversationSummaryQuery;
/** Backend response type: ConversationPage. */
export type HumanChatSummariesGetResponse = import("./personal.js").PersonalChatResponse<import("./personal.js").ConversationSummaryPage>;

/** Backend query type: PollQuery. */
export type HumanChatEventsGetQuery = import("./personal.js").PersonalChatEventQuery;
/** Backend response type: UserEventPage. */
export type HumanChatEventsGetResponse = import("./personal.js").PersonalChatResponse<import("./personal.js").PersonalChatEventPage>;

/** Backend request type: AuthInput. */
export type HumanChatRealtimeAuthPostInput = import("./personal.js").PersonalChatRealtimeAuthInput;
/** Backend response type: Value. */
export type HumanChatRealtimeAuthPostResponse = import("./personal.js").PersonalChatRealtimeAuth;

/** Backend response type: Value. */
export type HumanChatRealtimeConfigGetResponse = import("./personal.js").PersonalChatResponse<import("./personal.js").PersonalChatRealtimeConfig>;

/** Backend response type: UnreadCount. */
export type HumanChatUnreadGetResponse = import("./personal.js").PersonalChatResponse<import("./personal.js").ChatUnreadCount>;

/** Backend response type: no-content. */
export type RoutesDeleteMessageDeleteResponse = void;

/** Backend request type: EditMessage. */
export interface RoutesEditPutInput extends JsonObject {
  "content": JsonValue;
}
/** Backend response type: Value. */
export interface RoutesEditPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ReactionInput. */
export interface RoutesReactPostInput extends JsonObject {
  "emoji": string;
}
/** Backend response type: Value. */
export interface RoutesReactPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: LiveSpeechInput. */
export interface RoutesLivePostInput extends JsonObject {
  "action": string;
  "session_id"?: string | null;
  "sequence"?: number | null;
  "audio_base64"?: string | null;
  "content_type"?: string | null;
  "language"?: string | null;
}
/** Backend response type: Value. */
export interface RoutesLivePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesStatusGetApiV1SpeechStatusResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: binary byte stream. */
export type RoutesTranscribePostInput = Blob | ArrayBuffer | ArrayBufferView;
/** Backend query type: Language. */
export interface RoutesTranscribePostQuery extends QueryParams {
  "language": string;
}
/** Backend response type: Value. */
export interface RoutesTranscribePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: TtsInput. */
export type RoutesSynthesizePostInputFormat = "Mp3" | "Wav";
export interface RoutesSynthesizePostInput extends JsonObject {
  "format"?: RoutesSynthesizePostInputFormat | null;
  "text": string;
  "language"?: string | null;
}
/** Backend response type: raw-response. */
export interface RoutesSynthesizePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: VoiceInput. */
export type RoutesHandlePostInput = import("./assistant-voice.js").AssistantVoiceInput;
/** Backend response type: Value. */
export type RoutesHandlePostResponse = import("./assistant-voice.js").AssistantVoiceResponse;

/** Backend response type: Value. */
export type NativeAccessGetStatusGetResponse = import("@faiber/sdk-core").NativeSummaryAccessResponse;

/** Backend request type: NativePolicyUpdate. */
export type NativeAccessUpdatePolicyPutInput = import("@faiber/sdk-core").NativeSummaryPolicyUpdate;
/** Backend response type: Value. */
export type NativeAccessUpdatePolicyPutResponse = import("@faiber/sdk-core").NativeSummaryAccessResponse;

/** Backend request type: NativeAccessRevoke. */
export type NativeAccessRevokePostInput = import("@faiber/sdk-core").NativeSummaryAccessRevoke;
/** Backend response type: Value. */
export type NativeAccessRevokePostResponse = import("@faiber/sdk-core").NativeSummaryAccessResponse;

/** Backend request type: NativeAccessRestore. */
export type NativeAccessRestoreDeleteInput = import("@faiber/sdk-core").NativeSummaryAccessRestore;
/** Backend response type: Value. */
export type NativeAccessRestoreDeleteResponse = import("@faiber/sdk-core").NativeSummaryAccessResponse;

/** Backend response type: Value. */
export interface RoutesRolesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: serde_json::Value. */
export type MainHealthGetResponse = import("./personal.js").PersonalChatResponse<import("./personal.js").ChatProcessHealth>;
