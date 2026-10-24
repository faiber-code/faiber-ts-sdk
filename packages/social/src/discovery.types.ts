import type {JsonValue,QueryParams} from '@faiber/sdk-core';
import type {SocialPostKind} from './types.js';
/** Public discovery uses the runtime's configured organization/category, not a caller-supplied tenant. */
export interface SocialDiscoveryFeedQuery extends QueryParams {subject_type?:string;subject_ref?:string;/** Comma-separated place UUIDs, maximum100 parsed entries. */subject_refs?:string;following?:boolean;q?:string;author_id?:string;page?:number;limit?:number;}
export interface SocialDiscoverySubject {subject_type:string;subject_ref:string;public_snapshot:JsonValue;}
export interface SocialDiscoveryPost {id:string;author_user_id:string;kind:SocialPostKind;expires_at:string|null;body:string;media:JsonValue;created_at:string;reactions_count:number;comments_count:number;liked:boolean;bookmarked:boolean;subject:SocialDiscoverySubject|null;}
export interface SocialDiscoveryComment {id:string;body:string;user_id:string;parent_id:string|null;created_at:string;}
export type SocialFollowTargetKind='place'|'user';
export interface SocialRelationship {following:boolean;blocked:boolean;}
export interface SocialDiscoveryResponse<T> {status:'success';data:T;}
/** Graph/settings/worker reads use {data} rather than the Social success envelope. */
export interface SocialGraphResponse<T> {data:T;}
export interface SocialNotificationPreferences {follow:boolean;comment:boolean;place:boolean;quest:boolean;}
export type SocialNotificationPreferencesInput=Partial<SocialNotificationPreferences>;
export interface SocialNotificationPayload {path:string;kind?:'follow'|'comment';status?:string;}
export interface SocialNotificationOutboxEvent {id:string;organization_id:string;recipient_id:string|null;event:'social.follow'|'social.comment'|'place.updated';payload:SocialNotificationPayload;created_at:string|null;delivered_at:string|null;}
export interface SocialPlaceEventInput {id:string;place_id:string;status:string;}
