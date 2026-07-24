import type { ApiEnvelope, JsonObject, JsonValue } from "@faiber/sdk-core";
export type PropertyType = "boolean"|"integer"|"number"|"string"|"vec2"|"vec3"|"quaternion"|"json";
export type PropertyAuthority = "server"|"owner"|"shared";
export interface StateProperty { name:string; kind:PropertyType; authority:PropertyAuthority; replicated:boolean; predicted:boolean; default:JsonValue }
export interface ComponentSchema { name:string; properties:StateProperty[] }
export interface ReplicationConfig { tick_rate:number; snapshot_rate:number; interest_radius:number; history_ticks:number }
export interface PhysicsConfig { enabled:boolean; dimensions:2|3; gravity:[number,number,number]; deterministic:boolean }
export interface World { id:string; organization_id:string; name:string; slug:string; components:ComponentSchema[]; replication:ReplicationConfig; physics:PhysicsConfig; created_at:string; updated_at:string }
export type CreateWorldInput = Pick<World,"name"|"slug"|"components"|"replication"|"physics">;
export type RoomStatus = "waiting"|"running"|"paused"|"closed";
export interface Player { id:string; user_id:string; joined_at:string; last_input:number }
export interface Entity { id:string; owner_id?:string; components:Record<string,JsonObject>; revision:number }
export interface Room { id:string; world_id:string; organization_id:string; name:string; capacity:number; status:RoomStatus; tick:number; players:Record<string,Player>; entities:Record<string,Entity>; created_at:string }
export interface CreateRoomInput { name:string; capacity?:number }
export interface JoinTicket { room_id:string; player_id:string; ticket:string; websocket_url:string; udp_address:string; expires_at:string }
export type Delivery = "reliable"|"unreliable"|"acked";
export interface InputFrame { room_id:string; player_id:string; ticket?:string; sequence:number; delivery?:Delivery; values:JsonObject }
export interface StatePatch { room_id:string; tick:number; sequence:number; entity_id:string; component:string; values:JsonObject; reliable:boolean }
export type ServerEvent = {type:"snapshot";room:Room}|{type:"patch";patch:StatePatch}|{type:"player_joined";room_id:string;player:Player}|{type:"player_left";room_id:string;player_id:string}|{type:"ack";sequence:number;tick:number}|{type:"pong";tick:number}|{type:"error";code:string;message:string};
export interface WasmModuleInfo { id:string; world_id:string; name:string; sha256:string; exports:string[]; created_at:string }
export interface UploadWasmInput { name:string; wasm_base64:string; exports?:string[] }
export interface WasmEndpoint { id:string; world_id:string; module_id:string; slug:string; export:string; component:string; reliable:boolean }
export interface CreateWasmEndpointInput { module_id:string; slug:string; export:string; component:string; reliable?:boolean }
export interface InvokeWasmInput { player_id:string; entity_id:string; inputs?:number[] }
export type WorldListResponse=ApiEnvelope<World[]>; export type WorldResponse=ApiEnvelope<World>; export type RoomListResponse=ApiEnvelope<Room[]>; export type RoomResponse=ApiEnvelope<Room>; export type JoinResponse=ApiEnvelope<JoinTicket>; export type StatePatchResponse=ApiEnvelope<StatePatch>;
