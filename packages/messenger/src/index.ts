import { RestResource, ServiceApi, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
import { MessengerOperations } from "./operations.js";
export class MessengerApi extends ServiceApi {
    readonly operations = new MessengerOperations(this.client);
    readonly templates = new RestResource<T.MessageTemplate, T.CreateMessageTemplateInput, T.UpdateMessageTemplateInput, T.TemplateListResponse, T.TemplateResponse>(this.client, "/api/v1/templates", { supported: ["list", "show", "create", "update", "delete"] });
    readonly channels = new RestResource<T.Channel, T.CreateChannelInput, T.UpdateChannelInput, T.ChannelListResponse, T.ChannelResponse>(this.client, "/api/v1/channels", { supported: ["list", "show", "create", "update", "delete"] });
    readonly providers = new RestResource<T.DeliveryProvider, T.CreateDeliveryProviderInput, T.UpdateDeliveryProviderInput, T.ProviderListResponse, T.ProviderResponse>(this.client, "/api/v1/services", { supported: ["list", "show", "create", "update", "delete"] });
    readonly notifications = new RestResource<T.Notification, T.SendNotificationInput, never, T.NotificationListResponse, T.NotificationResponse>(this.client, "/api/v1/notifications", { supported: ["list", "show", "create"] });
    dashboard(options?: RequestOptions) { return this.client.get<T.DashboardResponse>("/api/v1/dashboard", undefined, options); }
    send(data: T.SendNotificationInput, options?: RequestOptions<T.SendNotificationInput>) { return this.client.post<T.SendNotificationResponse, T.SendNotificationInput>("/api/v1/notifications", data, options); }
    subscribe(data: T.SubscribeChannelInput, options?: RequestOptions<T.SubscribeChannelInput>) { return this.client.post<T.SubscribeChannelResponse, T.SubscribeChannelInput>("/api/v1/channels/subscribe", data, options); }
    templateContents(id: string, options?: RequestOptions) { return this.client.get<T.TemplateContentsResponse>(`/api/v1/templates/${encodeURIComponent(id)}/contents`, undefined, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";
