import type { KnowledgeApi, KnowledgeBase, KnowledgeRelease, KnowledgeReleaseResponse, KnowledgeExportResponse, CreateItemInput, UpdateItemInput, RoutesPublishPostResponse, RoutesGetReleaseGetResponse, RoutesCreateItemPostResponse } from '../packages/knowledge/src/index.js';
import type { AxiosResponse } from 'axios';
declare const api: KnowledgeApi;
declare const release: KnowledgeRelease;
const published: Promise<AxiosResponse<KnowledgeReleaseResponse>> = api.publish('base');
const readback: Promise<AxiosResponse<KnowledgeReleaseResponse>> = api.release('release');
const exported: Promise<AxiosResponse<KnowledgeExportResponse>> = api.export('base');
const canonicalPublish: Promise<AxiosResponse<RoutesPublishPostResponse>> = api.operations.routesPublishPost('base');
const canonicalRead: Promise<AxiosResponse<RoutesGetReleaseGetResponse>> = api.operations.routesGetReleaseGet('release');
const releaseId: string = release.id;
const checksum: string = release.checksum_sha256;
const parentLevel: number = release.manifest.groups[0]!.level;
const deletedAt: string | null = release.manifest.items[0]!.deleted_at;
const linkage: string | null = release.manifest.items[0]!.linked_entity_id;
// @ts-expect-error A release is not the mutable base record returned by create/update.
const wrongBase: KnowledgeBase = release;
const item: CreateItemInput = { group_id:'group',slug:'linked',kind:'fact',title:{en:'Linked'},content:{},description:{fa:'شرح'},linked_service:'infera-lms',linked_entity_type:'course',linked_entity_id:'course',link_url:'https://example.test/course',open_in_new_tab:true,show_when:{path:'profile.active',op:'eq',value:true} };
const patch: UpdateItemInput = {description:{en:'Updated'},linked_service:'',linked_entity_type:'',linked_entity_id:'',link_url:'',open_in_new_tab:false,show_when:{},expected_version:2};
declare const created: RoutesCreateItemPostResponse;
const createdChecksum: string = created.data.checksum_sha256;
void [published,readback,exported,canonicalPublish,canonicalRead,releaseId,checksum,parentLevel,deletedAt,linkage,wrongBase,item,patch,createdChecksum];

const rules = api.matchRules({ q:'lesson',knowledge_base_id:'base',group_id:'group',enabled:false,page:2,limit:1 });
rules.then(response=>{ const total:number=response.data.meta.total; const id:string=response.data.data[0]!.id; void [total,id]; });
api.operations.routesListRulesGet({q:'lesson',knowledge_base_id:'base',group_id:'group',enabled:false,page:2,limit:1});

// @ts-expect-error the service rejects invented importance values
const invalidImportance: CreateItemInput = {group_id:'group',slug:'item',kind:'fact',title:{},content:{},importance:'high'};
api.operations.routesUpdateItemPut('item',{importance:'critical',expected_version:null,linked_entity_id:null});
// @ts-expect-error canonical calls enforce the same validator
api.operations.routesUpdateItemPut('item',{importance:'high'});
// @ts-expect-error action transitions have a closed input vocabulary
api.operations.routesUpdateActionStatusPatch('action',{status:'deleted'});
api.operations.platformIngestDocumentPost({knowledge_base_id:'base',title:'Title',content:'Text'}).then(response=>{
 if(response.data.data.status==='indexed'){const job:string=response.data.data.job_id;void job;}
});
void invalidImportance;

api.query('chat',{compact:true,max_context_chars:4000}).then(response=>{const suggestions:import('@faiber/sdk-core').JsonValue[]=response.data.data.suggestions;void suggestions;});
