import type { MessengerApi, CreateMessageTemplateInput, UpdateMessageTemplateInput, CreateChannelInput, UpdateChannelInput, CreateDeliveryProviderInput, SendNotificationInput, SubscribeChannelInput, MessageTemplate, DeliveryProvider, MessengerSetupResponse, MessengerEmptyResponse, NotificationNotificationsMarkAllReadPatchQuery, RouterOpenapiJsonGetResponse, NotificationNotificationsRealtimeAuthPostResponse, ServiceReadinessPostResponse, IntegrationFlowIntegrationShowGetResponse } from '@faiber/faiber-messenger';
declare const api: MessengerApi;
const template: CreateMessageTemplateInput = { name: 'welcome', fa_name: 'Welcome', params: ['name'], channel_id: 2 };
const clear: UpdateMessageTemplateInput = { channel_id: null };
const channel: CreateChannelInput = { name: 'Students' };
const rename: UpdateChannelInput = { name: 'Learners' };
const provider: CreateDeliveryProviderInput = { name: 'primary', provider: 'smtp', channel: 'email', options: { host: 'smtp.example.invalid' } };
const send: SendNotificationInput = { template_name: 'welcome', channel: 'email', recipients: ['user@example.invalid'], params: { name: 'Learner' } };
const subscribe: SubscribeChannelInput = { channel_id: 2, user_id: 'user-uuid', subscribed: false };
// @ts-expect-error native templates require fa_name
const badTemplate: CreateMessageTemplateInput = { name: 'welcome' };
// @ts-expect-error native channel rename requires name
const badRename: UpdateChannelInput = {};
// @ts-expect-error channel is required and body is not a native request field
const badSend: SendNotificationInput = { recipient: 'user', body: 'hi' };
// @ts-expect-error subscribe is an explicit user/channel boolean operation
const badSubscribe: SubscribeChannelInput = { channel_id: '2', recipient: 'user' };
// @ts-expect-error declared provider literals are lowercase on service create
const badProvider: CreateDeliveryProviderInput = { name: 'main', provider: 'Smtp', channel: 'email', options: {} };
// @ts-expect-error read-all requires its query recipient
api.operations.notificationNotificationsMarkAllReadPatch();
// @ts-expect-error read-all requires its query recipient
const badReadAll: NotificationNotificationsMarkAllReadPatchQuery = {};
// @ts-expect-error template lists do not consume pagination queries
api.templates.list({ 'page[number]': 2 });
declare const item: MessageTemplate;
const numericId: number = item.id;
const nullableChannel: number | null = item.channel_id;
declare const service: DeliveryProvider;
const noSecrets: null = service.options;
declare const report: MessengerSetupResponse;
const reportProvider: 'Ghasedak' | 'Armaghan' | 'Pusher' | 'Firebase' | 'Smtp' | undefined = report.data.providers[0]?.provider;
declare const spec: RouterOpenapiJsonGetResponse;
const specVersion: string = spec.openapi;
declare const realtime: NotificationNotificationsRealtimeAuthPostResponse;
const auth: string = realtime.auth;
// @ts-expect-error realtime auth is raw, not an envelope
realtime.data;
declare const readiness: ServiceReadinessPostResponse;
const ready: boolean = readiness.ready;
// @ts-expect-error website readiness is raw, not an envelope
readiness.data;
declare const flow: IntegrationFlowIntegrationShowGetResponse;
const queue: string = flow.data.queue;
async function consume() {
 const queued = await api.notifications.create(send);
 const ids: number[] = queued.data.data.notification_ids;
 const deleted: MessengerEmptyResponse = (await api.templates.delete(2)).data;
 const listed = await api.notifications.list({ 'page[number]': 2, recipient: 'user' });
 const count: number = listed.data.data.meta.total_items;
 const recordId: number | undefined = listed.data.data.data[0]?.id;
 return [ids, deleted, count, recordId];
}
void [template, clear, channel, rename, provider, send, subscribe, badTemplate, badRename, badSend, badSubscribe, badProvider, badReadAll, numericId, nullableChannel, noSecrets, reportProvider, specVersion, auth, ready, queue, consume];
