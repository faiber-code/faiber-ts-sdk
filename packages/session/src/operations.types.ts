import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: handler-defined response. */
export interface RouterStatusRouteGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: infera_flow_sdk::FlowIntegrationResponse. */
export interface IntegrationFlowIntegrationShowGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend request type: RoomStateRespond. */
export interface RoomStateRoomStateRespondPostInput extends JsonObject {
  "values": string[];
}
/** Backend response type: RoomStateRespondResponse. */
export interface RoomStateRoomStateRespondPostResponseData extends JsonObject {
  "validated": boolean;
}
export interface RoomStateRoomStateRespondPostResponse extends ApiEnvelope<RoomStateRoomStateRespondPostResponseData> {
}

/** Backend query type: RoomListQuery. */
export interface RoomRoomsIndexGetQuery extends QueryParams {
  "page_number"?: number | null;
  "page_size"?: number | null;
  "custom_only"?: boolean | null;
  "search"?: string | null;
}
/** Backend response type: RoomListResponse. */
export interface RoomRoomsIndexGetResponseDataRooms extends JsonObject {
  "id": string;
  "name": string;
  "capacity": number;
  "status": number;
  "session_id"?: string | null;
  "starts_at"?: string | null;
  "is_done": boolean;
}
export interface RoomRoomsIndexGetResponseData extends JsonObject {
  "rooms": RoomRoomsIndexGetResponseDataRooms[];
}
export interface RoomRoomsIndexGetResponse extends ApiEnvelope<RoomRoomsIndexGetResponseData> {
}

/** Backend request type: RoomCreate. */
export type RoomRoomsCreatePostInputStatesState = "NotOpen" | "Awaiting" | "Question" | "Game" | "Task" | "Ended" | "Closed" | "Replay" | "Live" | "Interactive" | "ChargeLow";
export interface RoomRoomsCreatePostInputStatesDataGameHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsCreatePostInputStatesDataGame extends JsonObject {
  "id": string;
  "game_id": string;
  "duration": number;
  "hint_text"?: string | null;
  "hint_image"?: string | null;
  "hint_video"?: RoomRoomsCreatePostInputStatesDataGameHintVideo | null;
}
export interface RoomRoomsCreatePostInputStatesDataQuestionVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsCreatePostInputStatesDataQuestionHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsCreatePostInputStatesDataQuestionOptions extends JsonObject {
  "id": number;
  "answer": string;
}
export interface RoomRoomsCreatePostInputStatesDataQuestion extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsCreatePostInputStatesDataQuestionVideo | null;
  "hint_video"?: RoomRoomsCreatePostInputStatesDataQuestionHintVideo | null;
  "options"?: RoomRoomsCreatePostInputStatesDataQuestionOptions[] | null;
}
export interface RoomRoomsCreatePostInputStatesDataTaskVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsCreatePostInputStatesDataTaskHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsCreatePostInputStatesDataTask extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsCreatePostInputStatesDataTaskVideo | null;
  "hint_video"?: RoomRoomsCreatePostInputStatesDataTaskHintVideo | null;
}
export interface RoomRoomsCreatePostInputStatesDataInteractiveVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsCreatePostInputStatesDataInteractive extends JsonObject {
  "id": string;
  "duration": number;
  "video"?: RoomRoomsCreatePostInputStatesDataInteractiveVideo | null;
}
export type RoomRoomsCreatePostInputStatesDataValidationType = "Equality" | "AssistantPrompt";
export interface RoomRoomsCreatePostInputStatesDataValidation extends JsonObject {
  "type": RoomRoomsCreatePostInputStatesDataValidationType;
  "value": string;
}
export interface RoomRoomsCreatePostInputStatesDataRewards extends JsonObject {
  "on_complete": string;
}
export interface RoomRoomsCreatePostInputStatesData extends JsonObject {
  "game"?: RoomRoomsCreatePostInputStatesDataGame | null;
  "question"?: RoomRoomsCreatePostInputStatesDataQuestion | null;
  "task"?: RoomRoomsCreatePostInputStatesDataTask | null;
  "interactive"?: RoomRoomsCreatePostInputStatesDataInteractive | null;
  "validation"?: RoomRoomsCreatePostInputStatesDataValidation[] | null;
  "rewards"?: RoomRoomsCreatePostInputStatesDataRewards | null;
  "content_id"?: string | null;
}
export interface RoomRoomsCreatePostInputStates extends JsonObject {
  "state": RoomRoomsCreatePostInputStatesState;
  "duration": number;
  "data"?: RoomRoomsCreatePostInputStatesData | null;
}
export interface RoomRoomsCreatePostInput extends JsonObject {
  "name": string;
  "capacity": number;
  "session_id"?: string | null;
  "users"?: string[] | null;
  "states"?: RoomRoomsCreatePostInputStates[] | null;
  "status"?: number | null;
  "starts_at": string;
}
/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsCreatePostResponseDataRoomClients extends JsonObject {
  "id": string;
  "profile_id": string;
  "roles": string[];
  "name"?: string | null;
  "token"?: string | null;
  "status": number;
}
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateClientResponses extends JsonObject {
  "id": string;
  "client_id": string;
  "room_state_id": string;
  "validated"?: boolean | null;
  "created_at": string;
  "validated_at"?: string | null;
}
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateDataGameHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateDataGame extends JsonObject {
  "id": string;
  "game_id": string;
  "duration": number;
  "hint_text"?: string | null;
  "hint_image"?: string | null;
  "hint_video"?: RoomRoomsCreatePostResponseDataRoomCurrentStateDataGameHintVideo | null;
}
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateDataQuestionVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateDataQuestionHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateDataQuestionOptions extends JsonObject {
  "id": number;
  "answer": string;
}
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateDataQuestion extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsCreatePostResponseDataRoomCurrentStateDataQuestionVideo | null;
  "hint_video"?: RoomRoomsCreatePostResponseDataRoomCurrentStateDataQuestionHintVideo | null;
  "options"?: RoomRoomsCreatePostResponseDataRoomCurrentStateDataQuestionOptions[] | null;
}
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateDataTaskVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateDataTaskHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateDataTask extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsCreatePostResponseDataRoomCurrentStateDataTaskVideo | null;
  "hint_video"?: RoomRoomsCreatePostResponseDataRoomCurrentStateDataTaskHintVideo | null;
}
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateDataInteractiveVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateDataInteractive extends JsonObject {
  "id": string;
  "duration": number;
  "video"?: RoomRoomsCreatePostResponseDataRoomCurrentStateDataInteractiveVideo | null;
}
export type RoomRoomsCreatePostResponseDataRoomCurrentStateDataValidationType = "Equality" | "AssistantPrompt";
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateDataValidation extends JsonObject {
  "type": RoomRoomsCreatePostResponseDataRoomCurrentStateDataValidationType;
  "value": string;
}
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateDataRewards extends JsonObject {
  "on_complete": string;
}
export interface RoomRoomsCreatePostResponseDataRoomCurrentStateData extends JsonObject {
  "game"?: RoomRoomsCreatePostResponseDataRoomCurrentStateDataGame | null;
  "question"?: RoomRoomsCreatePostResponseDataRoomCurrentStateDataQuestion | null;
  "task"?: RoomRoomsCreatePostResponseDataRoomCurrentStateDataTask | null;
  "interactive"?: RoomRoomsCreatePostResponseDataRoomCurrentStateDataInteractive | null;
  "validation"?: RoomRoomsCreatePostResponseDataRoomCurrentStateDataValidation[] | null;
  "rewards"?: RoomRoomsCreatePostResponseDataRoomCurrentStateDataRewards | null;
  "content_id"?: string | null;
}
export type RoomRoomsCreatePostResponseDataRoomCurrentStateState = "NotOpen" | "Awaiting" | "Question" | "Game" | "Task" | "Ended" | "Closed" | "Replay" | "Live" | "Interactive" | "ChargeLow";
export interface RoomRoomsCreatePostResponseDataRoomCurrentState extends JsonObject {
  "id": string;
  "room_id": string;
  "duration_in_seconds": number;
  "client_responses": RoomRoomsCreatePostResponseDataRoomCurrentStateClientResponses[];
  "data"?: RoomRoomsCreatePostResponseDataRoomCurrentStateData | null;
  "state": RoomRoomsCreatePostResponseDataRoomCurrentStateState;
  "started_at"?: string | null;
  "ended_at"?: string | null;
  "status": number;
}
export interface RoomRoomsCreatePostResponseDataRoom extends JsonObject {
  "id": string;
  "name": string;
  "capacity": number;
  "starts_at"?: string | null;
  "ended_at"?: string | null;
  "clients": RoomRoomsCreatePostResponseDataRoomClients[];
  "current_state"?: RoomRoomsCreatePostResponseDataRoomCurrentState | null;
  "room_name": string;
  "room_channel": string;
  "server_time": string;
  "status": number;
}
export interface RoomRoomsCreatePostResponseData extends JsonObject {
  "room": RoomRoomsCreatePostResponseDataRoom;
}
export interface RoomRoomsCreatePostResponse extends ApiEnvelope<RoomRoomsCreatePostResponseData> {
}

