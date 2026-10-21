import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend request type: legacy::LegacyImportRequest. */
export type ApiImportModulesPostInput = import("./types.js").LegacyImportInput;
/** Backend response type: legacy::LegacyImportReport. */
export type ApiImportModulesPostResponse = import("./types.js").LegacyImportResponse;

/** Backend query type: AdminListQuery. */
export type AdminActorsGetQuery = import("./admin.types.js").SocialAdminActorsQuery;
/** Backend response type: Value. */
export type AdminActorsGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminActor>;

/** Backend response type: Value. */
export type AdminActorDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminActorDetail>;

/** Backend response type: Value. */
export type AdminAnalyticsGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminAnalytics>;

/** Backend query type: AdminListQuery. */
export type AdminAuditGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: Value. */
export type AdminAuditGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminAudit>;

/** Backend query type: AdminListQuery. */
export type AdminBountiesGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: Value. */
export type AdminBountiesGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminBounty>;

/** Backend response type: Value. */
export type AdminBountyDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminBounty>;

/** Backend response type: Value. */
export type AdminPoliciesGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminPolicy[]>;

/** Backend request type: PolicyInput. */
export type AdminCreatePolicyPostInput = import("./admin.types.js").SocialAdminPolicyInput;
/** Backend response type: Value. */
export type AdminCreatePolicyPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminPolicy>;

/** Backend response type: Value. */
export type AdminPolicyDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminPolicy>;

/** Backend request type: PolicyInput. */
export type AdminUpdatePolicyPatchInput = import("./admin.types.js").SocialAdminPolicyInput;
/** Backend response type: Value. */
export type AdminUpdatePolicyPatchResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminPolicy>;

/** Backend response type: Value. */
export type AdminPublishPolicyPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminPolicy>;

/** Backend response type: Value. */
export type AdminCategoriesGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminCategory[]>;

/** Backend request type: CreateCategory. */
export type AdminCreateCategoryPostInput = import("./admin.types.js").SocialAdminCreateCategoryInput;
/** Backend response type: Value. */
export type AdminCreateCategoryPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminCategory>;

/** Backend response type: no-content. */
export type AdminArchiveCategoryDeleteResponse = void;

/** Backend response type: Value. */
export type AdminCategoryDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminCategory>;

/** Backend request type: UpdateCategory. */
export type AdminUpdateCategoryPatchInput = import("./admin.types.js").SocialAdminUpdateCategoryInput;
/** Backend response type: Value. */
export type AdminUpdateCategoryPatchResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminCategory>;

/** Backend query type: AdminListQuery. */
export type AdminClaimsGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: Value. */
export type AdminClaimsGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminClaim>;

/** Backend response type: Value. */
export type AdminClaimDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminClaim>;

/** Backend request type: AdminReason. */
export type AdminApproveClaimPostInput = import("./admin.types.js").SocialAdminReasonInput;
/** Backend response type: Value. */
export type AdminApproveClaimPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminClaimDecision>;

/** Backend request type: AdminReason. */
export type AdminRejectClaimPostInput = import("./admin.types.js").SocialAdminReasonInput;
/** Backend response type: Value. */
export type AdminRejectClaimPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminClaimDecision>;

/** Backend query type: AdminListQuery. */
export type AdminCommentsGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: Value. */
export type AdminCommentsGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminComment>;

/** Backend response type: Value. */
export type AdminCommentDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminComment>;

/** Backend query type: AdminListQuery. */
export type AdminIntegrationsGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: Value. */
export type AdminIntegrationsGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminIntegration>;

/** Backend response type: Value. */
export type AdminIntegrationDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminIntegration>;

/** Backend request type: IntegrationReplay. */
export type AdminReplayIntegrationPostInput = import("./admin.types.js").SocialAdminReasonInput;
/** Backend response type: Value. */
export type AdminReplayIntegrationPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminIntegrationPending>;

