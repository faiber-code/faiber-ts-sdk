import type {FaiberClient,RequestOptions} from '@faiber/sdk-core';
import type {WorkItem,CreateWorkItemInput,UpdateWorkItemInput,ChecklistItem} from './types.js';
export interface OfflineSyncCapabilities {version:1;server_time:string;conflict_policy:'newest_change';kinds:string[]}
export interface OfflineChangeBase {id:string;changed_at:string;target:string|null}
export type OfflineChange=OfflineChangeBase&(
 |{kind:'create';payload:CreateWorkItemInput}
 |{kind:'update';payload:UpdateWorkItemInput}
 |{kind:'checklist';payload:{items:ChecklistItem[]}}
 |{kind:'transition';payload:{status:string;rank?:string}}
 |{kind:'note_document';payload:{body:string;plain_text:string;base_version?:number;generation?:number}});
export interface OfflineDocument {note:WorkItem;generation:number;initial_text:string;updates:{id:string;body:string;sequence:number}[]}
export interface OfflineSyncResult {id:string;outcome:'applied'|'superseded';server_time:string;snapshot:{task:WorkItem;checklist:ChecklistItem[];document:OfflineDocument|null}}
/** Requires normal Task access and command-specific scope permissions. A stable ID
 * and unchanged payload make retries safe. The original edit time orders conflicts. */
export class TaskOfflineOperations {
 constructor(private readonly client:FaiberClient){}
 capabilities(options?:RequestOptions){return this.client.get<{data:OfflineSyncCapabilities}>('/api/v1/offline-sync',undefined,options)}
 apply(input:OfflineChange,options?:RequestOptions<OfflineChange>){return this.client.post<{data:OfflineSyncResult},OfflineChange>('/api/v1/offline-sync',input,options)}
}