/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsDeleteDeleteResponseDataRoomClients extends JsonObject {
  "id": string;
  "profile_id": string;
  "roles": string[];
  "name"?: string | null;
  "token"?: string | null;
  "status": number;
}
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateClientResponses extends JsonObject {
  "id": string;
  "client_id": string;
  "room_state_id": string;
  "validated"?: boolean | null;
  "created_at": string;
  "validated_at"?: string | null;
}
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataGameHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataGame extends JsonObject {
  "id": string;
  "game_id": string;
  "duration": number;
  "hint_text"?: string | null;
  "hint_image"?: string | null;
  "hint_video"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataGameHintVideo | null;
}
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataQuestionVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataQuestionHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataQuestionOptions extends JsonObject {
  "id": number;
  "answer": string;
}
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataQuestion extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataQuestionVideo | null;
  "hint_video"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataQuestionHintVideo | null;
  "options"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataQuestionOptions[] | null;
}
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataTaskVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataTaskHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataTask extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataTaskVideo | null;
  "hint_video"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataTaskHintVideo | null;
}
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataInteractiveVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataInteractive extends JsonObject {
  "id": string;
  "duration": number;
  "video"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataInteractiveVideo | null;
}
export type RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataValidationType = "Equality" | "AssistantPrompt";
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataValidation extends JsonObject {
  "type": RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataValidationType;
  "value": string;
}
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataRewards extends JsonObject {
  "on_complete": string;
}
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentStateData extends JsonObject {
  "game"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataGame | null;
  "question"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataQuestion | null;
  "task"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataTask | null;
  "interactive"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataInteractive | null;
  "validation"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataValidation[] | null;
  "rewards"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentStateDataRewards | null;
  "content_id"?: string | null;
}
export type RoomRoomsDeleteDeleteResponseDataRoomCurrentStateState = "NotOpen" | "Awaiting" | "Question" | "Game" | "Task" | "Ended" | "Closed" | "Replay" | "Live" | "Interactive" | "ChargeLow";
export interface RoomRoomsDeleteDeleteResponseDataRoomCurrentState extends JsonObject {
  "id": string;
  "room_id": string;
  "duration_in_seconds": number;
  "client_responses": RoomRoomsDeleteDeleteResponseDataRoomCurrentStateClientResponses[];
  "data"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentStateData | null;
  "state": RoomRoomsDeleteDeleteResponseDataRoomCurrentStateState;
  "started_at"?: string | null;
  "ended_at"?: string | null;
  "status": number;
}
export interface RoomRoomsDeleteDeleteResponseDataRoom extends JsonObject {
  "id": string;
  "name": string;
  "capacity": number;
  "starts_at"?: string | null;
  "ended_at"?: string | null;
  "clients": RoomRoomsDeleteDeleteResponseDataRoomClients[];
  "current_state"?: RoomRoomsDeleteDeleteResponseDataRoomCurrentState | null;
  "room_name": string;
  "room_channel": string;
  "server_time": string;
  "status": number;
}
export interface RoomRoomsDeleteDeleteResponseData extends JsonObject {
  "room": RoomRoomsDeleteDeleteResponseDataRoom;
}
export interface RoomRoomsDeleteDeleteResponse extends ApiEnvelope<RoomRoomsDeleteDeleteResponseData> {
}

