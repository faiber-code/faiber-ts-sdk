import type { JsonValue, QueryParams } from "@faiber/sdk-core";

/** Social success envelope; meta is only emitted by paginated handlers. */
export interface SocialResponse<T> { status: "success"; data: T; }
/** Application errors use this envelope; Axum extraction failures may use framework text responses. */
export interface SocialErrorResponse { status: "error"; error: string; }
/** Category localized labels/descriptions, metadata, stored media and claim evidence are deliberately serde_json::Value in the service. They may contain any JSON, including null. */
export type SocialDynamicJson = JsonValue;
export type SocialPostKind = "post" | "question" | "story" | "announcement";
export type SocialVisibility = "public" | "organization" | "private";
export type ModerationStatus = "pending" | "published" | "rejected" | "hidden";
export type ReactionType = "like" | "love" | "care" | "haha" | "wow" | "sad" | "angry";
export type SocialTargetType = "post" | "comment";
export type SocialTargetCollection = "posts" | "comments";
export type SocialReportTargetType = SocialTargetType | "user";
export type SocialModerationTargetType = SocialTargetType | "report";
export type SocialModerationAction = "approve" | "reject" | "hide" | "resolve" | "dismiss";
export type SocialReportStatus = "open" | "reviewing" | "resolved" | "dismissed";
export type SocialCategoryStatus = "active" | "hidden" | "archived";

export interface SocialCategory {
  id: string; organization_id: string; slug: string; name: SocialDynamicJson; description: SocialDynamicJson;
  icon: string | null; color: string | null; sort_order: number; status: SocialCategoryStatus;
  moderate_posts: boolean; moderate_comments: boolean; metadata: SocialDynamicJson; created_at: string; updated_at: string; deleted_at: string | null;
}

export interface SocialPost {
  id: string; organization_id: string; author_user_id: string; category_id: string | null; kind: SocialPostKind;
  visibility: SocialVisibility; title: string | null; body: string; media: SocialDynamicJson;
  metadata: SocialDynamicJson; moderation_status: ModerationStatus; moderation_message: string | null;
  comments_count: number; reactions_count: number; created_at: string; updated_at: string; deleted_at: string | null; lifecycle_status: SocialLifecycleStatus;
}
export interface SocialComment {
  id: string; organization_id: string; post_id: string; parent_id: string | null;
  user_id: string; body: string; moderation_status: ModerationStatus;
  moderation_message: string | null; reactions_count: number; replies_count: number;
  created_at: string; updated_at: string; deleted_at: string | null;
}
export interface SocialReaction {
  id: string; organization_id: string; target_type: SocialTargetType; target_id: string;
  user_id: string; reaction_type: ReactionType; created_at: string; updated_at: string;
}
export interface SocialReport {
  id: string; organization_id: string; reporter_user_id: string; target_type: SocialReportTargetType; target_id: string;
  reason: string; details: string | null; resolved_by: string | null; resolution: string | null; resolved_at: string | null; status: SocialReportStatus;
  created_at: string;
}
export interface SocialListMeta { total: number; page: number; limit: number; }
export interface FeedQuery extends QueryParams { q?: string; author_id?: string; category_id?: string; kind?: SocialPostKind; page?: number; limit?: number; }
export interface FeedLocationPreference { latitude: number; longitude: number; range_km: number; }
export type SetFeedLocationInput = FeedLocationPreference;
export interface CreatePostInput { request_key?:string | null; category_id?: string | null; kind?: SocialPostKind; visibility?: SocialVisibility; title?: string | null; body: string; media?: SocialDynamicJson; metadata?: SocialDynamicJson; capabilities?: SocialCreateCapabilitiesInput | null; }
export type UpdatePostInput = { [K in keyof Omit<CreatePostInput,"request_key"|"capabilities">]?: Omit<CreatePostInput,"request_key"|"capabilities">[K] | null };
export interface CreateCategoryInput { slug: string; name: SocialDynamicJson; description?: SocialDynamicJson; icon?: string | null; color?: string | null; sort_order?: number; status?: SocialCategoryStatus; moderate_posts?: boolean; moderate_comments?: boolean; metadata?: SocialDynamicJson; }
export type UpdateCategoryInput = { [K in keyof CreateCategoryInput]?: CreateCategoryInput[K] | null };
export interface CreateCommentInput { parent_id?: string | null; body: string; }
export interface UpdateCommentInput { body: string; }
export interface SetReactionInput { reaction_type: ReactionType; }
export interface CreateReportInput { target_type: SocialReportTargetType; target_id: string; reason: string; details?: string | null; }
export interface ModerateTargetInput { target_type: SocialModerationTargetType; target_id: string; action: SocialModerationAction; reason?: string | null; }
export interface ReactionSummary { total: number; by_type: Partial<Record<ReactionType, number>>; viewer_reaction: ReactionType | null; }
export interface ShareEventInput { channel?: string; idempotency_key?: string | null; }
export interface RecordViewInput { visible_ms: number; }
export interface RecordViewResult { counted: boolean; }
export interface SocialMedia { id: string; url: string; content_type: string; }
export type SocialMediaResponse = SocialResponse<SocialMedia>;
export interface AnalyticsQuery extends QueryParams { from?: string; to?: string; }
export interface PostAnalytics { post_id: string; views: number; reach: number; reactions: number; comments: number; bookmarks: number; shares: number; }
export interface AnalyticsTrendPoint { date: string; views: number; reach: number; }
export interface CreatorAnalytics { from: string; to: string; totals: Omit<PostAnalytics, "post_id">; posts: PostAnalytics[]; trend: AnalyticsTrendPoint[]; }
export type CreatorAnalyticsResponse = SocialResponse<CreatorAnalytics>;
export interface ModerationQueue { posts: SocialPost[]; comments: SocialComment[]; reports: SocialReport[]; }
export interface ModerationAuditQuery extends QueryParams { target_type?: SocialModerationTargetType; action?: ModerateTargetInput["action"]; page?: number; limit?: number; }
export interface ModerationAuditEntry {
  id: string; organization_id: string; moderator_user_id: string; target_type: SocialModerationTargetType;
  target_id: string; action: ModerateTargetInput["action"]; reason: string | null;
  previous_status: string | null; new_status: string; metadata: SocialDynamicJson; created_at: string;
}
export interface ModerationAuditMeta { total: number; page: number; limit: number; }
export interface ModerationAuditResponse extends SocialResponse<ModerationAuditEntry[]> { meta: ModerationAuditMeta; }
export interface ModerationActionResult { target_type: SocialModerationTargetType; target_id: string; action: ModerateTargetInput["action"]; status: string; }
export interface LegacyImportInput { dry_run?: boolean; }
export interface LegacyImportReport { dry_run: boolean; categories: number; posts: number; comments: number; post_reactions: number; comment_reactions: number; reaction_mappings: LegacyReactionMappings; }
export type SocialPostResponse = SocialResponse<SocialPost>;
export type SocialCategoryResponse = SocialResponse<SocialCategory>;
export type SocialCategoryListResponse = SocialResponse<SocialCategory[]>;
export interface SocialPostListResponse extends SocialResponse<SocialPost[]> { meta: SocialListMeta; }
export type FeedLocationPreferenceResponse = SocialResponse<FeedLocationPreference | null>;
export type SocialCommentResponse = SocialResponse<SocialComment>;
export type SocialCommentListResponse = SocialResponse<SocialComment[]>;
export type SocialReactionResponse = SocialResponse<SocialReaction>;
export type ReactionSummaryResponse = SocialResponse<ReactionSummary>;
export type ModerationQueueResponse = SocialResponse<ModerationQueue>;
export type SocialBookmarksResponse = SocialResponse<string[]>;
export type RecordViewResponse = SocialResponse<RecordViewResult>;
export type SocialReportResponse = SocialResponse<SocialReport>;
export type ModerationActionResponse = SocialResponse<ModerationActionResult>;
export type LegacyImportResponse = SocialResponse<LegacyImportReport>;
/** Used by endpoints that deliberately return 204 or an HTTP redirect without a JSON envelope. */
export type NoContentResponse = void;

