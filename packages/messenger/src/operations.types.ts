import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: api. */
export type RouterOpenapiJsonGetResponse = import("@faiber/sdk-core").ServiceOpenApiDocument;

/** Backend response type: Vec<ChannelResponse>. */
export type ChannelChannelsIndexGetResponse = import("./types.js").ChannelListResponse;

/** Backend request type: CreateChannelRequest. */
export type ChannelChannelsCreatePostInput = import("./types.js").CreateChannelInput;
/** Backend response type: ChannelResponse. */
export type ChannelChannelsCreatePostResponse = import("./types.js").ChannelResponse;

/** Backend response type: serde_json::Value. */
export type ChannelChannelsDeleteDeleteResponse = import("./types.js").MessengerEmptyResponse;

/** Backend response type: ChannelResponse. */
export type ChannelChannelsShowGetResponse = import("./types.js").ChannelResponse;

/** Backend request type: UpdateChannelRequest. */
export type ChannelChannelsUpdatePatchInput = import("./types.js").UpdateChannelInput;
/** Backend response type: ChannelResponse. */
export type ChannelChannelsUpdatePatchResponse = import("./types.js").ChannelResponse;

/** Backend request type: SubscribeRequest. */
export type ChannelChannelsSubscribePostInput = import("./types.js").SubscribeChannelInput;
/** Backend response type: serde_json::Value. */
export type ChannelChannelsSubscribePostResponse = import("./types.js").SubscribeChannelResponse;

/** Backend response type: DashboardResponse. */
export type DashboardDashboardShowGetResponse = import("./types.js").DashboardResponse;

/** Backend response type: crate::integration::models::IntegrationDocsResponse. */
export interface IntegrationIntegrationDocsShowGetResponseDataDirectEventsPayloadFields extends JsonObject {
  "name": string;
  "field_type": string;
  "required": boolean;
  "description": string;
}
export interface IntegrationIntegrationDocsShowGetResponseDataDirectEvents extends JsonObject {
  "event_name": string;
  "payload_fields": IntegrationIntegrationDocsShowGetResponseDataDirectEventsPayloadFields[];
}
export interface IntegrationIntegrationDocsShowGetResponseDataDirect extends JsonObject {
  "transport": string;
  "queue"?: string | null;
  "broker_url_hint"?: string | null;
  "sample_profile_id"?: string | null;
  "events": IntegrationIntegrationDocsShowGetResponseDataDirectEvents[];
}
export interface IntegrationIntegrationDocsShowGetResponseDataSdk extends JsonObject {
  "event_name": string;
  "method": string;
  "language": string;
  "cargo_dep": string;
  "code": string;
}
export interface IntegrationIntegrationDocsShowGetResponseData extends JsonObject {
  "direct": IntegrationIntegrationDocsShowGetResponseDataDirect;
  "sdk": IntegrationIntegrationDocsShowGetResponseDataSdk[];
}
export interface IntegrationIntegrationDocsShowGetResponse extends ApiEnvelope<IntegrationIntegrationDocsShowGetResponseData> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export type IntegrationFlowIntegrationShowGetResponse = import("./types.js").MessengerFlowIntegrationResponse;

/** Backend response type: crate::integration::models::RabbitMqIntegrationResponse. */
export interface IntegrationRabbitmqIntegrationShowGetResponseDataEventsPayloadFields extends JsonObject {
  "name": string;
  "field_type": string;
  "required": boolean;
  "description": string;
}
export interface IntegrationRabbitmqIntegrationShowGetResponseDataEvents extends JsonObject {
  "event_name": string;
  "payload_fields": IntegrationRabbitmqIntegrationShowGetResponseDataEventsPayloadFields[];
}
export interface IntegrationRabbitmqIntegrationShowGetResponseData extends JsonObject {
  "queue": string;
  "broker_url_hint": string;
  "sample_profile_id": string;
  "events": IntegrationRabbitmqIntegrationShowGetResponseDataEvents[];
}
export interface IntegrationRabbitmqIntegrationShowGetResponse extends ApiEnvelope<IntegrationRabbitmqIntegrationShowGetResponseData> {
}

