import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: response without a declared JSON model. */
export interface RouterOpenapiJsonGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: Vec<ChannelResponse>. */
export interface ChannelChannelsIndexGetResponseItem extends JsonObject {
  "id": number;
  "name": string;
}
export interface ChannelChannelsIndexGetResponse extends ApiEnvelope<ChannelChannelsIndexGetResponseItem[]> {
}

/** Backend request type: CreateChannelRequest. */
export interface ChannelChannelsCreatePostInput extends JsonObject {
  "name": string;
}
/** Backend response type: ChannelResponse. */
export interface ChannelChannelsCreatePostResponseData extends JsonObject {
  "id": number;
  "name": string;
}
export interface ChannelChannelsCreatePostResponse extends ApiEnvelope<ChannelChannelsCreatePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ChannelChannelsDeleteDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: ChannelResponse. */
export interface ChannelChannelsShowGetResponseData extends JsonObject {
  "id": number;
  "name": string;
}
export interface ChannelChannelsShowGetResponse extends ApiEnvelope<ChannelChannelsShowGetResponseData> {
}

/** Backend request type: UpdateChannelRequest. */
export interface ChannelChannelsUpdatePatchInput extends JsonObject {
  "name": string;
}
/** Backend response type: ChannelResponse. */
export interface ChannelChannelsUpdatePatchResponseData extends JsonObject {
  "id": number;
  "name": string;
}
export interface ChannelChannelsUpdatePatchResponse extends ApiEnvelope<ChannelChannelsUpdatePatchResponseData> {
}

/** Backend request type: SubscribeRequest. */
export interface ChannelChannelsSubscribePostInput extends JsonObject {
  "channel_id": number;
  "user_id": string;
  "subscribed": boolean;
}
/** Backend response type: serde_json::Value. */
export interface ChannelChannelsSubscribePostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: DashboardResponse. */
export interface DashboardDashboardShowGetResponseData extends JsonObject {
  "templates": number;
  "notifications": number;
  "channels": number;
  "services": number;
  "providers": number;
}
export interface DashboardDashboardShowGetResponse extends ApiEnvelope<DashboardDashboardShowGetResponseData> {
}

/** Backend response type: crate::integration::models::IntegrationDocsResponse. */
export interface IntegrationIntegrationDocsShowGetResponseData extends JsonObject {
  "direct": JsonValue;
  "sdk": JsonValue[];
}
export interface IntegrationIntegrationDocsShowGetResponse extends ApiEnvelope<IntegrationIntegrationDocsShowGetResponseData> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: crate::integration::models::RabbitMqIntegrationResponse. */
export interface IntegrationRabbitmqIntegrationShowGetResponseData extends JsonObject {
  "queue": string;
  "broker_url_hint": string;
  "sample_profile_id": string;
  "events": JsonValue[];
}
export interface IntegrationRabbitmqIntegrationShowGetResponse extends ApiEnvelope<IntegrationRabbitmqIntegrationShowGetResponseData> {
}

/** Backend query type: NotificationListQuery. */
export interface NotificationNotificationsIndexGetQuery extends QueryParams {
}
/** Backend response type: crate::models::PagedResult<NotificationResponse>. */
export interface NotificationNotificationsIndexGetResponseItem extends JsonObject {
  "id": number;
  "service_name": string;
  "template_id": number;
  "channel": string;
  "recipient": string;
  "status": string;
  "description"?: string;
  "params"?: JsonValue;
  "options"?: JsonValue;
  "delivery_attempts"?: JsonValue;
  "delivered": boolean;
  "read": boolean;
  "read_at"?: string;
  "scheduled_at"?: string;
  "sent_at"?: string;
  "failed_at"?: string;
  "created_at": string;
}
export interface NotificationNotificationsIndexGetResponsePageMeta extends JsonObject {
  "page": number;
  "page_size": number;
  "total_items": number;
  "total_pages": number;
}
export interface NotificationNotificationsIndexGetResponseData extends JsonObject {
  "data": NotificationNotificationsIndexGetResponseItem[];
  "meta": NotificationNotificationsIndexGetResponsePageMeta;
}
export interface NotificationNotificationsIndexGetResponse extends ApiEnvelope<NotificationNotificationsIndexGetResponseData> {
}

