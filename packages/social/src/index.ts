import { CampaignsApi } from "./campaigns.js";
import { ServiceApi, multipart, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type {
  AnalyticsQuery, SocialTargetCollection, CreateCategoryInput, CreateCommentInput, CreatePostInput, CreateReportInput, FeedQuery, LegacyImportInput, RecordViewInput,
  ModerateTargetInput, ModerationQueueResponse, ReactionSummaryResponse,
  ModerationActionResponse, ModerationAuditQuery, ModerationAuditResponse, SocialReportResponse,
  SetReactionInput, SocialCategoryListResponse, SocialCategoryResponse, SocialCommentListResponse, SocialCommentResponse, SocialPostListResponse,
  SocialPostResponse, SocialReactionResponse, UpdateCategoryInput, UpdateCommentInput, UpdatePostInput, ShareEventInput, CreatorAnalyticsResponse, SocialMediaResponse, FeedLocationPreferenceResponse, SetFeedLocationInput, SetFeedLocationResponse, SocialBookmarksResponse, RecordViewResponse, LegacyImportResponse,
} from "./types.js";

const id = (value: Identifier) => encodeURIComponent(value);

import { SocialOperations } from "./operations.js";
export class SocialApi extends ServiceApi {
  readonly campaigns = new CampaignsApi(this.client);
  readonly operations = new SocialOperations(this.client);
  /**
   * List organization-scoped, non-deleted categories ordered by sort_order and slug; hidden/archived categories are included.
   * @remarks Authorization: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  categories(options?: RequestOptions) { return this.client.get<SocialCategoryListResponse>("/api/v1/categories", undefined, options); }
  /**
   * Upload the first multipart field as JPEG, PNG or WebP (1 byte–12 MiB); full multipart body limit 13 MiB. Returns 201 with UUID, authenticated media URL and content type. Storage must be configured.
   * @remarks Authorization: social:post:create; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param file JPEG, PNG or WebP Blob.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  uploadMedia(file: Blob, options?: RequestOptions<FormData>) { return this.client.post<SocialMediaResponse, FormData>("/api/v1/media/uploads", multipart({ file }), options); }
  /**
   * Create a category (201). Slug normalizes to lowercase ASCII letters/digits/hyphens/underscores, 1–100 bytes. Localized labels, description and metadata remain application JSON.
   * @remarks Authorization: social:category:manage; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param data Typed JSON request; null Option fields follow the documented backend semantics.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  createCategory(data: CreateCategoryInput, options?: RequestOptions<CreateCategoryInput>) { return this.client.post<SocialCategoryResponse, CreateCategoryInput>("/api/v1/categories", data, options); }
  /**
   * Patch supplied category fields. Null and absent Option fields leave stored values unchanged; slug/status validation matches creation.
   * @remarks Authorization: social:category:manage; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param data Typed JSON request; null Option fields follow the documented backend semantics.
   * @param categoryId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  updateCategory(categoryId: Identifier, data: UpdateCategoryInput, options?: RequestOptions<UpdateCategoryInput>) { return this.client.patch<SocialCategoryResponse, UpdateCategoryInput>(`/api/v1/categories/${id(categoryId)}`, data, options); }
  /**
   * Soft-delete the category; returns 204 with no body.
   * @remarks Authorization: social:category:manage; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param categoryId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  deleteCategory(categoryId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/categories/${id(categoryId)}`, options); }
  /**
   * Page visible organization posts with q title/body search, author/category UUID and validated kind filters. Defaults page=1/limit=30, page>=1 and limit 1–100. Saved location ranks nearby posts then posts without decryptable coordinates. Returns data plus required total/page/limit meta.
   * @remarks Authorization: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param params Flat query parameters with backend defaults when omitted.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  feed(params?: FeedQuery, options?: RequestOptions) { return this.client.get<SocialPostListResponse>("/api/v1/posts", params, options); }
  /**
   * Read a non-deleted organization-scoped post visible to its author, moderators or readers of published non-private posts. Bidirectional user blocks hide it with 404.
   * @remarks Authorization: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param postId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  post(postId: Identifier, options?: RequestOptions) { return this.client.get<SocialPostResponse>(`/api/v1/posts/${id(postId)}`, undefined, options); }
  /**
   * Create a post (201), or return the completed identical request_key replay (200). Body is trimmed, 1–50000 characters; creation title truncates to 500 characters. Media array entries must reference owned uploaded IDs. Category entitlements/restrictions and published capability policy apply. Reusing a key for changed content or an unconfirmed request returns 409; retry the same request key.
   * @remarks Authorization: social:post:create; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param data Typed JSON request; null Option fields follow the documented backend semantics.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  createPost(data: CreatePostInput, options?: RequestOptions<CreatePostInput>) { return this.client.post<SocialPostResponse, CreatePostInput>("/api/v1/posts", data, options); }
  /**
   * Update author-owned content; Option nulls leave fields unchanged. Body is 1–50000 characters and supplied title is 1–500. Existing/new category entitlement and media ownership are enforced. Rejected or moderated content returns to review; awaiting-funding lifecycle is preserved.
   * @remarks Authorization: social:post:update_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param data Typed JSON request; null Option fields follow the documented backend semantics.
   * @param postId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  updatePost(postId: Identifier, data: UpdatePostInput, options?: RequestOptions<UpdatePostInput>) { return this.client.patch<SocialPostResponse, UpdatePostInput>(`/api/v1/posts/${id(postId)}`, data, options); }
  /**
   * Soft-delete an author-owned post, or a moderator-authorized post; returns 204.
   * @remarks Authorization: social:post:delete_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param postId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  deletePost(postId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/posts/${id(postId)}`, options); }
  /**
   * Page current actor posts using feed filters and required pagination meta. author_id is overwritten by the authenticated user UUID.
   * @remarks Authorization: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param params Flat query parameters with backend defaults when omitted.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  myPosts(params?: FeedQuery, options?: RequestOptions) { return this.client.get<SocialPostListResponse>("/api/v1/me/posts", params, options); }
  /**
   * Read the authenticated user location preference, returning data:null when unset.
   * @remarks Authorization: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  feedLocation(options?: RequestOptions) { return this.client.get<FeedLocationPreferenceResponse>("/api/v1/me/feed-location", undefined, options); }
  /**
   * Save current user location preference. Coordinates must be finite and within latitude ±90/longitude ±180; range_km must be >0 and <=500. Returns the saved non-null preference.
   * @remarks Authorization: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param data Typed JSON request; null Option fields follow the documented backend semantics.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  setFeedLocation(data: SetFeedLocationInput, options?: RequestOptions<SetFeedLocationInput>) { return this.client.put<SetFeedLocationResponse, SetFeedLocationInput>("/api/v1/me/feed-location", data, options); }
  /**
   * Clear the authenticated user location preference idempotently; returns 204.
   * @remarks Authorization: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  clearFeedLocation(options?: RequestOptions) { return this.client.delete<void>("/api/v1/me/feed-location", options); }
  /**
   * List bookmarked post UUIDs for the authenticated organization/user; this is not a post projection.
   * @remarks Authorization: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  myBookmarks(options?: RequestOptions) { return this.client.get<SocialBookmarksResponse>("/api/v1/me/bookmarks", undefined, options); }
  /**
   * Resubmit author-owned content to the category moderation state; returns the updated post.
   * @remarks Authorization: social:post:update_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param postId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  resubmitPost(postId: Identifier, options?: RequestOptions) { return this.client.post<SocialPostResponse, Record<string, never>>(`/api/v1/posts/${id(postId)}/resubmit`, {}, options); }
  /**
   * Read published non-deleted comments oldest-first after checking parent visibility; no pagination query is consumed.
   * @remarks Authorization: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param postId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  comments(postId: Identifier, options?: RequestOptions) { return this.client.get<SocialCommentListResponse>(`/api/v1/posts/${id(postId)}/comments`, undefined, options); }
  /**
   * Create a post comment (201), checking parent post and optional same-post non-deleted parent comment. Body is trimmed, 1–10000 characters; category moderation/restrictions apply.
   * @remarks Authorization: social:comment:create; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param data Typed JSON request; null Option fields follow the documented backend semantics.
   * @param postId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  createComment(postId: Identifier, data: CreateCommentInput, options?: RequestOptions<CreateCommentInput>) { return this.client.post<SocialCommentResponse, CreateCommentInput>(`/api/v1/posts/${id(postId)}/comments`, data, options); }
  /**
   * Update author-owned comment body (1–10000 trimmed characters). Category moderation can require review.
   * @remarks Authorization: social:comment:update_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param data Typed JSON request; null Option fields follow the documented backend semantics.
   * @param commentId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  updateComment(commentId: Identifier, data: UpdateCommentInput, options?: RequestOptions<UpdateCommentInput>) { return this.client.patch<SocialCommentResponse, UpdateCommentInput>(`/api/v1/comments/${id(commentId)}`, data, options); }
  /**
   * Soft-delete author-owned comment, or a moderator-authorized comment, and refresh counts; returns 204.
   * @remarks Authorization: social:comment:delete_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param commentId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  deleteComment(commentId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/comments/${id(commentId)}`, options); }
  /**
   * Read post reaction totals, counts by reaction type and nullable viewer_reaction after verifying visibility.
   * @remarks Authorization: social:read; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param targetId UUID of the organization-scoped target.
   * @param target Post or comment collection.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  reactions(target: SocialTargetCollection, targetId: Identifier, options?: RequestOptions) { return this.client.get<ReactionSummaryResponse>(`/api/v1/${target}/${id(targetId)}/reaction`, undefined, options); }
  /**
   * Upsert current user post reaction after visibility and restriction checks; type is one of like/love/care/haha/wow/sad/angry.
   * @remarks Authorization: social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param data Typed JSON request; null Option fields follow the documented backend semantics.
   * @param targetId UUID of the organization-scoped target.
   * @param target Post or comment collection.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  setReaction(target: SocialTargetCollection, targetId: Identifier, data: SetReactionInput, options?: RequestOptions<SetReactionInput>) { return this.client.put<SocialReactionResponse, SetReactionInput>(`/api/v1/${target}/${id(targetId)}/reaction`, data, options); }
  /**
   * Remove current user post reaction and refresh counts; returns 204.
   * @remarks Authorization: social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param targetId UUID of the organization-scoped target.
   * @param target Post or comment collection.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  removeReaction(target: SocialTargetCollection, targetId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/${target}/${id(targetId)}/reaction`, options); }
  /**
   * Set the current user post reaction to like, returning the reaction record.
   * @remarks Authorization: social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param targetId UUID of the organization-scoped target.
   * @param target Post or comment collection.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  like(target: SocialTargetCollection, targetId: Identifier, options?: RequestOptions) { return this.client.put<SocialReactionResponse, Record<string, never>>(`/api/v1/${target}/${id(targetId)}/like`, {}, options); }
  /**
   * Remove current user post reaction and refresh counts; returns 204.
   * @remarks Authorization: social:reaction:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param targetId UUID of the organization-scoped target.
   * @param target Post or comment collection.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  unlike(target: SocialTargetCollection, targetId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/${target}/${id(targetId)}/like`, options); }
  /**
   * Idempotently bookmark a visible post for current user; returns 204.
   * @remarks Authorization: social:bookmark:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param postId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  bookmark(postId: Identifier, options?: RequestOptions) { return this.client.put<void, Record<string, never>>(`/api/v1/posts/${id(postId)}/bookmark`, {}, options); }
  /**
   * Remove current user bookmark; returns 204.
   * @remarks Authorization: social:bookmark:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param postId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  unbookmark(postId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/posts/${id(postId)}/bookmark`, options); }
  /**
   * Record a visible post view when visible_ms>=1000; lower values return 400. counted is false for author views or a duplicate user/post/day view.
   * @remarks Authorization: social:view:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param data Typed JSON request; null Option fields follow the documented backend semantics.
   * @param postId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  recordView(postId: Identifier, data: RecordViewInput, options?: RequestOptions<RecordViewInput>) { return this.client.post<RecordViewResponse, RecordViewInput>(`/api/v1/posts/${id(postId)}/views`, data, options); }
  /**
   * Record a visible post share with channel default system and optional idempotency_key; returns 204. Idempotency keys are scoped to organization/user across posts, truncate to 128 characters, and suppress duplicates; channel is trimmed to 1–32 characters.
   * @remarks Authorization: social:share:write; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param data Typed JSON request; null Option fields follow the documented backend semantics.
   * @param postId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  recordShare(postId: Identifier, data: ShareEventInput = {}, options?: RequestOptions<ShareEventInput>) { return this.client.post<void, ShareEventInput>(`/api/v1/posts/${id(postId)}/share-events`, data, options); }
  /**
   * Read current author analytics over inclusive YYYY-MM-DD from/to dates, at most 366 days; defaults to today and preceding 29 days. Returns totals/posts/trend.
   * @remarks Authorization: social:analytics:read_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param params Flat query parameters with backend defaults when omitted.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  myAnalytics(params?: AnalyticsQuery, options?: RequestOptions) { return this.client.get<CreatorAnalyticsResponse>("/api/v1/me/analytics", params, options); }
  /**
   * Read author-only post analytics over inclusive YYYY-MM-DD from/to dates. Defaults to today and preceding 29 days; from<=to and at most 366 days. Returns totals/posts/trend.
   * @remarks Authorization: social:analytics:read_own; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param params Flat query parameters with backend defaults when omitted.
   * @param postId UUID of the organization-scoped target.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  postAnalytics(postId: Identifier, params?: AnalyticsQuery, options?: RequestOptions) { return this.client.get<CreatorAnalyticsResponse>(`/api/v1/posts/${id(postId)}/analytics`, params, options); }
  /**
   * Report a visible post/comment or another user (201). Self user reports return 400; reason is trimmed, 1–64 characters. Returns the complete report record with nullable resolution fields.
   * @remarks Authorization: social:report:create; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param data Typed JSON request; null Option fields follow the documented backend semantics.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  report(data: CreateReportInput, options?: RequestOptions<CreateReportInput>) { return this.client.post<SocialReportResponse, CreateReportInput>("/api/v1/reports", data, options); }
  /**
   * Read pending non-deleted posts/comments and open/reviewing reports; awaiting-funding posts are excluded. Requires either social:moderate or social:moderation:review.
   * @remarks Authorization: social:moderate OR social:moderation:review; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  moderationQueue(options?: RequestOptions) { return this.client.get<ModerationQueueResponse>("/api/v1/moderation/queue", undefined, options); }
  /**
   * Page organization moderation history with optional target_type/action filters; defaults page=1/limit=30 with page>=1 and limit 1–100. Requires either social:moderate or social:moderation:review.
   * @remarks Authorization: social:moderate OR social:moderation:review; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param params Flat query parameters with backend defaults when omitted.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  moderationAudit(params?: ModerationAuditQuery, options?: RequestOptions) { return this.client.get<ModerationAuditResponse>("/api/v1/moderation/audit", params, options); }
  /**
   * Moderate a post/comment/report. Reject/hide require a nonblank reason; resolve/dismiss target reports. Awaiting-funding posts return 409. Returns target_type,target_id,status,action; audit stores previous_status separately. Requires either social:moderate or social:moderation:review.
   * @remarks Authorization: social:moderate OR social:moderation:review; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param data Typed JSON request; null Option fields follow the documented backend semantics.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  moderate(data: ModerateTargetInput, options?: RequestOptions<ModerateTargetInput>) { return this.client.post<ModerationActionResponse, ModerateTargetInput>("/api/v1/moderation/actions", data, options); }
  /**
   * Import legacy Modules social records within the current organization; dry_run defaults true. Returns counters and the explicit legacy reaction mapping; requires social:admin.
   * @remarks Authorization: social:admin; authenticated IDP context via shared FaiberClient; trusted organization context.
   * @param data Typed JSON request; null Option fields follow the documented backend semantics.
   * @param options Axios request settings, including headers, timeout and AbortSignal.
   * @returns Complete Axios response with the named Social wire model or empty 204 body.
   * @throws Axios errors for validation (400), identity (401), permission (403), missing records (404), lifecycle conflicts (409) and transport failures.
   */
  importModules(data: LegacyImportInput = { dry_run: true }, options?: RequestOptions<LegacyImportInput>) { return this.client.post<LegacyImportResponse, LegacyImportInput>("/api/v1/admin/import/modules", data, options); }
}

export * from "@faiber/sdk-core";
export * from "./types.js";
export * from "./operations.js";
export * from "./operations.types.js";

export * from "./admin.types.js";

export * from "./discovery.types.js";

export * from "./contracts.types.js";

export * from "./campaigns.js";
