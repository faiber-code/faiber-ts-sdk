import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: Value. */
export type RoutesAssistantContextCatalogGetResponse = import("./reviewed-wire.js").AssistantContextCatalogResponse;

/** Backend query type: AssistantModelsQuery. */
export type RoutesAssistantModelsGetQuery = import("./reviewed-wire.js").AssistantModelsQuery;
/** Backend response type: Value. */
export type RoutesAssistantModelsGetResponse = import("./reviewed-wire.js").AssistantModelsResponse;

/** Backend response type: Value. */
export type RoutesGetPolicyOperationGetResponse = import("./types.js").AssistantConfigurationIntentResponse;

/** Backend request type: PolicyReconciliation. */
export type RoutesReconcilePolicyOperationPostInput = import("./types.js").AssistantPolicyReconciliationInput;
/** Backend response type: Value. */
export type RoutesReconcilePolicyOperationPostResponse = import("./types.js").AssistantPolicyReconciliationResponse;

/** Backend response type: Value. */
export type RoutesListManagedAssistantsGetResponse = import("./reviewed-wire.js").ManagedAssistantsResponse;

/** Backend request type: CreateAssistant. */
export type RoutesCreateAssistantPostInput = import("./reviewed-wire.js").ChatCreateAssistantInput;
/** Backend response type: Value. */
export type RoutesCreateAssistantPostResponse = import("./reviewed-wire.js").ManagedAssistantResponse;

/** Backend response type: no-content. */
export type RoutesDeleteAssistantDeleteResponse = void;

/** Backend response type: Value. */
export type RoutesGetManagedAssistantGetResponse = import("./types.js").ManagedAssistantDetailResponse;

/** Backend request type: UpdateAssistant. */
export type RoutesUpdateAssistantPutInput = import("./reviewed-wire.js").ChatUpdateAssistantInput;
/** Backend response type: Value. */
export type RoutesUpdateAssistantPutResponse = import("./reviewed-wire.js").ManagedAssistantResponse;

/** Backend query type: CustomerActionContentQuery. */
export type RoutesCustomerActionContentGetQuery = import("./reviewed-wire.js").CustomerActionContentQuery;
/** Backend response type: Value. */
export type RoutesCustomerActionContentGetResponse = import("./reviewed-wire.js").CustomerActionContentResponse;

/** Backend response type: Value. */
export type RoutesModelsGetApiV1AdminImageModelsResponse = import("./reviewed-wire.js").AssistantModelsResponse;

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
export type RoutesModelsGetApiV1AdminSpeechModelsResponse = import("./reviewed-wire.js").SpeechModelsResponse;

/** Backend response type: SpeechSettings. */
export type RoutesSettingsGetApiV1AdminSpeechSettingsResponse = import("./types.js").SpeechSettingsResponse;

/** Backend request type: crate::speech::SpeechSettingsInput. */
export type RoutesPublicSpeechSettingsPutInput = import("./reviewed-wire.js").SpeechSettingsInput;
/** Backend response type: crate::speech::SpeechSettings. */
export type RoutesPublicSpeechSettingsPutResponse = import("./types.js").SpeechSettingsResponse;

/** Backend response type: Value. */
export type RoutesManagedRolesGetResponse = import("./workspace.js").ManagedWorkspaceRolesResponse;

/** Backend request type: BindRole. */
export type RoutesBindPutInput = import("./workspace.js").WorkspaceAssistantBindingInput;
/** Backend response type: Value. */
export type RoutesBindPutResponse = import("./workspace.js").WorkspaceAssistantBindingResponse;

/** Backend response type: Value. */
export type RoutesListAssistantsGetResponse = import("./reviewed-wire.js").AssistantCatalogResponse;

/** Backend response type: Value. */
export type RoutesGetAssistantGetResponse = import("./reviewed-wire.js").AssistantCatalogItemResponse;

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
  "metadata": JsonValue;
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
export type RoutesListGetResponse = import("./reviewed-wire.js").ChatConversationsResponse;

/** Backend request type: CreateConversation. */
export type RoutesCreatePostInput = import("./types.js").CreateConversationInput;
/** Backend response type: Value. */
export type RoutesCreatePostResponse = import("./reviewed-wire.js").ChatConversationResponse;

/** Backend response type: no-content. */
export type RoutesArchiveDeleteResponse = void;

/** Backend response type: Value. */
export type RoutesGetOneGetResponse = import("./reviewed-wire.js").ChatConversationResponse;

/** Backend request type: UpdateConversation. */
export interface RoutesUpdatePutInput extends JsonObject {
  "title"?: JsonValue | null;
  "description"?: JsonValue | null;
  "settings"?: JsonValue | null;
  "status"?: string | null;
  "expected_version"?: number | null;
}
/** Backend response type: Value. */
export type RoutesUpdatePutResponse = import("./reviewed-wire.js").ChatConversationResponse;

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
export type RoutesAiSendPostResponse = import("./reviewed-wire.js").ChatAiResponse;

/** Backend response type: Value. */
export type RoutesAiRuntimeInputsGetResponse = import("./reviewed-wire.js").ChatRuntimeInputsResponse;

