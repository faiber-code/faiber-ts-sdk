import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend query type: AdminSessionFilter. */
export interface RoutesGameOperationSessionsGetQuery extends QueryParams {
  "page"?: number | null;
  "page_size"?: number | null;
  "game_id"?: string | null;
  "status"?: string | null;
  "settlement_status"?: string | null;
  "paid"?: boolean | null;
  "user_id"?: string | null;
  "session_id"?: string | null;
}
/** Backend response type: api. */
export interface RoutesGameOperationSessionsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: AdminEventFilter. */
export interface RoutesGameOperationEventsGetQuery extends QueryParams {
  "page"?: number | null;
  "page_size"?: number | null;
  "kind"?: string | null;
  "user_id"?: string | null;
}
/** Backend response type: api. */
export interface RoutesGameOperationEventsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface RoutesGameOperationsSummaryGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: api. */
export interface RoutesGameOperationWorldsGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: UpdateGameEconomy. */
export interface RoutesUpdateGameOperationEconomyPatchInput extends JsonObject {
  "entryCoins": number;
  "burnPercent": number;
  "enabled": boolean;
}
/** Backend response type: api. */
export interface RoutesUpdateGameOperationEconomyPatchResponse extends ApiEnvelope<JsonValue> {
}

/** Backend query type: RealtimeQuery. */
export interface RoutesRealtimeGetQuery extends QueryParams {
  "room_id": string;
  "player_id": string;
  "ticket": string;
}
/** Backend response type: websocket. */
export type RoutesRealtimeGetResponse = import("./types.js").ServerEvent;

/** Backend response type: api. */
export type RoutesDeleteRoomDeleteResponse = import("./contracts.types.js").GameResult<boolean>;

/** Backend response type: api. */
export type RoutesGetRoomGetResponse = import("./contracts.types.js").GameResult<import("./types.js").Room>;

/** Backend request type: UpdateRoom. */
export type RoutesUpdateRoomPutInputStatus = "waiting" | "running" | "paused" | "closed";
export interface RoutesUpdateRoomPutInput extends JsonObject {
  "name"?: string | null;
  "capacity"?: number | null;
  "status"?: RoutesUpdateRoomPutInputStatus | null;
}
/** Backend response type: api. */
export type RoutesUpdateRoomPutResponse = import("./contracts.types.js").GameResult<import("./types.js").Room>;

/** Backend request type: InvokeWasm. */
export interface RoutesInvokeEndpointPostInput extends JsonObject {
  "player_id": string;
  "entity_id": string;
  "inputs"?: number[];
}
/** Backend response type: api. */
export type RoutesInvokeEndpointPostResponse = import("./contracts.types.js").GameResult<import("./types.js").StatePatch>;

/** Backend request type: JoinRoom. */
export interface RoutesJoinRoomPostInput extends JsonObject {
  "user_id": string;
}
/** Backend response type: api. */
export type RoutesJoinRoomPostResponse = import("./contracts.types.js").GameResult<import("./types.js").JoinTicket>;

/** Backend response type: api. */
export type RoutesListWorldsGetResponse = import("./contracts.types.js").GameResult<import("./types.js").World[]>;

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
  "gravity"?: [number, number, number];
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
export type RoutesCreateWorldPostResponse = import("./contracts.types.js").GameResult<import("./types.js").World>;

/** Backend response type: api. */
export type RoutesDeleteWorldDeleteResponse = import("./contracts.types.js").GameResult<boolean>;

/** Backend response type: api. */
export type RoutesGetWorldGetResponse = import("./contracts.types.js").GameResult<import("./types.js").World>;

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
  "gravity"?: [number, number, number];
  "deterministic"?: boolean;
}
export interface RoutesUpdateWorldPutInput extends JsonObject {
  "name"?: string | null;
  "components"?: RoutesUpdateWorldPutInputComponents[] | null;
  "replication"?: RoutesUpdateWorldPutInputReplication | null;
  "physics"?: RoutesUpdateWorldPutInputPhysics | null;
}
/** Backend response type: api. */
export type RoutesUpdateWorldPutResponse = import("./contracts.types.js").GameResult<import("./types.js").World>;

/** Backend response type: api. */
export type RoutesListEndpointsGetResponse = import("./contracts.types.js").GameResult<import("./types.js").WasmEndpoint[]>;

