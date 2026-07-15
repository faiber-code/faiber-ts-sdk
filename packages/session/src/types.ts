import type { ApiEnvelope, JsonObject, OperationResponse, ResourceListResponse, ResourceResponse } from "@faiber/sdk-core";
export interface Room extends JsonObject {
    id: string;
    name: string;
    status: string;
    starts_at?: string;
    ends_at?: string;
}
export interface CreateRoomInput extends JsonObject {
    name: string;
    starts_at?: string;
    metadata?: JsonObject;
}
export interface UpdateRoomInput extends Partial<CreateRoomInput> {
    status?: string;
}
export interface RoomAnalytics extends JsonObject {
    rooms: number;
    participants: number;
    duration_seconds: number;
}
export interface Recording extends JsonObject {
    id: string;
    room_id: string;
    url: string;
    duration_seconds?: number;
}
export interface LivekitToken extends JsonObject {
    token: string;
    url?: string;
    expires_at?: string;
}
export interface StartInteractiveInput extends JsonObject {
    layout?: string;
    metadata?: JsonObject;
}
export interface Playback extends JsonObject {
    url: string;
    expires_at?: string;
}
export interface RoomListResponse extends ResourceListResponse<Room> {
}
export interface RoomResponse extends ResourceResponse<Room> {
}
export interface RoomAnalyticsResponse extends ApiEnvelope<RoomAnalytics> {
}
export interface RecordingsResponse extends ApiEnvelope<Recording[]> {
}
export interface LivekitTokenResponse extends ApiEnvelope<LivekitToken> {
}
export interface StartInteractiveResponse extends OperationResponse {
}
export interface EndRoomResponse extends OperationResponse {
}
export interface PlaybackResponse extends ApiEnvelope<Playback> {
}