/** Backend request type: SendNotificationRequest. */
export interface NotificationNotificationsSendPostInput extends JsonObject {
  "template_id"?: number;
  "template_name"?: string;
  "channel": string;
  "recipients": string[];
  "recipient"?: string;
  "params": Record<string, JsonValue>;
  "service_name"?: string;
  "options": JsonValue;
  "description"?: string;
  "scheduled_at"?: string;
}
/** Backend response type: SendNotificationResponse. */
export interface NotificationNotificationsSendPostResponseData extends JsonObject {
  "notification_ids": number[];
}
export interface NotificationNotificationsSendPostResponse extends ApiEnvelope<NotificationNotificationsSendPostResponseData> {
}

/** Backend response type: NotificationResponse. */
export interface NotificationNotificationsShowGetResponseData extends JsonObject {
  "id": number;
  "service_name": string;
  "template_id": number;
  "channel": string;
  "recipient": string;
  "status": string;
  "description"?: string;
  "params"?: JsonValue;
  "options"?: JsonValue;
  "delivery_attempts"?: JsonValue;
  "delivered": boolean;
  "read": boolean;
  "read_at"?: string;
  "scheduled_at"?: string;
  "sent_at"?: string;
  "failed_at"?: string;
  "created_at": string;
}
export interface NotificationNotificationsShowGetResponse extends ApiEnvelope<NotificationNotificationsShowGetResponseData> {
}

/** Backend query type: MarkReadQuery. */
export interface NotificationNotificationsMarkReadPatchQuery extends QueryParams {
}
/** Backend response type: NotificationResponse. */
export interface NotificationNotificationsMarkReadPatchResponseData extends JsonObject {
  "id": number;
  "service_name": string;
  "template_id": number;
  "channel": string;
  "recipient": string;
  "status": string;
  "description"?: string;
  "params"?: JsonValue;
  "options"?: JsonValue;
  "delivery_attempts"?: JsonValue;
  "delivered": boolean;
  "read": boolean;
  "read_at"?: string;
  "scheduled_at"?: string;
  "sent_at"?: string;
  "failed_at"?: string;
  "created_at": string;
}
export interface NotificationNotificationsMarkReadPatchResponse extends ApiEnvelope<NotificationNotificationsMarkReadPatchResponseData> {
}

/** Backend response type: Vec<ServiceResponse>. */
export interface ServiceServicesIndexGetResponseItem extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
  "channel": string;
  "options"?: JsonValue;
  "priority": number;
}
export interface ServiceServicesIndexGetResponse extends ApiEnvelope<ServiceServicesIndexGetResponseItem[]> {
}

/** Backend request type: CreateServiceRequest. */
export interface ServiceServicesCreatePostInput extends JsonObject {
  "name": string;
  "provider": string;
  "channel": string;
  "options": JsonValue;
  "priority"?: number;
}
/** Backend response type: ServiceResponse. */
export interface ServiceServicesCreatePostResponseData extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
  "channel": string;
  "options"?: JsonValue;
  "priority": number;
}
export interface ServiceServicesCreatePostResponse extends ApiEnvelope<ServiceServicesCreatePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface ServiceServicesDeleteDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: ServiceResponse. */
export interface ServiceServicesShowGetResponseData extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
  "channel": string;
  "options"?: JsonValue;
  "priority": number;
}
export interface ServiceServicesShowGetResponse extends ApiEnvelope<ServiceServicesShowGetResponseData> {
}

/** Backend request type: UpdateServiceRequest. */
export interface ServiceServicesUpdatePatchInput extends JsonObject {
  "name"?: string;
  "provider"?: string;
  "channel"?: string;
  "options"?: JsonValue;
  "priority"?: number;
}
/** Backend response type: ServiceResponse. */
export interface ServiceServicesUpdatePatchResponseData extends JsonObject {
  "id": number;
  "name": string;
  "provider": string;
  "channel": string;
  "options"?: JsonValue;
  "priority": number;
}
export interface ServiceServicesUpdatePatchResponse extends ApiEnvelope<ServiceServicesUpdatePatchResponseData> {
}