/** Backend request type: AdminReason. */
export type AdminRevealLocationPostInput = import("./admin.types.js").SocialAdminReasonInput;
/** Backend response type: raw-response. */
export type AdminRevealLocationPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminLocation>;

/** Backend query type: AdminListQuery. */
export type AdminMediaGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: Value. */
export type AdminMediaGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminMedia>;

/** Backend response type: Value. */
export type AdminModerationQueueGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminModerationQueue>;

/** Backend response type: Value. */
export type AdminOverviewGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminOverview>;

/** Backend query type: AdminListQuery. */
export type AdminPostsGetQuery = import("./admin.types.js").SocialAdminPostsQuery;
/** Backend response type: Value. */
export type AdminPostsGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminPostSummary>;

/** Backend response type: Value. */
export type AdminPostDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminPostDetail>;

/** Backend query type: AdminListQuery. */
export type AdminReportsGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: Value. */
export type AdminReportsGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminReport>;

/** Backend response type: Value. */
export type AdminReportDetailGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminReport>;

/** Backend query type: AdminListQuery. */
export type AdminRestrictionsGetQuery = import("./admin.types.js").SocialAdminStatusQuery;
/** Backend response type: Value. */
export type AdminRestrictionsGetResponse = import("./admin.types.js").SocialAdminPage<import("./admin.types.js").SocialAdminRestriction>;

/** Backend request type: CreateRestriction. */
export type AdminCreateRestrictionPostInput = import("./admin.types.js").SocialAdminCreateRestrictionInput;
/** Backend response type: Value. */
export type AdminCreateRestrictionPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminRestrictionCreated>;

/** Backend request type: AdminReason. */
export type AdminRevokeRestrictionPostInput = import("./admin.types.js").SocialAdminReasonInput;
/** Backend response type: Value. */
export type AdminRevokeRestrictionPostResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminRestrictionRevoked>;

/** Backend response type: Value. */
export type AdminSettingsGetResponse = import("./admin.types.js").SocialAdminResponse<import("./admin.types.js").SocialAdminSettings>;

/** Backend response type: SessionIdentity. */
export type ApiSelfIdentityGetResponse = import("./types.js").SocialSessionIdentityResponse;

/** Backend response type: no-content. */
export type DiscoveryUnblockDeleteResponse = void;

/** Backend response type: no-content. */
export type DiscoveryBlockPutResponse = void;

/** Backend response type: Value. */
export type ApiListCategoriesGetResponse = import("./types.js").SocialCategoryListResponse;

/** Backend request type: CreateCategory. */
export type ApiCreateCategoryPostInput = import("./types.js").CreateCategoryInput;
/** Backend response type: Value. */
export type ApiCreateCategoryPostResponse = import("./types.js").SocialCategoryResponse;

/** Backend response type: no-content. */
export type ApiDeleteCategoryDeleteResponse = void;

/** Backend request type: UpdateCategory. */
export type ApiUpdateCategoryPatchInput = import("./types.js").UpdateCategoryInput;
/** Backend response type: Value. */
export type ApiUpdateCategoryPatchResponse = import("./types.js").SocialCategoryResponse;

/** Backend response type: Value. */
export type ApiCategoryCapabilityPolicyGetResponse = import("./contracts.types.js").SocialCategoryCapabilityPolicyResponse;

/** Backend response type: Value. */
export type ApiClaimDetailGetResponse = import("./contracts.types.js").SocialClaimDetailResponse;

/** Backend request type: ContactConsentInput. */
export type ApiSetContactConsentPutInput = import("./contracts.types.js").SocialContactConsentInput;
/** Backend response type: Value. */
export type ApiSetContactConsentPutResponse = import("./contracts.types.js").SocialContactConsentResponse;

/** Backend response type: Value. */
export type ApiSelectClaimPostResponse = import("./contracts.types.js").SocialClaimSelectedResponse;

/** Backend response type: Value. */
export type ApiWithdrawClaimPostResponse = import("./contracts.types.js").SocialClaimWithdrawnResponse;

