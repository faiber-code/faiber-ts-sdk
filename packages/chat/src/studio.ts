import {ServiceApi,type RequestOptions} from '@faiber/sdk-core';
export interface StudioImageReference {mime_type:'image/jpeg'|'image/png'|'image/webp';data_base64:string;name?:string}
export interface StudioImageModel {id:string;label:string;model:string;available:boolean;reason:string|null;unit_price:number|null;currency:string|null;max_reference_images:number}
export interface StudioImageCatalog {models:StudioImageModel[]}
export interface StudioImageRequest {request_id:string;prompt:string;model_id:string;confirmed_cost:number;currency:string;size:'1024x1024'|'1536x1024'|'1024x1536';images:StudioImageReference[]}
export interface StudioImageRun {id:string;status:'queued'|'running'|'completed'|'failed'|'cancelled';progress:number;model:string;error:string|null;estimated_cost:number|null;actual_cost:number|null}
export interface StudioImageContent {mime_type:'image/png'|'image/jpeg'|'image/webp';data_base64:string;provider:string;model:string}
export interface StudioResponse<T>{data:T}
export interface StudioVideoModel {id:string;label:string;model:string;seconds:number[];sizes:('1280x720'|'720x1280')[];requires_reference:boolean;unit_price:number;currency:string;available:boolean}
export interface StudioVideoCatalog {models:StudioVideoModel[]}
export interface StudioVideoRequest {request_id:string;prompt:string;model_id:string;seconds:number;size:'1280x720'|'720x1280';image?:Pick<StudioImageReference,'mime_type'|'data_base64'>}
export interface StudioVideoRun {id:string;status:'queued'|'running'|'completed'|'failed';progress:number;model:string;seconds:number;size:string;estimated_cost:number;actual_cost:number|null;error:string|null;retryable:boolean}
/** First-party metered image generation using the same authenticated client as
 * Chat/LLM/STT/TTS. No task-MCP connector or media OAuth grant is required.
 * Provider credentials, project billing and user credit settlement stay on the server. */
export class ChatStudioApi extends ServiceApi{
 /** List available video models and current per-second pricing. Requires chat:ai + chat:studio:read. */
 videoModels(options?:RequestOptions){return this.client.get<StudioResponse<StudioVideoCatalog>>('/api/v1/studio/video-models',undefined,options)}
 /** Start an owned durable video job. Credit is reserved server-side. Requires chat:studio:generate.
  * Reuse request_id and identical inputs on transport retries. Never automatically resubmit a failed job. */
 generateVideo(input:StudioVideoRequest,options?:RequestOptions<StudioVideoRequest>){return this.client.post<StudioResponse<StudioVideoRun>,StudioVideoRequest>('/api/v1/studio/videos',input,options)}
 /** Poll owned video progress. Requires chat:studio:read. Terminal failures expose retryable. */
 videoRun(id:string,options?:RequestOptions){return this.client.get<StudioResponse<StudioVideoRun>>(`/api/v1/studio/videos/${encodeURIComponent(id)}`,undefined,options)}
 /** Download a completed MP4 for attachment storage. Requires chat:studio:read. */
 videoContent(id:string,options?:RequestOptions){return this.client.get<Blob>(`/api/v1/studio/videos/${encodeURIComponent(id)}/content`,undefined,{responseType:'blob',timeout:180000,...options})}
 /** Inspect live pricing/availability. Requires chat:ai + chat:studio:read. */
 models(options?:RequestOptions){return this.client.get<StudioResponse<StudioImageCatalog>>('/api/v1/studio/image-models',undefined,options)}
 /** Submit using the exact current server quote; apps may start automatically. Requires chat:studio:generate.
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
