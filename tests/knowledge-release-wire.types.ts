import type { KnowledgeApi, KnowledgeBase, KnowledgeRelease, KnowledgeReleaseResponse, KnowledgeExportResponse, CreateItemInput, UpdateItemInput, RoutesPublishPostResponse, RoutesGetReleaseGetResponse, RoutesCreateItemPostResponse } from '@faiber/faiber-knowledge';
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

api.operations.platformCreateSourcePost({knowledge_base_id:'base',slug:'source',name:{en:'Manual source'},source_type:'manual'}).then(response=>{const revision:number=response.data.data.version;const cursor:string|null=response.data.data.sync_cursor;void [revision,cursor];});
api.operations.platformSyncSourcePost('source').then(response=>{const job:string=response.data.data.job_id;const queued:true=response.data.data.queued;void [job,queued];});
// @ts-expect-error unsupported source kinds are rejected by the backend
api.operations.platformCreateSourcePost({knowledge_base_id:'base',slug:'source',name:{},source_type:'invented'});

api.operations.platformProcessingJobsGet().then(response=>{const job=response.data.data[0]!;const lease:string|null=job.lease_owner;const attempts:number=job.attempts;const completed:number=job.item_completed;void [lease,attempts,completed];});

// Native selected-media quota emits the serialized additive exclusion reason.
import type { TaskProjectionsPassagesPostResponseDataExcludedResultsReason } from '@faiber/faiber-knowledge';
const selectedMediaLimit: TaskProjectionsPassagesPostResponseDataExcludedResultsReason = 'selected_media_limit';
// @ts-expect-error Rust enum names are not the public snake_case wire spelling
const invalidSelectedMediaLimit: TaskProjectionsPassagesPostResponseDataExcludedResultsReason = 'SelectedMediaLimit';
void [selectedMediaLimit, invalidSelectedMediaLimit];

// Rust AssistantQuery Option fields accept explicit null, including evaluation linkage.
api.queryAssistant('assistant', {
 user_id:'user', profile_version:null, profile_source:null, profile_refreshed_at:null,
 conversation_id:null, model_id:null, context_cursor:null, evaluation_case_id:null,
});

// Exact pinned response projections and legitimate null/default branches.
api.recordMemoryTurn('assistant',{user_id:'user',conversation_id:'conversation',user_message:'Hello',assistant_message:'Hi',profile_version:null,user_message_id:null}).then(response=>{
 const receipt=response.data.data;
 if(receipt.queued){const id:string=receipt.outbox_id;void id;}else{const reason:string=receipt.reason;void reason;}
});
api.recordRetrievalUsage('trace',{final_prompt_tokens:4,actual_cost:null,outcome:null}).then(response=>{const cost:number|null=response.data.data.actual_cost;void cost;});
api.ingestDocument({knowledge_base_id:'base',title:'Title',content:'Text',language:null});
api.queryAssistant('assistant',{user_id:'user'}).then(response=>{const sections:Record<string,number>|undefined=response.data.data.budget.sections;const short:import('@faiber/sdk-core').JsonValue[]=response.data.data.memory.short;void [sections,short];});
api.operations.platformCatalogGet().then(response=>{const base:string=response.data.data.knowledge_bases[0]!.slug;const policies:string[]=response.data.data.assistant_policies[0]!.knowledge_base_ids;void [base,policies];});
api.operations.platformListRecommendersGet().then(response=>{const score:number=response.data.data[0]!.items[0]!.base_score;void score;});
api.operations.platformConvertersGet().then(response=>{const features:string[]=response.data.data[0]!.features;void features;});
api.operations.platformStatusGet().then(response=>{const p95:number|null=response.data.data.retrieval.p95_ms;void p95;});
api.operations.taskProjectionsPassagesPost({user_id:'user',query:'query',locale:'en',sources:[]}).then(response=>{
 const score:number=response.data.data.score_explanations['result']!.final_score;
 const dependency:import('@faiber/faiber-knowledge').DependencyState=response.data.data.dependency_state['database']!;
 void [score,dependency];
});
