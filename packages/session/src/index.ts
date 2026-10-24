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
    /** Sends a server-authorized room interaction after Charge and cooldown checks. Requires room:read_own or room:read. Reuse event_id on retries. */
    interact(roomId:Identifier,data:T.RoomInteractionInput,options?:RequestOptions<T.RoomInteractionInput>) { return this.client.post<T.RoomInteractionResponse,T.RoomInteractionInput>(`/api/v1/rooms/${encodeURIComponent(roomId)}/interactions`,data,options); }
    readonly operations = new SessionOperations(this.client);
    readonly rooms = new RestResource<T.Room, T.CreateRoomInput, T.UpdateRoomInput, T.RoomListResponse, T.RoomResponse, O.RoomRoomsIndexGetQuery, O.RoomRoomsDeleteDeleteResponse>(this.client, "/api/v1/rooms", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    /** analytics via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    analytics(options?: RequestOptions) { return this.operations.roomRoomsAnalyticsGet(options); }
    /** recordings via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    recordings(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsRecordingsGet(id, options); }
    /** livekitToken via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    livekitToken(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsLivekitTokenGet(id, options); }
    /** startInteractive via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    startInteractive(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsInteractiveStartPost(id, options); }
    /** end via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    end(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsEndPost(id, options); }
    /** playback via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    playback(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsPlaybackShowGet(id, options); }
    /** listRooms via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    listRooms(params?: O.RoomRoomsIndexGetQuery, options?: RequestOptions) { return this.operations.roomRoomsIndexGet(params, options); }
    /** room via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    room(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsShowGet(id, options); }
    /** createRoom via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    createRoom(data: O.RoomRoomsCreatePostInput, options?: RequestOptions<O.RoomRoomsCreatePostInput>) { return this.operations.roomRoomsCreatePost(data, options); }
    /** updateRoom via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    updateRoom(id: Identifier, data: O.RoomRoomsUpdatePatchInput, options?: RequestOptions<O.RoomRoomsUpdatePatchInput>) { return this.operations.roomRoomsUpdatePatch(id, data, options); }
    /** deleteRoom via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    deleteRoom(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsDeleteDelete(id, options); }
    /** joinRoom via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    joinRoom(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsJoinGet(id, options); }
    /** stopRoom via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    stopRoom(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsStopGet(id, options); }
    /** roomLeaderboard via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    roomLeaderboard(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsLeaderboardGet(id, options); }
    /** roomRecordings via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    roomRecordings(id: Identifier, options?: RequestOptions) { return this.operations.roomRoomsRecordingsGet(id, options); }
    /** listRecordings via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    listRecordings(params?: O.RecordingRecordingsIndexGetQuery, options?: RequestOptions) { return this.operations.recordingRecordingsIndexGet(params, options); }
    /** recordingManifest via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    recordingManifest(id: Identifier, options?: RequestOptions) { return this.operations.recordingRecordingManifestGet(id, options); }
    /** scheduleRecording via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    scheduleRecording(id: Identifier, data: O.RecordingRecordingSchedulePostInput, options?: RequestOptions<O.RecordingRecordingSchedulePostInput>) { return this.operations.recordingRecordingSchedulePost(id, data, options); }
    /** audioModels via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    audioModels(options?: RequestOptions) { return this.operations.recordingAudioModelsGet(options); }
    /** respondRoomState via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    respondRoomState(id: Identifier, data: O.RoomStateRoomStateRespondPostInput, options?: RequestOptions<O.RoomStateRoomStateRespondPostInput>) { return this.operations.roomStateRoomStateRespondPost(id, data, options); }
    /** livekitConfiguration via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    livekitConfiguration(options?: RequestOptions) { return this.operations.configurationLivekitConfigShowGet(options); }
    /** updateLivekitConfiguration via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    updateLivekitConfiguration(data: O.ConfigurationLivekitConfigUpdatePutInput, options?: RequestOptions<O.ConfigurationLivekitConfigUpdatePutInput>) { return this.operations.configurationLivekitConfigUpdatePut(data, options); }
    /** branding via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    branding(options?: RequestOptions) { return this.operations.brandingShowGet(options); }
    /** updateBranding via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    updateBranding(data: O.BrandingUpdatePutInput, options?: RequestOptions<O.BrandingUpdatePutInput>) { return this.operations.brandingUpdatePut(data, options); }
    /** uploadBrandingAsset via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    uploadBrandingAsset(data: FormData, options?: RequestOptions<FormData>) { return this.operations.brandingUploadPost(data, options); }
    /** publicBranding via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    publicBranding(options?: RequestOptions) { return this.operations.brandingPublicShowGet(options); }
    /** integrationDocs via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    integrationDocs(options?: RequestOptions) { return this.operations.integrationIntegrationDocsShowGet(options); }
    /** flowIntegration via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    flowIntegration(options?: RequestOptions) { return this.operations.integrationFlowIntegrationShowGet(options); }
    /** chatToolSchema via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    chatToolSchema(options?: RequestOptions) { return this.operations.assistantToolsToolSchemaGet(options); }
    /** userSessions via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    userSessions(userId: Identifier, params?: O.AssistantToolsListUserSessionsGetQuery, options?: RequestOptions) { return this.operations.assistantToolsListUserSessionsGet(userId, params, options); }
    /** userSession via the matching source-reviewed operation; see SessionOperations.
     * @param options Axios cancellation, headers, timeout and credentials.
     * @returns Complete Axios response with the operation's native envelope.
     * @throws AxiosError for the delegated operation's current authorization, validation and transport errors.
     */
    userSession(userId: Identifier, roomId: Identifier, options?: RequestOptions) { return this.operations.assistantToolsUserSessionDetailGet(userId, roomId, options); }
    roomViewUrl(id: Identifier) { return roomViewUrl(id, this.client.config.domains.session); }
    recordingViewUrl(id: Identifier) { return recordingViewUrl(id, this.client.config.domains.session); }
    playbackViewUrl(id: Identifier) { return playbackViewUrl(id, this.client.config.domains.session); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";

export * from "./contracts.types.js";

export * from "./branding.types.js";

export * from "./reviewed-wire.js";
