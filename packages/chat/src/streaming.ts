import {ServiceApi,type RequestOptions} from '@faiber/sdk-core';
import type {AssistantVoiceInput} from './assistant-voice.js';
import type {AiMessageInput,AiMessageResponse} from './types.js';
export type VoiceAudioFrame={type:'start';sample_rate:24000;channels:1;format:'pcm_s16le'}|{type:'audio';sequence:number;audio_base64:string}|{type:'done';samples:number;duration_ms:number}|{type:'error';message:string};
export interface AssistantReplyTiming {elapsed_ms:number}
export type AssistantReplyFrame={type:'text';text:string;text_complete?:boolean}
 |{type:'progress';stage:'waiting';text:string;elapsed_ms:number}
 |{type:'complete';data:AiMessageResponse['data'];timing?:AssistantReplyTiming}
 |{type:'error';message?:string;status?:number;code?:string};
/** Authenticated NDJSON streams. Consumers must parse complete newline-delimited frames,
 * handle error frames, require done/complete, and cancel the reader on teardown.
 * Headers carry HTTP errors before streaming; later failures arrive as typed frames. */
export class ChatStreamingApi extends ServiceApi {
 /** Stream authorized, metered PCM speech for a voice session. Requires chat:ai and the actor-owned project session. Returns the full Axios response with a WHATWG stream. */
 audio(input:AssistantVoiceInput,options?:RequestOptions<AssistantVoiceInput>){return this.client.post<ReadableStream<Uint8Array>,AssistantVoiceInput>('/api/v1/speech/voice/stream',input,{timeout:150000,...options,responseType:'stream',adapter:options?.adapter??'fetch'})}
 /** Stream assistant speech previews and a final validated reply. Requires chat:ai and conversation membership. Never treat text previews as completed task mutations. */
 messages(id:string,input:AiMessageInput,options?:RequestOptions<AiMessageInput>){return this.client.post<ReadableStream<Uint8Array>,AiMessageInput>(`/api/v1/conversations/${encodeURIComponent(id)}/ai/messages/stream`,input,{timeout:180000,...options,responseType:'stream',adapter:options?.adapter??'fetch'})}
}

/** Decode complete NDJSON reply frames without treating waiting notices as answer
 * text. Requires a final complete/error frame; cancels the reader on completion,
 * consumer cancellation, malformed data, or an interrupted stream. */
export async function* readAssistantReplyStream(stream:ReadableStream<Uint8Array>):AsyncGenerator<AssistantReplyFrame>{
 const reader=stream.getReader(),decoder=new TextDecoder('utf-8',{fatal:true});let buffer='';
 try{for(;;){
  const chunk=await reader.read();
  buffer+=chunk.done?decoder.decode():decoder.decode(chunk.value,{stream:true});
  if(buffer.length>2_000_000)throw new Error('Assistant stream frame exceeds the supported size');
  let end:number;
  while((end=buffer.indexOf('\n'))>=0){
   const line=buffer.slice(0,end).trim();buffer=buffer.slice(end+1);if(!line)continue;
   const value:unknown=JSON.parse(line);
   if(!isAssistantReplyFrame(value))throw new Error('Invalid assistant stream frame');
   yield value;
   if(value.type==='complete'||value.type==='error')return;
  }
  if(chunk.done)throw new Error('Assistant stream ended before a final result');
 }}finally{await reader.cancel().catch(()=>{});reader.releaseLock();}
}
function isAssistantReplyFrame(value:unknown):value is AssistantReplyFrame{
 if(typeof value!=='object'||value===null)return false;
 const frame=value as Record<string,unknown>;
 if(frame.type==='text')return typeof frame.text==='string'&&frame.text.length<=16000&&(frame.text_complete===undefined||typeof frame.text_complete==='boolean');
 if(frame.type==='progress')return frame.stage==='waiting'&&typeof frame.text==='string'&&frame.text.length<=1000&&typeof frame.elapsed_ms==='number'&&Number.isFinite(frame.elapsed_ms)&&frame.elapsed_ms>=0;
 if(frame.type==='complete')return typeof frame.data==='object'&&frame.data!==null&&'assistant_message' in frame.data;
 return frame.type==='error'&&(frame.message===undefined||typeof frame.message==='string')&&(frame.status===undefined||typeof frame.status==='number')&&(frame.code===undefined||typeof frame.code==='string');
}