/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsShowGetResponseDataRoomClients extends JsonObject {
  "id": string;
  "profile_id": string;
  "roles": string[];
  "name"?: string | null;
  "token"?: string | null;
  "status": number;
}
export interface RoomRoomsShowGetResponseDataRoomCurrentStateClientResponses extends JsonObject {
  "id": string;
  "client_id": string;
  "room_state_id": string;
  "validated"?: boolean | null;
  "created_at": string;
  "validated_at"?: string | null;
}
export interface RoomRoomsShowGetResponseDataRoomCurrentStateDataGameHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsShowGetResponseDataRoomCurrentStateDataGame extends JsonObject {
  "id": string;
  "game_id": string;
  "duration": number;
  "hint_text"?: string | null;
  "hint_image"?: string | null;
  "hint_video"?: RoomRoomsShowGetResponseDataRoomCurrentStateDataGameHintVideo | null;
}
export interface RoomRoomsShowGetResponseDataRoomCurrentStateDataQuestionVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsShowGetResponseDataRoomCurrentStateDataQuestionHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsShowGetResponseDataRoomCurrentStateDataQuestionOptions extends JsonObject {
  "id": number;
  "answer": string;
}
export interface RoomRoomsShowGetResponseDataRoomCurrentStateDataQuestion extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsShowGetResponseDataRoomCurrentStateDataQuestionVideo | null;
  "hint_video"?: RoomRoomsShowGetResponseDataRoomCurrentStateDataQuestionHintVideo | null;
  "options"?: RoomRoomsShowGetResponseDataRoomCurrentStateDataQuestionOptions[] | null;
}
export interface RoomRoomsShowGetResponseDataRoomCurrentStateDataTaskVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsShowGetResponseDataRoomCurrentStateDataTaskHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsShowGetResponseDataRoomCurrentStateDataTask extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsShowGetResponseDataRoomCurrentStateDataTaskVideo | null;
  "hint_video"?: RoomRoomsShowGetResponseDataRoomCurrentStateDataTaskHintVideo | null;
}
export interface RoomRoomsShowGetResponseDataRoomCurrentStateDataInteractiveVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsShowGetResponseDataRoomCurrentStateDataInteractive extends JsonObject {
  "id": string;
  "duration": number;
  "video"?: RoomRoomsShowGetResponseDataRoomCurrentStateDataInteractiveVideo | null;
}
export type RoomRoomsShowGetResponseDataRoomCurrentStateDataValidationType = "Equality" | "AssistantPrompt";
export interface RoomRoomsShowGetResponseDataRoomCurrentStateDataValidation extends JsonObject {
  "type": RoomRoomsShowGetResponseDataRoomCurrentStateDataValidationType;
  "value": string;
}
export interface RoomRoomsShowGetResponseDataRoomCurrentStateDataRewards extends JsonObject {
  "on_complete": string;
}
export interface RoomRoomsShowGetResponseDataRoomCurrentStateData extends JsonObject {
  "game"?: RoomRoomsShowGetResponseDataRoomCurrentStateDataGame | null;
  "question"?: RoomRoomsShowGetResponseDataRoomCurrentStateDataQuestion | null;
  "task"?: RoomRoomsShowGetResponseDataRoomCurrentStateDataTask | null;
  "interactive"?: RoomRoomsShowGetResponseDataRoomCurrentStateDataInteractive | null;
  "validation"?: RoomRoomsShowGetResponseDataRoomCurrentStateDataValidation[] | null;
  "rewards"?: RoomRoomsShowGetResponseDataRoomCurrentStateDataRewards | null;
  "content_id"?: string | null;
}
export type RoomRoomsShowGetResponseDataRoomCurrentStateState = "NotOpen" | "Awaiting" | "Question" | "Game" | "Task" | "Ended" | "Closed" | "Replay" | "Live" | "Interactive" | "ChargeLow";
export interface RoomRoomsShowGetResponseDataRoomCurrentState extends JsonObject {
  "id": string;
  "room_id": string;
  "duration_in_seconds": number;
  "client_responses": RoomRoomsShowGetResponseDataRoomCurrentStateClientResponses[];
  "data"?: RoomRoomsShowGetResponseDataRoomCurrentStateData | null;
  "state": RoomRoomsShowGetResponseDataRoomCurrentStateState;
  "started_at"?: string | null;
  "ended_at"?: string | null;
  "status": number;
}
export interface RoomRoomsShowGetResponseDataRoom extends JsonObject {
  "id": string;
  "name": string;
  "capacity": number;
  "starts_at"?: string | null;
  "ended_at"?: string | null;
  "clients": RoomRoomsShowGetResponseDataRoomClients[];
  "current_state"?: RoomRoomsShowGetResponseDataRoomCurrentState | null;
  "room_name": string;
  "room_channel": string;
  "server_time": string;
  "status": number;
}
export interface RoomRoomsShowGetResponseData extends JsonObject {
  "room": RoomRoomsShowGetResponseDataRoom;
}
export interface RoomRoomsShowGetResponse extends ApiEnvelope<RoomRoomsShowGetResponseData> {
}

