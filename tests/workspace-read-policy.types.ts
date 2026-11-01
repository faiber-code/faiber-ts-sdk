import {ChatApi, readAssistantReplyStream, type WorkspaceReadPolicy, type AssistantReplyFrame, type AiMessageInput} from '../packages/chat/src/index.js';
const policy:WorkspaceReadPolicy={version:1,rules:[{id:'tasks',locale:'en',pattern:'^show my tasks$',item_type:'task',current_user_only:true,response:'records',introduction:'Your tasks:'}]};
const input:AiMessageInput={message:'show my tasks',stream_progress:true};
declare const chat:ChatApi;
async function consume(){const response=await chat.streaming.messages('conversation',input);for await(const frame of readAssistantReplyStream(response.data)){const typed:AssistantReplyFrame=frame;if(typed.type==='progress'){const elapsed:number=typed.elapsed_ms;void elapsed;}}}
void policy;void consume;
