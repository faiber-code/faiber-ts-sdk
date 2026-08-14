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
export interface RoutesCreateWorldPostInput extends JsonObject {
  "name": string;
  "slug": string;
  "components"?: BackendJson<"ComponentSchema">[];
  "replication"?: BackendJson<"ReplicationConfig">;
  "physics"?: BackendJson<"PhysicsConfig">;
}
/** Backend response type: api. */
export interface RoutesCreateWorldPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface RoutesGetWorldGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateWorld. */
export interface RoutesUpdateWorldPutInput extends JsonObject {
  "name"?: string | null;
  "components"?: BackendJson<"ComponentSchema">[] | null;
  "replication"?: BackendJson<"ReplicationConfig"> | null;
  "physics"?: BackendJson<"PhysicsConfig"> | null;
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
