import { MessengerDeliveryApi } from "./delivery.js";
import { RestResource, ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
import type * as O from "./operations.types.js";
import { MessengerOperations } from "./operations.js";
/** Explicit inbox pagination options; generic RequestOptions deliberately omit query parameters. */
export type InboxRequestOptions = RequestOptions & { params?: O.NotificationNotificationsMyInboxGetQuery };
export class MessengerApi extends ServiceApi {
    readonly delivery = new MessengerDeliveryApi(this.client);
    readonly operations = new MessengerOperations(this.client);
    /** Native numeric templates; read/create/update/delete require matching admin:template grants. Lists are unpaginated; deletes return data {}. */
    readonly templates = new RestResource<T.MessageTemplate, T.CreateMessageTemplateInput, T.UpdateMessageTemplateInput, T.TemplateListResponse, T.TemplateResponse, T.MessengerNoQuery, T.MessengerEmptyResponse>(this.client, "/api/v1/templates", { supported: ["list", "show", "create", "update", "delete"] });
    /** Numeric channel groups; requires matching admin:channel grants. Rename requires name; lists are unpaginated. */
    readonly channels = new RestResource<T.Channel, T.CreateChannelInput, T.UpdateChannelInput, T.ChannelListResponse, T.ChannelResponse, T.MessengerNoQuery, T.MessengerEmptyResponse>(this.client, "/api/v1/channels", { supported: ["list", "show", "create", "update", "delete"] });
    /** Provider services; requires matching admin:service grants. Options are write-only and read back as null. */
    readonly providers = new RestResource<T.DeliveryProvider, T.CreateDeliveryProviderInput, T.UpdateDeliveryProviderInput, T.ProviderListResponse, T.ProviderResponse, T.MessengerNoQuery, T.MessengerEmptyResponse>(this.client, "/api/v1/services", { supported: ["list", "show", "create", "update", "delete"] });
    /** Administrative notification reads and queueing use distinct native response models. */
    readonly notifications = {
        /** Page administrative delivery records; requires admin:notification:read. */
        list: (params?: T.MessengerNotificationQuery, options?: RequestOptions) => this.client.get<T.NotificationListResponse>("/api/v1/notifications", params, options),
        /** Read an administrative record; requires admin:notification:read. */
        show: (id: Identifier, options?: RequestOptions) => this.client.get<T.NotificationResponse>(`/api/v1/notifications/${encodeURIComponent(id)}`, undefined, options),
        /** Queue and return notification_ids; gateway service authority is deployment-defined. */
        create: (data: T.SendNotificationInput, options?: RequestOptions<T.SendNotificationInput>) => this.client.post<T.SendNotificationResponse, T.SendNotificationInput>("/api/v1/notifications", data, options),
    };
    /** Read inventory counts; requires admin:dashboard:read. */
    dashboard(options?: RequestOptions) { return this.client.get<T.DashboardResponse>("/api/v1/dashboard", undefined, options); }
    /** Queue notifications (HTTP 200) using a template ID/name and validated channel; recipient arrays take precedence. Gateway service authority is deployment-defined. */
    send(data: T.SendNotificationInput, options?: RequestOptions<T.SendNotificationInput>) { return this.client.post<T.SendNotificationResponse, T.SendNotificationInput>("/api/v1/notifications", data, options); }
    /** Update an arbitrary user channel subscription; gateway service authority is deployment-defined. Returns an empty data object. */
    subscribe(data: T.SubscribeChannelInput, options?: RequestOptions<T.SubscribeChannelInput>) { return this.client.post<T.SubscribeChannelResponse, T.SubscribeChannelInput>("/api/v1/channels/subscribe", data, options); }
    /** Read channel-specific template text/options; requires admin:template:read. */
    templateContents(id: Identifier, options?: RequestOptions) { return this.client.get<T.TemplateContentsResponse>(`/api/v1/templates/${encodeURIComponent(id)}/contents`, undefined, options); }
    /** Page administrative records including delivery diagnostics; requires admin:notification:read. */
    listNotifications(params?: O.NotificationNotificationsIndexGetQuery, options?: RequestOptions) { return this.operations.notificationNotificationsIndexGet(params, options); }
    /** Read an administrative notification; requires admin:notification:read, returns 404 when absent. */
    notification(id: Identifier, options?: RequestOptions) { return this.operations.notificationNotificationsShowGet(id, options); }
    /** Mark a record read, optionally constrained by recipient; requires admin:notification:read. */
    markNotificationRead(id: Identifier, params?: O.NotificationNotificationsMarkReadPatchQuery, options?: RequestOptions) { return this.operations.notificationNotificationsMarkReadPatch(id, params, options); }
    /** Mark all records for the required recipient read; requires admin:notification:read. */
    markAllNotificationsRead(params: O.NotificationNotificationsMarkAllReadPatchQuery, options?: RequestOptions) { return this.operations.notificationNotificationsMarkAllReadPatch(params, options); }
    /** List only the current non-nil actor recipient copy; requires notification:self:read. Native page defaults 1/20; invalid queries return 400. */
    myInbox(options?: InboxRequestOptions) { return this.client.get<T.InboxResponse>("/api/v1/notifications/me", options?.params, options); }
    /** Page the current actor inbox with native bracket keys; requires notification:self:read. Default page 1/size 20, size clamp 1..100. */
    myInboxPage(params?: O.NotificationNotificationsMyInboxGetQuery, options?: RequestOptions) { return this.client.get<T.InboxResponse>("/api/v1/notifications/me", params, options); }
    /** Mark one current actor notification read; requires notification:self:read. Other-recipient, missing and deleted records return 404. */
    markMyNotificationRead(id: Identifier, options?: RequestOptions) { return this.client.patch<T.InboxItemResponse>(`/api/v1/notifications/me/${encodeURIComponent(id)}/read`, undefined, options); }
    /** Mark all current actor notifications read; requires notification:self:read. */
    markMyInboxRead(options?: RequestOptions) { return this.client.patch<T.InboxReadAllResponse>("/api/v1/notifications/me/read-all", undefined, options); }
    /** Authorize only the current actor private channel; requires notification:self:read. Returns raw {auth}; wrong channel is 403, unavailable realtime is 503. */
    notificationRealtimeAuth(data: O.NotificationNotificationsRealtimeAuthPostInput, options?: RequestOptions<O.NotificationNotificationsRealtimeAuthPostInput>) { return this.operations.notificationNotificationsRealtimeAuthPost(data, options); }
    /** Read current actor realtime connection metadata; requires notification:self:read and a non-nil actor. Unavailable configuration is 503. */
    notificationRealtimeConfig(options?: RequestOptions) { return this.operations.notificationNotificationsRealtimeConfigGet(options); }
    /** Create channel-specific text/options for numeric template ID; requires admin:template:create_content. Invalid channel is 400. */
    createTemplateContent(id: Identifier, data: O.TemplateTemplateContentsCreatePostInput, options?: RequestOptions<O.TemplateTemplateContentsCreatePostInput>) { return this.operations.templateTemplateContentsCreatePost(id, data, options); }
    /** Patch text/options by numeric content ID; requires admin:template:update_content. Null preserves values; absent content is 404. */
    updateTemplateContent(contentId: Identifier, data: O.TemplateTemplateContentsUpdatePatchInput, options?: RequestOptions<O.TemplateTemplateContentsUpdatePatchInput>) { return this.operations.templateTemplateContentsUpdatePatch(contentId, data, options); }
    /** Read direct event fields and SDK examples; requires admin:integration:read. Optional direct fields may be omitted. */
    integrationDocs(options?: RequestOptions) { return this.operations.integrationIntegrationDocsShowGet(options); }
    /** Read queue and event metadata; requires admin:integration:read. Broker hint and profile ID are illustrative. */
    rabbitmqIntegration(options?: RequestOptions) { return this.operations.integrationRabbitmqIntegrationShowGet(options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";

export * from "./contracts.types.js";

export * from "./delivery.js";
