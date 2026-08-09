import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend request type: legacy::LegacyImportRequest. */
export interface ApiImportModulesPostInput extends JsonObject {
  "dry_run"?: boolean;
}
/** Backend response type: legacy::LegacyImportReport. */
export type ApiImportModulesPostResponse = import("./types.js").LegacyImportResponse;

/** Backend response type: Value. */
export type ApiListCategoriesGetResponse = import("./types.js").SocialCategoryListResponse;

/** Backend request type: CreateCategory. */
export interface ApiCreateCategoryPostInput extends JsonObject {
  "slug": string;
  "name": JsonValue;
  "description"?: JsonValue;
  "icon"?: string | null;
  "color"?: string | null;
  "sort_order"?: number;
  "status"?: string;
  "moderate_posts"?: boolean;
  "moderate_comments"?: boolean;
  "metadata"?: JsonValue;
}
/** Backend response type: Value. */
export type ApiCreateCategoryPostResponse = import("./types.js").SocialCategoryResponse;

/** Backend response type: no-content. */
export type ApiDeleteCategoryDeleteResponse = import("./types.js").NoContentResponse;

/** Backend request type: UpdateCategory. */
export interface ApiUpdateCategoryPatchInput extends JsonObject {
  "slug"?: string | null;
  "name"?: JsonValue | null;
  "description"?: JsonValue | null;
  "icon"?: string | null;
  "color"?: string | null;
  "sort_order"?: number | null;
  "status"?: string | null;
  "moderate_posts"?: boolean | null;
  "moderate_comments"?: boolean | null;
  "metadata"?: JsonValue | null;
}
/** Backend response type: Value. */
export type ApiUpdateCategoryPatchResponse = import("./types.js").SocialCategoryResponse;

/** Backend response type: no-content. */
export type ApiDeleteCommentDeleteResponse = import("./types.js").NoContentResponse;

/** Backend request type: UpdateComment. */
export interface ApiUpdateCommentPatchInput extends JsonObject {
  "body": string;
}
/** Backend response type: Value. */
export type ApiUpdateCommentPatchResponse = import("./types.js").SocialCommentResponse;

/** Backend response type: no-content. */
export type ApiRemoveCommentReactionDeleteApiV1CommentsIdLikeResponse = import("./types.js").NoContentResponse;

/** Backend response type: Value. */
export type ApiLikeCommentPutResponse = import("./types.js").SocialReactionResponse;

/** Backend response type: no-content. */
export type ApiRemoveCommentReactionDeleteApiV1CommentsIdReactionResponse = import("./types.js").NoContentResponse;

/** Backend response type: ReactionSummary. */
export type ApiCommentReactionsGetResponse = import("./types.js").ReactionSummaryResponse;

/** Backend request type: SetReaction. */
export interface ApiSetCommentReactionPutInput extends JsonObject {
  "reaction_type": string;
}
/** Backend response type: Value. */
export type ApiSetCommentReactionPutResponse = import("./types.js").SocialReactionResponse;

/** Backend response type: Value. */
export type ApiListPostCommentsGetApiV1CommentsPostIdResponse = import("./types.js").SocialCommentListResponse;

/** Backend request type: CreateComment. */
export interface ApiCreatePostCommentPostApiV1CommentsPostIdInput extends JsonObject {
  "parent_id"?: string | null;
  "body": string;
}
/** Backend response type: Value. */
export type ApiCreatePostCommentPostApiV1CommentsPostIdResponse = import("./types.js").SocialCommentResponse;

/** Backend query type: AnalyticsQuery. */
export interface ApiMyAnalyticsGetQuery extends QueryParams {
  "from"?: string | null;
  "to"?: string | null;
}
/** Backend response type: Value. */
export type ApiMyAnalyticsGetResponse = import("./types.js").CreatorAnalyticsResponse;

/** Backend response type: Value. */
export type ApiMyBookmarksGetResponse = import("./types.js").SocialBookmarksResponse;

/** Backend query type: FeedQuery. */
export interface ApiListMyPostsGetQuery extends QueryParams {
  "q"?: string | null;
  "author_id"?: string | null;
  "kind"?: string | null;
  "category_id"?: string | null;
  "page"?: number;
  "limit"?: number;
}
/** Backend response type: Value. */
export type ApiListMyPostsGetResponse = import("./types.js").SocialPostListResponse;

/** Backend response type: raw-response. */
export type ApiGetMediaGetResponse = import("./types.js").NoContentResponse;

/** Backend request type: multipart/form-data. */
export type ApiUploadMediaPostInput = FormData;
/** Backend response type: Value. */
export type ApiUploadMediaPostResponse = import("./types.js").SocialMediaResponse;

/** Backend request type: ModerateTarget. */
export interface ApiModeratePostInput extends JsonObject {
  "target_type": string;
  "target_id": string;
  "action": string;
  "reason"?: string | null;
}
/** Backend response type: Value. */
export type ApiModeratePostResponse = import("./types.js").ModerationActionResponse;

/** Backend query type: ModerationAuditQuery. */
export interface ApiModerationAuditGetQuery extends QueryParams {
  "target_type"?: string | null;
  "action"?: string | null;
  "page"?: number;
  "limit"?: number;
}
/** Backend response type: Value. */
export type ApiModerationAuditGetResponse = import("./types.js").ModerationAuditResponse;

