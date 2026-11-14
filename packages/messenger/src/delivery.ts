import { ServiceApi, type RequestOptions, type QueryParams } from '@faiber/sdk-core';
import type { ApiEnvelope, JsonValue } from '@faiber/sdk-core';
export interface NotificationDestinationContext { classroom_id?:string;room_id?:string;session_id?:string;exam_id?:string;assignment_id?:string;conversation_id?:string;message_id?:string;name?:string;starts_at?:string;due_at?:string;teacher_user_id?:string;teacher_led?:boolean }
export interface NotificationDestination {kind:string;entity_id?:string;request_id?:string;work_item_id?:string|null;context?:NotificationDestinationContext}
/** Recipient-safe projection of a historical event. Malformed raw IDs/timestamps remain null.
 * Provider diagnostics, routing recipients, params and options are never public fields.
 * destination retains native dynamic JSON; validate a recognized destination before navigation.
 */
export interface InboxStreamNotification {id:number|null;title:string|null;description:string|null;path:string|null;destination:JsonValue;work_item_id:string|null;event:string|null;read:boolean;created_at:string|null;deleted:boolean}
/** Legacy push-channel projection has no durable cursor. */
export interface RecipientNotificationPayload {type:'notification.upserted';notification:InboxStreamNotification}
/** Committed long-poll/durable socket payload; event ID identifies recipient and sequence. */
export interface InboxStreamPayload extends RecipientNotificationPayload {cursor:number;event_id:string}
export interface InboxStreamEvent {sequence:number;notification_id:number;payload:InboxStreamPayload}
export interface InboxStreamPage {events:InboxStreamEvent[];cursor:number;has_more:boolean}
export interface InboxStreamQuery extends QueryParams {cursor?:number;wait_seconds?:number}
export interface NotificationUnreadCount {unread_count:number}
export interface PushDeviceInput {application_id:string;installation_id:string;platform:'android'|'ios'|'web';token?:string;locale:string}
export interface PushDevice {id:string}
export interface PushDeviceRevocation {revoked:true}
export type DeviceDeliveryTransport = 'socket' | 'firebase' | 'pull';
export interface DevicePresenceInput { socket_connected:boolean }
export interface DevicePresence { lease_seconds:number }
export interface PendingDeviceNotification { delivery_id:string;receipt_token:string;notification_id:string;recipient_id:string;title:string;body:string;path:string|null;destination:JsonValue }
export interface PendingDeviceNotifications { items:PendingDeviceNotification[];has_more:boolean }
export interface DeviceReceiptInput { delivery_id:string;receipt_token:string;transport:DeviceDeliveryTransport }
export interface DeviceReceipt { acknowledged:true }
export interface NotificationDeviceDelivery { target_devices:number;delivered_devices:number;provider_accepted_devices:number;delivered:boolean }
/** Self-scoped inbox delivery requires the current self-read permission in the native message namespace (legacy notification:self:read forwarded alias). Mobile device handlers declare notification:self:read and require an actor; explicit self_inbox_user filtering applies to inbox polling/counts. */
export class MessengerDeliveryApi extends ServiceApi {
 /** Initialize cursor, then load the inbox snapshot, then resume from that cursor. A 410 requires resynchronization. Default timeout is 35 seconds for the server's 25-second wait; AbortSignal cancels normally. */
 events(query?:InboxStreamQuery,options?:RequestOptions){return this.client.get<ApiEnvelope<InboxStreamPage>>('/api/v1/notifications/me/events',query,{timeout:35000,...options});}
 /** Authoritative count, excluding deleted and read notifications; separate from chat-message counts. */
 unreadCount(options?:RequestOptions){return this.client.get<ApiEnvelope<NotificationUnreadCount>>('/api/v1/notifications/me/unread-count',undefined,options);}
 /** Register or refresh this authenticated installation. Reuse its installation UUID; token changes and account switching are supported. 409 denotes device limit/conflict. */
 registerDevice(input:PushDeviceInput,options?:RequestOptions<PushDeviceInput>){return this.client.post<ApiEnvelope<PushDevice>,PushDeviceInput>('/api/v1/push/devices',input,options);}
 /** Renew this owned installation's 60-second socket lease only after subscription succeeds. Requires notification:self:read; 404 means registration expired or was revoked. */
 presence(id:string,input:DevicePresenceInput,options?:RequestOptions<DevicePresenceInput>){return this.client.post<ApiEnvelope<DevicePresence>,DevicePresenceInput>(`/api/v1/push/devices/${encodeURIComponent(id)}/presence`,input,options);}
 /** Recover up to 100 unacknowledged device deliveries, oldest first. Requires notification:self:read; display and acknowledge each item before requesting the next page. */
 pending(id:string,options?:RequestOptions){return this.client.get<ApiEnvelope<PendingDeviceNotifications>>(`/api/v1/push/devices/${encodeURIComponent(id)}/pending`,undefined,options);}
 /** Idempotent transport receipt, separate from read state. The per-delivery capability authorizes only this acknowledgement; 401 means invalid/expired capability. Never acknowledge provider acceptance as device receipt. */
 acknowledge(input:DeviceReceiptInput,options?:RequestOptions<DeviceReceiptInput>){return this.client.post<ApiEnvelope<DeviceReceipt>,DeviceReceiptInput>('/api/v1/push/receipts',input,options);}
 /** Recipient-only aggregate over active target installations. Provider acceptance is reported separately. Requires notification:self:read; inaccessible notifications return 404. */
 deliveryStatus(id:number,options?:RequestOptions){return this.client.get<ApiEnvelope<NotificationDeviceDelivery>>(`/api/v1/notifications/me/${encodeURIComponent(id)}/delivery`,undefined,options);}
 /** Revoke an owned installation before logout. Other users' registrations remain inaccessible. */
 revokeDevice(id:string,options?:RequestOptions){return this.client.delete<ApiEnvelope<PushDeviceRevocation>>(`/api/v1/push/devices/${encodeURIComponent(id)}`,options);}
}

export type WebPushConfig = {enabled:true;public_key:string} | {enabled:false;public_key:null}
export interface WebPushKeys {p256dh:string;auth:string}
export interface WebPushSubscription {endpoint:string;keys:WebPushKeys}
/** Approved HTTPS push endpoint and URL-safe unpadded base64 keys; locale is normalized to en or fa. */
export interface WebPushRegistration {application_id?:string;locale?:string;subscription:WebPushSubscription}
export interface WebPushRemoval {removed:true}
export interface WebPushTestDelivery {id:string;status:'pending'}
export interface WebPushDelivery {id:string;status:'pending'|'sent'|'failed'|'cancelled';provider_status:number|null}