/** Backend response type: Vec<TemplateResponse>. */
export interface TemplateTemplatesIndexGetResponseItem extends JsonObject {
  "id": number;
  "name": string;
  "fa_name": string;
  "params"?: JsonValue;
  "channel_id"?: number;
}
export interface TemplateTemplatesIndexGetResponse extends ApiEnvelope<TemplateTemplatesIndexGetResponseItem[]> {
}

/** Backend request type: CreateTemplateRequest. */
export interface TemplateTemplatesCreatePostInput extends JsonObject {
  "name": string;
  "fa_name": string;
  "params"?: string[];
  "channel_id"?: number;
}
/** Backend response type: TemplateResponse. */
export interface TemplateTemplatesCreatePostResponseData extends JsonObject {
  "id": number;
  "name": string;
  "fa_name": string;
  "params"?: JsonValue;
  "channel_id"?: number;
}
export interface TemplateTemplatesCreatePostResponse extends ApiEnvelope<TemplateTemplatesCreatePostResponseData> {
}

/** Backend response type: serde_json::Value. */
export interface TemplateTemplatesDeleteDeleteResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: TemplateResponse. */
export interface TemplateTemplatesShowGetResponseData extends JsonObject {
  "id": number;
  "name": string;
  "fa_name": string;
  "params"?: JsonValue;
  "channel_id"?: number;
}
export interface TemplateTemplatesShowGetResponse extends ApiEnvelope<TemplateTemplatesShowGetResponseData> {
}

/** Backend request type: UpdateTemplateRequest. */
export interface TemplateTemplatesUpdatePatchInput extends JsonObject {
  "name"?: string;
  "fa_name"?: string;
  "params"?: string[];
  "channel_id"?: number | null;
}
/** Backend response type: TemplateResponse. */
export interface TemplateTemplatesUpdatePatchResponseData extends JsonObject {
  "id": number;
  "name": string;
  "fa_name": string;
  "params"?: JsonValue;
  "channel_id"?: number;
}
export interface TemplateTemplatesUpdatePatchResponse extends ApiEnvelope<TemplateTemplatesUpdatePatchResponseData> {
}

/** Backend response type: Vec<TemplateContentResponse>. */
export interface TemplateTemplateContentsIndexGetResponseItem extends JsonObject {
  "id": number;
  "template_id": number;
  "channel": string;
  "text": string;
  "options"?: JsonValue;
}
export interface TemplateTemplateContentsIndexGetResponse extends ApiEnvelope<TemplateTemplateContentsIndexGetResponseItem[]> {
}

/** Backend request type: CreateTemplateContentRequest. */
export interface TemplateTemplateContentsCreatePostInput extends JsonObject {
  "channel": string;
  "text": string;
  "options"?: JsonValue;
}
/** Backend response type: TemplateContentResponse. */
export interface TemplateTemplateContentsCreatePostResponseData extends JsonObject {
  "id": number;
  "template_id": number;
  "channel": string;
  "text": string;
  "options"?: JsonValue;
}
export interface TemplateTemplateContentsCreatePostResponse extends ApiEnvelope<TemplateTemplateContentsCreatePostResponseData> {
}

/** Backend request type: UpdateTemplateContentRequest. */
export interface TemplateTemplateContentsUpdatePatchInput extends JsonObject {
  "text"?: string;
  "options"?: JsonValue;
}
/** Backend response type: TemplateContentResponse. */
export interface TemplateTemplateContentsUpdatePatchResponseData extends JsonObject {
  "id": number;
  "template_id": number;
  "channel": string;
  "text": string;
  "options"?: JsonValue;
}
export interface TemplateTemplateContentsUpdatePatchResponse extends ApiEnvelope<TemplateTemplateContentsUpdatePatchResponseData> {
}

/** Backend response type: response without a declared JSON model. */
export interface RouterStatusRouteGetHealthResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: response without a declared JSON model. */
export interface RouterStatusRouteGetUpResponse extends ApiEnvelope<JsonValue> {
}

