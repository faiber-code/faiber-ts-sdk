import type {FeedbackDetail,FeedbackPage,FeedbackListQuery} from './feedback.js';
export interface DeveloperFeedbackCapabilities {enabled:true;can_read:true;can_submit:false;can_review:false;identity_realm:'faiber_developer'}
export interface DeveloperFeedbackQuery extends FeedbackListQuery {q?:string;mine?:false}
export type DeveloperFeedbackPage=FeedbackPage;
export type DeveloperFeedbackDetail=FeedbackDetail;
export interface CampaignScopeInput {space_id:string;user_id:string;capability:'campaign.manage'|'project.read'|'approval.review'}
export interface CampaignScopeResult {allowed:boolean}
export interface CampaignReferralInput {user_id:string}
export interface CampaignReferralFacts {referrer_id:string|null;enrolled_at:string;account_age_days:number;active_days:number;purchase_qualified:boolean}
export interface CampaignNotificationInput {event_id:string;recipient_id:string;body:string;path:string}
export interface CampaignNotificationReceipt {accepted:true}