/** Backend response type: no-content. */
export type ApiDeleteCommentDeleteResponse = void;

/** Backend request type: UpdateComment. */
export type ApiUpdateCommentPatchInput = import("./types.js").UpdateCommentInput;
/** Backend response type: Value. */
export type ApiUpdateCommentPatchResponse = import("./types.js").SocialCommentResponse;

/** Backend response type: no-content. */
export type ApiRemoveCommentReactionDeleteApiV1CommentsIdLikeResponse = void;

/** Backend response type: Value. */
export type ApiLikeCommentPutResponse = import("./types.js").SocialReactionResponse;

/** Backend response type: no-content. */
export type ApiRemoveCommentReactionDeleteApiV1CommentsIdReactionResponse = void;

/** Backend response type: ReactionSummary. */
export type ApiCommentReactionsGetResponse = import("./types.js").ReactionSummaryResponse;

/** Backend request type: SetReaction. */
export type ApiSetCommentReactionPutInput = import("./types.js").SetReactionInput;
/** Backend response type: Value. */
export type ApiSetCommentReactionPutResponse = import("./types.js").SocialReactionResponse;

/** Backend response type: Value. */
export type ApiListPostCommentsGetApiV1CommentsPostIdResponse = import("./types.js").SocialCommentListResponse;

/** Backend request type: CreateComment. */
export type ApiCreatePostCommentPostApiV1CommentsPostIdInput = import("./types.js").CreateCommentInput;
/** Backend response type: Value. */
export type ApiCreatePostCommentPostApiV1CommentsPostIdResponse = import("./types.js").SocialCommentResponse;

/** Backend response type: no-content. */
export type DiscoveryUnfollowDeleteResponse = void;

/** Backend response type: Value. */
export type DiscoveryRelationshipGetResponse = import("./discovery.types.js").SocialGraphResponse<import("./discovery.types.js").SocialRelationship>;

/** Backend response type: no-content. */
export type DiscoveryFollowPutResponse = void;

/** Backend request type: FundingEventInput. */
export type ApiReceiveFundingEventPostInput = import("./contracts.types.js").SocialFundingEventInput;
/** Backend response type: Value. */
export type ApiReceiveFundingEventPostResponse = import("./contracts.types.js").SocialFundingEventResponse;

/** Backend response type: Value. */
export type DiscoveryOutboxGetResponse = import("./discovery.types.js").SocialGraphResponse<import("./discovery.types.js").SocialNotificationOutboxEvent[]>;

/** Backend response type: no-content. */
export type DiscoveryAckPutResponse = void;

/** Backend request type: PlaceEvent. */
export type DiscoveryPlaceEventPostInput = import("./discovery.types.js").SocialPlaceEventInput;
/** Backend response type: no-content. */
export type DiscoveryPlaceEventPostResponse = void;

/** Backend query type: AnalyticsQuery. */
export type ApiMyAnalyticsGetQuery = import("./types.js").AnalyticsQuery;
/** Backend response type: Value. */
export type ApiMyAnalyticsGetResponse = import("./types.js").CreatorAnalyticsResponse;

/** Backend response type: Value. */
export type ApiMyBookmarksGetResponse = import("./types.js").SocialBookmarksResponse;

/** Backend query type: ClaimListQuery. */
export type ApiMyClaimsGetQuery = import("./contracts.types.js").SocialClaimListQuery;
/** Backend response type: Value. */
export type ApiMyClaimsGetResponse = import("./contracts.types.js").SocialClaimPageResponse;

/** Backend response type: no-content. */
export type ApiClearFeedLocationDeleteResponse = void;

/** Backend response type: Value. */
export type ApiGetFeedLocationGetResponse = import("./types.js").FeedLocationPreferenceResponse;

/** Backend request type: SetFeedLocation. */
export type ApiSetFeedLocationPutInput = import("./types.js").SetFeedLocationInput;
/** Backend response type: Value. */
export type ApiSetFeedLocationPutResponse = import("./types.js").SetFeedLocationResponse;

