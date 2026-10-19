import { ServiceApi, type RequestOptions, type QueryParams } from '@faiber/sdk-core';
import type { ApiEnvelope } from '@faiber/sdk-core';
export interface NotificationDestinationContext { classroom_id?:string;room_id?:string;session_id?:string;exam_id?:string;assignment_id?:string;conversation_id?:string;message_id?:string;name?:string;starts_at?:string;due_at?:string;teacher_user_id?:string;teacher_led?:boolean }
export interface NotificationDestination {kind:string;entity_id?:string;request_id?:string;work_item_id?:string|null;context?:NotificationDestinationContext}
export interface InboxStreamNotification {id:number;recipient:string;service_name:string;read_at:string|null;deleted_at:string|null;params:{title?:string;body?:string;event?:string}|null;options:{application_id?:string;destination?:NotificationDestination;path?:string;expires_at?:string}|null;created_at:string;updated_at:string}
export interface InboxStreamPayload {type:'notification.upserted';notification:InboxStreamNotification}
export interface InboxStreamEvent {sequence:number;notification_id:number;payload:InboxStreamPayload}
export interface InboxStreamPage {events:InboxStreamEvent[];cursor:number;has_more:boolean}
export interface InboxStreamQuery extends QueryParams {cursor?:number;wait_seconds?:number}
export interface NotificationUnreadCount {unread_count:number}
export interface PushDeviceInput {application_id:string;installation_id:string;platform:'android'|'ios';token:string;locale:string}
export interface PushDevice {id:string}
export interface PushDeviceRevocation {revoked:boolean}
/** Self-scoped notification delivery. All operations require notification:self:read. */
export class MessengerDeliveryApi extends ServiceApi {
 /** Initialize cursor, then load the inbox snapshot, then resume from that cursor. A 410 requires resynchronization. Default timeout is 35 seconds for the server's 25-second wait; AbortSignal cancels normally. */
 events(query?:InboxStreamQuery,options?:RequestOptions){return this.client.get<ApiEnvelope<InboxStreamPage>>('/api/v1/notifications/me/events',query,{timeout:35000,...options});}
 /** Authoritative count, excluding deleted and read notifications; separate from chat-message counts. */
 unreadCount(options?:RequestOptions){return this.client.get<ApiEnvelope<NotificationUnreadCount>>('/api/v1/notifications/me/unread-count',undefined,options);}
 /** Register or refresh this authenticated installation. Reuse its installation UUID; token changes and account switching are supported. 409 denotes device limit/conflict. */
 registerDevice(input:PushDeviceInput,options?:RequestOptions<PushDeviceInput>){return this.client.post<ApiEnvelope<PushDevice>,PushDeviceInput>('/api/v1/push/devices',input,options);}
 /** Revoke an owned installation before logout. Other users' registrations remain inaccessible. */
 revokeDevice(id:string,options?:RequestOptions){return this.client.delete<ApiEnvelope<PushDeviceRevocation>>(`/api/v1/push/devices/${encodeURIComponent(id)}`,options);}
}

export interface WebPushConfig {enabled:boolean;public_key:string|null}
export interface WebPushRegistration {application_id?:string;locale?:string;subscription:{endpoint:string;keys:{p256dh:string;auth:string}}}
export interface WebPushRemoval {removed:boolean}
export interface WebPushTestDelivery {id:string;status:'pending'}
export interface WebPushDelivery {id:string;status:'pending'|'sent'|'failed'|'cancelled';provider_status:number|null}