/** Backend query type: NotificationListQuery. */
export type NotificationNotificationsIndexGetQuery = import("./types.js").MessengerNotificationQuery;
/** Backend response type: crate::models::PagedResult<NotificationResponse>. */
export type NotificationNotificationsIndexGetResponse = import("./types.js").NotificationListResponse;

/** Backend request type: SendNotificationRequest. */
export type NotificationNotificationsSendPostInput = import("./types.js").SendNotificationInput;
/** Backend response type: SendNotificationResponse. */
export type NotificationNotificationsSendPostResponse = import("./types.js").SendNotificationResponse;

/** Backend response type: NotificationResponse. */
export type NotificationNotificationsShowGetResponse = import("./types.js").NotificationResponse;

/** Backend query type: MarkReadQuery. */
export type NotificationNotificationsMarkReadPatchQuery = import("./types.js").MessengerRecipientQuery;
/** Backend response type: NotificationResponse. */
export type NotificationNotificationsMarkReadPatchResponse = import("./types.js").NotificationResponse;

/** Backend query type: PaginationQuery. */
export type NotificationNotificationsMyInboxGetQuery = import("./types.js").MessengerPageQuery;
/** Backend response type: crate::models::PagedResult<InboxItem>. */
export type NotificationNotificationsMyInboxGetResponse = import("./types.js").InboxResponse;

/** Backend response type: InboxItem. */
export type NotificationNotificationsMyMarkReadPatchResponse = import("./types.js").InboxItemResponse;

/** Backend query type: PollQuery. */
export type InboxStreamEventsGetQuery = import("./delivery.js").InboxStreamQuery;
/** Backend response type: EventPage. */
export type InboxStreamEventsGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./delivery.js").InboxStreamPage>;

/** Backend response type: MarkAllReadResponse. */
export type NotificationNotificationsMyMarkAllReadPatchResponse = import("./types.js").InboxReadAllResponse;

/** Backend response type: UnreadCount. */
export type InboxStreamUnreadGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./delivery.js").NotificationUnreadCount>;

/** Backend query type: MarkAllReadQuery. */
export type NotificationNotificationsMarkAllReadPatchQuery = import("./types.js").MessengerRequiredRecipientQuery;
/** Backend response type: MarkAllReadResponse. */
export type NotificationNotificationsMarkAllReadPatchResponse = import("./types.js").InboxReadAllResponse;

/** Backend request type: RealtimeAuthRequest. */
export type NotificationNotificationsRealtimeAuthPostInput = import("./types.js").MessengerRealtimeAuthInput;
/** Backend response type: RealtimeAuthResponse. */
export type NotificationNotificationsRealtimeAuthPostResponse = import("./types.js").MessengerRealtimeAuthResponse;

/** Backend response type: RealtimeConfigResponse. */
export type NotificationNotificationsRealtimeConfigGetResponse = import("./types.js").MessengerRealtimeConfigResponse;

/** Backend request type: DeviceRegistration. */
export type MobilePushRegisterPostInput = import("./delivery.js").PushDeviceInput;
/** Backend response type: RegisteredDevice. */
export type MobilePushRegisterPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./delivery.js").PushDevice>;

/** Backend response type: Value. */
export type MobilePushRevokeDeleteResponse = import("@faiber/sdk-core").ApiEnvelope<import("./delivery.js").PushDeviceRevocation>;

/** Backend response type: Vec<ServiceResponse>. */
export type ServiceServicesIndexGetResponse = import("./types.js").ProviderListResponse;

/** Backend request type: CreateServiceRequest. */
export type ServiceServicesCreatePostInput = import("./types.js").CreateDeliveryProviderInput;
/** Backend response type: ServiceResponse. */
export type ServiceServicesCreatePostResponse = import("./types.js").ProviderResponse;

