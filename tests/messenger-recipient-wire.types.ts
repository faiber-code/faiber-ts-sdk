import type {InboxStreamPayload, InboxStreamNotification, InboxItem, MessengerApi, RecipientNotificationPayload} from '@faiber/faiber-messenger';
declare const payload:InboxStreamPayload;
const cursor:number=payload.cursor;
const eventId:string=payload.event_id;
declare const item:InboxStreamNotification;
const id:number|null=item.id;
const body:string|null=item.description;
const deleted:boolean=item.deleted;
// @ts-expect-error provider options are not recipient data
item.options;
// @ts-expect-error recipient routing is private
item.recipient;
// @ts-expect-error provider parameters are private
item.params;
// @ts-expect-error provider service identity is private
item.service_name;
declare const legacy:RecipientNotificationPayload;
// @ts-expect-error a legacy socket event does not prove a durable cursor
legacy.cursor;
declare const inbox:InboxItem;
const title:string|null=inbox.title;
// @ts-expect-error native serialized fields are present, even when null
const absent:typeof inbox.title=undefined;
declare const api:MessengerApi;
api.myInboxPage({'page[number]':2,'page[size]':30});
api.myInbox({params:{'page[number]':2,'page[size]':30}});
void [cursor,eventId,id,body,deleted,title,absent];
