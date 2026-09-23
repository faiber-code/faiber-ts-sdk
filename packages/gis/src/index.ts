import {
  type RequestOptions,
  type JsonObject,
  type JsonValue,
} from "@faiber/sdk-core";
import { PlacesApi } from "@faiber/faiber-places";
export interface GisDataset {
  id: string;
  organization_id: string;
  owner_id: string | null;
  scope: "global" | "organization" | "user";
  visibility: "private" | "public";
  status: "draft" | "published" | "archived";
  name: string;
  attribution: string;
  license: string;
  source: string;
  revision: number;
}
export type DatasetInput = Pick<
  GisDataset,
  "name" | "scope" | "source" | "license" | "attribution"
>;
export interface Geometry extends JsonObject {
  type:
    | "Point"
    | "MultiPoint"
    | "LineString"
    | "MultiLineString"
    | "Polygon"
    | "MultiPolygon";
  coordinates: JsonValue[];
}
export interface GisFeature extends JsonObject {
  id: string;
  geometry: Geometry;
  properties: JsonObject;
  revision?: number;
}
export interface FeatureCollection {
  type: "FeatureCollection";
  features: GisFeature[];
}
export interface GisMap {
  id: string;
  organization_id: string;
  slug: string;
  name: string;
  dataset_id: string;
  center: [number, number];
  zoom: number;
  bounds: [number, number, number, number];
  status: GisDataset["status"];
  revision: number;
}
export interface MapRevision {
  expected_revision: number;
  reason: string;
}
export interface MapPublication extends MapRevision {
  status: GisMap["status"];
}
export interface MapEdit extends MapInput, MapRevision {}
export type MapInput = Pick<
  GisMap,
  "slug" | "name" | "dataset_id" | "center" | "zoom" | "bounds"
