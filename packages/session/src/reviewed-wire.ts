/** Direct immutable Session handler, SQL projection and dependency review at 7a395d7149a2d4c03d3e1d4746b69919a52cbb05. */
import type { ApiEnvelope, JsonValue, JsonObject } from '@faiber/sdk-core';
/** Raw logo bytes; Content-Type is image/png, image/jpeg or image/webp. */
export type SessionBrandingAssetBytes = ArrayBuffer | Uint8Array;
export interface SessionBrandingUpload { asset_key: string; url: string }
export type SessionBrandingUploadResponse = ApiEnvelope<SessionBrandingUpload>;
/** Model-produced analysis is persisted as serde_json::Value without a fixed schema. */
export type SessionModelAnalysis = JsonValue;
/** DRM composition snapshot is a nullable serde_json::Value owned by DRM, not a Session schema. */
export type SessionCompositionSnapshot = JsonValue;
/** Asset-owned interaction receipt is returned unchanged; Session validates reservation_id only. */
export interface SessionInteractionReceipt extends JsonObject { reservation_id: string }
export interface SessionLatestAnalysis { transcript: string; analysis: SessionModelAnalysis; created_at: string }
export interface SessionAssistantListItem {
 room_id: string; name: string; status: number; starts_at: string | null; started_at: string | null; ended_at: string | null;
 drm_mixed_media_id: string | null; drm_manifest_version: number | null; recording_count: number; analysis_count: number;
 latest_analysis: SessionLatestAnalysis | null;
}
export type SessionAssistantListResponse = ApiEnvelope<SessionAssistantListItem[]>;
/** SQL to_jsonb(rooms) minus drm_manifest, matched to entity/src/room.rs and migrations. */
export interface SessionAssistantRoom {
 id: string; name: string; session_id: string | null; lms_classroom_session_id: string | null;
 drm_mixed_media_id: string | null; drm_manifest_version: number | null; capacity: number; status: number;
 starts_at: string | null; scheduled_ends_at: string | null; started_at: string | null; ended_at: string | null;
 available_until: string | null; created_at: string; updated_at: string | null;
}
export interface SessionAssistantDrmContext { mixed_media_id: string | null; manifest_version: number | null; manifest: SessionCompositionSnapshot | null }
export interface SessionAssistantRecording { id: string; status: string; duration: number; started_at: string | null; stopped_at: string | null; completed_at: string | null }
export interface SessionAssistantAnalysis {
 id: string; recording_id: string; track_id: string; profile_id: string | null; started_at: string; ended_at: string | null;
 model_ref: string; transcript: string; analysis: SessionModelAnalysis; created_at: string;
}
export interface SessionAssistantDetail { room: SessionAssistantRoom; drm_context: SessionAssistantDrmContext; recordings: SessionAssistantRecording[]; analyses: SessionAssistantAnalysis[] }
export type SessionAssistantDetailResponse = ApiEnvelope<SessionAssistantDetail>;
export interface SessionToolSchemaProperty { type: 'string' | 'integer'; minimum?: number; maximum?: number; format?: 'uuid' }
export interface SessionToolInputSchema { type: 'object'; required?: string[]; properties: Record<string, SessionToolSchemaProperty> }
export interface SessionAssistantTool { name: 'session_list' | 'session_detail'; description: string; input_schema: SessionToolInputSchema }
export interface SessionToolSchema { tools: SessionAssistantTool[] }
export type SessionToolSchemaResponse = ApiEnvelope<SessionToolSchema>;
/** infera-flow-sdk 291c81a67bc302d667fb807da2af3240598bee52 integration_meta.rs. */
export interface SessionFlowField { name: string; field_type: string; required: boolean; description: string }
export interface SessionFlowEvent { event_name: string; payload_fields: SessionFlowField[] }
export interface SessionFlowIntegration { queue: string; events: SessionFlowEvent[] }
export type SessionFlowIntegrationResponse = ApiEnvelope<SessionFlowIntegration>;
