import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend request type: legacy::LegacyImportRequest. */
export interface ApiImportModulesPostInput extends JsonObject {
  "dry_run": boolean;
}
/** Backend response type: response without a declared JSON model. */
export interface ApiImportModulesPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiListCategoriesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateCategory. */
export interface ApiCreateCategoryPostInput extends JsonObject {
  "slug": string;
  "name": JsonValue;
  "description": JsonValue;
  "icon"?: string;
  "color"?: string;
  "sort_order": number;
  "status": string;
  "requires_moderation": boolean;
  "metadata": JsonValue;
}
/** Backend response type: response without a declared JSON model. */
export interface ApiCreateCategoryPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiDeleteCategoryDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateCategory. */
export interface ApiUpdateCategoryPatchInput extends JsonObject {
  "slug"?: string;
  "name"?: JsonValue;
  "description"?: JsonValue;
  "icon"?: string;
  "color"?: string;
  "sort_order"?: number;
  "status"?: string;
  "requires_moderation"?: boolean;
  "metadata"?: JsonValue;
}
/** Backend response type: response without a declared JSON model. */
export interface ApiUpdateCategoryPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiDeleteCommentDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateComment. */
export interface ApiUpdateCommentPatchInput extends JsonObject {
  "body": string;
}
/** Backend response type: response without a declared JSON model. */
export interface ApiUpdateCommentPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiRemoveCommentReactionDeleteApiV1CommentsIdLikeResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiLikeCommentPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiRemoveCommentReactionDeleteApiV1CommentsIdReactionResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiCommentReactionsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: SetReaction. */
export interface ApiSetCommentReactionPutInput extends JsonObject {
  "reaction_type": string;
}
/** Backend response type: response without a declared JSON model. */
export interface ApiSetCommentReactionPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiListPostCommentsGetApiV1CommentsPostIdResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateComment. */
export interface ApiCreatePostCommentPostApiV1CommentsPostIdInput extends JsonObject {
  "parent_id"?: string;
  "body": string;
  "requires_moderation": boolean;
}
/** Backend response type: response without a declared JSON model. */
export interface ApiCreatePostCommentPostApiV1CommentsPostIdResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ModerateTarget. */
export interface ApiModeratePostInput extends JsonObject {
  "target_type": string;
  "target_id": string;
  "action": string;
  "reason"?: string;
}
/** Backend response type: response without a declared JSON model. */
export interface ApiModeratePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiModerationQueueGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: FeedQuery. */
export interface ApiListPostsGetQuery extends QueryParams {
  "q"?: string;
  "author_id"?: string;
  "kind"?: string;
  "category_id"?: string;
  "page": number;
  "limit": number;
}
/** Backend response type: response without a declared JSON model. */
export interface ApiListPostsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreatePost. */
export interface ApiCreatePostPostInput extends JsonObject {
  "category_id"?: string;
  "kind": string;
  "visibility": string;
  "title"?: string;
  "body": string;
  "media": JsonValue;
  "metadata": JsonValue;
  "requires_moderation": boolean;
}
/** Backend response type: response without a declared JSON model. */
export interface ApiCreatePostPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiDeletePostDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiGetPostGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdatePost. */
export interface ApiUpdatePostPatchInput extends JsonObject {
  "category_id"?: string;
  "kind"?: string;
  "visibility"?: string;
  "title"?: string;
  "body"?: string;
  "media"?: JsonValue;
  "metadata"?: JsonValue;
}
/** Backend response type: response without a declared JSON model. */
export interface ApiUpdatePostPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiListPostCommentsGetApiV1PostsIdCommentsResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateComment. */
export interface ApiCreatePostCommentPostApiV1PostsIdCommentsInput extends JsonObject {
  "parent_id"?: string;
  "body": string;
  "requires_moderation": boolean;
}
/** Backend response type: response without a declared JSON model. */
export interface ApiCreatePostCommentPostApiV1PostsIdCommentsResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiRemovePostReactionDeleteApiV1PostsIdLikeResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiLikePostPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiRemovePostReactionDeleteApiV1PostsIdReactionResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiPostReactionsGetApiV1PostsIdReactionResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: SetReaction. */
export interface ApiSetPostReactionPutInput extends JsonObject {
  "reaction_type": string;
}
/** Backend response type: response without a declared JSON model. */
export interface ApiSetPostReactionPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiRemovePostReactionDeleteApiV1ReactionsPostIdResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface ApiPostReactionsGetApiV1ReactionsPostIdResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: SetReaction. */
export interface ApiSetPostReactionPostInput extends JsonObject {
  "reaction_type": string;
}
/** Backend response type: response without a declared JSON model. */
export interface ApiSetPostReactionPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateReport. */
export interface ApiCreateReportPostInput extends JsonObject {
  "target_type": string;
  "target_id": string;
  "reason": string;
  "details"?: string;
}
/** Backend response type: response without a declared JSON model. */
export interface ApiCreateReportPostResponse extends ApiEnvelope<JsonValue> {
}