/** Backend request type: CompleteAiRuntimeInput. */
export interface RoutesAiCompleteRuntimeInputPostInput extends JsonObject {
  "value"?: JsonValue;
  "cancelled"?: boolean;
}
/** Backend response type: Value. */
export type RoutesAiCompleteRuntimeInputPostResponse = import("./reviewed-wire.js").ChatRuntimeInputCompletionResponse;

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
  "metadata": JsonValue;
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
export type RoutesMembersGetResponse = import("./reviewed-wire.js").ChatMembersResponse;

/** Backend request type: MemberInput. */
export interface RoutesAddMemberPostInput extends JsonObject {
  "user_id": string;
  "role"?: string;
}
/** Backend response type: Value. */
export type RoutesAddMemberPostResponse = import("./reviewed-wire.js").ChatMemberResponse;

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
export type RoutesMessagesGetResponse = import("./reviewed-wire.js").ChatMessagesResponse;

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
export type RoutesSendPostResponse = import("./reviewed-wire.js").ChatMessageResponse;

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
export type RoutesRealtimeAuthPostResponse = import("./reviewed-wire.js").ChatRealtimeAuthorization;

/** Backend response type: Value. */
export type RoutesRealtimeConfigGetResponse = import("./types.js").ChatRealtimeConfigResponse;

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
export type FitnessGeneratePostResponse = import("./reviewed-wire.js").FitnessGenerationResponse;

/** Backend request type: ExtractIntake. */
export type RoutesExtractIntakePostInput = import("./reviewed-wire.js").FitnessIntakeInput;
/** Backend response type: Value. */
export type RoutesExtractIntakePostResponse = import("./reviewed-wire.js").FitnessIntakeResponse;

/** Backend response type: Value. */
export type RoutesModelsGetApiV1FitnessModelsResponse = import("./reviewed-wire.js").FitnessModelsResponse;

/** Backend request type: Models. */
export interface FitnessSaveSettingsPutInput extends JsonObject {
  "model_ref": string;
  "stt_model_ref": string;
  "tts_model_ref": string;
}
/** Backend response type: Value. */
export type FitnessSaveSettingsPutResponse = import("./reviewed-wire.js").FitnessSettingsResponse;

/** Backend response type: Value. */
export type RoutesStatusGetApiV1ImageStatusResponse = import("./reviewed-wire.js").ImageStatusResponse;

/** Backend response type: Value. */
export type HumanChatNotificationContextGetResponse = import("./personal.js").PersonalChatResponse<import("./personal.js").ChatNotificationContext>;

/** Backend request type: MediaInput. */
export type MemoryImportExtractPostInput = import("./reviewed-wire.js").ImportedMediaInput;
/** Backend response type: Value. */
export type MemoryImportExtractPostResponse = import("./reviewed-wire.js").ImportedMediaResponse;

/** Backend request type: SourceInput. */
export interface MemoryImportSourcePostInput extends JsonObject {
  "user_id": string;
  "organization_id": string;
  "url": string;
}
/** Backend response type: Value. */
export type MemoryImportSourcePostResponse = import("./reviewed-wire.js").ImportedSourceResponse;

/** Backend response type: Vec<LearningMessage>. */
export type RoutesHistoryGetResponse = import("./learning.js").LearningHistoryResponse;

/** Backend request type: Question. */
export interface RoutesAskPostInput extends JsonObject {
  "question": string;
  "idempotency_key": string;
}
/** Backend response type: Value. */
export type RoutesAskPostResponse = import("./learning.js").LearningQuestionResponse;

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
export type RoutesEditPutResponse = import("./reviewed-wire.js").ChatMessageResponse;

/** Backend request type: ReactionInput. */
export interface RoutesReactPostInput extends JsonObject {
  "emoji": string;
}
/** Backend response type: Value. */
export type RoutesReactPostResponse = import("./reviewed-wire.js").ChatReactionResponse;

/** Backend request type: LiveSpeechInput. */
export type RoutesLivePostInput = import("./speech-live.js").LiveSpeechInput;
/** Backend response type: Value. */
export type RoutesLivePostResponse = import("./speech-live.js").LiveSpeechResponse;

/** Backend response type: Value. */
export type RoutesStatusGetApiV1SpeechStatusResponse = import("./reviewed-wire.js").ChatSpeechStatusResponse;

/** Backend request type: binary byte stream. */
export type RoutesTranscribePostInput = Blob | ArrayBuffer | ArrayBufferView;
/** Backend query type: Language. */
export type RoutesTranscribePostQuery = import("./reviewed-wire.js").SpeechTranscriptionQuery;
/** Backend response type: Value. */
export type RoutesTranscribePostResponse = import("./reviewed-wire.js").ChatSpeechTranscriptResponse;

/** Backend request type: TtsInput. */
export type RoutesSynthesizePostInput = import("./types.js").SpeechSynthesisInput;
/** Backend response type: raw-response. */
export type RoutesSynthesizePostResponse = import("./reviewed-wire.js").SpeechAudioBytes;

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
export type RoutesRolesGetResponse = import("./workspace.js").WorkspaceAssistantBindingsResponse;

/** Backend response type: serde_json::Value. */
export type MainHealthGetResponse = import("./personal.js").PersonalChatResponse<import("./personal.js").ChatProcessHealth>;
