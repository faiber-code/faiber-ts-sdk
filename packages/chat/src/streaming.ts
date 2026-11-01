import {ServiceApi,type RequestOptions} from '@faiber/sdk-core';
import type {AssistantVoiceInput} from './assistant-voice.js';
import type {AiMessageInput,AiMessageResponse} from './types.js';
export type VoiceAudioFrame={type:'start';sample_rate:24000;channels:1;format:'pcm_s16le'}|{type:'audio';sequence:number;audio_base64:string}|{type:'done';samples:number;duration_ms:number}|{type:'error';message:string};
export type AssistantReplyFrame={type:'text';text:string;text_complete?:boolean}|{type:'complete';data:AiMessageResponse['data']}|{type:'error';message?:string;status?:number;code?:string};
/** Authenticated NDJSON streams. Consumers must parse complete newline-delimited frames,
 * handle error frames, require done/complete, and cancel the reader on teardown.
 * Headers carry HTTP errors before streaming; later failures arrive as typed frames. */
export class ChatStreamingApi extends ServiceApi {
 /** Stream authorized, metered PCM speech for a voice session. Requires chat:ai and the actor-owned project session. Returns the full Axios response with a WHATWG stream. */
 audio(input:AssistantVoiceInput,options?:RequestOptions<AssistantVoiceInput>){return this.client.post<ReadableStream<Uint8Array>,AssistantVoiceInput>('/api/v1/speech/voice/stream',input,{timeout:150000,...options,responseType:'stream',adapter:options?.adapter??'fetch'})}
 /** Stream assistant speech previews and a final validated reply. Requires chat:ai and conversation membership. Never treat text previews as completed task mutations. */
 messages(id:string,input:AiMessageInput,options?:RequestOptions<AiMessageInput>){return this.client.post<ReadableStream<Uint8Array>,AiMessageInput>(`/api/v1/conversations/${encodeURIComponent(id)}/ai/messages/stream`,input,{timeout:180000,...options,responseType:'stream',adapter:options?.adapter??'fetch'})}
}