/** Backend request type: CreateWasmEndpoint. */
export interface RoutesCreateEndpointPostInput extends JsonObject {
  "module_id": string;
  "slug": string;
  "export": string;
  "component": string;
  "reliable"?: boolean;
}
/** Backend response type: api. */
export type RoutesCreateEndpointPostResponse = import("./contracts.types.js").GameResult<import("./types.js").WasmEndpoint>;

/** Backend response type: api. */
export type RoutesDeleteEndpointDeleteResponse = import("./contracts.types.js").GameResult<boolean>;

/** Backend response type: api. */
export type RoutesListRoomsGetResponse = import("./contracts.types.js").GameResult<import("./types.js").Room[]>;

/** Backend request type: CreateRoom. */
export interface RoutesCreateRoomPostInput extends JsonObject {
  "name": string;
  "capacity"?: number;
}
/** Backend response type: api. */
export type RoutesCreateRoomPostResponse = import("./contracts.types.js").GameResult<import("./types.js").Room>;

/** Backend response type: api. */
export type RoutesListWasmGetResponse = import("./contracts.types.js").GameResult<import("./types.js").WasmModuleInfo[]>;

/** Backend request type: UploadWasm. */
export interface RoutesUploadWasmPostInput extends JsonObject {
  "name": string;
  "wasm_base64": string;
  "exports"?: string[];
}
/** Backend response type: api. */
export type RoutesUploadWasmPostResponse = import("./contracts.types.js").GameResult<import("./types.js").WasmModuleInfo>;

/** Backend response type: api. */
export type RoutesDeleteWasmDeleteResponse = import("./contracts.types.js").GameResult<boolean>;

/** Backend response type: Value. */
export type GamesRoutesHistoryGetResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").GameSessionView[]>;

/** Backend response type: Value. */
export type GamesRoutesLobbyGetResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").GameLobbyView>;

/** Backend response type: Value. */
export type GamesRoutesJoinLobbyPostResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").GameLobbyJoined>;

/** Backend response type: Value. */
export type GamesRoutesTicketGetResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").GameQueueTicket>;

/** Backend response type: Value. */
export type GamesRoutesProgressGetResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").GameProgress[]>;

/** Backend response type: Value. */
export type GamesRoutesViewGetResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").GameSessionView>;

/** Backend request type: GameCommand. */
export type GamesRoutesCommandPostInput = import("./contracts.types.js").GameCommandInput;
/** Backend response type: Value. */
export type GamesRoutesCommandPostResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").GameSessionView>;

/** Backend response type: Value. */
export type GamesRoutesReadyPostResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").GameSessionView>;

/** Backend response type: Value. */
export type GamesRoutesWorldProgressGetResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").GameWorldProgress[]>;

/** Backend response type: Value. */
export type GamesRoutesCatalogGetResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").GameCatalogEntry[]>;

/** Backend response type: Value. */
export type GamesRoutesGameGetResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").GameCatalogEntry>;

/** Backend request type: EnqueueInput. */
export type GamesRoutesCreateLobbyPostInput = import("./contracts.types.js").GameQueueInput;
/** Backend response type: Value. */
export type GamesRoutesCreateLobbyPostResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").GameLobbyCreated>;

/** Backend request type: EnqueueInput. */
export type GamesRoutesEnqueuePostInput = import("./contracts.types.js").GameQueueInput;
/** Backend response type: Value. */
export type GamesRoutesEnqueuePostResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").GameQueueReceipt>;

/** Backend request type: EnqueueMatchmaking. */
export type KheradgahRoutesEnqueuePostInput = import("./contracts.types.js").KheradgahQueueInput;
/** Backend response type: Value. */
export type KheradgahRoutesEnqueuePostResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").KheradgahTicket>;

/** Backend response type: Value. */
export type KheradgahRoutesCancelDeleteResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").KheradgahTicket>;

/** Backend response type: Value. */
export type KheradgahRoutesTicketGetResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").KheradgahTicket>;

/** Backend request type: CreateSession. */
export type GamesRoutesCreateSessionPostInput = import("./contracts.types.js").GameCreateInput;
/** Backend response type: Value. */
export type GamesRoutesCreateSessionPostResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").GameSessionView>;

/** Backend response type: Value. */
export type KheradgahRoutesConnectionPostResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").KheradgahConnectionTicket>;

/** Backend response type: Value. */
export type KheradgahRoutesViewGetResponse = import("./contracts.types.js").GameResult<import("./contracts.types.js").KheradgahView>;

/** Backend response type: websocket. */
export type KheradgahRoutesRealtimeGetResponse = import("./contracts.types.js").KheradgahServerFrame;
