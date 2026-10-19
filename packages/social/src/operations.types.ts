import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend request type: legacy::LegacyImportRequest. */
export interface ApiImportModulesPostInput extends JsonObject {
  "dry_run"?: boolean;
}
/** Backend response type: legacy::LegacyImportReport. */
export type ApiImportModulesPostResponse = import("./types.js").LegacyImportResponse;

/** Backend response type: SessionIdentity. */
export interface ApiSelfIdentityGetResponseData extends JsonObject {
  "user_id": string;
  "roles": string[];
  "permissions": string[];
}
export interface ApiSelfIdentityGetResponse extends ApiEnvelope<ApiSelfIdentityGetResponseData> {
}

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

/** Backend response type: Value. */
export interface ApiCategoryCapabilityPolicyGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface ApiClaimDetailGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: ContactConsentInput. */
export interface ApiSetContactConsentPutInput extends JsonObject {
  "consented": boolean;
}
/** Backend response type: Value. */
export interface ApiSetContactConsentPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface ApiSelectClaimPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface ApiWithdrawClaimPostResponse extends ApiEnvelope<JsonValue> {
}

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

/** Backend request type: FundingEventInput. */
export interface ApiReceiveFundingEventPostInput extends JsonObject {
  "external_event_id": string;
  "post_id": string;
  "external_reference": string;
  "status": string;
  "unit": string;
  "code": string;
  "amount": string;
}
/** Backend response type: Value. */
export interface ApiReceiveFundingEventPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: AnalyticsQuery. */
export interface ApiMyAnalyticsGetQuery extends QueryParams {
  "from"?: string | null;
  "to"?: string | null;
}
/** Backend response type: Value. */
export type ApiMyAnalyticsGetResponse = import("./types.js").CreatorAnalyticsResponse;

/** Backend response type: Value. */
export type ApiMyBookmarksGetResponse = import("./types.js").SocialBookmarksResponse;

/** Backend query type: ClaimListQuery. */
export interface ApiMyClaimsGetQuery extends QueryParams {
  "page"?: number;
  "limit"?: number;
}
/** Backend response type: Value. */
export interface ApiMyClaimsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: no-content. */
export type ApiClearFeedLocationDeleteResponse = void;

/** Backend response type: Value. */
export interface ApiGetFeedLocationGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: SetFeedLocation. */
export interface ApiSetFeedLocationPutInput extends JsonObject {
  "latitude": number;
  "longitude": number;
  "range_km": number;
}
/** Backend response type: Value. */
export interface ApiSetFeedLocationPutResponse extends ApiEnvelope<JsonValue> {
}

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

