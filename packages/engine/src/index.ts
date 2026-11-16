/** Local device transport. Pairing secrets never enter Infera cloud transport. */
export interface EngineSource {media_id:string;kind?:'video'|'audio'|'image';name:string;sha256:string;duration:string;streams:EngineStream[]}
export interface EngineStream {codec_type:string;codec_name:string;width?:number;height?:number}
export interface EngineSession {session_id:string;sources:EngineSource[]}
export type EngineTransition='cut'|'fade'|'wipeleft'|'wiperight'|'slideleft'|'slideright'|'circleopen'|'circleclose'|'fadeblack'|'fadewhite';
export type EngineEffect='none'|'grayscale'|'sepia'|'vignette'|'soft_blur';
export interface EngineClip {speed?:number;effect?:EngineEffect;transition?:{kind:EngineTransition;duration:number};media_id:string;start:number;duration:number;crop?:[number,number,number,number];brightness?:number;contrast?:number;saturation?:number;gain?:number;fade_in?:number;fade_out?:number}
export interface EngineAudioTrack {media_id:string;start:number;duration:number;at:number;gain?:number;fade_in?:number;fade_out?:number}
export interface EngineFrameRequest {media_id:string;start?:number;duration?:number;fps?:2|10;overview?:boolean}
export interface EngineFrames {media_id:string;frames:EngineFrame[];coverage:string}
export interface EngineAudioPreview {media_id:string;start:number;duration:number;artifact:string;bytes:number}
export interface EngineTimeline {audio?:EngineAudioTrack[];size:[number,number];fps:number;clips:EngineClip[]}
export interface EngineProject {project_id:string;revision:number;timeline:EngineTimeline;duration:number;sources:Record<string,string>}
export interface EngineJob {job_id:string;status:'queued'|'running'|'completed'|'failed'|'cancelling'|'cancelled';progress?:{stage:string;completed:number;total:number};artifact?:string;sha256?:string;duration?:number;error?:string;quality_review?:'pending'}
export interface EngineCapabilities {protocol:string;mode:string;supported:string[];unavailable:string[];video_to_llm:false;transitions?:EngineTransition[];effects?:EngineEffect[];max_frames?:number;max_timeline_seconds?:number}
export interface EngineModelCapabilities {image_to_3d:boolean;adapter:string|null;network:string;rigging:false;production_approved:false}
export interface EngineModelJob {job_id:string;status:'queued'|'running'|'completed'|'failed'|'cancelling'|'cancelled';artifact?:string;sha256?:string;error?:string;production_approved?:false;rig_approved?:false;validation?:{status:string;meshes:number;vertices:number;triangles:number;scope:string}}
export interface EngineHealth {protocol:'faiber.engine.local.v1';originals:'device';max_video_bytes:number}
export interface EngineFrame {media_id:string;seconds:number;preview:string;bytes:number}
export interface EngineRequestOptions {signal?:AbortSignal}

