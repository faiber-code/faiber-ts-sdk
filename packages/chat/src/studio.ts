import {ServiceApi,type RequestOptions} from '@faiber/sdk-core';
export interface StudioImageReference {mime_type:'image/jpeg'|'image/png'|'image/webp';data_base64:string;name?:string}
export interface StudioImageModel {id:string;label:string;model:string;available:boolean;reason:string|null;unit_price:number|null;currency:string|null;max_reference_images:number}
export interface StudioImageCatalog {models:StudioImageModel[]}
export interface StudioImageRequest {request_id:string;prompt:string;model_id:string;confirmed_cost:number;currency:string;size:'1024x1024'|'1536x1024'|'1024x1536';images:StudioImageReference[]}
export interface StudioImageRun {id:string;status:'queued'|'running'|'completed'|'failed'|'cancelled';progress:number;model:string;error:string|null;estimated_cost:number|null;actual_cost:number|null}
export interface StudioImageContent {mime_type:'image/png'|'image/jpeg'|'image/webp';data_base64:string;provider:string;model:string}
export interface StudioResponse<T>{data:T}
/** First-party metered image generation using the same authenticated client as
 * Chat/LLM/STT/TTS. No task-MCP connector or media OAuth grant is required.
 * Provider credentials, project billing and user credit settlement stay on the server. */
export class ChatStudioApi extends ServiceApi{
 /** Inspect live pricing/availability. Requires chat:ai + chat:studio:read. */
 models(options?:RequestOptions){return this.client.get<StudioResponse<StudioImageCatalog>>('/api/v1/studio/image-models',undefined,options)}
 /** Submit after user confirmation of the exact current price. Requires chat:studio:generate.
  * Preserve request_id on retries; 409 means price changed or the previous outcome is uncertain.
  * Only image references are accepted. Original videos must never enter this operation. */
 generate(input:StudioImageRequest,options?:RequestOptions<StudioImageRequest>){return this.client.post<StudioResponse<StudioImageRun>,StudioImageRequest>('/api/v1/studio/images',input,{timeout:180000,...options})}
 /** Read an owned run; requires chat:studio:read. Queued does not mean generated. */
 run(id:string,options?:RequestOptions){return this.client.get<StudioResponse<StudioImageRun>>(`/api/v1/studio/images/${encodeURIComponent(id)}`,undefined,options)}
 /** Fetch a completed owned image; never feed returned base64 into text model context. */
 image(id:string,options?:RequestOptions){return this.client.get<StudioResponse<StudioImageContent>>(`/api/v1/studio/images/${encodeURIComponent(id)}/content`,undefined,options)}
 /** Cancel an owned generation. Requires chat:studio:cancel; provider-side completion can race cancellation. */
 cancel(id:string,options?:RequestOptions){return this.client.post<StudioResponse<StudioImageRun>>(`/api/v1/studio/images/${encodeURIComponent(id)}/cancel`,{},options)}
}
