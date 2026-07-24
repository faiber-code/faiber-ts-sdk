import { ServiceApi, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
export class StateApi extends ServiceApi {
  worlds(options?:RequestOptions){return this.client.get<T.WorldListResponse>("/api/v1/worlds",undefined,options)}
  world(id:string,options?:RequestOptions){return this.client.get<T.WorldResponse>(`/api/v1/worlds/${encodeURIComponent(id)}`,undefined,options)}
  createWorld(data:T.CreateWorldInput,options?:RequestOptions<T.CreateWorldInput>){return this.client.post<T.WorldResponse,T.CreateWorldInput>("/api/v1/worlds",data,options)}
  rooms(worldId:string,options?:RequestOptions){return this.client.get<T.RoomListResponse>(`/api/v1/worlds/${encodeURIComponent(worldId)}/rooms`,undefined,options)}
  room(id:string,options?:RequestOptions){return this.client.get<T.RoomResponse>(`/api/v1/rooms/${encodeURIComponent(id)}`,undefined,options)}
  createRoom(worldId:string,data:T.CreateRoomInput,options?:RequestOptions<T.CreateRoomInput>){return this.client.post<T.RoomResponse,T.CreateRoomInput>(`/api/v1/worlds/${encodeURIComponent(worldId)}/rooms`,data,options)}
  join(roomId:string,userId:string,options?:RequestOptions<{user_id:string}>){return this.client.post<T.JoinResponse,{user_id:string}>(`/api/v1/rooms/${encodeURIComponent(roomId)}/join`,{user_id:userId},options)}
  wasmModules(worldId:string,options?:RequestOptions){return this.client.get<{data:T.WasmModuleInfo[]}>(`/api/v1/worlds/${encodeURIComponent(worldId)}/wasm`,undefined,options)}
  uploadWasm(worldId:string,data:T.UploadWasmInput,options?:RequestOptions<T.UploadWasmInput>){return this.client.post<{data:T.WasmModuleInfo},T.UploadWasmInput>(`/api/v1/worlds/${encodeURIComponent(worldId)}/wasm`,data,options)}
  endpoints(worldId:string,options?:RequestOptions){return this.client.get<{data:T.WasmEndpoint[]}>(`/api/v1/worlds/${encodeURIComponent(worldId)}/endpoints`,undefined,options)}
  createEndpoint(worldId:string,data:T.CreateWasmEndpointInput,options?:RequestOptions<T.CreateWasmEndpointInput>){return this.client.post<{data:T.WasmEndpoint},T.CreateWasmEndpointInput>(`/api/v1/worlds/${encodeURIComponent(worldId)}/endpoints`,data,options)}
  invoke(roomId:string,slug:string,data:T.InvokeWasmInput,options?:RequestOptions<T.InvokeWasmInput>){return this.client.post<T.StatePatchResponse,T.InvokeWasmInput>(`/api/v1/rooms/${encodeURIComponent(roomId)}/endpoints/${encodeURIComponent(slug)}`,data,options)}
}
