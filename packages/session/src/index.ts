import { RestResource, ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
import { SessionOperations } from "./operations.js";
export class SessionApi extends ServiceApi {
    readonly operations = new SessionOperations(this.client);
    readonly rooms = new RestResource<T.Room, T.CreateRoomInput, T.UpdateRoomInput, T.RoomListResponse, T.RoomResponse>(this.client, "/api/v1/rooms", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    analytics(options?: RequestOptions) { return this.client.get<T.RoomAnalyticsResponse>("/api/v1/rooms/analytics", undefined, options); }
    recordings(id: Identifier, options?: RequestOptions) { return this.client.get<T.RecordingsResponse>(`/api/v1/rooms/${encodeURIComponent(id)}/recordings`, undefined, options); }
    livekitToken(id: Identifier, options?: RequestOptions) { return this.client.get<T.LivekitTokenResponse>(`/api/v1/rooms/${encodeURIComponent(id)}/livekit-token`, undefined, options); }
    startInteractive(id: Identifier, data: T.StartInteractiveInput = {}, options?: RequestOptions<T.StartInteractiveInput>) { return this.client.post<T.StartInteractiveResponse, T.StartInteractiveInput>(`/api/v1/rooms/${encodeURIComponent(id)}/interactive/start`, data, options); }
    end(id: Identifier, options?: RequestOptions) { return this.client.get<T.EndRoomResponse>(`/api/v1/rooms/${encodeURIComponent(id)}/end`, undefined, options); }
    playback(id: Identifier, options?: RequestOptions) { return this.client.get<T.PlaybackResponse>(`/api/v1/rooms/${encodeURIComponent(id)}/playback`, undefined, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";