/** Backend request type: RoomUpdate. */
export type RoomRoomsUpdatePatchInputStatesState = "NotOpen" | "Awaiting" | "Question" | "Game" | "Task" | "Ended" | "Closed" | "Replay" | "Live" | "Interactive" | "ChargeLow";
export interface RoomRoomsUpdatePatchInputStatesDataGameHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePatchInputStatesDataGame extends JsonObject {
  "id": string;
  "game_id": string;
  "duration": number;
  "hint_text"?: string | null;
  "hint_image"?: string | null;
  "hint_video"?: RoomRoomsUpdatePatchInputStatesDataGameHintVideo | null;
}
export interface RoomRoomsUpdatePatchInputStatesDataQuestionVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePatchInputStatesDataQuestionHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePatchInputStatesDataQuestionOptions extends JsonObject {
  "id": number;
  "answer": string;
}
export interface RoomRoomsUpdatePatchInputStatesDataQuestion extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsUpdatePatchInputStatesDataQuestionVideo | null;
  "hint_video"?: RoomRoomsUpdatePatchInputStatesDataQuestionHintVideo | null;
  "options"?: RoomRoomsUpdatePatchInputStatesDataQuestionOptions[] | null;
}
export interface RoomRoomsUpdatePatchInputStatesDataTaskVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePatchInputStatesDataTaskHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePatchInputStatesDataTask extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsUpdatePatchInputStatesDataTaskVideo | null;
  "hint_video"?: RoomRoomsUpdatePatchInputStatesDataTaskHintVideo | null;
}
export interface RoomRoomsUpdatePatchInputStatesDataInteractiveVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePatchInputStatesDataInteractive extends JsonObject {
  "id": string;
  "duration": number;
  "video"?: RoomRoomsUpdatePatchInputStatesDataInteractiveVideo | null;
}
export type RoomRoomsUpdatePatchInputStatesDataValidationType = "Equality" | "AssistantPrompt";
export interface RoomRoomsUpdatePatchInputStatesDataValidation extends JsonObject {
  "type": RoomRoomsUpdatePatchInputStatesDataValidationType;
  "value": string;
}
export interface RoomRoomsUpdatePatchInputStatesDataRewards extends JsonObject {
  "on_complete": string;
}
export interface RoomRoomsUpdatePatchInputStatesData extends JsonObject {
  "game"?: RoomRoomsUpdatePatchInputStatesDataGame | null;
  "question"?: RoomRoomsUpdatePatchInputStatesDataQuestion | null;
  "task"?: RoomRoomsUpdatePatchInputStatesDataTask | null;
  "interactive"?: RoomRoomsUpdatePatchInputStatesDataInteractive | null;
  "validation"?: RoomRoomsUpdatePatchInputStatesDataValidation[] | null;
  "rewards"?: RoomRoomsUpdatePatchInputStatesDataRewards | null;
  "content_id"?: string | null;
}
export interface RoomRoomsUpdatePatchInputStates extends JsonObject {
  "state": RoomRoomsUpdatePatchInputStatesState;
  "duration": number;
  "data"?: RoomRoomsUpdatePatchInputStatesData | null;
}
export interface RoomRoomsUpdatePatchInput extends JsonObject {
  "name"?: string | null;
  "capacity"?: number | null;
  "session_id"?: string | null;
  "users"?: string[] | null;
  "states"?: RoomRoomsUpdatePatchInputStates[] | null;
  "status"?: number | null;
  "starts_at"?: string | null;
}
/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsUpdatePatchResponseDataRoomClients extends JsonObject {
  "id": string;
  "profile_id": string;
  "roles": string[];
  "name"?: string | null;
  "token"?: string | null;
  "status": number;
}
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateClientResponses extends JsonObject {
  "id": string;
  "client_id": string;
  "room_state_id": string;
  "validated"?: boolean | null;
  "created_at": string;
  "validated_at"?: string | null;
}
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataGameHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataGame extends JsonObject {
  "id": string;
  "game_id": string;
  "duration": number;
  "hint_text"?: string | null;
  "hint_image"?: string | null;
  "hint_video"?: RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataGameHintVideo | null;
}
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataQuestionVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataQuestionHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataQuestionOptions extends JsonObject {
  "id": number;
  "answer": string;
}
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataQuestion extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataQuestionVideo | null;
  "hint_video"?: RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataQuestionHintVideo | null;
  "options"?: RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataQuestionOptions[] | null;
}
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataTaskVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataTaskHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataTask extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataTaskVideo | null;
  "hint_video"?: RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataTaskHintVideo | null;
}
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataInteractiveVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataInteractive extends JsonObject {
  "id": string;
  "duration": number;
  "video"?: RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataInteractiveVideo | null;
}
export type RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataValidationType = "Equality" | "AssistantPrompt";
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataValidation extends JsonObject {
  "type": RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataValidationType;
  "value": string;
}
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataRewards extends JsonObject {
  "on_complete": string;
}
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentStateData extends JsonObject {
  "game"?: RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataGame | null;
  "question"?: RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataQuestion | null;
  "task"?: RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataTask | null;
  "interactive"?: RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataInteractive | null;
  "validation"?: RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataValidation[] | null;
  "rewards"?: RoomRoomsUpdatePatchResponseDataRoomCurrentStateDataRewards | null;
  "content_id"?: string | null;
}
export type RoomRoomsUpdatePatchResponseDataRoomCurrentStateState = "NotOpen" | "Awaiting" | "Question" | "Game" | "Task" | "Ended" | "Closed" | "Replay" | "Live" | "Interactive" | "ChargeLow";
export interface RoomRoomsUpdatePatchResponseDataRoomCurrentState extends JsonObject {
  "id": string;
  "room_id": string;
  "duration_in_seconds": number;
  "client_responses": RoomRoomsUpdatePatchResponseDataRoomCurrentStateClientResponses[];
  "data"?: RoomRoomsUpdatePatchResponseDataRoomCurrentStateData | null;
  "state": RoomRoomsUpdatePatchResponseDataRoomCurrentStateState;
  "started_at"?: string | null;
  "ended_at"?: string | null;
  "status": number;
}
export interface RoomRoomsUpdatePatchResponseDataRoom extends JsonObject {
  "id": string;
  "name": string;
  "capacity": number;
  "starts_at"?: string | null;
  "ended_at"?: string | null;
  "clients": RoomRoomsUpdatePatchResponseDataRoomClients[];
  "current_state"?: RoomRoomsUpdatePatchResponseDataRoomCurrentState | null;
  "room_name": string;
  "room_channel": string;
  "server_time": string;
  "status": number;
}
export interface RoomRoomsUpdatePatchResponseData extends JsonObject {
  "room": RoomRoomsUpdatePatchResponseDataRoom;
}
export interface RoomRoomsUpdatePatchResponse extends ApiEnvelope<RoomRoomsUpdatePatchResponseData> {
}