/** Backend response type: Value. */
export type DiscoveryPreferencesGetResponse = import("./discovery.types.js").SocialGraphResponse<import("./discovery.types.js").SocialNotificationPreferences>;

/** Backend request type: Value. */
export type DiscoverySetPreferencesPutInput = import("./discovery.types.js").SocialNotificationPreferencesInput;
/** Backend response type: Value. */
export type DiscoverySetPreferencesPutResponse = import("./discovery.types.js").SocialGraphResponse<import("./discovery.types.js").SocialNotificationPreferences>;

/** Backend query type: FeedQuery. */
export type ApiListMyPostsGetQuery = import("./types.js").FeedQuery;
/** Backend response type: Value. */
export type ApiListMyPostsGetResponse = import("./types.js").SocialPostListResponse;

/** Backend query type: ClaimListQuery. */
export type ApiMyPostClaimsGetQuery = import("./contracts.types.js").SocialClaimListQuery;
/** Backend response type: Value. */
export type ApiMyPostClaimsGetResponse = import("./contracts.types.js").SocialClaimPageResponse;

/** Backend response type: raw-response. */
export type ApiGetMediaGetResponse = import("./types.js").SocialBinaryMediaResponse;

/** Backend request type: multipart/form-data. */
export type ApiUploadMediaPostInput = FormData;
/** Backend response type: Value. */
export type ApiUploadMediaPostResponse = import("./types.js").SocialMediaResponse;

/** Backend request type: ModerateTarget. */
export type ApiModeratePostInput = import("./types.js").ModerateTargetInput;
/** Backend response type: Value. */
export type ApiModeratePostResponse = import("./types.js").ModerationActionResponse;

/** Backend query type: ModerationAuditQuery. */
export type ApiModerationAuditGetQuery = import("./types.js").ModerationAuditQuery;
/** Backend response type: Value. */
export type ApiModerationAuditGetResponse = import("./types.js").ModerationAuditResponse;

/** Backend response type: Value. */
export type ApiModerationQueueGetResponse = import("./types.js").ModerationQueueResponse;

/** Backend query type: FeedQuery. */
export type ApiListPostsGetQuery = import("./types.js").FeedQuery;
/** Backend response type: Value. */
export type ApiListPostsGetResponse = import("./types.js").SocialPostListResponse;

/** Backend request type: CreatePost. */
export type ApiCreatePostPostInput = import("./types.js").CreatePostInput;
/** Backend response type: Value. */
export type ApiCreatePostPostResponse = import("./types.js").SocialPostResponse;

/** Backend response type: no-content. */
export type ApiDeletePostDeleteResponse = void;

/** Backend response type: Value. */
export type ApiGetPostGetResponse = import("./types.js").SocialPostResponse;

/** Backend request type: UpdatePost. */
export type ApiUpdatePostPatchInput = import("./types.js").UpdatePostInput;
/** Backend response type: Value. */
export type ApiUpdatePostPatchResponse = import("./types.js").SocialPostResponse;

/** Backend query type: AnalyticsQuery. */
export type ApiPostAnalyticsGetQuery = import("./types.js").AnalyticsQuery;
/** Backend response type: Value. */
export type ApiPostAnalyticsGetResponse = import("./types.js").CreatorAnalyticsResponse;

/** Backend response type: no-content. */
export type ApiUnbookmarkPostDeleteResponse = void;

/** Backend response type: no-content. */
export type ApiBookmarkPostPutResponse = void;

/** Backend response type: Value. */
export type ApiCancelCapabilityPostPostResponse = import("./contracts.types.js").SocialPostCancelledResponse;

/** Backend response type: Value. */
export type ApiPostCapabilitiesGetResponse = import("./contracts.types.js").SocialCapabilitiesResponse;

/** Backend request type: CreateClaim. */
export type ApiCreateClaimPostInput = import("./contracts.types.js").SocialCreateClaimInput;
/** Backend response type: Value. */
export type ApiCreateClaimPostResponse = import("./contracts.types.js").SocialClaimCreatedResponse;

