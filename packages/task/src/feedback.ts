import { ServiceApi, type RequestOptions, type QueryParams, type AxiosResponse } from '@faiber/sdk-core';
import type { TaskResponse, Project } from './types.js';

export interface FeedbackApplicationContext { version:string;locale:string;timezone:string;platform:string;device?:string|null;browser?:string|null;viewport?:{width:number;height:number}|null }
export interface FeedbackNavigationContext {route:string;page_title:string;feature:string}
export interface FeedbackCaptureContext {captured_at:string;status:'complete'|'partial'|'unavailable'|'removed';reason?:string|null}
export interface FeedbackExamContext {exam_id?:string|null;session_id?:string|null;attempt_id?:string|null;question_id?:string|null;state:string;remaining_seconds?:number|null}
export interface FeedbackCertificateContext {certificate_id?:string|null;template_id?:string|null;state:string}
export interface FeedbackSessionContext {classroom_id?:string|null;session_id?:string|null;room_id?:string|null;connection_state:string;media_state?:string|null}
export interface FeedbackPlaybackContext {recording_id?:string|null;media_id?:string|null;position_seconds:number;duration_seconds?:number|null;state:string;quality?:string|null;error?:string|null}
export interface FeedbackDiagnosticEvent {at:string;kind:string;message:string;correlation_id?:string|null}
export interface ReportContext {schema_version:1;application:FeedbackApplicationContext;navigation:FeedbackNavigationContext;capture:FeedbackCaptureContext;exam?:FeedbackExamContext|null;certificate?:FeedbackCertificateContext|null;session?:FeedbackSessionContext|null;playback?:FeedbackPlaybackContext|null;diagnostics?:FeedbackDiagnosticEvent[]}
export interface SubmitFeedbackRequest {request_type:'bug'|'feature';reporting_role:string;title:string;description:string;expected_behavior:string;reproduction_steps?:string;source_client:string;context:ReportContext;attachment_ids?:string[];previous_request_id?:string|null}
export type FeedbackStatus='pending_review'|'task_created'|'rejected';
export interface FeedbackRequest extends Omit<SubmitFeedbackRequest,'attachment_ids'> {id:string;workspace_id:string;reporter_id:string;branch:string;stage:number;current_stage:FeedbackReviewStage|null;status:FeedbackStatus;policy_version:number;version:number;work_item_id:string|null;created_at:string;updated_at:string}
export interface FeedbackTaskAssignment {developer_id:string;project_id:string;title:string;description:string;priority:'low'|'medium'|'high'|'urgent'}
export interface DecideFeedbackRequest {expected_version:number;decision:'approve'|'reject';description:string;assignment?:FeedbackTaskAssignment|null}
export interface FeedbackDecision {id:string;actor_id:string;stage:number;decision:'approve'|'reject';description:string;request_version:number;created_at:string}
export interface FeedbackAttachment {id:string;content_type:'image/png'|'image/jpeg'|'image/webp';size_bytes:number;status:'pending'|'ready';upload_url:string}
export interface InitializeFeedbackAttachment {content_type:FeedbackAttachment['content_type'];size_bytes:number;checksum_sha256:string}
export interface FeedbackDetail {request:FeedbackRequest;decisions:FeedbackDecision[];attachments:FeedbackAttachment[];can_decide:boolean}
export interface FeedbackListQuery extends QueryParams {cursor?:string;limit?:number;status?:FeedbackStatus;mine?:boolean;reporting_role?:string;source_client?:string}
export interface FeedbackPage {items:FeedbackRequest[];next_cursor:string|null}
/** Native /api/v1/feedback/capabilities reporter binding (Task 576f181).
 * Freeze reporter_id before capture. Send X-Feedback-Reporter-Id on attachment
 * and submission calls; 409 feedback_identity_changed requires discarding the
 * captured context/screenshot and obtaining a fresh binding. No credential is implied.
 */
