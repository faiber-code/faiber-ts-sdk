import { RestResource, ServiceApi, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
import type * as O from "./operations.types.js";
import { SessionOperations } from "./operations.js";

function sessionViewUrl(path: string, baseUrl?: string): string {
    if (!baseUrl) return path;
    try { return new URL(path, baseUrl).toString(); }
    catch { return `${baseUrl.replace(/\/$/, "")}${path}`; }
}

export function roomViewUrl(roomId: Identifier, baseUrl?: string) { return sessionViewUrl(`/view/room/${encodeURIComponent(roomId)}`, baseUrl); }
export function recordingViewUrl(roomId: Identifier, baseUrl?: string) { return sessionViewUrl(`/view/recording/${encodeURIComponent(roomId)}`, baseUrl); }
export function playbackViewUrl(roomId: Identifier, baseUrl?: string) { return sessionViewUrl(`/view/playback/${encodeURIComponent(roomId)}`, baseUrl); }
export class SessionApi extends ServiceApi {
    readonly operations = new SessionOperations(this.client);
    readonly rooms = new RestResource<T.Room, T.CreateRoomInput, T.UpdateRoomInput, T.RoomListResponse, T.RoomResponse>(this.client, "/api/v1/rooms", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    analytics(options?: RequestOptions) { return this.operations.roomRoomsAnalyticsGet(options); }
    recordings(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsRecordingsGet(id, options); }
    livekitToken(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsLivekitTokenGet(id, options); }
    startInteractive(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsInteractiveStartPost(id, options); }
    end(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsEndPost(id, options); }
    playback(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsPlaybackShowGet(id, options); }
    listRooms(params?: O.RoomRoomsIndexGetQuery, options?: RequestOptions) { return this.operations.roomRoomsIndexGet(params, options); }
    room(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsShowGet(id, options); }
    createRoom(data: O.RoomRoomsCreatePostInput, options?: RequestOptions<O.RoomRoomsCreatePostInput>) { return this.operations.roomRoomsCreatePost(data, options); }
    updateRoom(id: Identifier, data: O.RoomRoomsUpdatePatchInput, options?: RequestOptions<O.RoomRoomsUpdatePatchInput>) { return this.operations.roomRoomsUpdatePatch(id, data, options); }
    deleteRoom(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsDeleteDelete(id, options); }
    joinRoom(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsJoinGet(id, options); }
    stopRoom(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsStopGet(id, options); }
    roomLeaderboard(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsLeaderboardGet(id, options); }
    roomRecordings(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsRecordingsGet(id, options); }
    listRecordings(params?: O.RecordingRecordingsIndexGetQuery, options?: RequestOptions) { return this.operations.recordingRecordingsIndexGet(params, options); }
    recordingManifest(id: Identifier, options?: RequestOptions) { return this.operations.recordingRecordingManifestGet(id, options); }
    scheduleRecording(id: Identifier, data: O.RecordingRecordingSchedulePostInput, options?: RequestOptions<O.RecordingRecordingSchedulePostInput>) { return this.operations.recordingRecordingSchedulePost(id, data, options); }
    audioModels(options?: RequestOptions) { return this.operations.recordingAudioModelsGet(options); }
    respondRoomState(id: Identifier, data: O.RoomStateRoomStateRespondPostInput, options?: RequestOptions<O.RoomStateRoomStateRespondPostInput>) { return this.operations.roomStateRoomStateRespondPost(id, data, options); }
    livekitConfiguration(options?: RequestOptions) { return this.operations.configurationLivekitConfigShowGet(options); }
    updateLivekitConfiguration(data: O.ConfigurationLivekitConfigUpdatePutInput, options?: RequestOptions<O.ConfigurationLivekitConfigUpdatePutInput>) { return this.operations.configurationLivekitConfigUpdatePut(data, options); }
    branding(options?: RequestOptions) { return this.operations.brandingShowGet(options); }
    updateBranding(data: O.BrandingUpdatePutInput, options?: RequestOptions<O.BrandingUpdatePutInput>) { return this.operations.brandingUpdatePut(data, options); }
    uploadBrandingAsset(data: FormData, options?: RequestOptions<FormData>) { return this.operations.brandingUploadPost(data, options); }
    publicBranding(options?: RequestOptions) { return this.operations.brandingPublicShowGet(options); }
    integrationDocs(options?: RequestOptions) { return this.operations.integrationIntegrationDocsShowGet(options); }
    flowIntegration(options?: RequestOptions) { return this.operations.integrationFlowIntegrationShowGet(options); }
    chatToolSchema(options?: RequestOptions) { return this.operations.assistantToolsToolSchemaGet(options); }
    userSessions(userId: Identifier, params?: O.AssistantToolsListUserSessionsGetQuery, options?: RequestOptions) { return this.operations.assistantToolsListUserSessionsGet(userId, params, options); }
    userSession(userId: Identifier, roomId: Identifier, options?: RequestOptions) { return this.operations.assistantToolsUserSessionDetailGet(userId, roomId, options); }
    roomViewUrl(id: Identifier) { return roomViewUrl(id, this.client.config.domains.session); }
    recordingViewUrl(id: Identifier) { return recordingViewUrl(id, this.client.config.domains.session); }
    playbackViewUrl(id: Identifier) { return playbackViewUrl(id, this.client.config.domains.session); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";
