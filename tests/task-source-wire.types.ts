import type {TaskApi,WorkItem,Project,ReminderInput,WorkspaceOperation,WorkspaceQuery,PlanCheckoutResult,NoteRealtimeAuthorization,TaskEventStreamBody,RoutesCreateWorkItemPostInput,RoutesProposePostInput,RoutesPutPutApiV1WorkItemsIdReminderInput,RoutesCatalogGetApiV1NotesDataCatalogQuery} from '@faiber/faiber-task';
declare const api:TaskApi;
const reminder:ReminderInput={anchor_at:'2027-01-01T00:00:00Z',timezone:'UTC',triggers:[{kind:'relative',minutes_before:15},{kind:'same_day',time:'09:00'}]};
const operation:WorkspaceOperation={kind:'create',item:{project_id:'p',owner_id:'owner',title:'Follow up',team_id:'team',reminder}};
const query:WorkspaceQuery={item_type:'note',record_type:'invoice',field_filters:[{key:'amount',op:'gte',value:100,unit:'toman'},{key:'paid',op:'exists'}]};
const generatedInput:RoutesCreateWorkItemPostInput={project_id:'p',owner_id:'u',title:'Task',team_id:null,reminder};
const generatedProposal:RoutesProposePostInput={conversation_id:'c',project_id:null,operations:[operation]};
const generatedReminder:RoutesPutPutApiV1WorkItemsIdReminderInput=reminder;
const catalog:RoutesCatalogGetApiV1NotesDataCatalogQuery={project_id:'project'};
const created:Promise<WorkItem>=api.operations.routesCreateWorkItemPost(generatedInput,{headers:{'Idempotency-Key':'key'}}).then(r=>r.data.data);
const project:Promise<Project>=api.operations.routesGetProjectGet('p').then(r=>r.data.data);
const signature:Promise<NoteRealtimeAuthorization>=api.operations.routesAuthorizePost('note',{socket_id:'1.2',channel_name:'private-note-note'}).then(r=>r.data);
const stream:Promise<TaskEventStreamBody>=api.operations.routesEventsGet().then(r=>r.data);
const checkout:Promise<PlanCheckoutResult>=api.operations.routesCheckoutPost({plan:'personal',request_id:'request'}).then(r=>r.data.data);
const deleted:Promise<void>=api.operations.routesRemoveWorkItemDelete('item',{headers:{'If-Match':'2'}}).then(r=>r.data);
// @ts-expect-error tagged reminder requires its relative payload
const incomplete:ReminderInput={anchor_at:'2027-01-01T00:00:00Z',timezone:'UTC',triggers:[{kind:'relative'}]};
// @ts-expect-error governed operations are objects, not bare enum strings
const bare:RoutesProposePostInput={conversation_id:'c',project_id:null,operations:['delete']};
// @ts-expect-error structured filters support ne, not neq
const invalidFilter:WorkspaceQuery={item_type:'note',field_filters:[{key:'amount',op:'neq',value:100}]};
void [reminder,operation,query,generatedInput,generatedProposal,generatedReminder,catalog,created,project,signature,stream,checkout,deleted,incomplete,bare,invalidFilter];
