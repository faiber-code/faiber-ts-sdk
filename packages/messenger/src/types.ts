import type { ApiEnvelope, JsonValue, QueryParams } from "@faiber/sdk-core";
/** Native validated channel values (distinct from numeric channel grouping IDs). */
export type MessengerChannel = 'sms' | 'sms-otp' | 'email' | 'push_notification';
export type MessengerNotificationStatus = 'waiting' | 'scheduled' | 'started' | 'ended' | 'failed';
export type MessengerProvider = 'ghasedak' | 'armaghan' | 'pusher' | 'firebase' | 'smtp';
/** Raw template params/options are serde_json::Value and may contain legacy JSON shapes. */
export interface MessageTemplate { id: number; name: string; fa_name: string; params: JsonValue; channel_id: number | null }
export interface CreateMessageTemplateInput { name: string; fa_name: string; params?: string[] | null; channel_id?: number | null }
/** Omitted channel_id preserves; null clears. Null name/fa_name/params preserves existing values. */
export interface UpdateMessageTemplateInput { name?: string | null; fa_name?: string | null; params?: string[] | null; channel_id?: number | null }
export interface Channel { id: number; name: string }
export interface CreateChannelInput { name: string }
export interface UpdateChannelInput { name: string }
/** Provider options are write-only; all native read/create/update responses serialize null. */
export interface DeliveryProvider { id: number; name: string; provider: MessengerProvider; channel: MessengerChannel; options: null; priority: number }
/** options is provider-specific dynamic JSON, encrypted by the backend. priority is an i16. */
export interface CreateDeliveryProviderInput { name: string; provider: MessengerProvider; channel: MessengerChannel; options: JsonValue; priority?: number | null }
/** Null options preserves credentials. Invalid channel strings preserve the previous channel in native update behavior. */
export interface UpdateDeliveryProviderInput { name?: string | null; provider?: MessengerProvider | null; channel?: MessengerChannel | null; options?: JsonValue; priority?: number | null }
/** Administrative record: description and delivery_attempts can contain provider diagnostics. */
export interface Notification { id: number; service_name: string; template_id: number; channel: MessengerChannel; correlation_id: string | null; recipient: string; status: MessengerNotificationStatus; description: string | null; params: JsonValue; options: JsonValue; delivery_attempts: JsonValue; delivered: boolean; read: boolean; read_at: string | null; scheduled_at: string | null; sent_at: string | null; failed_at: string | null; created_at: string }
/** Nonempty recipients takes precedence over recipient. params/options are deliberately native dynamic JSON. */
export interface SendNotificationInput { template_id?: number | null; template_name?: string | null; channel: MessengerChannel; recipients?: string[]; recipient?: string | null; params?: Record<string, JsonValue>; service_name?: string | null; options?: JsonValue; description?: string | null; scheduled_at?: string | null }
export interface SubscribeChannelInput { channel_id: number; user_id: string; subscribed: boolean }
export interface TemplateContent { id: number; template_id: number; channel: MessengerChannel; text: string; options: JsonValue }
export interface CreateTemplateContentInput { channel: MessengerChannel; text: string; options?: JsonValue }
/** Null text/options preserves; channel cannot be changed. */
export interface UpdateTemplateContentInput { text?: string | null; options?: JsonValue }
export interface MessengerDashboard { templates: number; notifications: number; channels: number; services: number; providers: number }
/** There is no query extractor on channel, template or provider lists. */
export interface MessengerNoQuery extends QueryParams { [key: string]: never }
export interface MessengerPageQuery extends QueryParams { 'page[number]'?: number; 'page[size]'?: number }
export interface MessengerNotificationQuery extends MessengerPageQuery { recipient?: string }
export interface MessengerRecipientQuery extends QueryParams { recipient?: string }
export interface MessengerRequiredRecipientQuery extends QueryParams { recipient: string }
export interface MessengerPageMeta { page: number; page_size: number; total_items: number; total_pages: number }
export interface MessengerNotificationPage { data: Notification[]; meta: MessengerPageMeta }
/** Recipient copy only; description is the message body, never a delivery diagnostic. destination is deliberately native dynamic JSON. */
export interface InboxItem { destination: JsonValue; id: number; title: string | null; description: string | null; path: string | null; work_item_id: string | null; event: string | null; read: boolean; created_at: string }
export interface MessengerInboxPage { data: InboxItem[]; meta: MessengerPageMeta }
/** The native success value is exactly an empty JSON object. */
export type MessengerEmptyObject = Record<string, never>;
export type MessengerEmptyResponse = ApiEnvelope<MessengerEmptyObject>;
export type TemplateListResponse = ApiEnvelope<MessageTemplate[]>;
export type TemplateResponse = ApiEnvelope<MessageTemplate>;
export type ChannelListResponse = ApiEnvelope<Channel[]>;
export type ChannelResponse = ApiEnvelope<Channel>;
export type ProviderListResponse = ApiEnvelope<DeliveryProvider[]>;
export type ProviderResponse = ApiEnvelope<DeliveryProvider>;
export type NotificationListResponse = ApiEnvelope<MessengerNotificationPage>;
export type NotificationResponse = ApiEnvelope<Notification>;
export type InboxResponse = ApiEnvelope<MessengerInboxPage>;
export type InboxItemResponse = ApiEnvelope<InboxItem>;
export interface MarkNotificationsReadResult { updated: number }
export type InboxReadAllResponse = ApiEnvelope<MarkNotificationsReadResult>;
export type DashboardResponse = ApiEnvelope<MessengerDashboard>;
export interface QueuedNotifications { notification_ids: number[] }
export type SendNotificationResponse = ApiEnvelope<QueuedNotifications>;
export type SubscribeChannelResponse = MessengerEmptyResponse;
export type TemplateContentsResponse = ApiEnvelope<TemplateContent[]>;
export type TemplateContentResponse = ApiEnvelope<TemplateContent>;
export interface MessengerRealtimeAuthInput { socket_id: string; channel_name: string }
/** Pusher-compatible auth is a raw JSON object, not an APIResponse envelope. */
export interface MessengerRealtimeAuthResponse { auth: string }
export interface MessengerRealtimeConfig { ws_url: string; app_key: string; channel: string; event: 'PrivateMessageEvent' }
export type MessengerRealtimeConfigResponse = ApiEnvelope<MessengerRealtimeConfig>;
export interface MessengerHealth { version: string }
export type MessengerHealthResponse = ApiEnvelope<MessengerHealth>;
export interface MessengerIntegrationField { name: string; field_type: string; required: boolean; description: string }
export interface MessengerIntegrationEvent { event_name: string; payload_fields: MessengerIntegrationField[] }
/** Concrete model from locked infera-flow-sdk 291c81a67bc302d667fb807da2af3240598bee52. */
export interface MessengerFlowIntegration { queue: string; events: MessengerIntegrationEvent[] }
export type MessengerFlowIntegrationResponse = ApiEnvelope<MessengerFlowIntegration>;
