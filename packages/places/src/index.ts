import {ServiceApi,type RequestOptions} from '@faiber/sdk-core';
export interface Place {id:string;slug:string;name:{fa:string;en?:string};description:{fa:string;en?:string};category:string;tags:string[];latitude:number;longitude:number;address:{fa:string;en?:string};district:string;media:{url:string;alt:{fa:string;en?:string}}[];sources:{url:string;label:string;checked_at:string}[];opening_info:Record<string,string>|null;contact:Record<string,string>;verification:string;status:string;canonical_id?:string;created_at:string}
export interface PlaceQuery {q?:string;category?:string;bbox?:string;lat?:number;lon?:number;radius?:number;limit?:number;offset?:number;[key:string]:string|number|undefined}
export interface Proposal {name:string;description?:string;category:string;latitude:number;longitude:number;address?:string;sources?:{url:string;label:string;checked_at:string}[]}
export class PlacesApi extends ServiceApi {
 search(params?:PlaceQuery,options?:RequestOptions){return this.client.get<{data:Place[]}>('/api/v1/places',params,options);}
 place(id:string,options?:RequestOptions){return this.client.get<{data:Place}>(`/api/v1/places/${encodeURIComponent(id)}`,undefined,options);}
 save(id:string,options?:RequestOptions){return this.client.put<{saved:boolean;changed:boolean}>(`/api/v1/places/${encodeURIComponent(id)}/save`,{},options);}
 unsave(id:string,options?:RequestOptions){return this.client.delete<{saved:boolean}>(`/api/v1/places/${encodeURIComponent(id)}/save`,options);}
 saves(options?:RequestOptions){return this.client.get<{data:Place[]}>('/api/v1/me/saves',undefined,options);}
 propose(data:Proposal,options?:RequestOptions){return this.client.post<{data:{id:string;status:'pending'}}>('/api/v1/places',{...data},options);}
 report(id:string,data:{reason:string;details?:string},options?:RequestOptions){return this.client.post<{data:{id:string;status:'pending'}}>(`/api/v1/places/${encodeURIComponent(id)}/reports`,data,options);}
 assertion(id:string,options?:RequestOptions){return this.client.post<{subject_type:'place';subject_ref:string;assertion:{issuer:string;token:string}}>(`/api/v1/places/${encodeURIComponent(id)}/assertion`,{},options);}

 /** Canonical Place IDs and merged aliases, for resolving external social references. */
 references(id:string,options?:RequestOptions){return this.client.get<{data:string[]}>(`/api/v1/places/${encodeURIComponent(id)}/references`,undefined,options);}
 /** Authenticated contributor's proposals, including unpublished moderation state. */
 contributions(options?:RequestOptions){return this.client.get<{data:Place[]}>('/api/v1/me/contributions',undefined,options);}
 /** Moderator-only pending queue. Requires places:moderate. */
 moderationQueue(options?:RequestOptions){return this.client.get<{data:{proposals:Place[];reports:PlaceReport[]}}>('/api/v1/moderation',undefined,options);}
 /** Applies a reasoned, audited correction or state change. Requires places:moderate. */
 moderate(id:string,decision:PlaceDecision,options?:RequestOptions){return this.client.post<{ok:boolean}>(`/api/v1/moderation/${encodeURIComponent(id)}`,{...decision},options);}
 /** Resolves a report without silently altering the Place. Requires places:moderate. */
 resolveReport(id:string,reason:string,options?:RequestOptions){return this.client.post<{ok:boolean}>(`/api/v1/moderation/reports/${encodeURIComponent(id)}`,{reason},options);}
 /** Reasoned change history. Requires places:moderate. */
 history(id:string,options?:RequestOptions){return this.client.get<{data:PlaceHistory[]}>(`/api/v1/moderation/${encodeURIComponent(id)}/history`,undefined,options);}
}

export interface PlaceReport {id:string;tenant:string;place_id:string;actor:string;reason:string;details:string;status:string;created_at:string;resolution:string|null;resolved_by:string|null;resolved_at:string|null}
export interface PlaceHistory {id:string;tenant:string;place_id:string;actor:string;action:string;reason:string;previous:Place;created_at:string}
export interface PlaceDecision {status:'published'|'rejected'|'closed'|'moved'|'merged';reason:string;canonical_id?:string|null;changes?:Partial<Pick<Place,'name'|'description'|'address'|'category'|'latitude'|'longitude'|'opening_info'|'contact'>>}
