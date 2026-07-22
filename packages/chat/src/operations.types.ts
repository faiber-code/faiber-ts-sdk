import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: response without a declared JSON model. */
export interface RoutesListGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateConversation. */
export interface RoutesCreatePostInput extends JsonObject {
  "kind": string;
  "slug"?: string;
  "title": JsonValue;
  "description": JsonValue;
  "member_ids": string[];
  "agent_slug": string;
  "settings": JsonValue;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesCreatePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesArchiveDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesGetOneGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateConversation. */
export interface RoutesUpdatePutInput extends JsonObject {
  "title"?: JsonValue;
  "description"?: JsonValue;
  "settings"?: JsonValue;
  "status"?: string;
  "expected_version"?: number;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesUpdatePutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: AiMessage. */
export interface RoutesAiSendPostInput extends JsonObject {
  "message": string;
  "client_id"?: string;
  "model_ref"?: string;
  "profile": JsonValue;
  "props": JsonValue;
  "meta": JsonValue;
  "inputs": JsonValue;
  "knowledge_group_slugs": string[];
  "knowledge_level"?: number;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesAiSendPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesEventsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesMembersGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: MemberInput. */
export interface RoutesAddMemberPostInput extends JsonObject {
  "user_id": string;
  "role": string;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesAddMemberPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesRemoveMemberDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: ListQuery. */
export interface RoutesMessagesGetQuery extends QueryParams {
  "before"?: number;
  "after"?: number;
  "limit"?: number;
  "q"?: string;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesMessagesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: SendMessage. */
export interface RoutesSendPostInput extends JsonObject {
  "message_type": string;
  "content": JsonValue;
  "metadata": JsonValue;
  "reply_to_id"?: string;
  "thread_root_id"?: string;
  "client_id"?: string;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesSendPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ReadInput. */
export interface RoutesReadPostInput extends JsonObject {
  "sequence": number;
  "message_id"?: string;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesReadPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RoutesDeleteMessageDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: EditMessage. */
export interface RoutesEditPutInput extends JsonObject {
  "content": JsonValue;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesEditPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ReactionInput. */
export interface RoutesReactPostInput extends JsonObject {
  "emoji": string;
}
/** Backend response type: response without a declared JSON model. */
export interface RoutesReactPostResponse extends ApiEnvelope<JsonValue> {
}