export interface FeedbackCapabilities {reporter_id:string;identity_binding_version:1;enabled:boolean;context_schema_version:1;reporting_roles:string[];can_submit:boolean;can_review:boolean;can_manage_policy:boolean;max_context_bytes:number;max_screenshot_bytes:number}
export interface FeedbackReviewStage {key:string;role:string;kind:'review'|'assign_task';label:{en:string;fa:string}}
export interface FeedbackRoute {reporting_roles:string[];branch:string;stages:FeedbackReviewStage[]}
export interface FeedbackReviewGrant {role:string;branch:string;stage:number}
export interface FeedbackPolicy {routes:FeedbackRoute[];review_grants:FeedbackReviewGrant[];developer_roles:string[]}
export interface FeedbackPolicyResult {version:number;policy:FeedbackPolicy}
export interface FeedbackDeveloper {id:string;name:string|null}
export interface FeedbackAssignees {developers:FeedbackDeveloper[];projects:Project[]}
const path=(id:string)=>`/api/v1/feedback/requests/${encodeURIComponent(id)}`;
/** Sandbox feedback intake. All methods inherit the configured authenticated FaiberClient. */
export class FeedbackApi extends ServiceApi {
 /** Get current user's verified reporting roles; requires tenant login. Disabled/unconfigured services return 404 or enabled=false. */
 capabilities(options?:RequestOptions){return this.client.get<TaskResponse<FeedbackCapabilities>>('/api/v1/feedback/capabilities',undefined,options);}
 /** Submit a bug or feature report. Requires feedback:submit; retries must reuse the same key/body. 409 can mean key reuse or a stale X-Feedback-Reporter-Id precondition; stale identity requires a fresh capture. */
 submit(input:SubmitFeedbackRequest,key:string,options?:RequestOptions<SubmitFeedbackRequest>){return this.client.post<TaskResponse<FeedbackRequest>,SubmitFeedbackRequest>('/api/v1/feedback/requests',input,{...options,headers:{...options?.headers,'Idempotency-Key':key}});}
 /** List SQL-scoped reports; requires self-read or review permission plus local grants. */
 list(query?:FeedbackListQuery,options?:RequestOptions){return this.client.get<TaskResponse<FeedbackPage>>('/api/v1/feedback/requests',query,options);}
 /** Read report, immutable history and attachments; unauthorized objects return 404. */
 detail(id:string,options?:RequestOptions){return this.client.get<TaskResponse<FeedbackDetail>>(path(id),undefined,options);}
 /** Approve/reject current stage with a description. Final assignment-stage approval requires assignment. 409 denotes a stale version. */
 decide(id:string,input:DecideFeedbackRequest,key:string,options?:RequestOptions<DecideFeedbackRequest>){return this.client.post<TaskResponse<FeedbackRequest>,DecideFeedbackRequest>(`${path(id)}/decisions`,input,{...options,headers:{...options?.headers,'Idempotency-Key':key}});}
 /** Initialize a private screenshot upload, at most 10 MiB; requires feedback:submit. */
 initializeAttachment(input:InitializeFeedbackAttachment,options?:RequestOptions<InitializeFeedbackAttachment>){return this.client.post<TaskResponse<FeedbackAttachment>,InitializeFeedbackAttachment>('/api/v1/feedback/attachments',input,options);}
 /** Upload raw PNG/JPEG/WebP bytes through the authenticated API. Content, dimensions, size and checksum are checked. */
 uploadAttachment(id:string,bytes:Blob,options?:RequestOptions<Blob>){return this.client.put<TaskResponse<FeedbackAttachment>,Blob>(`/api/v1/feedback/attachments/${encodeURIComponent(id)}/content`,bytes,{...options,headers:{...options?.headers,'Content-Type':bytes.type}});}
 /** Verify the private object before report submission. Screenshot failures need not block a text report. Preserve X-Feedback-Reporter-Id from capture through completion. */
 completeAttachment(id:string,options?:RequestOptions){return this.client.post<TaskResponse<FeedbackAttachment>>(`/api/v1/feedback/attachments/${encodeURIComponent(id)}/complete`,undefined,options);}
 /** Download evidence with current report authorization; object-storage URLs are never public. Browser default is Blob; Node callers must select responseType='arraybuffer' for lossless bytes (Node Uint8Array/Buffer or browser ArrayBuffer). */
 attachmentContent(id:string,attachment:string,options:RequestOptions&{responseType:'arraybuffer'}):Promise<AxiosResponse<ArrayBuffer|Uint8Array>>;
 attachmentContent(id:string,attachment:string,options?:RequestOptions):Promise<AxiosResponse<Blob>>;
 attachmentContent(id:string,attachment:string,options?:RequestOptions){return this.client.request<Blob|ArrayBuffer|Uint8Array>({responseType:'blob',...options,url:`${path(id)}/attachments/${encodeURIComponent(attachment)}/content`,method:'GET'});}
 /** List active developers and authorized software projects; requires feedback:assign and local assignment scope. */
 assignees(options?:RequestOptions){return this.client.get<TaskResponse<FeedbackAssignees>>('/api/v1/feedback/assignees',undefined,options);}
 /** Read workspace routing policy; requires workspace.manage. */
 policy(options?:RequestOptions){return this.client.get<TaskResponse<FeedbackPolicyResult>>('/api/v1/feedback/policy',undefined,options);}
 /** Save local routing/grants. Use version 0 for initialization; requires workspace.manage; concurrent edits return 409. */
 savePolicy(input:FeedbackPolicy,version:number,options?:RequestOptions<FeedbackPolicy>){return this.client.put<TaskResponse<FeedbackPolicyResult>,FeedbackPolicy>('/api/v1/feedback/policy',input,{...options,headers:{...options?.headers,'If-Match':String(version)}});}
}
