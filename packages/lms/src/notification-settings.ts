import { ServiceApi, type QueryParams, type RequestOptions } from '@faiber/sdk-core';
export interface LmsNotificationResponse<T> {status:string;message:string;data:T}
export interface StudentNotificationRule {rule_key:string;audience:'student'|'teacher'|'support';source_kind:string;timing:'before'|'after'|'event';offset_seconds:number;enabled:boolean;version:number;updated_at:string;updated_by:string|null}
export interface NotificationRuleQuery extends QueryParams {audience?:'student'}
export interface UpdateNotificationRule {enabled:boolean;offset_seconds:number;expected_version:number}
export interface NotificationRulePreview {rule_key:string;title_en:string;title_fa:string;body_en:string;body_fa:string}
export interface EligibleContact {user_id:string}
export interface EligibleContactPage {contacts:EligibleContact[];next_cursor:string|null}
export interface EligibleContactQuery extends QueryParams {cursor?:string;limit?:number}
/** Sandbox-wide student notification timing. No messages are sent by preview operations. */
export class LmsNotificationSettingsApi extends ServiceApi {
 /** Requires lms:notification:settings:read; lists student rules by default. */
 list(query?:NotificationRuleQuery,options?:RequestOptions){return this.client.get<LmsNotificationResponse<StudentNotificationRule[]>>('/api/v1/notification-rules',query,options);}
 /** Requires lms:notification:settings:update. A 409 means stale expected_version; 422 rejects invalid ordering/timing. Changes update pending jobs without replaying delivered occurrences. */
 update(key:string,input:UpdateNotificationRule,options?:RequestOptions<UpdateNotificationRule>){return this.client.put<LmsNotificationResponse<StudentNotificationRule>,UpdateNotificationRule>(`/api/v1/notification-rules/${encodeURIComponent(key)}`,input,options);}
 /** Read-only preview, requiring lms:notification:settings:read. It never dispatches a notification. */
 preview(key:string,options?:RequestOptions){return this.client.post<LmsNotificationResponse<NotificationRulePreview>>(`/api/v1/notification-rules/${encodeURIComponent(key)}/preview`,undefined,options);}
}
/** Only current assigned student/teacher/support contacts; not a public user directory. */
export class LmsEligibleContactsApi extends ServiceApi {
 /** Requires lms:chat:contacts:read. Resolve display profiles separately using authorized Profile APIs. */
 list(query?:EligibleContactQuery,options?:RequestOptions){return this.client.get<LmsNotificationResponse<EligibleContactPage>>('/api/v1/chat/contacts',query,options);}
}
