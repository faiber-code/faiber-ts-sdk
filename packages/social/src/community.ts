import {ServiceApi,type RequestOptions} from '@faiber/sdk-core';
export type CommunityAnswers=Record<string,string|string[]>;
export interface PublicKnowledge{summary:string;personality:string;goals:string[];interests:string[];strengths:string[]}
export interface PersonalKnowledge extends PublicKnowledge{assistant_guidance:string;schema_version:number}
export interface CommunitySelf{user_id:string;display_name?:string;public:boolean;version:number;knowledge:PersonalKnowledge|null;public_knowledge?:PublicKnowledge|null}
export interface CommunityPerson{user_id:string;display_name:string;knowledge:PublicKnowledge;version:number;interested:boolean;interested_in_me:boolean;match_score?:number;shared_goals?:string[];last_message?:string;last_at?:string;last_deleted?:boolean}
export interface CommunityMessageReaction{emoji:string;count:number;mine:boolean}
export interface CommunityMessageReply{id:string;sender_id:string;body:string;deleted_at:string|null}
export interface CommunityMessageEditInput{request_id:string;version:number;body:string}
export interface CommunityMessageDeleteInput{request_id:string;version:number}
export interface CommunityMessageReactionInput{emoji:string;enabled:boolean}
export interface CommunityMessage{version?:number;reply_to?:string|null;reply?:CommunityMessageReply|null;reactions?:CommunityMessageReaction[];edited_at?:string|null;deleted_at?:string|null;organization_id:string;id:string;sender_id:string;recipient_id:string;body:string;created_at:string}
export interface CommunityGift{id:string;title_en:string;title_fa:string;coins:number;image:string}
export interface CommunityAnalysisInput{request_id:string;version:number;locale:'en'|'fa';display_name:string;answers:CommunityAnswers}
export interface CommunityAnalysis{knowledge:PersonalKnowledge;version:number}
export interface CommunityPeopleQuery{q?:string;page?:number;view?:'interests'}
export interface CommunityPeople{items:CommunityPerson[];has_more:boolean;page:number}
export interface CommunityMessagesQuery{before?:string}
export interface CommunityMessagePage{items:CommunityMessage[];next_cursor:string|null}
export interface CommunityResponse<T>{data:T;status?:string;message?:string}
export interface CommunityVisibilityInput{public:boolean;version:number}
export interface CommunityVisibility{public:boolean;version:number}
export interface CommunityToggleInput{enabled:boolean}
export interface CommunityInterest{interested:boolean}
export interface CommunityBlock{blocked:boolean}
export interface CommunityQuestionInput{question:string;locale:'en'|'fa'}
export interface CommunityAnswer{answer:string}
export interface CommunityInbox{items:CommunityPerson[]}
export interface CommunityMessageInput{request_id:string;body:string;reply_to?:string|null}
export interface CommunityGiftCatalog{items:CommunityGift[]}
export interface CommunityGiftInput{request_id:string;gift_id:string}
export interface CommunityGiftReceipt{status:'sent';request_id:string}
const path=(id:string)=>`/api/v1/community/people/${encodeURIComponent(id)}`;
/** Authenticated Social community operations; also available through Task composition.
 * All operations preserve FaiberClient credentials/cancellation.
 * Social requires the documented social:community action; Task requires its global
 * admission permission (normally task:access:use) and TASK_COMMUNITY_ENABLED. Privacy, blocks and mutual
 * interest are rechecked server-side. 403/404 deny access; 409 reports conflicts/unavailability.
 * Does not grant workspace access. Public knowledge excludes private answers and guidance.
 */
