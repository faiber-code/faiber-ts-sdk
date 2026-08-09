import { ServiceApi, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";

/** REST control plane for authoritative realtime worlds. Every route requires the shared IDP-authorized organization context. */
export class StateApi extends ServiceApi {
  /** Lists visible worlds via `GET /api/v1/worlds`. @returns Full Axios response with typed worlds. @throws AxiosError for authentication, authorization, or transport failures. */
  worlds(options?: RequestOptions) { return this.client.get<T.WorldListResponse>("/api/v1/worlds", undefined, options); }
  /** Gets a world via `GET /api/v1/worlds/{id}`. @param id World UUID. @returns Full typed Axios response. @throws AxiosError for unauthorized, not-found, or transport failures. */
  world(id: string, options?: RequestOptions) { return this.client.get<T.WorldResponse>(`/api/v1/worlds/${encodeURIComponent(id)}`, undefined, options); }
  /** Creates a world via `POST /api/v1/worlds`. @param data Typed world schema and optional runtime configuration. @returns Full typed Axios response. @throws AxiosError for validation, authorization, or transport failures. */
  createWorld(data: T.CreateWorldInput, options?: RequestOptions<T.CreateWorldInput>) { return this.client.post<T.WorldResponse, T.CreateWorldInput>("/api/v1/worlds", data, options); }
  /** Updates mutable world configuration via `PUT /api/v1/worlds/{id}`. @param id World UUID. @param data Typed partial update. @returns Full typed Axios response. @throws AxiosError for validation, not-found, authorization, or transport failures. */
  updateWorld(id: string, data: T.UpdateWorldInput, options?: RequestOptions<T.UpdateWorldInput>) { return this.client.put<T.WorldResponse, T.UpdateWorldInput>(`/api/v1/worlds/${encodeURIComponent(id)}`, data, options); }
  /** Lists rooms via `GET /api/v1/worlds/{worldId}/rooms`. @param worldId World UUID. @returns Full Axios response with typed rooms. @throws AxiosError for authorization, not-found, or transport failures. */
  rooms(worldId: string, options?: RequestOptions) { return this.client.get<T.RoomListResponse>(`/api/v1/worlds/${encodeURIComponent(worldId)}/rooms`, undefined, options); }
  /** Gets an authoritative room snapshot via `GET /api/v1/rooms/{id}`. @param id Room UUID. @returns Full typed Axios response. @throws AxiosError for authorization, not-found, or transport failures. */
  room(id: string, options?: RequestOptions) { return this.client.get<T.RoomResponse>(`/api/v1/rooms/${encodeURIComponent(id)}`, undefined, options); }
  /** Creates a room via `POST /api/v1/worlds/{worldId}/rooms`. @param worldId World UUID. @param data Name and optional capacity. @returns Full typed Axios response. @throws AxiosError for validation, authorization, not-found, or transport failures. */
  createRoom(worldId: string, data: T.CreateRoomInput, options?: RequestOptions<T.CreateRoomInput>) { return this.client.post<T.RoomResponse, T.CreateRoomInput>(`/api/v1/worlds/${encodeURIComponent(worldId)}/rooms`, data, options); }
  /** Joins a room via `POST /api/v1/rooms/{roomId}/join`. @param roomId Room UUID. @param userId IDP user UUID. @returns A short-lived typed realtime ticket. @throws AxiosError for capacity, validation, authorization, not-found, or transport failures. */
  join(roomId: string, userId: string, options?: RequestOptions<{ user_id: string }>) { return this.client.post<T.JoinResponse, { user_id: string }>(`/api/v1/rooms/${encodeURIComponent(roomId)}/join`, { user_id: userId }, options); }
  /** Lists WASM modules via `GET /api/v1/worlds/{worldId}/wasm`. @param worldId World UUID. @returns Full Axios response with typed module metadata. @throws AxiosError for authorization, not-found, or transport failures. */
  wasmModules(worldId: string, options?: RequestOptions) { return this.client.get<{ data: T.WasmModuleInfo[] }>(`/api/v1/worlds/${encodeURIComponent(worldId)}/wasm`, undefined, options); }
  /** Uploads base64 WASM via `POST /api/v1/worlds/{worldId}/wasm`. @param worldId World UUID. @param data Module name, bytes, and exports. @returns Full typed Axios response. @throws AxiosError for invalid WASM, authorization, not-found, or transport failures. */
  uploadWasm(worldId: string, data: T.UploadWasmInput, options?: RequestOptions<T.UploadWasmInput>) { return this.client.post<{ data: T.WasmModuleInfo }, T.UploadWasmInput>(`/api/v1/worlds/${encodeURIComponent(worldId)}/wasm`, data, options); }
  /** Lists callable endpoints via `GET /api/v1/worlds/{worldId}/endpoints`. @param worldId World UUID. @returns Full typed Axios response. @throws AxiosError for authorization, not-found, or transport failures. */
  endpoints(worldId: string, options?: RequestOptions) { return this.client.get<{ data: T.WasmEndpoint[] }>(`/api/v1/worlds/${encodeURIComponent(worldId)}/endpoints`, undefined, options); }
  /** Registers an endpoint via `POST /api/v1/worlds/{worldId}/endpoints`. @param worldId World UUID. @param data WASM export binding. @returns Full typed Axios response. @throws AxiosError for validation, authorization, not-found, or transport failures. */
  createEndpoint(worldId: string, data: T.CreateWasmEndpointInput, options?: RequestOptions<T.CreateWasmEndpointInput>) { return this.client.post<{ data: T.WasmEndpoint }, T.CreateWasmEndpointInput>(`/api/v1/worlds/${encodeURIComponent(worldId)}/endpoints`, data, options); }
  /** Invokes a registered endpoint via `POST /api/v1/rooms/{roomId}/endpoints/{slug}`. @param roomId Room UUID. @param slug Endpoint slug. @param data Player/entity inputs. @returns Authoritative state patch in a full Axios response. @throws AxiosError for validation, authorization, not-found, execution, or transport failures. */
  invoke(roomId: string, slug: string, data: T.InvokeWasmInput, options?: RequestOptions<T.InvokeWasmInput>) { return this.client.post<T.StatePatchResponse, T.InvokeWasmInput>(`/api/v1/rooms/${encodeURIComponent(roomId)}/endpoints/${encodeURIComponent(slug)}`, data, options); }
}