/** Backend request type: RoomUpdate. */
export type RoomRoomsUpdatePutInputStatesState = "NotOpen" | "Awaiting" | "Question" | "Game" | "Task" | "Ended" | "Closed" | "Replay" | "Live" | "Interactive" | "ChargeLow";
export interface RoomRoomsUpdatePutInputStatesDataGameHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePutInputStatesDataGame extends JsonObject {
  "id": string;
  "game_id": string;
  "duration": number;
  "hint_text"?: string | null;
  "hint_image"?: string | null;
  "hint_video"?: RoomRoomsUpdatePutInputStatesDataGameHintVideo | null;
}
export interface RoomRoomsUpdatePutInputStatesDataQuestionVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePutInputStatesDataQuestionHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePutInputStatesDataQuestionOptions extends JsonObject {
  "id": number;
  "answer": string;
}
export interface RoomRoomsUpdatePutInputStatesDataQuestion extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsUpdatePutInputStatesDataQuestionVideo | null;
  "hint_video"?: RoomRoomsUpdatePutInputStatesDataQuestionHintVideo | null;
  "options"?: RoomRoomsUpdatePutInputStatesDataQuestionOptions[] | null;
}
export interface RoomRoomsUpdatePutInputStatesDataTaskVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePutInputStatesDataTaskHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePutInputStatesDataTask extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsUpdatePutInputStatesDataTaskVideo | null;
  "hint_video"?: RoomRoomsUpdatePutInputStatesDataTaskHintVideo | null;
}
export interface RoomRoomsUpdatePutInputStatesDataInteractiveVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePutInputStatesDataInteractive extends JsonObject {
  "id": string;
  "duration": number;
  "video"?: RoomRoomsUpdatePutInputStatesDataInteractiveVideo | null;
}
export type RoomRoomsUpdatePutInputStatesDataValidationType = "Equality" | "AssistantPrompt";
export interface RoomRoomsUpdatePutInputStatesDataValidation extends JsonObject {
  "type": RoomRoomsUpdatePutInputStatesDataValidationType;
  "value": string;
}
export interface RoomRoomsUpdatePutInputStatesDataRewards extends JsonObject {
  "on_complete": string;
}
export interface RoomRoomsUpdatePutInputStatesData extends JsonObject {
  "game"?: RoomRoomsUpdatePutInputStatesDataGame | null;
  "question"?: RoomRoomsUpdatePutInputStatesDataQuestion | null;
  "task"?: RoomRoomsUpdatePutInputStatesDataTask | null;
  "interactive"?: RoomRoomsUpdatePutInputStatesDataInteractive | null;
  "validation"?: RoomRoomsUpdatePutInputStatesDataValidation[] | null;
  "rewards"?: RoomRoomsUpdatePutInputStatesDataRewards | null;
  "content_id"?: string | null;
}
export interface RoomRoomsUpdatePutInputStates extends JsonObject {
  "state": RoomRoomsUpdatePutInputStatesState;
  "duration": number;
  "data"?: RoomRoomsUpdatePutInputStatesData | null;
}
export interface RoomRoomsUpdatePutInput extends JsonObject {
  "name"?: string | null;
  "capacity"?: number | null;
  "session_id"?: string | null;
  "users"?: string[] | null;
  "states"?: RoomRoomsUpdatePutInputStates[] | null;
  "status"?: number | null;
  "starts_at"?: string | null;
}
/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsUpdatePutResponseDataRoomClients extends JsonObject {
  "id": string;
  "profile_id": string;
  "roles": string[];
  "name"?: string | null;
  "token"?: string | null;
  "status": number;
}
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateClientResponses extends JsonObject {
  "id": string;
  "client_id": string;
  "room_state_id": string;
  "validated"?: boolean | null;
  "created_at": string;
  "validated_at"?: string | null;
}
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateDataGameHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateDataGame extends JsonObject {
  "id": string;
  "game_id": string;
  "duration": number;
  "hint_text"?: string | null;
  "hint_image"?: string | null;
  "hint_video"?: RoomRoomsUpdatePutResponseDataRoomCurrentStateDataGameHintVideo | null;
}
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateDataQuestionVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateDataQuestionHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateDataQuestionOptions extends JsonObject {
  "id": number;
  "answer": string;
}
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateDataQuestion extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsUpdatePutResponseDataRoomCurrentStateDataQuestionVideo | null;
  "hint_video"?: RoomRoomsUpdatePutResponseDataRoomCurrentStateDataQuestionHintVideo | null;
  "options"?: RoomRoomsUpdatePutResponseDataRoomCurrentStateDataQuestionOptions[] | null;
}
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateDataTaskVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateDataTaskHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateDataTask extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsUpdatePutResponseDataRoomCurrentStateDataTaskVideo | null;
  "hint_video"?: RoomRoomsUpdatePutResponseDataRoomCurrentStateDataTaskHintVideo | null;
}
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateDataInteractiveVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateDataInteractive extends JsonObject {
  "id": string;
  "duration": number;
  "video"?: RoomRoomsUpdatePutResponseDataRoomCurrentStateDataInteractiveVideo | null;
}
export type RoomRoomsUpdatePutResponseDataRoomCurrentStateDataValidationType = "Equality" | "AssistantPrompt";
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateDataValidation extends JsonObject {
  "type": RoomRoomsUpdatePutResponseDataRoomCurrentStateDataValidationType;
  "value": string;
}
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateDataRewards extends JsonObject {
  "on_complete": string;
}
export interface RoomRoomsUpdatePutResponseDataRoomCurrentStateData extends JsonObject {
  "game"?: RoomRoomsUpdatePutResponseDataRoomCurrentStateDataGame | null;
  "question"?: RoomRoomsUpdatePutResponseDataRoomCurrentStateDataQuestion | null;
  "task"?: RoomRoomsUpdatePutResponseDataRoomCurrentStateDataTask | null;
  "interactive"?: RoomRoomsUpdatePutResponseDataRoomCurrentStateDataInteractive | null;
  "validation"?: RoomRoomsUpdatePutResponseDataRoomCurrentStateDataValidation[] | null;
  "rewards"?: RoomRoomsUpdatePutResponseDataRoomCurrentStateDataRewards | null;
  "content_id"?: string | null;
}
export type RoomRoomsUpdatePutResponseDataRoomCurrentStateState = "NotOpen" | "Awaiting" | "Question" | "Game" | "Task" | "Ended" | "Closed" | "Replay" | "Live" | "Interactive" | "ChargeLow";
export interface RoomRoomsUpdatePutResponseDataRoomCurrentState extends JsonObject {
  "id": string;
  "room_id": string;
  "duration_in_seconds": number;
  "client_responses": RoomRoomsUpdatePutResponseDataRoomCurrentStateClientResponses[];
  "data"?: RoomRoomsUpdatePutResponseDataRoomCurrentStateData | null;
  "state": RoomRoomsUpdatePutResponseDataRoomCurrentStateState;
  "started_at"?: string | null;
  "ended_at"?: string | null;
  "status": number;
}
export interface RoomRoomsUpdatePutResponseDataRoom extends JsonObject {
  "id": string;
  "name": string;
  "capacity": number;
  "starts_at"?: string | null;
  "ended_at"?: string | null;
  "clients": RoomRoomsUpdatePutResponseDataRoomClients[];
  "current_state"?: RoomRoomsUpdatePutResponseDataRoomCurrentState | null;
  "room_name": string;
  "room_channel": string;
  "server_time": string;
  "status": number;
}
export interface RoomRoomsUpdatePutResponseData extends JsonObject {
  "room": RoomRoomsUpdatePutResponseDataRoom;
}
export interface RoomRoomsUpdatePutResponse extends ApiEnvelope<RoomRoomsUpdatePutResponseData> {
}