/** Backend response type: serde_json::Value. */
export type ServiceServicesDeleteDeleteResponse = import("./types.js").MessengerEmptyResponse;

/** Backend response type: ServiceResponse. */
export type ServiceServicesShowGetResponse = import("./types.js").ProviderResponse;

/** Backend request type: UpdateServiceRequest. */
export type ServiceServicesUpdatePatchInput = import("./types.js").UpdateDeliveryProviderInput;
/** Backend response type: ServiceResponse. */
export type ServiceServicesUpdatePatchResponse = import("./types.js").ProviderResponse;

/** Backend response type: serde_json::Value. */
export type ServiceSetupCheckPostResponse = import("./contracts.types.js").MessengerSetupResponse;

/** Backend response type: Value. */
export type ServiceReadinessPostResponse = import("./contracts.types.js").WebsiteOtpReadiness;

/** Backend response type: Vec<TemplateResponse>. */
export type TemplateTemplatesIndexGetResponse = import("./types.js").TemplateListResponse;

/** Backend request type: CreateTemplateRequest. */
export type TemplateTemplatesCreatePostInput = import("./types.js").CreateMessageTemplateInput;
/** Backend response type: TemplateResponse. */
export type TemplateTemplatesCreatePostResponse = import("./types.js").TemplateResponse;

/** Backend response type: serde_json::Value. */
export type TemplateTemplatesDeleteDeleteResponse = import("./types.js").MessengerEmptyResponse;

/** Backend response type: TemplateResponse. */
export type TemplateTemplatesShowGetResponse = import("./types.js").TemplateResponse;

/** Backend request type: UpdateTemplateRequest. */
export type TemplateTemplatesUpdatePatchInput = import("./types.js").UpdateMessageTemplateInput;
/** Backend response type: TemplateResponse. */
export type TemplateTemplatesUpdatePatchResponse = import("./types.js").TemplateResponse;

/** Backend response type: Vec<TemplateContentResponse>. */
export type TemplateTemplateContentsIndexGetResponse = import("./types.js").TemplateContentsResponse;

/** Backend request type: CreateTemplateContentRequest. */
export type TemplateTemplateContentsCreatePostInput = import("./types.js").CreateTemplateContentInput;
/** Backend response type: TemplateContentResponse. */
export type TemplateTemplateContentsCreatePostResponse = import("./types.js").TemplateContentResponse;

/** Backend request type: UpdateTemplateContentRequest. */
export type TemplateTemplateContentsUpdatePatchInput = import("./types.js").UpdateTemplateContentInput;
/** Backend response type: TemplateContentResponse. */
export type TemplateTemplateContentsUpdatePatchResponse = import("./types.js").TemplateContentResponse;

/** Backend response type: Value. */
export type WebPushConfigGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./delivery.js").WebPushConfig>;

/** Backend response type: Value. */
export type WebPushDeliveryGetResponse = import("@faiber/sdk-core").ApiEnvelope<import("./delivery.js").WebPushDelivery>;

/** Backend request type: Registration. */
export type WebPushSubscribePostInput = import("./delivery.js").WebPushRegistration;
/** Backend response type: Value. */
export type WebPushSubscribePostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./delivery.js").PushDevice>;

/** Backend response type: Value. */
export type WebPushUnsubscribeDeleteResponse = import("@faiber/sdk-core").ApiEnvelope<import("./delivery.js").WebPushRemoval>;

/** Backend response type: Value. */
export type WebPushTestPushPostResponse = import("@faiber/sdk-core").ApiEnvelope<import("./delivery.js").WebPushTestDelivery>;

/** Backend response type: api. */
export type RouterStatusRouteGetHealthResponse = import("./types.js").MessengerHealthResponse;

/** Backend response type: api. */
export type RouterStatusRouteGetUpResponse = import("./types.js").MessengerHealthResponse;
