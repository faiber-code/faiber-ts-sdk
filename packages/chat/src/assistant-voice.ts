import type {SpeechLanguage} from './types.js';
export interface AssistantVoiceInput{id:string;project_id:string;action:'start'|'push'|'finish'|'cancel'|'tts'|'transcribe';language?:SpeechLanguage;content_type?:string;sequence?:number;audio_base64?:string;text?:string}
export interface AssistantVoiceResult{session_id?:string;text?:string;final_result?:boolean;duration_ms?:number;error?:string;audio_base64?:string;content_type?:string}
export interface AssistantVoiceResponse{status:string;data:AssistantVoiceResult;meta:null}
