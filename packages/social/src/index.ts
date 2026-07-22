import { ServiceApi, type ApiEnvelope, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type {
  CreateCategoryInput, CreateCommentInput, CreatePostInput, CreateReportInput, FeedQuery, LegacyImportInput,
  LegacyImportReport, ModerateTargetInput, ModerationQueueResponse, ReactionSummaryResponse,
  SetReactionInput, SocialCategoryListResponse, SocialCategoryResponse, SocialCommentListResponse, SocialCommentResponse, SocialPostListResponse,
  SocialPostResponse, SocialReactionResponse, UpdateCategoryInput, UpdateCommentInput, UpdatePostInput,
} from "./types.js";

const id = (value: Identifier) => encodeURIComponent(value);

import { SocialOperations } from "./operations.js";
export class SocialApi extends ServiceApi {
    readonly operations = new SocialOperations(this.client);
  categories(options?: RequestOptions) { return this.client.get<SocialCategoryListResponse>("/api/v1/categories", undefined, options); }
  createCategory(data: CreateCategoryInput, options?: RequestOptions<CreateCategoryInput>) { return this.client.post<SocialCategoryResponse, CreateCategoryInput>("/api/v1/categories", data, options); }
  updateCategory(categoryId: Identifier, data: UpdateCategoryInput, options?: RequestOptions<UpdateCategoryInput>) { return this.client.patch<SocialCategoryResponse, UpdateCategoryInput>(`/api/v1/categories/${id(categoryId)}`, data, options); }
  deleteCategory(categoryId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/categories/${id(categoryId)}`, options); }
  feed(params?: FeedQuery, options?: RequestOptions) { return this.client.get<SocialPostListResponse>("/api/v1/posts", params, options); }
  post(postId: Identifier, options?: RequestOptions) { return this.client.get<SocialPostResponse>(`/api/v1/posts/${id(postId)}`, undefined, options); }
  createPost(data: CreatePostInput, options?: RequestOptions<CreatePostInput>) { return this.client.post<SocialPostResponse, CreatePostInput>("/api/v1/posts", data, options); }
  updatePost(postId: Identifier, data: UpdatePostInput, options?: RequestOptions<UpdatePostInput>) { return this.client.patch<SocialPostResponse, UpdatePostInput>(`/api/v1/posts/${id(postId)}`, data, options); }
  deletePost(postId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/posts/${id(postId)}`, options); }
  comments(postId: Identifier, options?: RequestOptions) { return this.client.get<SocialCommentListResponse>(`/api/v1/posts/${id(postId)}/comments`, undefined, options); }
  createComment(postId: Identifier, data: CreateCommentInput, options?: RequestOptions<CreateCommentInput>) { return this.client.post<SocialCommentResponse, CreateCommentInput>(`/api/v1/posts/${id(postId)}/comments`, data, options); }
  updateComment(commentId: Identifier, data: UpdateCommentInput, options?: RequestOptions<UpdateCommentInput>) { return this.client.patch<SocialCommentResponse, UpdateCommentInput>(`/api/v1/comments/${id(commentId)}`, data, options); }
  deleteComment(commentId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/comments/${id(commentId)}`, options); }
  reactions(target: "posts" | "comments", targetId: Identifier, options?: RequestOptions) { return this.client.get<ReactionSummaryResponse>(`/api/v1/${target}/${id(targetId)}/reaction`, undefined, options); }
  setReaction(target: "posts" | "comments", targetId: Identifier, data: SetReactionInput, options?: RequestOptions<SetReactionInput>) { return this.client.put<SocialReactionResponse, SetReactionInput>(`/api/v1/${target}/${id(targetId)}/reaction`, data, options); }
  removeReaction(target: "posts" | "comments", targetId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/${target}/${id(targetId)}/reaction`, options); }
  like(target: "posts" | "comments", targetId: Identifier, options?: RequestOptions) { return this.client.put<SocialReactionResponse, Record<string, never>>(`/api/v1/${target}/${id(targetId)}/like`, {}, options); }
  unlike(target: "posts" | "comments", targetId: Identifier, options?: RequestOptions) { return this.client.delete<void>(`/api/v1/${target}/${id(targetId)}/like`, options); }
  report(data: CreateReportInput, options?: RequestOptions<CreateReportInput>) { return this.client.post<ApiEnvelope<unknown>, CreateReportInput>("/api/v1/reports", data, options); }
  moderationQueue(options?: RequestOptions) { return this.client.get<ModerationQueueResponse>("/api/v1/moderation/queue", undefined, options); }
  moderate(data: ModerateTargetInput, options?: RequestOptions<ModerateTargetInput>) { return this.client.post<ApiEnvelope<unknown>, ModerateTargetInput>("/api/v1/moderation/actions", data, options); }
  importModules(data: LegacyImportInput = { dry_run: true }, options?: RequestOptions<LegacyImportInput>) { return this.client.post<ApiEnvelope<LegacyImportReport>, LegacyImportInput>("/api/v1/admin/import/modules", data, options); }
}

export * from "@faiber/sdk-core";
export * from "./types.js";
export * from "./operations.js";
export * from "./operations.types.js";
