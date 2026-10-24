import type { ApiEnvelope, JsonObject, JsonValue } from "@faiber/sdk-core";

/** Successful command acknowledgement. The pinned handler returns an empty object. */
export type EmptyMutationData = Record<string, never>;
/** Stored address row. Bulk lookup takes IDP user UUIDs; profile_id is the local Profile row UUID. */
export interface StoredProfileAddress extends JsonObject {
  id: string; profile_id: string; title: string;
  country: string | null; province: string | null; city: string | null;
  postal_code: string | null; plate: string | null; detail: string | null;
  created_at: string; updated_at: string | null;
}
/** Legacy parent link, also synthesized from active parent/child relations by the children lookup. */
export interface StoredParentLink extends JsonObject {
  id: string; student_user_id: string; parent_user_id: string;
  parent_type: string | null; created_at: string;
}
export interface ProfileDependencies extends JsonObject {
  gender: ("male" | "female")[]; status: ("active" | "inactive")[];
  employee_type: ("full-time" | "part-time")[];
}
/** Audit log fields are arbitrary JSON because the backend stores request/response/meta without a schema. */
export interface ProfileLog extends JsonObject {
  id: string; user_id: string | null; service: string | null; action: string | null;
  request: JsonValue | null; response: JsonValue | null; meta: JsonValue | null; created_at: string;
}
export interface ProfileLogAction extends JsonObject {
  id: string; action: string; meta: JsonValue | null; created_at: string;
}
/** survey_type is the response key; the create request accepts the separate key `type`. */
export interface ProfileSurvey extends JsonObject {
  id: string; user_id: string; enrollment_id: number | null;
  survey_type: string | null; meta: JsonValue | null; created_at: string;
}
export interface ProfilePropertyArrayChanges extends JsonObject {
  added_ids: string[]; removed_ids: string[]; added_count: number; removed_count: number;
}
/** Mutation receipt contains keys and item counts, never complete property values. */
export interface ProfilePropertyMutation extends JsonObject {
  updated_keys: string[]; array_item_changes: Record<string, ProfilePropertyArrayChanges>;
}
export interface PesSchema extends JsonObject { count: "integer"; amount: "number" }
export interface RuleValidation extends JsonObject { valid: true; matched: boolean }
/** Validation only; does not execute or enqueue the action. Config remains arbitrary backend JSON. */
export interface ActionDryRun extends JsonObject {
  valid: true; will_execute: boolean; action_type: string; phase: string;
  delay_seconds: number; config: JsonValue;
}
/** Campaign SQL projection. visibility/metadata/contribution_methods are unconstrained JSON in the backend. */
export interface ProfileCampaign extends JsonObject {
  id: string; slug: string; kind: string; category_code: string | null;
  title_fa: string | null; title_en: string | null; summary_fa: string | null; summary_en: string | null;
  description_fa: string | null; description_en: string | null;
  allocation_fa: string | null; allocation_en: string | null; cover_url: string | null;
  starts_at: string | null; ends_at: string | null; status: string;
  target_amount: number | null; contributed_amount: number; contribution_methods: JsonValue;
  sort_order: number; visibility: JsonValue; metadata: JsonValue;
}
export interface CampaignContributionReceipt extends JsonObject { id: string; status: string }
/** The query selects confirmed_at but the handler does not serialize it. */
export interface CampaignContribution extends JsonObject {
  id: string; campaign_id: string; method: string; amount: number; unit: string; status: string;
  external_transaction_id: string | null; purpose_snapshot: CampaignPurposeSnapshot; created_at: string;
}

/** Flow SDK integration metadata at dependency commit e307c93c37b9c9ecf4d2f9a6f780bb2bb7143f8b. */
export interface ProfileIntegrationField extends JsonObject {
  name: string; field_type: string; required: boolean; description: string;
}
export interface ProfileIntegrationEvent extends JsonObject {
  event_name: string; payload_fields: ProfileIntegrationField[];
}
export interface ProfileFlowIntegration extends JsonObject {
  queue: string; events: ProfileIntegrationEvent[];
}