/** Backend response type: Value. */
export type ApiListPostCommentsGetApiV1PostsIdCommentsResponse = import("./types.js").SocialCommentListResponse;

/** Backend request type: CreateComment. */
export type ApiCreatePostCommentPostApiV1PostsIdCommentsInput = import("./types.js").CreateCommentInput;
/** Backend response type: Value. */
export type ApiCreatePostCommentPostApiV1PostsIdCommentsResponse = import("./types.js").SocialCommentResponse;

/** Backend response type: no-content. */
export type ApiRemovePostReactionDeleteApiV1PostsIdLikeResponse = void;

/** Backend response type: Value. */
export type ApiLikePostPutResponse = import("./types.js").SocialReactionResponse;

/** Backend request type: NavigationAccessInput. */
export type ApiNavigationAccessPostInput = import("./contracts.types.js").SocialNavigationAccessInput;
/** Backend response type: raw-response. */
export type ApiNavigationAccessPostResponse = import("./contracts.types.js").SocialNavigationAccessResponse;

/** Backend response type: no-content. */
export type ApiRemovePostReactionDeleteApiV1PostsIdReactionResponse = void;

/** Backend response type: ReactionSummary. */
export type ApiPostReactionsGetApiV1PostsIdReactionResponse = import("./types.js").ReactionSummaryResponse;

/** Backend request type: SetReaction. */
export type ApiSetPostReactionPutInput = import("./types.js").SetReactionInput;
/** Backend response type: Value. */
export type ApiSetPostReactionPutResponse = import("./types.js").SocialReactionResponse;

/** Backend response type: Value. */
export type ApiResubmitPostPostResponse = import("./types.js").SocialPostResponse;

/** Backend request type: ShareEvent. */
export type ApiRecordShareEventPostInput = import("./types.js").ShareEventInput;
/** Backend response type: no-content. */
export type ApiRecordShareEventPostResponse = void;

/** Backend request type: RecordView. */
export type ApiRecordPostViewPostInput = import("./types.js").RecordViewInput;
/** Backend response type: Value. */
export type ApiRecordPostViewPostResponse = import("./types.js").RecordViewResponse;

/** Backend response type: raw-response. */
export type DiscoveryMediaGetResponse = ArrayBuffer | Uint8Array;

/** Backend query type: Feed. */
export type DiscoveryFeedGetQuery = import("./discovery.types.js").SocialDiscoveryFeedQuery;
/** Backend response type: Value. */
export type DiscoveryFeedGetResponse = import("./discovery.types.js").SocialDiscoveryResponse<import("./discovery.types.js").SocialDiscoveryPost[]>;

/** Backend response type: Value. */
export type DiscoveryPostDetailGetResponse = import("./discovery.types.js").SocialDiscoveryResponse<import("./discovery.types.js").SocialDiscoveryPost>;

/** Backend response type: Value. */
export type DiscoveryCommentsGetResponse = import("./discovery.types.js").SocialDiscoveryResponse<import("./discovery.types.js").SocialDiscoveryComment[]>;

/** Backend response type: no-content. */
export type ApiRemovePostReactionDeleteApiV1ReactionsPostIdResponse = void;

/** Backend response type: ReactionSummary. */
export type ApiPostReactionsGetApiV1ReactionsPostIdResponse = import("./types.js").ReactionSummaryResponse;

/** Backend request type: SetReaction. */
export type ApiSetPostReactionPostInput = import("./types.js").SetReactionInput;
/** Backend response type: Value. */
export type ApiSetPostReactionPostResponse = import("./types.js").SocialReactionResponse;

/** Backend request type: CreateReport. */
export type ApiCreateReportPostInput = import("./types.js").CreateReportInput;
/** Backend response type: Value. */
export type ApiCreateReportPostResponse = import("./types.js").SocialReportResponse;

/** Backend response type: Health. */
export type MainHealthGetResponse = import("./types.js").SocialHealthResponse;