/** Backend response type: Value. */
export type ApiModerationQueueGetResponse = import("./types.js").ModerationQueueResponse;

/** Backend query type: FeedQuery. */
export interface ApiListPostsGetQuery extends QueryParams {
  "q"?: string | null;
  "author_id"?: string | null;
  "kind"?: string | null;
  "category_id"?: string | null;
  "page"?: number;
  "limit"?: number;
}
/** Backend response type: Value. */
export type ApiListPostsGetResponse = import("./types.js").SocialPostListResponse;

/** Backend request type: CreatePost. */
export interface ApiCreatePostPostInput extends JsonObject {
  "category_id"?: string | null;
  "kind"?: string;
  "visibility"?: string;
  "title"?: string | null;
  "body": string;
  "media"?: JsonValue;
  "metadata"?: JsonValue;
}
/** Backend response type: Value. */
export type ApiCreatePostPostResponse = import("./types.js").SocialPostResponse;

/** Backend response type: no-content. */
export type ApiDeletePostDeleteResponse = import("./types.js").NoContentResponse;

/** Backend response type: Value. */
export type ApiGetPostGetResponse = import("./types.js").SocialPostResponse;

/** Backend request type: UpdatePost. */
export interface ApiUpdatePostPatchInput extends JsonObject {
  "category_id"?: string | null;
  "kind"?: string | null;
  "visibility"?: string | null;
  "title"?: string | null;
  "body"?: string | null;
  "media"?: JsonValue | null;
  "metadata"?: JsonValue | null;
}
/** Backend response type: Value. */
export type ApiUpdatePostPatchResponse = import("./types.js").SocialPostResponse;

/** Backend query type: AnalyticsQuery. */
export interface ApiPostAnalyticsGetQuery extends QueryParams {
  "from"?: string | null;
  "to"?: string | null;
}
/** Backend response type: Value. */
export type ApiPostAnalyticsGetResponse = import("./types.js").CreatorAnalyticsResponse;

/** Backend response type: no-content. */
export type ApiUnbookmarkPostDeleteResponse = import("./types.js").NoContentResponse;

/** Backend response type: no-content. */
export type ApiBookmarkPostPutResponse = import("./types.js").NoContentResponse;

/** Backend response type: Value. */
export type ApiListPostCommentsGetApiV1PostsIdCommentsResponse = import("./types.js").SocialCommentListResponse;

/** Backend request type: CreateComment. */
export interface ApiCreatePostCommentPostApiV1PostsIdCommentsInput extends JsonObject {
  "parent_id"?: string | null;
  "body": string;
}
/** Backend response type: Value. */
export type ApiCreatePostCommentPostApiV1PostsIdCommentsResponse = import("./types.js").SocialCommentResponse;

/** Backend response type: no-content. */
export type ApiRemovePostReactionDeleteApiV1PostsIdLikeResponse = import("./types.js").NoContentResponse;

/** Backend response type: Value. */
export type ApiLikePostPutResponse = import("./types.js").SocialReactionResponse;

/** Backend response type: no-content. */
export type ApiRemovePostReactionDeleteApiV1PostsIdReactionResponse = import("./types.js").NoContentResponse;

/** Backend response type: ReactionSummary. */
export type ApiPostReactionsGetApiV1PostsIdReactionResponse = import("./types.js").ReactionSummaryResponse;

/** Backend request type: SetReaction. */
export interface ApiSetPostReactionPutInput extends JsonObject {
  "reaction_type": string;
}
/** Backend response type: Value. */
export type ApiSetPostReactionPutResponse = import("./types.js").SocialReactionResponse;

/** Backend response type: Value. */
export type ApiResubmitPostPostResponse = import("./types.js").SocialPostResponse;

/** Backend request type: ShareEvent. */
export interface ApiRecordShareEventPostInput extends JsonObject {
  "channel"?: string;
  "idempotency_key"?: string | null;
}
/** Backend response type: no-content. */
export type ApiRecordShareEventPostResponse = import("./types.js").NoContentResponse;

/** Backend request type: RecordView. */
export interface ApiRecordPostViewPostInput extends JsonObject {
  "visible_ms": number;
}
/** Backend response type: Value. */
export type ApiRecordPostViewPostResponse = import("./types.js").RecordViewResponse;

/** Backend response type: no-content. */
export type ApiRemovePostReactionDeleteApiV1ReactionsPostIdResponse = import("./types.js").NoContentResponse;

/** Backend response type: ReactionSummary. */
export type ApiPostReactionsGetApiV1ReactionsPostIdResponse = import("./types.js").ReactionSummaryResponse;

/** Backend request type: SetReaction. */
export interface ApiSetPostReactionPostInput extends JsonObject {
  "reaction_type": string;
}
/** Backend response type: Value. */
export type ApiSetPostReactionPostResponse = import("./types.js").SocialReactionResponse;

/** Backend request type: CreateReport. */
export interface ApiCreateReportPostInput extends JsonObject {
  "target_type": string;
  "target_id": string;
  "reason": string;
  "details"?: string | null;
}
/** Backend response type: Value. */
export type ApiCreateReportPostResponse = import("./types.js").SocialReportResponse;