/** Both keys are emitted, even when only one translation is available. */
export interface ProfileLocalizedName extends JsonObject { fa: string | null; en: string | null }
/** Persisted schema-free JSON object (labels, descriptions, metadata, facts or service extensions).
 * The backend validates object-ness only and preserves arbitrary members and value kinds.
 */
export type ProfileDynamicObject = JsonObject;
/** Core search snapshot built by profile_search::rebuild::build_core_json. */
export interface ProfileSearchCore extends JsonObject {
  email: string | null; phone: string | null; national_code: string | null; national_number: string | null;
  first_name_fa: string | null; first_name_en: string | null; last_name_fa: string | null; last_name_en: string | null;
  birthday: string | null; nationality: string | null; religion: string | null; gender: string | null;
  attendance_mode: string | null; level: string | null; education_id: string | null;
  referral_source: string | null; referrer_uuid: string | null; description: string | null;
  marital: string | null; nickname: string | null; country_id: string | null; province_id: string | null;
  city_id: string | null; status: string; employee_type: string | null; has_active_enrollment: boolean;
  created_at: string; updated_at: string | null;
}
export type ProfileRuleComparison = "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "exists" | "contains" | "in";
/** Validated lifecycle AST. Extra JSON members are preserved by the backend. Null/{} match all. */
export type ProfileLifecycleRule = null | EmptyMutationData
  | { all: ProfileLifecycleRule[] } | { any: ProfileLifecycleRule[] } | { not: ProfileLifecycleRule }
  | { fact: string; op?: ProfileRuleComparison; value?: JsonValue }
  | { collection: string; quantifier?: "any" | "all" | "none"; where: ProfileLifecycleRule }
  | { aggregate: { path: string; op?: "count" | "sum" | "min" | "max"; field?: string }; op?: ProfileRuleComparison; value?: JsonValue }
  | { elapsed: { since: string; unit?: "seconds" | "minutes" | "hours" | "days" }; op?: ProfileRuleComparison; value?: JsonValue };
/** Extension object consumed according to action_type; webhook requires url+secret,
 * external_flag url+flag, message template, and event optionally queue.
 */
export interface ProfileActionConfig extends JsonObject { url?: string; secret?: string; flag?: string; template?: string; queue?: string }
export interface ProfileRetryPolicy extends JsonObject { strategy?: "fixed" | "exponential"; base_seconds?: number; max_seconds?: number }
export interface ProfileRelationConstraints extends JsonObject {
  max_outgoing?: number; max_incoming?: number;
  allowed_source_statuses?: string[]; allowed_target_statuses?: string[];
}

/** Stored state_system row from the pinned SeaORM entity. */
export interface ProfileStateSystem extends JsonObject {
  id: string;
  code: string;
  labels: ProfileDynamicObject;
  description: ProfileDynamicObject;
  eligibility_rule: ProfileLifecycleRule;
  evaluation_schedule: string | null;
  publish_mode: string;
  active: boolean;
  version: number;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}

/** Stored state_definition row from the pinned SeaORM entity. */
export interface ProfileStateDefinition extends JsonObject {
  id: string;
  system_id: string;
  code: string;
  labels: ProfileDynamicObject;
  description: ProfileDynamicObject;
  rule: ProfileLifecycleRule;
  priority: number;
  is_fallback: boolean;
  active: boolean;
  version: number;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}

/** Stored state_action row from the pinned SeaORM entity. */
export interface ProfileStateAction extends JsonObject {
  id: string;
  state_id: string;
  phase: string;
  action_type: string;
  labels: ProfileDynamicObject;
  config: ProfileActionConfig;
  condition: ProfileLifecycleRule | null;
  delay_seconds: number;
  retry_policy: ProfileRetryPolicy;
  max_attempts: number;
  sort_order: number;
  enabled: boolean;
  created_at: string;
  updated_at: string | null;
}