>;
export interface ImportJob {
  id: string;
  dataset_id: string;
  state: "queued" | "running" | "complete" | "failed" | "cancelled";
  error: string | null;
  imported_count: number;
  attempts: number;
  created_at: string;
  updated_at: string;
}
export interface PersonalPlace {
  id: string;
  name: string;
  note: string;
  category: string;
  longitude: number;
  latitude: number;
  revision: number;
}
export interface GisIdentity {
  user_id: string;
  organization_id: string;
  permissions: string[];
}
export interface GisHealth {
  service: "infera-gis";
  database: boolean;
  martin: boolean;
}
export interface TileJson {
  tilejson: "3.0.0";
  name: string;
  attribution: string;
  minzoom: number;
  maxzoom: number;
  tiles: string[];
  vector_layers: Array<{ id: string; fields: Record<string, string> }>;
}
export interface GisHistory {
  id: string;
  organization_id: string;
  dataset_id: string;
  actor_id: string;
  operation: string;
  reason: string;
  before_state: JsonValue;
  after_state: JsonValue;
  created_at: string;
}
/** Geometry/style properties are provider-defined JSON; all domain and authorization fields remain typed. */
export interface MapStyle extends JsonObject {
  version: 8;
  name?: string;
  center?: [number, number];
  zoom?: number;
  sources: JsonObject;
  layers: JsonValue[];
}
export interface GeometryQuery {
  bbox?: string;
  limit?: number;
}
export interface FeatureWrite extends MapRevision {
  features: GisFeature[];
}
export interface DatasetPublication extends MapRevision {
  status: GisDataset["status"];
  visibility: GisDataset["visibility"];
}
export interface AreaImport {
  name: string;
  scope: GisDataset["scope"];
  bounds: [number, number, number, number];
}
export type PersonalPlaceInput = Omit<PersonalPlace, "id" | "revision">;
export interface PersonalPlaceUpdate extends PersonalPlaceInput {
  expected_revision: number;
}
export interface GeometryWriteResult {
  revision: number;
  feature_ids: string[];
}
export interface RevisionResult {
  revision: number;
}
export interface IdentityResult {
  id: string;
}
export interface DataResponse<T> {
  data: T;
}
export class GisApi extends PlacesApi {
  /** health: Anonymous published data only. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  health(options?: RequestOptions) {
    return this.client.get<DataResponse<GisHealth>>(
      "/health",
      undefined,
      options,
    );
  }
  /** identity: Requires an IDP session or authenticated service context. Server enforces dataset ownership and tenant access. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  identity(options?: RequestOptions) {
    return this.client.get<DataResponse<GisIdentity>>(
      "/api/v1/me",
      undefined,
      options,
    );
  }
  /** map: Requires an IDP session or authenticated service context. Server enforces dataset ownership and tenant access. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  map(id: string, options?: RequestOptions) {
    return this.client.get<DataResponse<GisMap>>(
      `/api/v1/maps/${encodeURIComponent(id)}`,
      undefined,
      options,
    );
  }
  /** updateMap: Requires an IDP session or authenticated service context. Owner or scoped GIS manager required. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access and 409 for revision conflicts. */
  updateMap(id: string, input: MapEdit, options?: RequestOptions) {
    return this.client.patch<DataResponse<GisMap>>(
      `/api/v1/maps/${encodeURIComponent(id)}`,
      { ...input },
      options,
    );
  }
  /** publicMaps: Anonymous published data only. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  publicMaps(options?: RequestOptions) {
    return this.client.get<DataResponse<GisMap[]>>(
      "/api/v1/public/maps",
      undefined,
      options,
    );
  }
  /** publicMapGeometries: Anonymous published data only. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  publicMapGeometries(slug: string, options?: RequestOptions) {
    return this.client.get<FeatureCollection>(
      `/api/v1/public/maps/${encodeURIComponent(slug)}/geojson`,
      undefined,
      options,
    );
  }
  /** publicGeometries: Anonymous published data only. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  publicGeometries(
    id: string,
    params?: GeometryQuery,
    options?: RequestOptions,
  ) {
    return this.client.get<FeatureCollection>(
      `/api/v1/public/datasets/${encodeURIComponent(id)}/geojson`,
      params ? { ...params } : undefined,
      options,
    );
  }
  /** tileJson: Anonymous published data only. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  tileJson(id: string, options?: RequestOptions) {
    return this.client.get<TileJson>(
      `/api/v1/public/datasets/${encodeURIComponent(id)}/tilejson`,
      undefined,
      options,
    );
  }
  /** privateTile: Requires an IDP session or authenticated service context. Server enforces dataset ownership and tenant access. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  privateTile(
    id: string,
    z: number,
    x: number,
    y: number,
    options?: RequestOptions,
  ) {
    return this.client.get<ArrayBuffer>(
      `/api/v1/datasets/${encodeURIComponent(id)}/tiles/${z}/${x}/${y}`,
      undefined,
      { ...options, responseType: "arraybuffer" },
    );
  }
  /** publicTile: Anonymous published data only. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  publicTile(
    id: string,
    z: number,
    x: number,
    y: number,
    options?: RequestOptions,
  ) {
    return this.client.get<ArrayBuffer>(
      `/api/v1/public/datasets/${encodeURIComponent(id)}/tiles/${z}/${x}/${y}`,
      undefined,
      { ...options, responseType: "arraybuffer" },
    );
  }
  /** datasets: Requires an IDP session or authenticated service context. Server enforces dataset ownership and tenant access. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  datasets(options?: RequestOptions) {
    return this.client.get<{ data: GisDataset[] }>(
      "/api/v1/datasets",
      undefined,
      options,
    );
  }
  /** createDataset: Requires an IDP session or authenticated service context. Owner or scoped GIS manager required. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access and 409 for revision conflicts. */
  createDataset(input: DatasetInput, options?: RequestOptions) {
    return this.client.post<{ data: GisDataset }>(
      "/api/v1/datasets",
      { ...input },
      options,
    );
  }
  /** dataset: Requires an IDP session or authenticated service context. Server enforces dataset ownership and tenant access. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  dataset(id: string, options?: RequestOptions) {
    return this.client.get<{ data: GisDataset }>(
      `/api/v1/datasets/${encodeURIComponent(id)}`,
      undefined,
      options,
    );
  }
  /** datasetVisibility: Requires an IDP session or authenticated service context. Owner or scoped GIS manager required. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access and 409 for revision conflicts. */
  datasetVisibility(
    id: string,
    input: DatasetPublication,
    options?: RequestOptions,
  ) {
    return this.client.patch<{ data: GisDataset }>(
      `/api/v1/datasets/${encodeURIComponent(id)}`,
      { ...input },
      options,
    );
  }
  /** geometries: Requires an IDP session or authenticated service context. Server enforces dataset ownership and tenant access. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  geometries(id: string, params?: GeometryQuery, options?: RequestOptions) {
    return this.client.get<FeatureCollection>(
      `/api/v1/datasets/${encodeURIComponent(id)}/features`,
      params ? { ...params } : undefined,
      options,
    );
  }
  /** writeGeometries: Requires an IDP session or authenticated service context. Owner or scoped GIS manager required. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access and 409 for revision conflicts. */
  writeGeometries(id: string, input: FeatureWrite, options?: RequestOptions) {
    return this.client.put<DataResponse<GeometryWriteResult>>(
      `/api/v1/datasets/${encodeURIComponent(id)}/features`,
      { ...input },
      options,
    );
  }
  /** removeGeometry: Requires an IDP session or authenticated service context. Owner or scoped GIS manager required. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access and 409 for revision conflicts. */
  removeGeometry(
    id: string,
    feature: string,
    input: MapRevision,
    options?: RequestOptions,
  ) {
    return this.client.put<DataResponse<RevisionResult>>(
      `/api/v1/datasets/${encodeURIComponent(id)}/features/${encodeURIComponent(feature)}`,
      { ...input },
      options,
    );
  }
  /** datasetHistory: Requires an IDP session or authenticated service context. Server enforces dataset ownership and tenant access. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  datasetHistory(id: string, options?: RequestOptions) {
    return this.client.get<DataResponse<GisHistory[]>>(
      `/api/v1/datasets/${encodeURIComponent(id)}/history`,
      undefined,
      options,
    );
  }
  /** maps: Requires an IDP session or authenticated service context. Server enforces dataset ownership and tenant access. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  maps(options?: RequestOptions) {
    return this.client.get<{ data: GisMap[] }>(
      "/api/v1/maps",
      undefined,
      options,
    );
  }
  /** createMap: Requires an IDP session or authenticated service context. Owner or scoped GIS manager required. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access and 409 for revision conflicts. */
  createMap(input: MapInput, options?: RequestOptions) {
    return this.client.post<{ data: GisMap }>(
      "/api/v1/maps",
      { ...input },
      options,
    );
  }
  /** mapPublication: Requires an IDP session or authenticated service context. Owner or scoped GIS manager required. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access and 409 for revision conflicts. */
  mapPublication(id: string, input: MapPublication, options?: RequestOptions) {
    return this.client.put<{ data: GisMap }>(
      `/api/v1/maps/${encodeURIComponent(id)}/publish`,
      { ...input },
      options,
    );
  }
  /** mapStyle: Requires an IDP session or authenticated service context. Server enforces dataset ownership and tenant access. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  mapStyle(
    id: string,
    theme: "dark" | "light" = "dark",
    options?: RequestOptions,
  ) {
    return this.client.get<MapStyle>(
      `/api/v1/maps/${encodeURIComponent(id)}/style`,
      { theme },
      options,
    );
  }
  /** publicMap: Anonymous published data only. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  publicMap(slug: string, options?: RequestOptions) {
    return this.client.get<{ data: GisMap }>(
      `/api/v1/public/maps/${encodeURIComponent(slug)}`,
      undefined,
      options,
    );
  }
  /** publicMapStyle: Anonymous published data only. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  publicMapStyle(
    slug: string,
    theme: "dark" | "light" = "dark",
    options?: RequestOptions,
  ) {
    return this.client.get<MapStyle>(
      `/api/v1/public/maps/${encodeURIComponent(slug)}/style`,
      { theme },
      options,
    );
  }
  /** importArea: Requires an IDP session or authenticated service context. Owner or scoped GIS manager required. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access and 409 for revision conflicts. */
  importArea(input: AreaImport, options?: RequestOptions) {
    return this.client.post<{
      data: Pick<ImportJob, "id" | "dataset_id" | "state">;
    }>("/api/v1/imports", { ...input }, options);
  }
  /** imports: Requires an IDP session or authenticated service context. Server enforces dataset ownership and tenant access. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  imports(options?: RequestOptions) {
    return this.client.get<{ data: ImportJob[] }>(
      "/api/v1/imports",
      undefined,
      options,
    );
  }
  /** retryImport: Requires an IDP session or authenticated service context. Owner or scoped GIS manager required. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access and 409 for revision conflicts. */
  retryImport(id: string, options?: RequestOptions) {
    return this.client.post<{ data: Pick<ImportJob, "id" | "state"> }>(
      `/api/v1/imports/${encodeURIComponent(id)}/retry`,
      {},
      options,
    );
  }
  /** personalPlaces: Requires an IDP session or authenticated service context. Server enforces dataset ownership and tenant access. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  personalPlaces(options?: RequestOptions) {
    return this.client.get<{ data: PersonalPlace[] }>(
      "/api/v1/my-places",
      undefined,
      options,
    );
  }
  /** personalPlace: Requires an IDP session or authenticated service context. Server enforces dataset ownership and tenant access. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access. */
  personalPlace(id: string, options?: RequestOptions) {
    return this.client.get<{ data: PersonalPlace }>(
      `/api/v1/my-places/${encodeURIComponent(id)}`,
      undefined,
      options,
    );
  }
  /** createPersonalPlace: Requires an IDP session or authenticated service context. Owner or scoped GIS manager required. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access and 409 for revision conflicts. */
  createPersonalPlace(input: PersonalPlaceInput, options?: RequestOptions) {
    return this.client.post<{ data: { id: string } }>(
      "/api/v1/my-places",
      { ...input },
      options,
    );
  }
  /** updatePersonalPlace: Requires an IDP session or authenticated service context. Owner or scoped GIS manager required. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access and 409 for revision conflicts. */
  updatePersonalPlace(
    id: string,
    input: PersonalPlaceUpdate,
    options?: RequestOptions,
  ) {
    return this.client.put<{ data: { id: string } }>(
      `/api/v1/my-places/${encodeURIComponent(id)}`,
      { ...input },
      options,
    );
  }
  /** deletePersonalPlace: Requires an IDP session or authenticated service context. Owner or scoped GIS manager required. Pass options for cancellation, timeout, and Axios transport settings. Returns the full Axios response; errors reject, including 401/404 for denied access and 409 for revision conflicts. */
  deletePersonalPlace(id: string, options?: RequestOptions) {
    return this.client.delete<{ data: { id: string } }>(
      `/api/v1/my-places/${encodeURIComponent(id)}`,
      options,
    );
  }
}
