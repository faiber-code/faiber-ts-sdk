import type { ApiEnvelope, JsonObject, ResourceListResponse, ResourceResponse } from "@faiber/sdk-core";
export interface MessageTemplate extends JsonObject {
    id: string;
    name: string;
    subject?: string;
    content: string;
}
export interface CreateMessageTemplateInput extends JsonObject {
    name: string;
    content: string;
    subject?: string;
}
export interface UpdateMessageTemplateInput extends Partial<CreateMessageTemplateInput> {
}
export interface Channel extends JsonObject {
    id: string;
    name: string;
    type: string;
    active?: boolean;
}
export interface CreateChannelInput extends JsonObject {
    name: string;
    type: string;
    active?: boolean;
    config?: JsonObject;
}
export interface UpdateChannelInput extends Partial<CreateChannelInput> {
}
export interface DeliveryProvider extends JsonObject {
    id: string;
    name: string;
    type: string;
    active?: boolean;
}
export interface CreateDeliveryProviderInput extends JsonObject {
    name: string;
    type: string;
    active?: boolean;
    config?: JsonObject;
}
export interface UpdateDeliveryProviderInput extends Partial<CreateDeliveryProviderInput> {
}
export interface Notification extends JsonObject {
    id: string;
    status: string;
    recipient?: string;
    created_at?: string;
}
export interface SendNotificationInput extends JsonObject {
    recipient: string;
    template_id?: string;
    channel?: string;
    subject?: string;
    body?: string;
    data?: JsonObject;
}
export interface SubscribeChannelInput extends JsonObject {
    channel_id: string;
    recipient: string;
    metadata?: JsonObject;
}
export interface TemplateContent extends JsonObject {
    locale: string;
    subject?: string;
    content: string;
}
export interface MessengerDashboard extends JsonObject {
    sent: number;
    delivered: number;
    failed: number;
}
export interface TemplateListResponse extends ResourceListResponse<MessageTemplate> {
}
export interface TemplateResponse extends ResourceResponse<MessageTemplate> {
}
export interface ChannelListResponse extends ResourceListResponse<Channel> {
}
export interface ChannelResponse extends ResourceResponse<Channel> {
}
export interface ProviderListResponse extends ResourceListResponse<DeliveryProvider> {
}
export interface ProviderResponse extends ResourceResponse<DeliveryProvider> {
}
export interface NotificationListResponse extends ResourceListResponse<Notification> {
}
export interface NotificationResponse extends ResourceResponse<Notification> {
}
export interface DashboardResponse extends ApiEnvelope<MessengerDashboard> {
}
export interface SendNotificationResponse extends ApiEnvelope<Notification> {
}
export interface SubscribeChannelResponse extends ApiEnvelope<Channel> {
}
export interface TemplateContentsResponse extends ApiEnvelope<TemplateContent[]> {
}