/** Stored state_transition row from the pinned SeaORM entity. */
export interface ProfileStateTransition extends JsonObject {
  id: string;
  profile_id: string;
  system_id: string;
  from_state_id: string | null;
  to_state_id: string;
  definition_version: number;
  trigger: string;
  facts: ProfileDynamicObject;
  matched_rule: ProfileLifecycleRule;
  transitioned_at: string;
}

/** Stored state_action_outbox row from the pinned SeaORM entity. */
export interface ProfileStateActionOutbox extends JsonObject {
  id: string;
  transition_id: string;
  action_id: string;
  idempotency_key: string;
  available_at: string;
  status: string;
  attempts: number;
  last_error: string | null;
  completed_at: string | null;
  created_at: string;
  updated_at: string | null;
}

/** Stored state_action_attempt row from the pinned SeaORM entity. */
export interface ProfileStateActionAttempt extends JsonObject {
  id: string;
  outbox_id: string;
  attempt: number;
  status: string;
  error: string | null;
  started_at: string;
  finished_at: string | null;
}

/** Stored relation_type row from the pinned SeaORM entity. */
export interface ProfileRelationType extends JsonObject {
  id: string;
  code: string;
  labels: ProfileDynamicObject;
  inverse_type_id: string | null;
  symmetric: boolean;
  managed_inverse: boolean;
  allow_self: boolean;
  constraints: ProfileRelationConstraints;
  active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}

/** Stored profile_relation row from the pinned SeaORM entity. */
export interface ProfileProfileRelation extends JsonObject {
  id: string;
  source_profile_id: string;
  target_profile_id: string;
  relation_type_id: string;
  inverse_relation_id: string | null;
  metadata: ProfileDynamicObject;
  active: boolean;
  created_at: string;
  updated_at: string | null;
}

/** Stored referral_source row from the pinned SeaORM entity. */
export interface ProfileReferralSource extends JsonObject {
  id: string;
  code: string;
  labels: ProfileDynamicObject;
  metadata: ProfileDynamicObject;
  active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}

/** Chat-scoped profile excludes id, user_id, properties and services. */
export interface ProfileChatProfile extends JsonObject {
    email?: string | null;
    phone?: string | null;
    national_code?: string | null;
    first_name: import("./wire.types.js").ProfileLocalizedName | null;
    last_name: import("./wire.types.js").ProfileLocalizedName | null;
    gender: string | null;
    job: string | null;
    education_id: string | null;
    attendance_mode: string | null;
    level: string | null;
    referral_source: string | null;
    referrer_uuid: string | null;
    description: string | null;
    /** Latest Office projection; null means unavailable, not zero. */
    account_balance: number | null;
    wallet_balance: number | null;
    status: string;
    employee_type?: string | null;
    freemium_session_limit?: number | null;
    avatar?: string | null;
    has_active_enrollment: boolean;
    roles: import("./types.js").ProfileRoleRecord[];
    credential?: import("./types.js").ProfileCredential | null;
    meta?: JsonValue;
    app?: JsonValue;
    assessment?: JsonValue;
    /** Office data synchronized into Profile. Present on detail, full, and admin reads. */
    office?: import("./types.js").OfficeProfileData | null;
    /** LMS classroom projection. Present on detail, full, and admin reads. */
    lms?: import("./types.js").LmsProfileData | null;
    parent?: import("./types.js").ProfileParent[];
}

export interface ProfileChatContext extends JsonObject { profile: ProfileChatProfile; properties: import("./types.js").ProfileProperties }
export interface ProfileSession extends JsonObject { user_id: string; roles: string[]; permissions: string[]; profile: import("./types.js").Profile }
export interface ProfileSearchHit extends JsonObject { short_id: string; profile_id:string; user_id:string; core?:ProfileSearchCore|null; properties?:ProfileDynamicObject|null; services?:ProfileDynamicObject|null }
export interface ProfileSearchData extends JsonObject { results:ProfileSearchHit[] }
export interface ProfileSearchResponse extends ApiEnvelope<ProfileSearchData> {meta:import("./types.js").ProfilePaginationMeta}

