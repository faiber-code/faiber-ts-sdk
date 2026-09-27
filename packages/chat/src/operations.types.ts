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
export interface RoutesListManagedAssistantsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateAssistant. */
export interface RoutesCreateAssistantPostInputCustomerActions extends JsonObject {
  "id": string;
  "label": Record<string, JsonValue>;
  "kind": string;
  "content_type"?: string | null;
  "content_id"?: string | null;
  "url": string;
  "style": string;
  "open_in_new_tab": boolean;
  "enabled": boolean;
}
export interface RoutesCreateAssistantPostInput extends JsonObject {
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
export interface RoutesGetManagedAssistantGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateAssistant. */
export interface RoutesUpdateAssistantPutInputCustomerActions extends JsonObject {
  "id": string;
  "label": Record<string, JsonValue>;
  "kind": string;
  "content_type"?: string | null;
  "content_id"?: string | null;
  "url": string;
  "style": string;
  "open_in_new_tab": boolean;
  "enabled": boolean;
}
export interface RoutesUpdateAssistantPutInput extends JsonObject {
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
  "expected_version"?: number | null;
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
export interface RoutesListAssistantsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface RoutesGetAssistantGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: entity::attachment::Model. */
export interface RoutesCompleteAttachmentPostResponseData extends JsonObject {
  "id": string;
  "organization_id": string;
  "conversation_id": string;
  "message_id"?: string | null;
  "uploader_id"?: string | null;
  "storage_provider": string;
  "bucket": string;
  "object_key": string;
  "cdn_url": string;
  "file_name": string;
  "media_type": string;
  "byte_size": number;
  "checksum_sha256"?: string | null;
  "status": string;
  "metadata": BackendJson<"Json">;
  "legacy_source"?: string | null;
  "legacy_id"?: number | null;
  "created_at": string;
  "updated_at": string;
  "deleted_at"?: string | null;
}
export interface RoutesCompleteAttachmentPostResponse extends ApiEnvelope<RoutesCompleteAttachmentPostResponseData> {
}

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
  "message_id"?: string | null;
  "uploader_id"?: string | null;
  "storage_provider": string;
  "bucket": string;
  "object_key": string;
  "cdn_url": string;
  "file_name": string;
  "media_type": string;
  "byte_size": number;
  "checksum_sha256"?: string | null;
  "status": string;
  "metadata": BackendJson<"Json">;
  "legacy_source"?: string | null;
  "legacy_id"?: number | null;
  "created_at": string;
  "updated_at": string;
  "deleted_at"?: string | null;
}
export interface RoutesCreateAttachmentPostResponseData extends JsonObject {
  "attachment": RoutesCreateAttachmentPostResponseDataAttachment;
  "upload_url": string;
  "expires_in_seconds": number;
}
export interface RoutesCreateAttachmentPostResponse extends ApiEnvelope<RoutesCreateAttachmentPostResponseData> {
}

/** Backend response type: stream. */
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
export interface RoutesRealtimeAuthPostResponse { auth: string }

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

/** Backend response type: serde_json::Value. */
export interface MainHealthGetResponse extends ApiEnvelope<JsonValue> {
}

/** Raw attachment bytes accepted by authenticated completion. */
export type AttachmentUploadBody = Blob | ArrayBuffer | Uint8Array;
/** Browser ArrayBuffer or Node Uint8Array returned by the binary transport. */
export type RoutesDownloadAttachmentGetResponse = ArrayBuffer | Uint8Array;
