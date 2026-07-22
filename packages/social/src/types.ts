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
  requires_moderation: boolean; metadata: JsonValue; created_at: string; updated_at: string;
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
export interface FeedQuery extends QueryParams { q?: string; author_id?: string; category_id?: string; kind?: SocialPostKind; page?: number; limit?: number; }
export interface CreatePostInput { category_id?: string; kind?: SocialPostKind; visibility?: SocialVisibility; title?: string; body: string; media?: JsonValue; metadata?: JsonValue; requires_moderation?: boolean; }
export interface UpdatePostInput extends Partial<Omit<CreatePostInput, "requires_moderation">> {}
export interface CreateCategoryInput { slug: string; name: JsonValue; description?: JsonValue; icon?: string; color?: string; sort_order?: number; status?: SocialCategoryStatus; requires_moderation?: boolean; metadata?: JsonValue; }
export interface UpdateCategoryInput extends Partial<CreateCategoryInput> {}
export interface CreateCommentInput { parent_id?: string; body: string; requires_moderation?: boolean; }
export interface UpdateCommentInput { body: string; }
export interface SetReactionInput { reaction_type: ReactionType; }
export interface CreateReportInput { target_type: SocialTargetType; target_id: string; reason: string; details?: string; }
export interface ModerateTargetInput { target_type: SocialTargetType | "report"; target_id: string; action: "approve" | "reject" | "hide" | "resolve" | "dismiss"; reason?: string; }
export interface ReactionSummary { total: number; by_type: Partial<Record<ReactionType, number>>; viewer_reaction?: ReactionType | null; }
export interface ModerationQueue { posts: SocialPost[]; comments: SocialComment[]; reports: SocialReport[]; }
export interface LegacyImportInput { dry_run?: boolean; }
export interface LegacyImportReport { dry_run: boolean; categories: number; posts: number; comments: number; post_reactions: number; comment_reactions: number; reaction_mappings: JsonValue; }
export type SocialPostResponse = ApiEnvelope<SocialPost>;
export type SocialCategoryResponse = ApiEnvelope<SocialCategory>;
export type SocialCategoryListResponse = ApiEnvelope<SocialCategory[]>;
export type SocialPostListResponse = ApiEnvelope<SocialPost[]>;
export type SocialCommentResponse = ApiEnvelope<SocialComment>;
export type SocialCommentListResponse = ApiEnvelope<SocialComment[]>;
export type SocialReactionResponse = ApiEnvelope<SocialReaction>;
export type ReactionSummaryResponse = ApiEnvelope<ReactionSummary>;
export type ModerationQueueResponse = ApiEnvelope<ModerationQueue>;