/** Signed resource assertions are verified by the service; never accept an unverified resource claim as a relationship. */
export interface SocialSignedAssertionInput {issuer:string;token:string;}
export interface SocialSubjectCapabilityInput {subject_type:string;subject_ref:string;assertion:SocialSignedAssertionInput;}
export type SocialLocationPublicPrecision = "none"|"area"|"district"|"city";
export type SocialLocationAccessPolicy = "author_only"|"authenticated_after_moderation"|"moderators";
export type SocialBountyUnit = "money"|"asset";
export interface SocialLocationCapabilityInput {latitude:number;longitude:number;public_label:string;public_precision?:SocialLocationPublicPrecision;access_policy?:SocialLocationAccessPolicy;navigation_enabled?:boolean;}
export interface SocialBountyCapabilityInput {unit:SocialBountyUnit;code:string;amount:string;expires_at?:string|null;}
export interface SocialLinkedActionInput {action_type:string;resource_ref:string;assertion:SocialSignedAssertionInput;}
export interface SocialCreateCapabilitiesInput {version?:1;subject?:SocialSubjectCapabilityInput|null;location?:SocialLocationCapabilityInput|null;bounty?:SocialBountyCapabilityInput|null;linked_actions?:SocialLinkedActionInput[];}

export interface LegacyReactionMappings { like: "like"; favorite: "love"; dislike: "angry"; bookmark: "like"; share: "like"; }
export type SocialLifecycleStatus = "draft" | "awaiting_funding" | "pending_moderation" | "published" | "resolved" | "expired" | "cancelled" | "disputed";
export interface SocialSessionIdentity { user_id: string; roles: string[]; permissions: string[]; }
export type SocialSessionIdentityResponse = SocialResponse<SocialSessionIdentity>;
export interface SocialHealth { service: "infera-social"; version: string; status: "healthy"; }
export type SocialHealthResponse = SocialResponse<SocialHealth>;
export type SocialBinaryMediaResponse = ArrayBuffer | Uint8Array;
export type SetFeedLocationResponse = SocialResponse<FeedLocationPreference>;
