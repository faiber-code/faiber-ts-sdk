import type { JsonValue, QueryParams } from '@faiber/sdk-core';
import type { WorkItem, TaskResponse, ProductPlanId } from './types.js';
/** Raw Sockudo channel signature, deliberately outside the Task envelope. */
export interface NoteRealtimeAuthorization {auth:string}
export interface NoteRealtimeConfig {ws_url:string;app_key:string;channel:string;event:'note.updated'}
/** Base64 CRDT updates are opaque editor data; Task validates framing and stores them append-only. */
export interface NoteDocumentUpdate {id:string;body:string;sequence:number}
export interface NoteDocument {note:WorkItem;generation:number;initial_text:string;updates:NoteDocumentUpdate[]}
export interface SaveNoteDocument {id:string;generation:number;body:string;plain_text:string}
export interface NoteDataCatalogQuery extends QueryParams {project_id?:string|null}
export interface NoteDataCatalogField {record_type:string;key:string;label:string;type:string;unit:string|null;count:number}
export interface NoteDataCatalog {fields:NoteDataCatalogField[];truncated:boolean;retrieved_at:string}
export interface NotificationPreferences {in_app_enabled:true;sms_enabled:boolean;email_enabled:boolean;version:number}
export interface Team {id:string;key:string;name:string;description:string;status:string;member_ids:string[];version:number}
export interface WorkLog {id:string;work_item_id:string;author_id:string;body:string;minutes:number|null;log_type:string;created_at:string}
/** metadata is the caller-provided serde_json::Value stored without a fixed schema. */
export interface CommitLink {id:string;work_item_id:string;linked_by:string;sandbox_project:string;commit_sha:string;subject:string;branch:string|null;repository_label:string|null;committed_at:string|null;metadata:JsonValue;created_at:string}
/** metadata is the caller-provided serde_json::Value stored without a fixed schema. */
export interface WorkSession {id:string;workspace_id:string;work_item_id:string;user_id:string;client_id:string;state:string;runtime_state:string;started_at:string;ended_at:string|null;last_heartbeat_at:string;active_seconds:number;idle_seconds:number;elapsed_seconds:number;stop_reason:string|null;metadata:JsonValue;version:number}
export interface StartedWorkSession {session:WorkSession;work_item:WorkItem}
export interface PointEntry {id:string;work_item_id:string;user_id:string;entry_type:string;points:number;reason:string}
export interface PointHistoryEntry extends Omit<PointEntry,'work_item_id'> {work_item_id:string|null;work_item_key:string|null;created_by:string;created_at:string}
export interface PerformancePolicy {id:string;month:string;team_id:string|null;user_id:string|null;minimum_completed_tasks:number;target_points:number;estimate_capacity_hours:number|null}
export interface MonitoringMember {user_id:string;team_id:string|null;team_name:string|null;assigned_tasks:number;completed_tasks:number;active_seconds:number;idle_seconds:number;points:number;minimum_completed_tasks:number;target_points:number;runtime_state:string;active_work_item_id:string|null;active_work_item_title:string|null}
export interface TeamMonitoring {month:string;members:MonitoringMember[]}
export interface ChecklistChange {kind:string;id?:string;title?:string;previous_title?:string;done?:boolean}
/** Optional activity fields are serialized as null when the event has no corresponding value. */
export interface WorkItemActivity {id:string;actor_id:string|null;action:string;occurred_at:string;changed:string[];status:string|null;timer_paused:boolean|null;checklist_changes:ChecklistChange[]|null;completed:number|null;total:number|null}
export interface GuestLinkAccess {guest_link_id:string;workspace_id:string;project_id:string|null;work_item_id:string|null;capabilities:string[];expires_at:string}
export interface Readiness {ready:boolean}
export interface PlanDefinition {id:ProductPlanId;price_toman:number;tasks:number;responses:number;images:number;shared_spaces:number;members:number}
export interface PlanUsage {tasks:number;responses:number;images:number;images_reserved:number;responses_reserved:number;tasks_reserved:number;shared_spaces:number}
export interface CheckoutQuote {allowed:boolean;kind:'purchase'|'renew'|'upgrade';price_toman:number;credit_toman:number;payable_toman:number;remaining_credit_rial:number;source_plan:ProductPlanId;source_until:string;source_credit_rial:number;remaining_days:number}
export interface PlanAccount {enabled:boolean;owner_id:string;is_owner:boolean;plan:PlanDefinition;status:string;period_start:string;period_end:string;active_until:string;usage:PlanUsage;trial_eligible:boolean;checkout_available:boolean;checkout_test_mode:boolean;can_issue_gifts:boolean;plans:PlanDefinition[];checkout_quotes:Record<'personal'|'planner'|'business'|'legend',CheckoutQuote>;credit_toman:number;pending_orders:string[]}
export interface PlanCheckout {redirect_url:string;order_id:string}
export interface PlanReconcile {status:string}
/** A fully credited checkout reconciles immediately and returns status instead of a redirect. */
export type PlanCheckoutResult = PlanCheckout | PlanReconcile;
export interface PlanGiftToken {token:string;valid_days:number}
export interface PlanRedeemed {activated:true}
export interface UsageReservation {id:string}
export interface FinishedUsageReservation {id:string;settled?:false}
export interface MemoryReservation {id:string;resource_id:string}
export interface MemorySettlement {resource_id:string;settled:boolean}
export interface GiftLimits {tasks:number;responses:number;images:number;shared_spaces:number;members:number}
export interface ManagedTrialGift {id:string;label:string;status:string;expires_at:string;redeemed_by:string|null;redeemed_at:string|null;created_by:string;created_at:string;updated_at:string;limits:GiftLimits;duration_days:30;max_uses:number;used_count:number;remaining_uses:number;token?:string}
export interface ManagedTrialGiftPage {items:ManagedTrialGift[];total:number;page:number;per_page:number}
/** Named response alias for empty 204 deletion; no JSON envelope is sent. */
export type DeletedWorkItemResponse = void;
export type TaskDataResponse<T> = TaskResponse<T>;
