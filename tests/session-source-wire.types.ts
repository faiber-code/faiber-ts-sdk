import type { SessionApi, Room, CreateRoomInput, UpdateRoomInput, RoomResponse, RoomInteractionData, SessionAssistantListResponse, SessionAssistantDetailResponse, SessionToolSchemaResponse, SessionFlowIntegrationResponse, SessionBrandingUploadResponse, SessionBrandingAssetBytes } from '@faiber/faiber-session';
import type { AxiosResponse } from 'axios';
declare const api: SessionApi;
const create: CreateRoomInput = { name: 'Weekly lesson', capacity: 12, starts_at: '2026-10-21T12:00:00', states: [{ state: 'ChargeLow', duration: 10 }] };
const update: UpdateRoomInput = { capacity: 16, starts_at: null, users: null };
api.rooms.create(create);
api.rooms.update('room', update);
api.rooms.list({ page_number: 1, page_size: 10, custom_only: false });
const deleted: Promise<AxiosResponse<RoomResponse>> = api.rooms.delete('room');
declare const room: Room;
const status: number = room.status;
const timestamp: string | null = room.starts_at;
const clients = room.clients;
const start = api.startInteractive('room');
const list: Promise<AxiosResponse<SessionAssistantListResponse>> = api.userSessions('user', { q: 'weekly', limit: 10 });
const detail: Promise<AxiosResponse<SessionAssistantDetailResponse>> = api.userSession('user', 'room');
const tools: Promise<AxiosResponse<SessionToolSchemaResponse>> = api.chatToolSchema();
const flow: Promise<AxiosResponse<SessionFlowIntegrationResponse>> = api.flowIntegration();
const upload: Promise<AxiosResponse<SessionBrandingUploadResponse, FormData>> = api.uploadBrandingAsset(new FormData());
const bytes: Promise<AxiosResponse<SessionBrandingAssetBytes>> = api.operations.brandingAssetGet('logo.jpg');
const receipt: RoomInteractionData = { reservation_id: 'asset-reservation', charge: 3, provider_extension: null };
// @ts-expect-error native capacity and starts_at are required
api.rooms.create({ name: 'Incomplete' });
// @ts-expect-error status is a native numeric field
api.rooms.update('room', { status: 'active' });
// @ts-expect-error SeaORM database spelling is not the serde JSON enum value
const badState: CreateRoomInput = { ...create, states: [{ state: 'charge_low', duration: 10 }] };
void [deleted, status, timestamp, clients, start, list, detail, tools, flow, upload, bytes, receipt, badState];
