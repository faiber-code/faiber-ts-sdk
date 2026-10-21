import type { JsonObject, JsonValue, QueryParams } from "@faiber/sdk-core";
export type GisScope = "user" | "organization" | "global";
export type PublicationStatus = "draft" | "published" | "archived";
export type Visibility = "private" | "public";
export type Bounds = [west: number, south: number, east: number, north: number];
export type Position = [longitude: number, latitude: number];
export interface Data<T> { data: T }
export interface Success<T> extends Data<T> { status: "success" }
export interface DatasetInput { name: string; attribution: string; license: string; source: string; scope: GisScope }
export interface Dataset extends DatasetInput { id: string; organization_id: string; owner_id: string | null; status: PublicationStatus; visibility: Visibility; revision: number }
/** Geometry accepted by the native validator; coordinates may include elevation.
 * Longitude is within ±180 and latitude within ±85.05112878; PostGIS validates topology.
 */
export type GeometryPosition = [longitude: number, latitude: number] | [longitude: number, latitude: number, elevation: number];
export interface PointGeometry { type: "Point"; coordinates: GeometryPosition }
export interface MultiPointGeometry { type: "MultiPoint"; coordinates: GeometryPosition[] }
export interface LineStringGeometry { type: "LineString"; coordinates: GeometryPosition[] }
export interface MultiLineStringGeometry { type: "MultiLineString"; coordinates: GeometryPosition[][] }
export interface PolygonGeometry { type: "Polygon"; coordinates: GeometryPosition[][] }
export interface MultiPolygonGeometry { type: "MultiPolygon"; coordinates: GeometryPosition[][][] }
export type Geometry = PointGeometry | MultiPointGeometry | LineStringGeometry | MultiLineStringGeometry | PolygonGeometry | MultiPolygonGeometry;
export interface FeatureInput { id: string; geometry: Geometry; properties?: JsonObject }
export interface GeoFeature extends FeatureInput { type: "Feature"; properties: JsonObject; revision: number }
export interface FeatureCollection { type: "FeatureCollection"; features: GeoFeature[] }
export interface FeatureQuery extends QueryParams { bbox?: string; limit?: number }
export interface FeatureBatchInput { expected_revision: number; reason: string; features: FeatureInput[] }
export interface RevisionInput { expected_revision: number; reason: string }
export interface DatasetPublicationInput extends RevisionInput { status: PublicationStatus; visibility: Visibility }
export interface History { id: string; organization_id: string; dataset_id: string; actor_id: string; operation: string; reason: string; before_state: JsonValue; after_state: JsonValue; created_at: string }
export interface MapInput { slug: string; name: string; dataset_id: string; center: Position; zoom: number; bounds: Bounds }
export interface MapRecord extends MapInput { id: string; organization_id: string; status: PublicationStatus; style_family: string; revision: number }
export interface MapEditInput extends MapInput, RevisionInput {}
export interface MapPublicationInput extends RevisionInput { status: PublicationStatus }
export interface StyleQuery extends QueryParams { theme?: "light" | "dark" }
/** Native vector source with server-generated revision-bearing tile URLs. */
export interface MapStyleSource { type: "vector"; tiles: string[]; minzoom: number; maxzoom: number; attribution: string }
/** MapLibre expressions in filters and paint remain JSON because operators have variable arity. */
export interface MapStyleLayer { id: string; type: "background" | "fill" | "line" | "fill-extrusion"; source?: string; "source-layer"?: string; filter?: JsonValue[]; paint: JsonObject }
export interface MapStyleLight { anchor: "viewport" | "map"; color: string; intensity: number; position: [number, number, number] }
export interface MapStyle { version: 8; sources: { city: MapStyleSource }; layers: MapStyleLayer[]; light: MapStyleLight; center: Position; zoom: number; name?: string }
export interface TileJsonVectorLayer { id: string; fields: JsonObject }
export interface TileJson { tilejson: "3.0.0"; name: string; attribution: string; minzoom: number; maxzoom: number; tiles: string[]; vector_layers: TileJsonVectorLayer[] }
export interface ImportInput { name: string; bounds: Bounds; scope: GisScope }
export type ImportState = "queued" | "running" | "complete" | "failed" | "cancelled";
export interface ImportRetryAccepted { id: string; state: "queued" }
export interface FeatureWriteResult { revision: number; feature_ids: string[] }
export interface RevisionResult { revision: number }
export interface SavedPlaceResult { saved: true; changed: boolean }
export interface UnsavedPlaceResult { saved: false }
export interface Acknowledged { ok: true }
export interface ImportAccepted { id: string; dataset_id: string; state: "queued" }
export interface ImportJob { id: string; organization_id: string; owner_id: string; dataset_id: string; bounds: Bounds; state: ImportState; error: string | null; imported_count: number; attempts: number; created_at: string; updated_at: string; protocol_version: number; input_revision: number; lease_expires_at: string | null; authority_revision: string | null; authority_issuer: string | null }
export interface PersonalPlaceInput { name: string; note: string; category: string; longitude: number; latitude: number; expected_revision?: number | null }
export interface PersonalPlace extends Omit<PersonalPlaceInput, "expected_revision"> { id: string; revision: number }
export interface IdResult { id: string }
export interface Me { user_id: string; organization_id: string; permissions: string[] }
export interface Health { service: "infera-gis"; database: boolean; martin: boolean }
export type PlaceCategory = "cafe" | "food" | "historic" | "nature" | "market" | "culture" | "faith" | "shop" | "venue" | "hotel" | "street" | "neighborhood" | "facility";
export type PlaceStatus = "pending" | "published" | "rejected" | "closed" | "moved" | "merged";
/** Translation and contact JSON objects intentionally retain native extensibility. */
export interface Place { id: string; slug: string; name: JsonObject | null; description: JsonObject | null; category: string; tags: JsonValue; address: JsonObject | null; district: string | null; latitude: number; longitude: number; media: JsonValue; sources: JsonValue; opening_info: JsonValue; contact: JsonObject | null; verification: string; status: PlaceStatus; canonical_id: string | null; created_at: string }
export interface PlaceSearch extends QueryParams { q?: string; category?: string; bbox?: string; lat?: number; lon?: number; radius?: number; limit?: number }
export interface ProposalInput { name: string; description?: string | null; category: PlaceCategory; latitude: number; longitude: number; address?: string | null }
export type ReportReason = "closed" | "wrong_location" | "wrong_phone" | "duplicate" | "category" | "correction" | "abuse";
export interface ReportInput { reason: ReportReason; details?: string | null }
export interface ReportResolutionInput { reason: string; details?: string | null }
export interface PlaceChanges { name?: JsonObject | null; description?: JsonObject | null; address?: JsonObject | null; category?: PlaceCategory; latitude?: number; longitude?: number; opening_info?: JsonObject | null; contact?: JsonObject | null }
export interface ModerationInput { status: Exclude<PlaceStatus, "pending">; reason: string; canonical_id?: string | null; changes?: PlaceChanges | null }
export interface Pending { id: string; status: "pending" }
export interface PlaceReport { id: string; tenant: string; place_id: string; actor: string; reason: string; details: string; status: "pending" | "resolved"; created_at: string; resolution: string | null; resolved_by: string | null; resolved_at: string | null }
export interface ModerationQueue { proposals: Place[]; reports: PlaceReport[] }
export interface PlaceHistory { id: string; tenant: string; place_id: string; actor: string; action: string; reason: string; previous: JsonValue; created_at: string }
export interface PlaceEvent { id: string; tenant: string; event: string; payload: JsonValue; created_at: string; delivered_at: string | null }
export interface PlaceAssertion { subject_type: "place"; subject_ref: string; assertion: PlaceAssertionToken }

export interface PlaceAssertionToken { issuer: "infera-places"; token: string }
