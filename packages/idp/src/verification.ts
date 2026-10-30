import {ServiceApi,type RequestOptions} from '@faiber/sdk-core';
export interface VerifiedContactFacts {user_id:string;contact_verified:boolean}
export interface VerifiedContactResponse {status:string;message:string;data:VerifiedContactFacts}
/** Backend-only explicit verification facts; populated contact fields do not imply verification. */
export class ContactVerificationApi extends ServiceApi {
 /** Reads whether an active user's current contact matches an actual OTP verification or explicit trusted-provider verification. Requires the configured service Bearer credential; 401 for missing/invalid credentials. Never expose that credential to browsers. */
 facts(userId:string,options?:RequestOptions){return this.client.get<VerifiedContactResponse>(`/api/v1/internal/verification/${encodeURIComponent(userId)}`,undefined,options)}
}
