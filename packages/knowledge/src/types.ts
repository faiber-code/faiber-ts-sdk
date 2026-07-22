import type { ApiEnvelope, JsonObject, JsonValue, QueryParams } from "@faiber/sdk-core";

export interface KnowledgeListQuery extends QueryParams { q?: string; status?: string; group?: string; kind?: string; page?: number; limit?: number; }
export interface KnowledgeBase extends JsonObject { id: string; organization_id: string; slug: string; name: string; description: string; default_language: string; supported_languages: JsonValue; settings: JsonValue; status: string; version: number; created_at: string; updated_at: string; }
export interface KnowledgeGroup extends JsonObject { id: string; knowledge_base_id: string; parent_id?: string | null; slug: string; name: JsonValue; description: JsonValue; sort_order: number; inclusion_policy: JsonValue; status: string; version: number; }
export interface KnowledgeItem extends JsonObject { id: string; knowledge_base_id: string; group_id: string; slug: string; kind: string; title: JsonValue; summary: JsonValue; content: JsonValue; metadata: JsonValue; tags: JsonValue; importance: string; status: string; version: number; }
export interface KnowledgeEdge extends JsonObject { id: string; knowledge_base_id: string; from_item_id: string; to_item_id: string; edge_type: string; conditions: JsonValue; weight: number; status: string; version: number; }
export interface ChatBinding extends JsonObject { id: string; chat_slug: string; knowledge_base_id: string; group_slugs: JsonValue; max_level: number; tool_policy: JsonValue; enabled: boolean; version: number; }
export interface MatchRule extends JsonObject { id: string; knowledge_base_id: string; group_id?: string | null; slug: string; name: JsonValue; priority: number; conditions: JsonValue; outcomes: JsonValue; stop_on_match: boolean; enabled: boolean; version: number; }
export interface CreateKnowledgeBaseInput extends JsonObject { slug: string; name: string; description?: string; default_language?: string; supported_languages?: JsonValue; settings?: JsonValue; }
export interface UpdateKnowledgeBaseInput extends JsonObject { name?: string; description?: string; default_language?: string; supported_languages?: JsonValue; settings?: JsonValue; status?: string; expected_version?: number; }
export interface CreateGroupInput extends JsonObject { parent_id?: string; slug: string; name: JsonValue; description?: JsonValue; sort_order?: number; inclusion_policy?: JsonValue; }
export interface UpdateGroupInput extends JsonObject { parent_id?: string; name?: JsonValue; description?: JsonValue; sort_order?: number; inclusion_policy?: JsonValue; status?: string; expected_version?: number; }
export interface CreateItemInput extends JsonObject { group_id: string; slug: string; kind: string; title: JsonValue; summary?: JsonValue; content: JsonValue; metadata?: JsonValue; tags?: JsonValue; importance?: string; valid_from?: string; valid_to?: string; }
export interface UpdateItemInput extends JsonObject { group_id?: string; kind?: string; title?: JsonValue; summary?: JsonValue; content?: JsonValue; metadata?: JsonValue; tags?: JsonValue; importance?: string; status?: string; valid_from?: string; valid_to?: string; expected_version?: number; }
export interface CreateEdgeInput extends JsonObject { from_item_id: string; to_item_id: string; edge_type: string; conditions?: JsonValue; weight?: number; }
export interface UpdateEdgeInput extends JsonObject { edge_type?: string; conditions?: JsonValue; weight?: number; status?: string; expected_version?: number; }
export interface CreateBindingInput extends JsonObject { chat_slug: string; knowledge_base_id: string; group_slugs?: JsonValue; max_level?: number; tool_policy?: JsonValue; enabled?: boolean; }
export interface UpdateBindingInput extends JsonObject { group_slugs?: JsonValue; max_level?: number; tool_policy?: JsonValue; enabled?: boolean; expected_version?: number; }
export interface CreateRuleInput extends JsonObject { knowledge_base_id: string; group_id?: string; slug: string; name: JsonValue; priority?: number; conditions: JsonValue; outcomes: JsonValue; stop_on_match?: boolean; enabled?: boolean; }
export interface UpdateRuleInput extends JsonObject { group_id?: string; name?: JsonValue; priority?: number; conditions?: JsonValue; outcomes?: JsonValue; stop_on_match?: boolean; enabled?: boolean; expected_version?: number; }
export interface RuntimeQueryInput extends JsonObject { query?: string; profile_id?: string; profile?: JsonValue; props?: JsonValue; meta?: JsonValue; inputs?: JsonValue; group_slugs?: JsonValue; level?: number; limit?: number; event?: JsonValue; }
export interface RuntimeResult extends JsonObject { chat_slug: string; release?: JsonValue; knowledge: JsonValue[]; matched_rules: JsonValue[]; notifications: JsonValue[]; warnings: JsonValue[]; todos: JsonValue[]; input_requests: JsonValue[]; directions: JsonValue[]; trace: JsonValue; }
export interface ActionStatusInput extends JsonObject { status: string; input?: JsonValue; }
export type KnowledgeBaseResponse = ApiEnvelope<KnowledgeBase>;
export type KnowledgeBaseListResponse = ApiEnvelope<KnowledgeBase[]>;
export type KnowledgeGroupResponse = ApiEnvelope<KnowledgeGroup>;
export type KnowledgeGroupListResponse = ApiEnvelope<KnowledgeGroup[]>;
export type KnowledgeItemResponse = ApiEnvelope<KnowledgeItem>;
export type KnowledgeItemListResponse = ApiEnvelope<KnowledgeItem[]>;
export type KnowledgeEdgeResponse = ApiEnvelope<KnowledgeEdge>;
export type KnowledgeEdgeListResponse = ApiEnvelope<KnowledgeEdge[]>;
export type ChatBindingResponse = ApiEnvelope<ChatBinding>;
export type ChatBindingListResponse = ApiEnvelope<ChatBinding[]>;
export type MatchRuleResponse = ApiEnvelope<MatchRule>;
export type MatchRuleListResponse = ApiEnvelope<MatchRule[]>;
export type RuntimeResultResponse = ApiEnvelope<RuntimeResult>;
