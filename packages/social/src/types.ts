import type { ApiEnvelope, JsonValue, QueryParams } from "@faiber/sdk-core";

export type SocialPostKind = "post" | "question" | "story" | "announcement";
export type SocialVisibility = "public" | "organization" | "private";
export type ModerationStatus = "pending" | "published" | "rejected" | "hidden";
export type ReactionType = "like" | "love" | "care" | "haha" | "wow" | "sad" | "angry";
export type SocialTargetType = "post" | "comment";
export type SocialCategoryStatus = "active" | "hidden" | "archived";

export interface SocialCategory {
  id: string; organization_id: string; slug: string; name: JsonValue; description: JsonValue;
  icon?: string | null; color?: string | null; sort_order: number; status: SocialCategoryStatus;
  moderate_posts: boolean; moderate_comments: boolean; metadata: JsonValue; created_at: string; updated_at: string;
}

export interface SocialPost {
  id: string; organization_id: string; author_user_id: string; category_id?: string | null; kind: SocialPostKind;
  visibility: SocialVisibility; title?: string | null; body: string; media: JsonValue;
  metadata: JsonValue; moderation_status: ModerationStatus; moderation_message?: string | null;
  comments_count: number; reactions_count: number; created_at: string; updated_at: string;
}
export interface SocialComment {
  id: string; organization_id: string; post_id: string; parent_id?: string | null;
  user_id: string; body: string; moderation_status: ModerationStatus;
  moderation_message?: string | null; reactions_count: number; replies_count: number;
  created_at: string; updated_at: string;
}
export interface SocialReaction {
  id: string; organization_id: string; target_type: SocialTargetType; target_id: string;
  user_id: string; reaction_type: ReactionType; created_at: string; updated_at: string;
}
export interface SocialReport {
  id: string; reporter_user_id: string; target_type: SocialTargetType; target_id: string;
  reason: string; details?: string | null; status: "open" | "reviewing" | "resolved" | "dismissed";
  created_at: string;
}
export interface SocialListMeta { total: number; page: number; limit: number; }
export interface FeedQuery extends QueryParams { q?: string; author_id?: string; category_id?: string; kind?: SocialPostKind; page?: number; limit?: number; }
export interface CreatePostInput { category_id?: string; kind?: SocialPostKind; visibility?: SocialVisibility; title?: string; body: string; media?: JsonValue; metadata?: JsonValue; }
export interface UpdatePostInput extends Partial<CreatePostInput> {}
export interface CreateCategoryInput { slug: string; name: JsonValue; description?: JsonValue; icon?: string; color?: string; sort_order?: number; status?: SocialCategoryStatus; moderate_posts?: boolean; moderate_comments?: boolean; metadata?: JsonValue; }
export interface UpdateCategoryInput extends Partial<CreateCategoryInput> {}
export interface CreateCommentInput { parent_id?: string; body: string; }
export interface UpdateCommentInput { body: string; }
export interface SetReactionInput { reaction_type: ReactionType; }
export interface CreateReportInput { target_type: SocialTargetType; target_id: string; reason: string; details?: string; }
export interface ModerateTargetInput { target_type: SocialTargetType | "report"; target_id: string; action: "approve" | "reject" | "hide" | "resolve" | "dismiss"; reason?: string; }
export interface ReactionSummary { total: number; by_type: Partial<Record<ReactionType, number>>; viewer_reaction?: ReactionType | null; }
export interface ShareEventInput { channel?: string; idempotency_key?: string; }
export interface RecordViewInput { visible_ms: number; }
export interface RecordViewResult { counted: boolean; }
export interface SocialMedia { id: string; url: string; content_type: string; }
export type SocialMediaResponse = ApiEnvelope<SocialMedia>;
export interface AnalyticsQuery extends QueryParams { from?: string; to?: string; }
export interface PostAnalytics { post_id: string; views: number; reach: number; reactions: number; comments: number; bookmarks: number; shares: number; }
export interface AnalyticsTrendPoint { date: string; views: number; reach: number; }
export interface CreatorAnalytics { from: string; to: string; totals: Omit<PostAnalytics, "post_id">; posts: PostAnalytics[]; trend: AnalyticsTrendPoint[]; }
export type CreatorAnalyticsResponse = ApiEnvelope<CreatorAnalytics>;
export interface ModerationQueue { posts: SocialPost[]; comments: SocialComment[]; reports: SocialReport[]; }
export interface ModerationAuditQuery extends QueryParams { target_type?: SocialTargetType | "report"; action?: ModerateTargetInput["action"]; page?: number; limit?: number; }
export interface ModerationAuditEntry {
  id: string; organization_id: string; moderator_user_id: string; target_type: SocialTargetType | "report";
  target_id: string; action: ModerateTargetInput["action"]; reason?: string | null;
  previous_status?: string | null; new_status: string; metadata: JsonValue; created_at: string;
}
export interface ModerationAuditMeta { total: number; page: number; limit: number; }
export interface ModerationAuditResponse extends ApiEnvelope<ModerationAuditEntry[]> { meta: ModerationAuditMeta; }
export interface ModerationActionResult { target_type: SocialTargetType | "report"; target_id: string; previous_status: string | null; status: string; }
export interface LegacyImportInput { dry_run?: boolean; }
export interface LegacyImportReport { dry_run: boolean; categories: number; posts: number; comments: number; post_reactions: number; comment_reactions: number; reaction_mappings: JsonValue; }
export type SocialPostResponse = ApiEnvelope<SocialPost>;
export type SocialCategoryResponse = ApiEnvelope<SocialCategory>;
export type SocialCategoryListResponse = ApiEnvelope<SocialCategory[]>;
export interface SocialPostListResponse extends ApiEnvelope<SocialPost[]> { meta?: SocialListMeta; }
export type SocialCommentResponse = ApiEnvelope<SocialComment>;
export type SocialCommentListResponse = ApiEnvelope<SocialComment[]>;
export type SocialReactionResponse = ApiEnvelope<SocialReaction>;
export type ReactionSummaryResponse = ApiEnvelope<ReactionSummary>;
export type ModerationQueueResponse = ApiEnvelope<ModerationQueue>;
export type SocialBookmarksResponse = ApiEnvelope<string[]>;
export type RecordViewResponse = ApiEnvelope<RecordViewResult>;
export type SocialReportResponse = ApiEnvelope<SocialReport>;
export type ModerationActionResponse = ApiEnvelope<ModerationActionResult>;
export type LegacyImportResponse = ApiEnvelope<LegacyImportReport>;
/** Used by endpoints that deliberately return 204 or an HTTP redirect without a JSON envelope. */
export type NoContentResponse = void;
