import { ServiceApi, type QueryParams, type RequestOptions } from '@faiber/sdk-core';
export interface PersonalChatResponse<T> {status:string;data:T}
export interface ConversationSummary {id:string;title:string|Record<string,string>|null;kind:string;last_sequence:number;last_read_sequence:number;unread_count:number}
export interface ConversationSummaryPage {items:ConversationSummary[];next_cursor:string|null}
export interface ConversationSummaryQuery extends QueryParams {cursor?:string;limit?:number}
export interface ChatUnreadCount {unread_count:number}
export interface PersonalChatEvent {sequence:number;conversation_id:string;payload:{type:string;message_id?:string;message_sequence?:number;read_sequence?:number;user_id?:string}}
export interface PersonalChatEventPage {events:PersonalChatEvent[];cursor:number;has_more:boolean}
export interface PersonalChatEventQuery extends QueryParams {cursor?:number;wait_seconds?:number}
export interface PersonalChatRealtimeConfig {ws_url:string;app_key:string;channel:string;event:string}
export interface PersonalChatRealtimeAuthInput {socket_id:string;channel_name:string}
export interface PersonalChatRealtimeAuth {auth:string}
/** Current authenticated member's conversations and transport; chat:read is required. */
export class PersonalChatApi extends ServiceApi {
 /** Paginated summaries include actual incoming unread-message counts; membership is enforced server-side. */
 conversations(query?:ConversationSummaryQuery,options?:RequestOptions){return this.client.get<PersonalChatResponse<ConversationSummaryPage>>('/api/v1/me/conversations',query,options);}
 /** Get the aggregate incoming unread-message count across active memberships. */
 unreadCount(options?:RequestOptions){return this.client.get<PersonalChatResponse<ChatUnreadCount>>('/api/v1/me/unread-count',undefined,options);}
 /** Initialize before loading a snapshot, then resume from the returned cursor. Invalid cursors require resynchronization. Default timeout exceeds the 25-second server wait. */
 events(query?:PersonalChatEventQuery,options?:RequestOptions){return this.client.get<PersonalChatResponse<PersonalChatEventPage>>('/api/v1/me/events',query,{timeout:35000,...options});}
 /** Configuration is scoped to this organization and user; 502 indicates unavailable realtime. */
 realtimeConfig(options?:RequestOptions){return this.client.get<PersonalChatResponse<PersonalChatRealtimeConfig>>('/api/v1/me/realtime/config',undefined,options);}
 /** Authorize only the current user's private channel; another channel returns 403. */
 realtimeAuth(input:PersonalChatRealtimeAuthInput,options?:RequestOptions<PersonalChatRealtimeAuthInput>){return this.client.post<PersonalChatRealtimeAuth,PersonalChatRealtimeAuthInput>('/api/v1/me/realtime/auth',input,options);}
}

/** Server-only notification evidence intentionally excludes message content and profile data. */
export interface ChatNotificationRecipient { user_id:string; unread:boolean }
export interface ChatNotificationContext {
 message_id:string; conversation_id:string; sender_id:string|null; sequence:number;
 kind:'direct'|'group'|'channel'|'ai'; recipients:ChatNotificationRecipient[];
}
export interface ChatProcessHealth {service:'infera-chat';version:string;status:'healthy';ai_execution:'infera-agentic'}