/** Backend response type: handler-defined response. */
export interface RoomRoomsEndGetResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: handler-defined response. */
export interface RoomRoomsInteractiveStartPostResponse extends ApiEnvelope<JsonValue> {
}

/** Backend response type: LiveKitTokenResponse. */
export interface RoomRoomsLivekitTokenGetResponseData extends JsonObject {
  "token": string;
  "url": string;
}
export interface RoomRoomsLivekitTokenGetResponse extends ApiEnvelope<RoomRoomsLivekitTokenGetResponseData> {
}

/** Backend response type: RoomSingleFullResponse. */
export interface RoomRoomsPlaybackShowGetResponseDataRoomClients extends JsonObject {
  "id": string;
  "profile_id": string;
  "roles": string[];
  "name"?: string | null;
  "token"?: string | null;
  "status": number;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesClientResponses extends JsonObject {
  "id": string;
  "client_id": string;
  "room_state_id": string;
  "validated"?: boolean | null;
  "created_at": string;
  "validated_at"?: string | null;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesDataGameHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesDataGame extends JsonObject {
  "id": string;
  "game_id": string;
  "duration": number;
  "hint_text"?: string | null;
  "hint_image"?: string | null;
  "hint_video"?: RoomRoomsPlaybackShowGetResponseDataRoomStatesDataGameHintVideo | null;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesDataQuestionVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesDataQuestionHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesDataQuestionOptions extends JsonObject {
  "id": number;
  "answer": string;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesDataQuestion extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsPlaybackShowGetResponseDataRoomStatesDataQuestionVideo | null;
  "hint_video"?: RoomRoomsPlaybackShowGetResponseDataRoomStatesDataQuestionHintVideo | null;
  "options"?: RoomRoomsPlaybackShowGetResponseDataRoomStatesDataQuestionOptions[] | null;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesDataTaskVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesDataTaskHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesDataTask extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsPlaybackShowGetResponseDataRoomStatesDataTaskVideo | null;
  "hint_video"?: RoomRoomsPlaybackShowGetResponseDataRoomStatesDataTaskHintVideo | null;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesDataInteractiveVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesDataInteractive extends JsonObject {
  "id": string;
  "duration": number;
  "video"?: RoomRoomsPlaybackShowGetResponseDataRoomStatesDataInteractiveVideo | null;
}
export type RoomRoomsPlaybackShowGetResponseDataRoomStatesDataValidationType = "Equality" | "AssistantPrompt";
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesDataValidation extends JsonObject {
  "type": RoomRoomsPlaybackShowGetResponseDataRoomStatesDataValidationType;
  "value": string;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesDataRewards extends JsonObject {
  "on_complete": string;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoomStatesData extends JsonObject {
  "game"?: RoomRoomsPlaybackShowGetResponseDataRoomStatesDataGame | null;
  "question"?: RoomRoomsPlaybackShowGetResponseDataRoomStatesDataQuestion | null;
  "task"?: RoomRoomsPlaybackShowGetResponseDataRoomStatesDataTask | null;
  "interactive"?: RoomRoomsPlaybackShowGetResponseDataRoomStatesDataInteractive | null;
  "validation"?: RoomRoomsPlaybackShowGetResponseDataRoomStatesDataValidation[] | null;
  "rewards"?: RoomRoomsPlaybackShowGetResponseDataRoomStatesDataRewards | null;
  "content_id"?: string | null;
}
export type RoomRoomsPlaybackShowGetResponseDataRoomStatesState = "NotOpen" | "Awaiting" | "Question" | "Game" | "Task" | "Ended" | "Closed" | "Replay" | "Live" | "Interactive" | "ChargeLow";
export interface RoomRoomsPlaybackShowGetResponseDataRoomStates extends JsonObject {
  "id": string;
  "room_id": string;
  "duration_in_seconds": number;
  "client_responses": RoomRoomsPlaybackShowGetResponseDataRoomStatesClientResponses[];
  "data"?: RoomRoomsPlaybackShowGetResponseDataRoomStatesData | null;
  "state": RoomRoomsPlaybackShowGetResponseDataRoomStatesState;
  "started_at"?: string | null;
  "ended_at"?: string | null;
  "status": number;
}
export interface RoomRoomsPlaybackShowGetResponseDataRoom extends JsonObject {
  "id": string;
  "name": string;
  "capacity": number;
  "starts_at"?: string | null;
  "ended_at"?: string | null;
  "clients": RoomRoomsPlaybackShowGetResponseDataRoomClients[];
  "states": RoomRoomsPlaybackShowGetResponseDataRoomStates[];
  "room_name": string;
  "room_channel": string;
  "server_time": string;
  "status": number;
}
export interface RoomRoomsPlaybackShowGetResponseData extends JsonObject {
  "room": RoomRoomsPlaybackShowGetResponseDataRoom;
}
export interface RoomRoomsPlaybackShowGetResponse extends ApiEnvelope<RoomRoomsPlaybackShowGetResponseData> {
}

/** Backend response type: RoomRecordingResponse. */
export interface RoomRoomsRecordingsGetResponseDataRecordings extends JsonObject {
  "id": string;
  "name": string;
  "url": string;
  "duration": number;
  "started_at"?: string | null;
  "stopped_at"?: string | null;
}
export interface RoomRoomsRecordingsGetResponseData extends JsonObject {
  "recordings": RoomRoomsRecordingsGetResponseDataRecordings[];
}
export interface RoomRoomsRecordingsGetResponse extends ApiEnvelope<RoomRoomsRecordingsGetResponseData> {
}

/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsStartGetResponseDataRoomClients extends JsonObject {
  "id": string;
  "profile_id": string;
  "roles": string[];
  "name"?: string | null;
  "token"?: string | null;
  "status": number;
}
export interface RoomRoomsStartGetResponseDataRoomCurrentStateClientResponses extends JsonObject {
  "id": string;
  "client_id": string;
  "room_state_id": string;
  "validated"?: boolean | null;
  "created_at": string;
  "validated_at"?: string | null;
}
export interface RoomRoomsStartGetResponseDataRoomCurrentStateDataGameHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsStartGetResponseDataRoomCurrentStateDataGame extends JsonObject {
  "id": string;
  "game_id": string;
  "duration": number;
  "hint_text"?: string | null;
  "hint_image"?: string | null;
  "hint_video"?: RoomRoomsStartGetResponseDataRoomCurrentStateDataGameHintVideo | null;
}
export interface RoomRoomsStartGetResponseDataRoomCurrentStateDataQuestionVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsStartGetResponseDataRoomCurrentStateDataQuestionHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsStartGetResponseDataRoomCurrentStateDataQuestionOptions extends JsonObject {
  "id": number;
  "answer": string;
}
export interface RoomRoomsStartGetResponseDataRoomCurrentStateDataQuestion extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsStartGetResponseDataRoomCurrentStateDataQuestionVideo | null;
  "hint_video"?: RoomRoomsStartGetResponseDataRoomCurrentStateDataQuestionHintVideo | null;
  "options"?: RoomRoomsStartGetResponseDataRoomCurrentStateDataQuestionOptions[] | null;
}
export interface RoomRoomsStartGetResponseDataRoomCurrentStateDataTaskVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsStartGetResponseDataRoomCurrentStateDataTaskHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsStartGetResponseDataRoomCurrentStateDataTask extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsStartGetResponseDataRoomCurrentStateDataTaskVideo | null;
  "hint_video"?: RoomRoomsStartGetResponseDataRoomCurrentStateDataTaskHintVideo | null;
}
export interface RoomRoomsStartGetResponseDataRoomCurrentStateDataInteractiveVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsStartGetResponseDataRoomCurrentStateDataInteractive extends JsonObject {
  "id": string;
  "duration": number;
  "video"?: RoomRoomsStartGetResponseDataRoomCurrentStateDataInteractiveVideo | null;
}
export type RoomRoomsStartGetResponseDataRoomCurrentStateDataValidationType = "Equality" | "AssistantPrompt";
export interface RoomRoomsStartGetResponseDataRoomCurrentStateDataValidation extends JsonObject {
  "type": RoomRoomsStartGetResponseDataRoomCurrentStateDataValidationType;
  "value": string;
}
export interface RoomRoomsStartGetResponseDataRoomCurrentStateDataRewards extends JsonObject {
  "on_complete": string;
}
export interface RoomRoomsStartGetResponseDataRoomCurrentStateData extends JsonObject {
  "game"?: RoomRoomsStartGetResponseDataRoomCurrentStateDataGame | null;
  "question"?: RoomRoomsStartGetResponseDataRoomCurrentStateDataQuestion | null;
  "task"?: RoomRoomsStartGetResponseDataRoomCurrentStateDataTask | null;
  "interactive"?: RoomRoomsStartGetResponseDataRoomCurrentStateDataInteractive | null;
  "validation"?: RoomRoomsStartGetResponseDataRoomCurrentStateDataValidation[] | null;
  "rewards"?: RoomRoomsStartGetResponseDataRoomCurrentStateDataRewards | null;
  "content_id"?: string | null;
}
export type RoomRoomsStartGetResponseDataRoomCurrentStateState = "NotOpen" | "Awaiting" | "Question" | "Game" | "Task" | "Ended" | "Closed" | "Replay" | "Live" | "Interactive" | "ChargeLow";
export interface RoomRoomsStartGetResponseDataRoomCurrentState extends JsonObject {
  "id": string;
  "room_id": string;
  "duration_in_seconds": number;
  "client_responses": RoomRoomsStartGetResponseDataRoomCurrentStateClientResponses[];
  "data"?: RoomRoomsStartGetResponseDataRoomCurrentStateData | null;
  "state": RoomRoomsStartGetResponseDataRoomCurrentStateState;
  "started_at"?: string | null;
  "ended_at"?: string | null;
  "status": number;
}
export interface RoomRoomsStartGetResponseDataRoom extends JsonObject {
  "id": string;
  "name": string;
  "capacity": number;
  "starts_at"?: string | null;
  "ended_at"?: string | null;
  "clients": RoomRoomsStartGetResponseDataRoomClients[];
  "current_state"?: RoomRoomsStartGetResponseDataRoomCurrentState | null;
  "room_name": string;
  "room_channel": string;
  "server_time": string;
  "status": number;
}
export interface RoomRoomsStartGetResponseData extends JsonObject {
  "room": RoomRoomsStartGetResponseDataRoom;
}
export interface RoomRoomsStartGetResponse extends ApiEnvelope<RoomRoomsStartGetResponseData> {
}

/** Backend response type: RoomSingleResponse. */
export interface RoomRoomsStopGetResponseDataRoomClients extends JsonObject {
  "id": string;
  "profile_id": string;
  "roles": string[];
  "name"?: string | null;
  "token"?: string | null;
  "status": number;
}
export interface RoomRoomsStopGetResponseDataRoomCurrentStateClientResponses extends JsonObject {
  "id": string;
  "client_id": string;
  "room_state_id": string;
  "validated"?: boolean | null;
  "created_at": string;
  "validated_at"?: string | null;
}
export interface RoomRoomsStopGetResponseDataRoomCurrentStateDataGameHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsStopGetResponseDataRoomCurrentStateDataGame extends JsonObject {
  "id": string;
  "game_id": string;
  "duration": number;
  "hint_text"?: string | null;
  "hint_image"?: string | null;
  "hint_video"?: RoomRoomsStopGetResponseDataRoomCurrentStateDataGameHintVideo | null;
}
export interface RoomRoomsStopGetResponseDataRoomCurrentStateDataQuestionVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsStopGetResponseDataRoomCurrentStateDataQuestionHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsStopGetResponseDataRoomCurrentStateDataQuestionOptions extends JsonObject {
  "id": number;
  "answer": string;
}
export interface RoomRoomsStopGetResponseDataRoomCurrentStateDataQuestion extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsStopGetResponseDataRoomCurrentStateDataQuestionVideo | null;
  "hint_video"?: RoomRoomsStopGetResponseDataRoomCurrentStateDataQuestionHintVideo | null;
  "options"?: RoomRoomsStopGetResponseDataRoomCurrentStateDataQuestionOptions[] | null;
}
export interface RoomRoomsStopGetResponseDataRoomCurrentStateDataTaskVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsStopGetResponseDataRoomCurrentStateDataTaskHintVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsStopGetResponseDataRoomCurrentStateDataTask extends JsonObject {
  "id": string;
  "duration": number;
  "text"?: string | null;
  "hint_text"?: string | null;
  "image"?: string | null;
  "hint_image"?: string | null;
  "video"?: RoomRoomsStopGetResponseDataRoomCurrentStateDataTaskVideo | null;
  "hint_video"?: RoomRoomsStopGetResponseDataRoomCurrentStateDataTaskHintVideo | null;
}
export interface RoomRoomsStopGetResponseDataRoomCurrentStateDataInteractiveVideo extends JsonObject {
  "id": number;
  "type": string;
}
export interface RoomRoomsStopGetResponseDataRoomCurrentStateDataInteractive extends JsonObject {
  "id": string;
  "duration": number;
  "video"?: RoomRoomsStopGetResponseDataRoomCurrentStateDataInteractiveVideo | null;
}
export type RoomRoomsStopGetResponseDataRoomCurrentStateDataValidationType = "Equality" | "AssistantPrompt";
export interface RoomRoomsStopGetResponseDataRoomCurrentStateDataValidation extends JsonObject {
  "type": RoomRoomsStopGetResponseDataRoomCurrentStateDataValidationType;
  "value": string;
}
export interface RoomRoomsStopGetResponseDataRoomCurrentStateDataRewards extends JsonObject {
  "on_complete": string;
}
export interface RoomRoomsStopGetResponseDataRoomCurrentStateData extends JsonObject {
  "game"?: RoomRoomsStopGetResponseDataRoomCurrentStateDataGame | null;
  "question"?: RoomRoomsStopGetResponseDataRoomCurrentStateDataQuestion | null;
  "task"?: RoomRoomsStopGetResponseDataRoomCurrentStateDataTask | null;
  "interactive"?: RoomRoomsStopGetResponseDataRoomCurrentStateDataInteractive | null;
  "validation"?: RoomRoomsStopGetResponseDataRoomCurrentStateDataValidation[] | null;
  "rewards"?: RoomRoomsStopGetResponseDataRoomCurrentStateDataRewards | null;
  "content_id"?: string | null;
}
export type RoomRoomsStopGetResponseDataRoomCurrentStateState = "NotOpen" | "Awaiting" | "Question" | "Game" | "Task" | "Ended" | "Closed" | "Replay" | "Live" | "Interactive" | "ChargeLow";
export interface RoomRoomsStopGetResponseDataRoomCurrentState extends JsonObject {
  "id": string;
  "room_id": string;
  "duration_in_seconds": number;
  "client_responses": RoomRoomsStopGetResponseDataRoomCurrentStateClientResponses[];
  "data"?: RoomRoomsStopGetResponseDataRoomCurrentStateData | null;
  "state": RoomRoomsStopGetResponseDataRoomCurrentStateState;
  "started_at"?: string | null;
  "ended_at"?: string | null;
  "status": number;
}
export interface RoomRoomsStopGetResponseDataRoom extends JsonObject {
  "id": string;
  "name": string;
  "capacity": number;
  "starts_at"?: string | null;
  "ended_at"?: string | null;
  "clients": RoomRoomsStopGetResponseDataRoomClients[];
  "current_state"?: RoomRoomsStopGetResponseDataRoomCurrentState | null;
  "room_name": string;
  "room_channel": string;
  "server_time": string;
  "status": number;
}
export interface RoomRoomsStopGetResponseData extends JsonObject {
  "room": RoomRoomsStopGetResponseDataRoom;
}
export interface RoomRoomsStopGetResponse extends ApiEnvelope<RoomRoomsStopGetResponseData> {
}

/** Backend response type: RoomAnalyticsResponse. */
export interface RoomRoomsAnalyticsGetResponseData extends JsonObject {
  "ongoing_sessions": number;
  "sessions_today": number;
  "ongoing_users": number;
  "connected_users_today": number;
}
export interface RoomRoomsAnalyticsGetResponse extends ApiEnvelope<RoomRoomsAnalyticsGetResponseData> {
}

/** Backend response type: handler-defined response. */
export interface RoomLivekitWebhookPostResponse extends ApiEnvelope<JsonValue> {
}