/** Backend query type: ClaimListQuery. */
export interface ApiMyPostClaimsGetQuery extends QueryParams {
  "page"?: number;
  "limit"?: number;
}
/** Backend response type: Value. */
export interface ApiMyPostClaimsGetResponse extends ApiEnvelope<JsonValue> {
}

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
export interface ApiCreatePostPostInputCapabilitiesSubjectAssertion extends JsonObject {
  "issuer": string;
  "token": string;
}
export interface ApiCreatePostPostInputCapabilitiesSubject extends JsonObject {
  "subject_type": string;
  "subject_ref": string;
  "assertion": ApiCreatePostPostInputCapabilitiesSubjectAssertion;
}
export interface ApiCreatePostPostInputCapabilitiesLocation extends JsonObject {
  "latitude": number;
  "longitude": number;
  "public_label": string;
  "public_precision"?: string;
  "access_policy"?: string;
  "navigation_enabled"?: boolean;
}
export interface ApiCreatePostPostInputCapabilitiesBounty extends JsonObject {
  "unit": string;
  "code": string;
  "amount": string;
  "expires_at"?: string | null;
}
export interface ApiCreatePostPostInputCapabilitiesLinkedActionsAssertion extends JsonObject {
  "issuer": string;
  "token": string;
}
export interface ApiCreatePostPostInputCapabilitiesLinkedActions extends JsonObject {
  "action_type": string;
  "resource_ref": string;
  "assertion": ApiCreatePostPostInputCapabilitiesLinkedActionsAssertion;
}
export interface ApiCreatePostPostInputCapabilities extends JsonObject {
  "version"?: number;
  "subject"?: ApiCreatePostPostInputCapabilitiesSubject | null;
  "location"?: ApiCreatePostPostInputCapabilitiesLocation | null;
  "bounty"?: ApiCreatePostPostInputCapabilitiesBounty | null;
  "linked_actions"?: ApiCreatePostPostInputCapabilitiesLinkedActions[];
}
export interface ApiCreatePostPostInput extends JsonObject {
  "category_id"?: string | null;
  "kind"?: string;
  "visibility"?: string;
  "title"?: string | null;
  "body": string;
  "media"?: JsonValue;
  "metadata"?: JsonValue;
  "capabilities"?: ApiCreatePostPostInputCapabilities | null;
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
export interface ApiCancelCapabilityPostPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Value. */
export interface ApiPostCapabilitiesGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateClaim. */
export interface ApiCreateClaimPostInput extends JsonObject {
  "message": string;
  "evidence"?: JsonValue;
}
/** Backend response type: Value. */
export interface ApiCreateClaimPostResponse extends ApiEnvelope<JsonValue> {
}

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

/** Backend request type: NavigationAccessInput. */
export interface ApiNavigationAccessPostInput extends JsonObject {
  "reason"?: string | null;
}
/** Backend response type: raw-response. */
export interface ApiNavigationAccessPostResponse extends ApiEnvelope<JsonValue> {
}

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

/** Backend response type: Health. */
export interface MainHealthGetResponseData extends JsonObject {
  "service": string;
  "version": string;
  "status": string;
}
export interface MainHealthGetResponse extends ApiEnvelope<MainHealthGetResponseData> {
}

/** Backend response type: serde_json::Value. */
export type AdminOverviewGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminOverview>;

/** Backend query type: AdminListQuery. */
export type AdminPostsGetQuery = import("./admin.types.js").SocialAdminPostsQuery;
/** Backend response type: serde_json::Value. */
export type AdminPostsGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminPostSummary>;

/** Backend response type: serde_json::Value. */
export type AdminPostDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminPostDetail>;

/** Backend query type: AdminListQuery. */
export type AdminCommentsGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: serde_json::Value. */
export type AdminCommentsGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminComment>;

/** Backend response type: serde_json::Value. */
export type AdminCommentDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminComment>;

/** Backend query type: AdminListQuery. */
export type AdminMediaGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: serde_json::Value. */
export type AdminMediaGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminMedia>;

/** Backend response type: serde_json::Value. */
export type AdminCategoriesGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminCategory[]>;

/** Backend request type: SocialAdminCreateCategoryInput. */
export type AdminCreateCategoryPostInput = import("./admin.types.js").SocialAdminCreateCategoryInput;
/** Backend response type: serde_json::Value. */
export type AdminCreateCategoryPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminCategory>;

/** Backend response type: serde_json::Value. */
export type AdminCategoryDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminCategory>;

/** Backend request type: SocialAdminUpdateCategoryInput. */
export type AdminUpdateCategoryPatchInput = import("./admin.types.js").SocialAdminUpdateCategoryInput;
/** Backend response type: serde_json::Value. */
export type AdminUpdateCategoryPatchResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminCategory>;

/** Backend response type: serde_json::Value. */
export type AdminArchiveCategoryDeleteResponse = void;

/** Backend response type: serde_json::Value. */
export type AdminPoliciesGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminPolicy[]>;

/** Backend request type: PolicyInput. */
export type AdminCreatePolicyPostInput = import("./admin.types.js").SocialAdminPolicyInput;
/** Backend response type: serde_json::Value. */
export type AdminCreatePolicyPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminPolicy>;

/** Backend response type: serde_json::Value. */
export type AdminPolicyDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminPolicy>;

/** Backend request type: PolicyInput. */
export type AdminUpdatePolicyPatchInput = import("./admin.types.js").SocialAdminPolicyInput;
/** Backend response type: serde_json::Value. */
export type AdminUpdatePolicyPatchResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminPolicy>;

/** Backend response type: serde_json::Value. */
export type AdminPublishPolicyPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminPolicy>;

/** Backend response type: serde_json::Value. */
export type AdminModerationQueueGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminModerationQueue>;

/** Backend query type: AdminListQuery. */
export type AdminReportsGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: serde_json::Value. */
export type AdminReportsGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminReport>;

/** Backend response type: serde_json::Value. */
export type AdminReportDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminReport>;

/** Backend query type: AdminListQuery. */
export type AdminClaimsGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: serde_json::Value. */
export type AdminClaimsGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminClaim>;

/** Backend response type: serde_json::Value. */
export type AdminClaimDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminClaim>;

/** Backend request type: SocialAdminReasonInput. */
export type AdminApproveClaimPostInput = import("./admin.types.js").SocialAdminReasonInput;
/** Backend response type: serde_json::Value. */
export type AdminApproveClaimPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminClaimDecision>;

/** Backend request type: SocialAdminReasonInput. */
export type AdminRejectClaimPostInput = import("./admin.types.js").SocialAdminReasonInput;
/** Backend response type: serde_json::Value. */
export type AdminRejectClaimPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminClaimDecision>;

/** Backend query type: AdminListQuery. */
export type AdminBountiesGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: serde_json::Value. */
export type AdminBountiesGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminBounty>;

/** Backend response type: serde_json::Value. */
export type AdminBountyDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminBounty>;

/** Backend request type: SocialAdminReasonInput. */
export type AdminRevealLocationPostInput = import("./admin.types.js").SocialAdminReasonInput;
/** Backend response type: serde_json::Value. */
export type AdminRevealLocationPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminLocation>;

/** Backend query type: AdminListQuery. */
export type AdminActorsGetQuery = import("./admin.types.js").SocialAdminActorsQuery;
/** Backend response type: serde_json::Value. */
export type AdminActorsGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminActor>;

/** Backend response type: serde_json::Value. */
export type AdminActorDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminActorDetail>;

/** Backend query type: AdminListQuery. */
export type AdminRestrictionsGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: serde_json::Value. */
export type AdminRestrictionsGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminRestriction>;

/** Backend request type: SocialAdminCreateRestrictionInput. */
export type AdminCreateRestrictionPostInput = import("./admin.types.js").SocialAdminCreateRestrictionInput;
/** Backend response type: serde_json::Value. */
export type AdminCreateRestrictionPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminRestrictionCreated>;

/** Backend request type: SocialAdminReasonInput. */
export type AdminRevokeRestrictionPostInput = import("./admin.types.js").SocialAdminReasonInput;
/** Backend response type: serde_json::Value. */
export type AdminRevokeRestrictionPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminRestrictionRevoked>;

/** Backend response type: serde_json::Value. */
export type AdminAnalyticsGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminAnalytics>;

/** Backend query type: AdminListQuery. */
export type AdminAuditGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: serde_json::Value. */
export type AdminAuditGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminAudit>;

/** Backend query type: AdminListQuery. */
export type AdminIntegrationsGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: serde_json::Value. */
export type AdminIntegrationsGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminIntegration>;

/** Backend response type: serde_json::Value. */
export type AdminIntegrationDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminIntegration>;

/** Backend request type: SocialAdminReasonInput. */
export type AdminReplayIntegrationPostInput = import("./admin.types.js").SocialAdminReasonInput;
/** Backend response type: serde_json::Value. */
export type AdminReplayIntegrationPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminIntegrationPending>;

/** Backend response type: serde_json::Value. */
export type AdminSettingsGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminSettings>;