export class CommunityApi extends ServiceApi{
 /** Own consent and analyzed knowledge. Requires social:community:read (or Task admission). */
 self(options?:RequestOptions){return this.client.get<CommunityResponse<CommunitySelf>>('/api/v1/community/me',undefined,options)}
 /** Submit the completed device draft once. Reuse request_id for retries; no per-question model calls. Requires social:community:personalize (or Task admission); options preserve cancellation/headers. */
 analyze(input:CommunityAnalysisInput,options?:RequestOptions<CommunityAnalysisInput>){return this.client.post<CommunityResponse<CommunityAnalysis>,CommunityAnalysisInput>('/api/v1/community/me/analyze',input,options)}
 /** Publish an approved public projection or withdraw consent; optimistic version required. Requires social:community:publish (or Task admission); options preserve cancellation/headers. */
 publish(input:CommunityVisibilityInput,options?:RequestOptions<CommunityVisibilityInput>){return this.client.post<CommunityResponse<CommunityVisibility>,CommunityVisibilityInput>('/api/v1/community/me/publish',input,options)}
 /** Search and ranked matching; both requester and results must be public. Requires social:community:read (or Task admission); options preserve cancellation/headers. */
 people(query:CommunityPeopleQuery={},options?:RequestOptions){return this.client.get<CommunityResponse<CommunityPeople>>('/api/v1/community/people',{...query},options)}
 /** Public profile only, never private answers. Requires public requester. Requires social:community:read (or Task admission); options preserve cancellation/headers. */
 person(id:string,options?:RequestOptions){return this.client.get<CommunityResponse<CommunityPerson>>(path(id),undefined,options)}
 /** Set directed interest; mutual interest is required separately for gifts and assistant questions. Requires social:community:interest (or Task admission); options preserve cancellation/headers. */
 interest(id:string,enabled:boolean,options?:RequestOptions<CommunityToggleInput>){return this.client.post<CommunityResponse<CommunityInterest>,CommunityToggleInput>(path(id)+'/interest',{enabled},options)}
 /** Block or unblock the target; either-direction blocks prevent discovery and messaging. Requires social:community:interest (or Task admission); options preserve cancellation/headers. */
 block(id:string,enabled:boolean,options?:RequestOptions<CommunityToggleInput>){return this.client.post<CommunityResponse<CommunityBlock>,CommunityToggleInput>(path(id)+'/block',{enabled},options)}
 /** Tool-free answer from the mutual contact's public profile. Cannot read or mutate tasks/notes. Requires social:community:ask (or Task admission); options preserve cancellation/headers. */
 ask(id:string,input:CommunityQuestionInput,options?:RequestOptions<CommunityQuestionInput>){return this.client.post<CommunityResponse<CommunityAnswer>,CommunityQuestionInput>(path(id)+'/ask',input,options)}
 /** Public-contact message inbox; private/blocked profiles are excluded. Requires social:community:messages:read (or Task admission); options preserve cancellation/headers. */
 inbox(options?:RequestOptions){return this.client.get<CommunityResponse<CommunityInbox>>('/api/v1/community/messages',undefined,options)}
 /** Page only the caller's conversation with this public contact. Requires social:community:messages:read (or Task admission); options preserve cancellation/headers. */
 messages(id:string,before?:string,options?:RequestOptions){return this.client.get<CommunityResponse<CommunityMessagePage>>(path(id)+'/messages',{before},options)}
 /** Send a message with a stable idempotency ID. Both profiles must remain public. Requires social:community:messages:send (or Task admission); options preserve cancellation/headers. */
 send(id:string,input:CommunityMessageInput,options?:RequestOptions<CommunityMessageInput>){return this.client.post<CommunityResponse<CommunityMessage>,CommunityMessageInput>(path(id)+'/messages',input,options)}
 /** Edit only your own message using its current version and a stable request ID. Requires social:community:messages:edit or Task admission. Both profiles must be public and unblocked; stale versions return 409. Preserves cancellation and full Axios response. */
 editMessage(id:string,messageId:string,input:CommunityMessageEditInput,options?:RequestOptions<CommunityMessageEditInput>){return this.client.post<CommunityResponse<CommunityMessage>,CommunityMessageEditInput>(path(id)+'/messages/'+encodeURIComponent(messageId)+'/edit',input,options)}
 /** Replace only your own message with a tombstone; replies remain but the original text is removed. Requires social:community:messages:delete or Task admission. Both profiles must be public and unblocked; stale versions return 409. Preserves cancellation and full Axios response. */
 deleteMessage(id:string,messageId:string,input:CommunityMessageDeleteInput,options?:RequestOptions<CommunityMessageDeleteInput>){return this.client.post<CommunityResponse<CommunityMessage>,CommunityMessageDeleteInput>(path(id)+'/messages/'+encodeURIComponent(messageId)+'/delete',input,options)}
 /** Set your reaction to its absolute enabled state; retrying cannot duplicate it. Supported emoji: 👍 ❤️ 😂 😮 😢 🙏 🎉 🔥 👏 😊 😍 💯. Requires social:community:messages:react or Task admission. Both profiles must be public and unblocked; stale versions return 409. Preserves cancellation and full Axios response. */
 reactToMessage(id:string,messageId:string,input:CommunityMessageReactionInput,options?:RequestOptions<CommunityMessageReactionInput>){return this.client.post<CommunityResponse<CommunityMessage>,CommunityMessageReactionInput>(path(id)+'/messages/'+encodeURIComponent(messageId)+'/reaction',input,options)}
 /** Server-priced gift definitions; an empty catalog means gifts are unavailable. Requires social:community:read (or Task admission); options preserve cancellation/headers. */
 gifts(options?:RequestOptions){return this.client.get<CommunityResponse<CommunityGiftCatalog>>('/api/v1/community/gifts',undefined,options)}
 /** Transfer existing Do to a mutual contact. Prices are server-owned; retry the same request_id. Requires social:community:gifts:send (or Task admission); options preserve cancellation/headers. */
 gift(id:string,input:CommunityGiftInput,options?:RequestOptions<CommunityGiftInput>){return this.client.post<CommunityResponse<CommunityGiftReceipt>,CommunityGiftInput>(path(id)+'/gifts',input,options)}
}
