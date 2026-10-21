import type {ChatApi, Conversation, ConversationMember, ChatReaction, ChatMessagePageMeta, ChatCreateAssistantInput, ChatUpdateAssistantInput, RoutesSynthesizePostInput, SpeechSettingsInput, WorkspaceAssistantBindingInput, RoutesTranscribePostQuery} from '@faiber/faiber-chat';
declare const api:ChatApi;
declare const conversation:Conversation;
const agent:string|null=conversation.agent_slug;
const avatar=conversation.avatar;
const lastSequence:number=conversation.last_sequence;
declare const member:ConversationMember;
const memberState:string=member.state;
const lastRead:number=member.last_read_sequence;
const speech:RoutesSynthesizePostInput={text:'Hello',format:'mp3',language:'auto'};
// @ts-expect-error serde wire formats are lowercase
const wrongFormat:RoutesSynthesizePostInput={text:'Hello',format:'Mp3'};
const settings:SpeechSettingsInput={enabled:true,model_ref:'stt',tts_enabled:true,tts_model_ref:'tts',version:1,language_models:null};
const create:ChatCreateAssistantInput={configuration_id:'uuid',name:'Helper',system_prompt:'Help',model_ref:'model',context_mode:'economy'};
// @ts-expect-error configuration_id is required
const noConfiguration:ChatCreateAssistantInput={name:'Helper',system_prompt:'Help',model_ref:'model'};
const update:ChatUpdateAssistantInput={configuration_id:'uuid',expected_version:1,expected_knowledge_policy_revision:0,knowledge_level:null};
// @ts-expect-error knowledge policy revision is required
const noRevision:ChatUpdateAssistantInput={configuration_id:'uuid',expected_version:1};
// @ts-expect-error unsupported workspace knowledge slug
const badBinding:WorkspaceAssistantBindingInput={assistant_id:'uuid',knowledge_slug:'2done-assistants',enabled:true,expected_version:0};
const query:RoutesTranscribePostQuery={language:'auto'};
// @ts-expect-error required language
const noLanguage:RoutesTranscribePostQuery={};
async function consumer(){
 const reaction:ChatReaction=(await api.react('message',{emoji:'👍'})).data.data;
 const meta:ChatMessagePageMeta=(await api.messages('room')).data.meta;
 const rows=(await api.operations.routesMessagesGet('room')).data.data;
 const attachmentName:string|undefined=rows[0]?.attachments[0]?.file_name;
 const bytes:ArrayBuffer|Uint8Array=(await api.operations.routesSynthesizePost(speech)).data;
 // @ts-expect-error transcription requires language query
 api.operations.routesTranscribePost(new Blob());
 // @ts-expect-error customer action content query is required
 api.customerActionContent();
 return {reaction,meta,attachmentName,bytes};
}
void [agent,avatar,lastSequence,memberState,lastRead,speech,settings,create,update,query,consumer];
