import {FaiberSDK} from '../packages/sdk/dist/index.js';
const sdk=new FaiberSDK({domains:{}});
const configuration_id='cf1b746e-98bd-4da4-9be1-ceae4b395d85';
sdk.knowledge.configureAssistant('assistant',{configuration_id,expected_policy_revision:1});
sdk.chat.updateAssistant('assistant',{configuration_id,expected_version:2,expected_knowledge_policy_revision:1});
sdk.chat.reconcileAssistantPolicy(configuration_id,{action:'recover'});
sdk.chat.managedAssistant('assistant').then(result=>{const revision:number=result.data.data.expected_knowledge_policy_revision;void revision;});
// @ts-expect-error Knowledge configure requires the reviewed revision
sdk.knowledge.configureAssistant('assistant',{configuration_id});
// @ts-expect-error create operation UUID must be caller supplied
sdk.chat.createAssistant({name:'Assistant',system_prompt:'Prompt',model_ref:'preserved:model'});
// @ts-expect-error Chat update requires both captured revisions
sdk.chat.updateAssistant('assistant',{configuration_id,expected_version:1});
// @ts-expect-error canonical configure requires the operation UUID too
sdk.knowledge.operations.platformConfigureAssistantPut('assistant',{expected_policy_revision:1});
// @ts-expect-error arbitrary reconciliation actions are not valid
sdk.chat.reconcileAssistantPolicy(configuration_id,{action:'toggle'});