export interface ProfileLifecycleSystemInput extends JsonObject {
  code:string; labels?:ProfileDynamicObject; description?:ProfileDynamicObject;
  eligibility_rule?:ProfileLifecycleRule; evaluation_schedule?:string|null;
  publish_mode?:"immediate"|"scheduled"; active?:boolean;
}
export interface ProfileLifecycleStateInput extends JsonObject {
  system_id:string;code:string;labels?:ProfileDynamicObject;description?:ProfileDynamicObject;
  rule?:ProfileLifecycleRule;priority?:number;is_fallback?:boolean;active?:boolean;
}
export interface ProfileLifecycleActionInput extends JsonObject {
  state_id:string;phase:"enter"|"exit";action_type:"event"|"webhook"|"message"|"external_flag";
  labels?:ProfileDynamicObject;config?:ProfileActionConfig;condition?:ProfileLifecycleRule;
  delay_seconds?:number;retry_policy?:ProfileRetryPolicy;max_attempts?:number;sort_order?:number;enabled?:boolean;
}
/** Additional facts are arbitrary JSON; object members override collected native facts. */
export interface ProfileLifecycleEvaluationInput extends JsonObject {profile_id:string;system_id:string;facts?:JsonValue;trigger?:string|null}
export interface ProfileLifecycleRuleInput extends JsonObject {rule?:ProfileLifecycleRule;facts?:JsonValue}
export interface ProfileLifecycleCandidate extends JsonObject {state_id:string;code:string;priority:number;matched:boolean;is_fallback:boolean}
export interface ProfileLifecycleEvaluation extends JsonObject {
  eligible:boolean;selected_state_id:string|null;selected_state_code:string|null;
  current_state_id:string|null;changed:boolean;candidates:ProfileLifecycleCandidate[];facts:ProfileDynamicObject;
}
/** Options are arbitrary scalar/array/object JSON values validated according to value_type. */
export interface ProfileCustomTypeRecord extends JsonObject {
  id:string;name:string;value_type:import("./types.js").CustomTypeValueType;options:JsonValue[];status:string;created_at:string;updated_at:string|null;
}
export interface ProfileCustomTypeData extends JsonObject {custom_type:ProfileCustomTypeRecord}
export interface ProfileCustomTypeListData extends JsonObject {custom_types:ProfileCustomTypeRecord[]}
export interface ProfileCustomTypePage extends ApiEnvelope<ProfileCustomTypeListData> {meta:import("./types.js").ProfilePaginationMeta}

export interface ProfileRelationTypeInput extends JsonObject {
  code:string;labels?:ProfileDynamicObject;inverse_type_id?:string|null;symmetric?:boolean;
  managed_inverse?:boolean;allow_self?:boolean;constraints?:ProfileRelationConstraints;active?:boolean;sort_order?:number;
}
export interface ProfileRelationInput extends JsonObject {source_profile_id:string;target_profile_id:string;relation_type_id:string;metadata?:ProfileDynamicObject}
export interface ProfileRelationUpdateInput extends JsonObject {metadata?:ProfileDynamicObject;active?:boolean}
export interface ProfileReferralSourceInput extends JsonObject {code:string;labels?:ProfileDynamicObject;metadata?:ProfileDynamicObject;active?:boolean;sort_order?:number}

/** Snapshot captured when a campaign contribution is created. */
export interface CampaignPurposeSnapshot extends JsonObject {
  campaign_id:string;title_fa:string|null;title_en:string|null;category_code:string|null;
  allocation_fa:string|null;allocation_en:string|null;
}

/** Minimal active-person lookup; national codes are searchable but never returned. */
export interface ProfileDirectoryPerson { user_id: string; short_id: string; first_name_fa: string | null; last_name_fa: string | null; first_name_en: string | null; last_name_en: string | null; email: string | null; phone: string | null; }
export interface ProfilePeopleSearchResult { results: ProfileDirectoryPerson[]; has_more: boolean; }
