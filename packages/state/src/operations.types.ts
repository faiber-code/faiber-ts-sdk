import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend query type: RealtimeQuery. */
export interface RoutesRealtimeGetQuery extends QueryParams {
  "room_id": string;
  "player_id": string;
  "ticket": string;
}
/** Backend response type: api. */
export interface RoutesRealtimeGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface RoutesGetRoomGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: InvokeWasm. */
export interface RoutesInvokeEndpointPostInput extends JsonObject {
  "player_id": string;
  "entity_id": string;
  "inputs"?: number[];
}
/** Backend response type: api. */
export interface RoutesInvokeEndpointPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: JoinRoom. */
export interface RoutesJoinRoomPostInput extends JsonObject {
  "user_id": string;
}
/** Backend response type: api. */
export interface RoutesJoinRoomPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface RoutesListWorldsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateWorld. */
export type RoutesCreateWorldPostInputComponentsPropertiesKind = "boolean" | "integer" | "number" | "string" | "vec2" | "vec3" | "quaternion" | "json";
export type RoutesCreateWorldPostInputComponentsPropertiesAuthority = "server" | "owner" | "shared";
export interface RoutesCreateWorldPostInputComponentsProperties extends JsonObject {
  "name": string;
  "kind": RoutesCreateWorldPostInputComponentsPropertiesKind;
  "authority"?: RoutesCreateWorldPostInputComponentsPropertiesAuthority;
  "replicated"?: boolean;
  "predicted"?: boolean;
  "default"?: JsonValue;
}
export interface RoutesCreateWorldPostInputComponents extends JsonObject {
  "name": string;
  "properties": RoutesCreateWorldPostInputComponentsProperties[];
}
export interface RoutesCreateWorldPostInputReplication extends JsonObject {
  "tick_rate"?: number;
  "snapshot_rate"?: number;
  "interest_radius"?: number;
  "history_ticks"?: number;
}
export interface RoutesCreateWorldPostInputPhysics extends JsonObject {
  "enabled"?: boolean;
  "dimensions"?: number;
  "gravity"?: BackendJson<"[f32; 3]">;
  "deterministic"?: boolean;
}
export interface RoutesCreateWorldPostInput extends JsonObject {
  "name": string;
  "slug": string;
  "components"?: RoutesCreateWorldPostInputComponents[];
  "replication"?: RoutesCreateWorldPostInputReplication;
  "physics"?: RoutesCreateWorldPostInputPhysics;
}
/** Backend response type: api. */
export interface RoutesCreateWorldPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface RoutesGetWorldGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateWorld. */
export type RoutesUpdateWorldPutInputComponentsPropertiesKind = "boolean" | "integer" | "number" | "string" | "vec2" | "vec3" | "quaternion" | "json";
export type RoutesUpdateWorldPutInputComponentsPropertiesAuthority = "server" | "owner" | "shared";
export interface RoutesUpdateWorldPutInputComponentsProperties extends JsonObject {
  "name": string;
  "kind": RoutesUpdateWorldPutInputComponentsPropertiesKind;
  "authority"?: RoutesUpdateWorldPutInputComponentsPropertiesAuthority;
  "replicated"?: boolean;
  "predicted"?: boolean;
  "default"?: JsonValue;
}
export interface RoutesUpdateWorldPutInputComponents extends JsonObject {
  "name": string;
  "properties": RoutesUpdateWorldPutInputComponentsProperties[];
}
export interface RoutesUpdateWorldPutInputReplication extends JsonObject {
  "tick_rate"?: number;
  "snapshot_rate"?: number;
  "interest_radius"?: number;
  "history_ticks"?: number;
}
export interface RoutesUpdateWorldPutInputPhysics extends JsonObject {
  "enabled"?: boolean;
  "dimensions"?: number;
  "gravity"?: BackendJson<"[f32; 3]">;
  "deterministic"?: boolean;
}
export interface RoutesUpdateWorldPutInput extends JsonObject {
  "name"?: string | null;
  "components"?: RoutesUpdateWorldPutInputComponents[] | null;
  "replication"?: RoutesUpdateWorldPutInputReplication | null;
  "physics"?: RoutesUpdateWorldPutInputPhysics | null;
}
/** Backend response type: api. */
export interface RoutesUpdateWorldPutResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface RoutesListEndpointsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateWasmEndpoint. */
export interface RoutesCreateEndpointPostInput extends JsonObject {
  "module_id": string;
  "slug": string;
  "export": string;
  "component": string;
  "reliable"?: boolean;
}
/** Backend response type: api. */
export interface RoutesCreateEndpointPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface RoutesListRoomsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: CreateRoom. */
export interface RoutesCreateRoomPostInput extends JsonObject {
  "name": string;
  "capacity"?: number;
}
/** Backend response type: api. */
export interface RoutesCreateRoomPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface RoutesListWasmGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UploadWasm. */
export interface RoutesUploadWasmPostInput extends JsonObject {
  "name": string;
  "wasm_base64": string;
  "exports"?: string[];
}
/** Backend response type: api. */
export interface RoutesUploadWasmPostResponse extends ApiEnvelope<JsonValue> {
}