/** Authenticate using a host-issued pairing address. Retain this client in memory only. */
export class LocalEngineClient {
 #base:string; #token:string; #sequence=0;
 constructor(pairingAddress:string){
  const url=new URL(pairingAddress.trim());
  if(url.protocol!=='http:'||url.hostname!=='127.0.0.1'||!url.port||url.username||url.password||url.search||!['','/'].includes(url.pathname)||!/^#[A-Za-z0-9_-]{43}$/.test(url.hash))throw Error('Use the pairing address displayed by your local Faiber Engine.');
  this.#base=url.origin;this.#token=url.hash.slice(1);
 }
 async #request(path:string,init:RequestInit,options:EngineRequestOptions={}):Promise<Response>{
  const response=await fetch(this.#base+path,{...init,signal:options.signal,credentials:'omit',redirect:'error',cache:'no-store',referrerPolicy:'no-referrer',headers:{...init.headers,Authorization:`Bearer ${this.#token}`}});
  if(!response.ok)throw Error(`Local engine rejected the request (${response.status}).`);
  return response;
 }
 /** Verify the paired local host. Rejects invalid/expired pairing and unreachable hosts. */
 async health(options:EngineRequestOptions={}):Promise<EngineHealth>{
  const value:EngineHealth=await (await this.#request('/health',{},options)).json();
  if(value.protocol!=='faiber.engine.local.v1'||value.originals!=='device')throw Error('Incompatible local engine');return value;
 }
 /** Copy a user-selected video over loopback only. Does not modify the original. */
 async openVideo(file:File,options:EngineRequestOptions={}):Promise<EngineSession>{
  if(!['video/mp4','video/webm','video/quicktime'].includes(file.type)||file.size<=0||file.size>2*1024**3)throw Error('Choose an MP4, WebM or MOV below 2 GiB.');
  return (await this.#request('/sessions',{method:'POST',headers:{'Content-Type':file.type},body:file},options)).json();
 }
 #id(value:string){if(!/^[a-f0-9]{32}$/.test(value))throw Error('Invalid engine identifier');return value}
 async #call<T>(session:string,name:string,args:object,options:EngineRequestOptions):Promise<T>{
  const id=++this.#sequence;
  const response=await this.#request(`/sessions/${this.#id(session)}/rpc`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id,method:'tools/call',params:{name,arguments:args}})},options);
  const rpc=await response.json();
  if(rpc.id!==id||rpc.error||rpc.result?.isError||!rpc.result?.structuredContent)throw Error('Engine operation failed. Check capabilities, source and revision.');
  return rpc.result.structuredContent as T;
 }
 /** Create a local multi-source session. Sources must be explicitly selected by the user. */
 async openSession(options:EngineRequestOptions={}):Promise<EngineSession>{return (await this.#request('/sessions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({empty:true})},options)).json()}
 /** Copy selected video, audio or image to the paired loopback host. Never uses cloud transport. */
 async addMedia(session:string,mediaId:string,file:Blob,options:EngineRequestOptions={}):Promise<EngineSource>{
  if(!/^[A-Za-z0-9_-]{1,80}$/.test(mediaId)||!file.size||file.size>2*1024**3)throw Error('Invalid selected source');
  return (await this.#request(`/sessions/${this.#id(session)}/sources/${mediaId}`,{method:'POST',headers:{'Content-Type':file.type},body:file},options)).json();
 }
 /** Read bounded frame previews for a local contact sheet: overview or up to 16 frames at 2/10 fps. */
 frames(session:string,request:EngineFrameRequest,options:EngineRequestOptions={}):Promise<EngineFrames>{return this.#call(session,'engine_frames',request,options)}
 /** Extract at most 30 seconds locally; caller explicitly decides whether to transcribe it. */
 audioPreview(session:string,mediaId:string,start:number,duration:number,options:EngineRequestOptions={}):Promise<EngineAudioPreview>{return this.#call(session,'engine_audio_preview',{media_id:mediaId,start,duration},options)}
 /** Stop an actual local export. Poll job until cancelled or completed. */
 cancel(session:string,jobId:string,options:EngineRequestOptions={}):Promise<EngineJob>{return this.#call(session,'engine_cancel',{job_id:jobId},options)}
 /** Read the latest saved revision for undo/review. */
 project(session:string,projectId:string,options:EngineRequestOptions={}):Promise<EngineProject>{return this.#call(session,'engine_project_get',{project_id:projectId},options)}
 /** Read capabilities before issuing edits; unavailable operations must not be presented as executed. */
 capabilities(session:string,options:EngineRequestOptions={}):Promise<EngineCapabilities>{return this.#call(session,'engine_capabilities',{},options)}
 /** Save a validated immutable revision. Updates require the current revision. */
 save(session:string,timeline:EngineTimeline,previous?:EngineProject,options:EngineRequestOptions={}):Promise<EngineProject>{return this.#call(session,'engine_project_save',{timeline,...(previous?{project_id:previous.project_id,revision:previous.revision}:{})},options)}
 /** Queue an export of the exact current revision. Poll job until completion. */
 export(session:string,project:EngineProject,options:EngineRequestOptions={}):Promise<EngineJob>{return this.#call(session,'engine_export',{project_id:project.project_id,revision:project.revision},options)}
 /** Poll truthful queued/running/completed/failed state. */
 job(session:string,jobId:string,options:EngineRequestOptions={}):Promise<EngineJob>{return this.#call(session,'engine_job',{job_id:jobId},options)}
 /** Capture a bounded frame; video bytes are never part of MCP responses. */
 frame(session:string,mediaId:string,seconds:number,options:EngineRequestOptions={}):Promise<EngineFrame>{return this.#call(session,'engine_frame',{media_id:mediaId,seconds},options)}
 /** Discover the host-configured offline 3D backend. No model paths or credentials are returned. */
 async modelCapabilities(options:EngineRequestOptions={}):Promise<EngineModelCapabilities>{return (await this.#request('/models/capabilities',{},options)).json()}
 /** Queue local image-to-3D inference using a selected PNG/JPEG. Does not download model weights. */
 async generateModel(reference:Blob,options:EngineRequestOptions={}):Promise<EngineModelJob>{
  if(!['image/png','image/jpeg'].includes(reference.type)||reference.size>4*1024**2)throw Error('Use a PNG or JPEG reference below 4 MiB.');
  return (await this.#request('/models',{method:'POST',headers:{'Content-Type':reference.type},body:reference},options)).json();
 }
 /** Poll actual local generation state. Completed models remain unapproved candidates. */
 async modelJob(id:string,options:EngineRequestOptions={}):Promise<EngineModelJob>{return (await this.#request(`/models/${this.#id(id)}`,{},options)).json()}
 /** Request cancellation of an offline model job; poll until cancelled. */
 async cancelModel(id:string,options:EngineRequestOptions={}):Promise<EngineModelJob>{return (await this.#request(`/models/${this.#id(id)}/cancel`,{method:'POST'},options)).json()}
 /** Read a structurally validated GLB. Callers own and must revoke preview object URLs. */
 async modelArtifact(id:string,options:EngineRequestOptions={}):Promise<Blob>{return (await this.#request(`/models/${this.#id(id)}/artifact`,{},options)).blob()}
 /** Download a local artifact with authentication, then use a revocable browser object URL. */
 async artifact(session:string,name:string,options:EngineRequestOptions={}):Promise<Blob>{
  if(!/^[a-f0-9-]+\.(mp4|jpg|png|glb|wav)$/.test(name))throw Error('Invalid artifact');
  return (await this.#request(`/sessions/${this.#id(session)}/artifacts/${name}`,{},options)).blob();
 }
}
