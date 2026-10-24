import { ServiceApi, urlEncoded, type Identifier, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./operations.types.js";

export class GisOperations extends ServiceApi {
  /**
   * List readable GIS datasets.
   * Calls `GET /api/v1/datasets` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference..
   */
  datasets(options?: RequestOptions) {
    return this.client.request<T.DatasetsResponse>({ ...options, method: "GET", url: `/api/v1/datasets` });
  }
  /**
   * Create a scoped draft dataset.
   * Calls `POST /api/v1/datasets` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference..
   */
  createDataset(data: T.CreateDatasetInput, options?: RequestOptions<T.CreateDatasetInput>) {
    return this.client.request<T.CreateDatasetResponse, T.CreateDatasetInput>({ ...options, method: "POST", url: `/api/v1/datasets`, data: data });
  }
  /**
   * Read authorized dataset metadata.
   * Calls `GET /api/v1/datasets/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference..
   */
  dataset(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.DatasetResponse>({ ...options, method: "GET", url: `/api/v1/datasets/${encodeURIComponent(id)}` });
  }
  /**
   * Change dataset publication/visibility with a revision and reason.
   * Calls `PATCH /api/v1/datasets/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference..
   */
  publishDataset(id: Identifier, data: T.PublishDatasetInput, options?: RequestOptions<T.PublishDatasetInput>) {
    return this.client.request<T.PublishDatasetResponse, T.PublishDatasetInput>({ ...options, method: "PATCH", url: `/api/v1/datasets/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read authorized bounded GeoJSON features.
   * Calls `GET /api/v1/datasets/{id}/features` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference..
   */
  features(id: Identifier, params?: T.FeaturesQuery, options?: RequestOptions) {
    return this.client.request<T.FeaturesResponse>({ ...options, method: "GET", url: `/api/v1/datasets/${encodeURIComponent(id)}/features`, params });
  }
  /**
   * Upsert a geometry batch with atomic dataset revision control.
   * Calls `PUT /api/v1/datasets/{id}/features` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference..
   */
  writeFeatures(id: Identifier, data: T.WriteFeaturesInput, options?: RequestOptions<T.WriteFeaturesInput>) {
    return this.client.request<T.WriteFeaturesResponse, T.WriteFeaturesInput>({ ...options, method: "PUT", url: `/api/v1/datasets/${encodeURIComponent(id)}/features`, data: data });
  }
  /**
   * Soft-delete one feature through the mounted PUT operation.
   * Calls `PUT /api/v1/datasets/{id}/features/{feature}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param feature Backend path identifier `feature`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference..
   */
  deleteFeature(id: Identifier, feature: Identifier, data: T.DeleteFeatureInput, options?: RequestOptions<T.DeleteFeatureInput>) {
    return this.client.request<T.DeleteFeatureResponse, T.DeleteFeatureInput>({ ...options, method: "PUT", url: `/api/v1/datasets/${encodeURIComponent(id)}/features/${encodeURIComponent(feature)}`, data: data });
  }
  /**
   * Read private dataset and map mutation history.
   * Calls `GET /api/v1/datasets/{id}/history` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference. History specifically requires write-level dataset access, not ordinary public/read access..
   */
  datasetHistory(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.DatasetHistoryResponse>({ ...options, method: "GET", url: `/api/v1/datasets/${encodeURIComponent(id)}/history` });
  }
  /**
   * Render a currently authorized private preview vector tile.
   * Calls `GET /api/v1/datasets/{id}/tiles/{z}/{x}/{y}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param z Backend path identifier `z`.
   * @param x Backend path identifier `x`.
   * @param y Backend path identifier `y`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference..
   */
  tile(id: Identifier, z: Identifier, x: Identifier, y: Identifier, options?: RequestOptions) {
    return this.client.request<T.TileResponse>({ ...options, method: "GET", url: `/api/v1/datasets/${encodeURIComponent(id)}/tiles/${encodeURIComponent(z)}/${encodeURIComponent(x)}/${encodeURIComponent(y)}`, responseType: "arraybuffer" });
  }
  /**
   * List visible persistent import jobs.
   * Calls `GET /api/v1/imports` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Authenticated actor within its organization: only owned jobs, or all organization jobs with gis:dataset:manage. At most100 newest jobs; no pagination. Listing does not fetch current issuer grants and never exposes lease_id..
   */
  imports(options?: RequestOptions) {
    return this.client.request<T.ImportsResponse>({ ...options, method: "GET", url: `/api/v1/imports` });
  }
  /**
   * Queue a bounded OpenStreetMap area import.
   * Calls `POST /api/v1/imports` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current issuer-bound IDP owner grant snapshot; original issuer cannot be rebound; dataset scope policy and exact cookie origin. Unavailable authority503, inactive owner401..
   */
  createImport(data: T.CreateImportInput, options?: RequestOptions<T.CreateImportInput>) {
    return this.client.request<T.CreateImportResponse, T.CreateImportInput>({ ...options, method: "POST", url: `/api/v1/imports`, data: data });
  }
  /**
   * Retry an owned failed import job.
   * Calls `POST /api/v1/imports/{id}/retry` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current issuer-bound IDP owner grant snapshot; original issuer cannot be rebound; dataset scope policy and exact cookie origin. Unavailable authority503, inactive owner401..
   */
  retryImport(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.RetryImportResponse>({ ...options, method: "POST", url: `/api/v1/imports/${encodeURIComponent(id)}/retry` });
  }
  /**
   * Read pending place integration events.
   * Calls `GET /api/v1/internal/outbox` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission. Exact comma element places:integrations:read required; no wildcard match or whitespace trimming in worker predicate..
   */
  outbox(options?: RequestOptions) {
    return this.client.request<T.OutboxResponse>({ ...options, method: "GET", url: `/api/v1/internal/outbox` });
  }
  /**
   * Acknowledge a place integration event.
   * Calls `PUT /api/v1/internal/outbox/{id}/ack` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission. Exact comma element places:integrations:read required; no wildcard match or whitespace trimming in worker predicate..
   */
  ackEvent(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.AckEventResponse>({ ...options, method: "PUT", url: `/api/v1/internal/outbox/${encodeURIComponent(id)}/ack` });
  }
  /**
   * List accessible map records.
   * Calls `GET /api/v1/maps` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current trusted BFF bearer plus user/organization UUID and trusted permissions, or current IDP-validated cookie; cookie mutations require exact configured origin. Dataset native access: global write requires gis:global:manage; organization write same organization plus gis:dataset:manage; user write same organization and owner or gis:dataset:manage. Read organization scope allows same organization; global published/public readable. No role-name inference..
   */
  maps(options?: RequestOptions) {
    return this.client.request<T.MapsResponse>({ ...options, method: "GET", url: `/api/v1/maps` });
  }
  /**
   * Create a draft map over an authorized dataset.
   * Calls `POST /api/v1/maps` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current trusted BFF bearer plus user/organization UUID and trusted permissions, or current IDP-validated cookie; cookie mutations require exact configured origin. Dataset native access: global write requires gis:global:manage; organization write same organization plus gis:dataset:manage; user write same organization and owner or gis:dataset:manage. Read organization scope allows same organization; global published/public readable. No role-name inference..
   */
  createMap(data: T.CreateMapInput, options?: RequestOptions<T.CreateMapInput>) {
    return this.client.request<T.CreateMapResponse, T.CreateMapInput>({ ...options, method: "POST", url: `/api/v1/maps`, data: data });
  }
  /**
   * Read an accessible map record.
   * Calls `GET /api/v1/maps/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current trusted BFF bearer plus user/organization UUID and trusted permissions, or current IDP-validated cookie; cookie mutations require exact configured origin. Dataset native access: global write requires gis:global:manage; organization write same organization plus gis:dataset:manage; user write same organization and owner or gis:dataset:manage. Read organization scope allows same organization; global published/public readable. No role-name inference..
   */
  map(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.MapResponse>({ ...options, method: "GET", url: `/api/v1/maps/${encodeURIComponent(id)}` });
  }
  /**
   * Edit a map using its current revision.
   * Calls `PATCH /api/v1/maps/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current trusted BFF bearer plus user/organization UUID and trusted permissions, or current IDP-validated cookie; cookie mutations require exact configured origin. Dataset native access: global write requires gis:global:manage; organization write same organization plus gis:dataset:manage; user write same organization and owner or gis:dataset:manage. Read organization scope allows same organization; global published/public readable. No role-name inference..
   */
  updateMap(id: Identifier, data: T.UpdateMapInput, options?: RequestOptions<T.UpdateMapInput>) {
    return this.client.request<T.UpdateMapResponse, T.UpdateMapInput>({ ...options, method: "PATCH", url: `/api/v1/maps/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Change map publication status with a reason.
   * Calls `PUT /api/v1/maps/{id}/publish` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current trusted BFF bearer plus user/organization UUID and trusted permissions, or current IDP-validated cookie; cookie mutations require exact configured origin. Dataset native access: global write requires gis:global:manage; organization write same organization plus gis:dataset:manage; user write same organization and owner or gis:dataset:manage. Read organization scope allows same organization; global published/public readable. No role-name inference..
   */
  publishMap(id: Identifier, data: T.PublishMapInput, options?: RequestOptions<T.PublishMapInput>) {
    return this.client.request<T.PublishMapResponse, T.PublishMapInput>({ ...options, method: "PUT", url: `/api/v1/maps/${encodeURIComponent(id)}/publish`, data: data });
  }
  /**
   * Read a private map preview style.
   * Calls `GET /api/v1/maps/{id}/style` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current trusted BFF bearer plus user/organization UUID and trusted permissions, or current IDP-validated cookie; cookie mutations require exact configured origin. Dataset native access: global write requires gis:global:manage; organization write same organization plus gis:dataset:manage; user write same organization and owner or gis:dataset:manage. Read organization scope allows same organization; global published/public readable. No role-name inference..
   */
  mapStyle(id: Identifier, params?: T.MapStyleQuery, options?: RequestOptions) {
    return this.client.request<T.MapStyleResponse>({ ...options, method: "GET", url: `/api/v1/maps/${encodeURIComponent(id)}/style`, params });
  }
  /**
   * Read the authenticated GIS actor context.
   * Calls `GET /api/v1/me` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Private routes require actor() with user UUID and organization UUID. Direct trusted callers need exact Bearer BFF_SERVICE_KEY (minimum32) plus actor headers. Ordinary forwarded user/Bearer headers are stripped; cookie calls validate current session through IDP, set deployment PUBLIC_ORGANIZATION_ID, and mutations require exact GIS_PANEL_ORIGIN. Identity transport errors503, absent/invalid identity401, missing tenant403. This is not a generic end-user Bearer JWT transport. Trusted service credentials can assert tenant: provisioning boundaries require actual runtime validation..
   */
  me(options?: RequestOptions) {
    return this.client.request<T.MeResponse>({ ...options, method: "GET", url: `/api/v1/me` });
  }
  /**
   * Read places proposed by the current user.
   * Calls `GET /api/v1/me/contributions` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission..
   */
  contributions(options?: RequestOptions) {
    return this.client.request<T.ContributionsResponse>({ ...options, method: "GET", url: `/api/v1/me/contributions` });
  }
  /**
   * Read the current user’s saved visible places.
   * Calls `GET /api/v1/me/saves` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission..
   */
  savedPlaces(options?: RequestOptions) {
    return this.client.request<T.SavedPlacesResponse>({ ...options, method: "GET", url: `/api/v1/me/saves` });
  }
  /**
   * Read pending proposals and place reports.
   * Calls `GET /api/v1/moderation` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission. Also comma-separated permission must match places:moderate, places:place:moderate, places:*, gis:place:manage, gis:* or *..
   */
  moderationQueue(options?: RequestOptions) {
    return this.client.request<T.ModerationQueueResponse>({ ...options, method: "GET", url: `/api/v1/moderation` });
  }
  /**
   * Moderate and optionally correct or merge a place.
   * Calls `POST /api/v1/moderation/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission. Also comma-separated permission must match places:moderate, places:place:moderate, places:*, gis:place:manage, gis:* or *..
   */
  moderatePlace(id: Identifier, data: T.ModeratePlaceInput, options?: RequestOptions<T.ModeratePlaceInput>) {
    return this.client.request<T.ModeratePlaceResponse, T.ModeratePlaceInput>({ ...options, method: "POST", url: `/api/v1/moderation/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Read moderation history for a place.
   * Calls `GET /api/v1/moderation/{id}/history` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission. Also comma-separated permission must match places:moderate, places:place:moderate, places:*, gis:place:manage, gis:* or *..
   */
  placeHistory(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlaceHistoryResponse>({ ...options, method: "GET", url: `/api/v1/moderation/${encodeURIComponent(id)}/history` });
  }
  /**
   * Resolve a place report with a moderation reason.
   * Calls `POST /api/v1/moderation/reports/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission. Also comma-separated permission must match places:moderate, places:place:moderate, places:*, gis:place:manage, gis:* or *..
   */
  resolveReport(id: Identifier, data: T.ResolveReportInput, options?: RequestOptions<T.ResolveReportInput>) {
    return this.client.request<T.ResolveReportResponse, T.ResolveReportInput>({ ...options, method: "POST", url: `/api/v1/moderation/reports/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * List the current user’s private personal places.
   * Calls `GET /api/v1/my-places` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Private routes require actor() with user UUID and organization UUID. Direct trusted callers need exact Bearer BFF_SERVICE_KEY (minimum32) plus actor headers. Ordinary forwarded user/Bearer headers are stripped; cookie calls validate current session through IDP, set deployment PUBLIC_ORGANIZATION_ID, and mutations require exact GIS_PANEL_ORIGIN. Identity transport errors503, absent/invalid identity401, missing tenant403. This is not a generic end-user Bearer JWT transport. Trusted service credentials can assert tenant: provisioning boundaries require actual runtime validation..
   */
  personalPlaces(options?: RequestOptions) {
    return this.client.request<T.PersonalPlacesResponse>({ ...options, method: "GET", url: `/api/v1/my-places` });
  }
  /**
   * Create a private location and note for the current actor.
   * Calls `POST /api/v1/my-places` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Private routes require actor() with user UUID and organization UUID. Direct trusted callers need exact Bearer BFF_SERVICE_KEY (minimum32) plus actor headers. Ordinary forwarded user/Bearer headers are stripped; cookie calls validate current session through IDP, set deployment PUBLIC_ORGANIZATION_ID, and mutations require exact GIS_PANEL_ORIGIN. Identity transport errors503, absent/invalid identity401, missing tenant403. This is not a generic end-user Bearer JWT transport. Trusted service credentials can assert tenant: provisioning boundaries require actual runtime validation..
   */
  createPersonalPlace(data: T.CreatePersonalPlaceInput, options?: RequestOptions<T.CreatePersonalPlaceInput>) {
    return this.client.request<T.CreatePersonalPlaceResponse, T.CreatePersonalPlaceInput>({ ...options, method: "POST", url: `/api/v1/my-places`, data: data });
  }
  /**
   * Hard-delete an owned private place.
   * Calls `DELETE /api/v1/my-places/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Private routes require actor() with user UUID and organization UUID. Direct trusted callers need exact Bearer BFF_SERVICE_KEY (minimum32) plus actor headers. Ordinary forwarded user/Bearer headers are stripped; cookie calls validate current session through IDP, set deployment PUBLIC_ORGANIZATION_ID, and mutations require exact GIS_PANEL_ORIGIN. Identity transport errors503, absent/invalid identity401, missing tenant403. This is not a generic end-user Bearer JWT transport. Trusted service credentials can assert tenant: provisioning boundaries require actual runtime validation..
   */
  deletePersonalPlace(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.DeletePersonalPlaceResponse>({ ...options, method: "DELETE", url: `/api/v1/my-places/${encodeURIComponent(id)}` });
  }
  /**
   * Read one strictly owned private place.
   * Calls `GET /api/v1/my-places/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Private routes require actor() with user UUID and organization UUID. Direct trusted callers need exact Bearer BFF_SERVICE_KEY (minimum32) plus actor headers. Ordinary forwarded user/Bearer headers are stripped; cookie calls validate current session through IDP, set deployment PUBLIC_ORGANIZATION_ID, and mutations require exact GIS_PANEL_ORIGIN. Identity transport errors503, absent/invalid identity401, missing tenant403. This is not a generic end-user Bearer JWT transport. Trusted service credentials can assert tenant: provisioning boundaries require actual runtime validation..
   */
  personalPlace(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PersonalPlaceResponse>({ ...options, method: "GET", url: `/api/v1/my-places/${encodeURIComponent(id)}` });
  }
  /**
   * Replace private location fields with optimistic revision control.
   * Calls `PUT /api/v1/my-places/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Private routes require actor() with user UUID and organization UUID. Direct trusted callers need exact Bearer BFF_SERVICE_KEY (minimum32) plus actor headers. Ordinary forwarded user/Bearer headers are stripped; cookie calls validate current session through IDP, set deployment PUBLIC_ORGANIZATION_ID, and mutations require exact GIS_PANEL_ORIGIN. Identity transport errors503, absent/invalid identity401, missing tenant403. This is not a generic end-user Bearer JWT transport. Trusted service credentials can assert tenant: provisioning boundaries require actual runtime validation..
   */
  updatePersonalPlace(id: Identifier, data: T.UpdatePersonalPlaceInput, options?: RequestOptions<T.UpdatePersonalPlaceInput>) {
    return this.client.request<T.UpdatePersonalPlaceResponse, T.UpdatePersonalPlaceInput>({ ...options, method: "PUT", url: `/api/v1/my-places/${encodeURIComponent(id)}`, data: data });
  }
  /**
   * Search public places in the deployment tenant.
   * Calls `GET /api/v1/places` through the shared IDP-aware Faiber client.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Anonymous handler, fixed deployment tenant. Unlike /public/*, a supplied cookie still invokes global IDP validation: transport outage can return503. No caller-selected tenant..
   */
  places(params?: T.PlacesQuery, options?: RequestOptions) {
    return this.client.request<T.PlacesResponse>({ ...options, method: "GET", url: `/api/v1/places`, params });
  }
  /**
   * Submit a place proposal for moderation.
   * Calls `POST /api/v1/places` through the shared IDP-aware Faiber client.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission..
   */
  proposePlace(data: T.ProposePlaceInput, options?: RequestOptions<T.ProposePlaceInput>) {
    return this.client.request<T.ProposePlaceResponse, T.ProposePlaceInput>({ ...options, method: "POST", url: `/api/v1/places`, data: data });
  }
  /**
   * Resolve a visible place by UUID or slug.
   * Calls `GET /api/v1/places/{id}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Anonymous handler, fixed deployment tenant. Unlike /public/*, a supplied cookie still invokes global IDP validation: transport outage can return503. No caller-selected tenant..
   */
  place(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlaceResponse>({ ...options, method: "GET", url: `/api/v1/places/${encodeURIComponent(id)}` });
  }
  /**
   * Issue a short-lived Social subject assertion for a place.
   * Calls `POST /api/v1/places/{id}/assertion` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission..
   */
  placeAssertion(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlaceAssertionResponse>({ ...options, method: "POST", url: `/api/v1/places/${encodeURIComponent(id)}/assertion` });
  }
  /**
   * Read public canonical place references.
   * Calls `GET /api/v1/places/{id}/references` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Anonymous handler, fixed deployment tenant. Unlike /public/*, a supplied cookie still invokes global IDP validation: transport outage can return503. No caller-selected tenant..
   */
  placeReferences(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.PlaceReferencesResponse>({ ...options, method: "GET", url: `/api/v1/places/${encodeURIComponent(id)}/references` });
  }
  /**
   * Report a place for moderator review.
   * Calls `POST /api/v1/places/{id}/reports` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param data Typed JSON request body.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission..
   */
  reportPlace(id: Identifier, data: T.ReportPlaceInput, options?: RequestOptions<T.ReportPlaceInput>) {
    return this.client.request<T.ReportPlaceResponse, T.ReportPlaceInput>({ ...options, method: "POST", url: `/api/v1/places/${encodeURIComponent(id)}/reports`, data: data });
  }
  /**
   * Remove a saved place for the current user.
   * Calls `DELETE /api/v1/places/{id}/save` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission..
   */
  unsavePlace(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.UnsavePlaceResponse>({ ...options, method: "DELETE", url: `/api/v1/places/${encodeURIComponent(id)}/save` });
  }
  /**
   * Save a visible place for the current user.
   * Calls `PUT /api/v1/places/{id}/save` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission..
   */
  savePlace(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.SavePlaceResponse>({ ...options, method: "PUT", url: `/api/v1/places/${encodeURIComponent(id)}/save` });
  }
  /**
   * Read bounded published public dataset GeoJSON.
   * Calls `GET /api/v1/public/datasets/{id}/geojson` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Anonymous path explicitly bypasses IDP cookie validation; public_dataset requires published AND public and either global scope or deployment tenant organization. Missing/private404..
   */
  publicFeatures(id: Identifier, params?: T.PublicFeaturesQuery, options?: RequestOptions) {
    return this.client.request<T.PublicFeaturesResponse>({ ...options, method: "GET", url: `/api/v1/public/datasets/${encodeURIComponent(id)}/geojson`, params });
  }
  /**
   * Discover authorized public vector-tile metadata.
   * Calls `GET /api/v1/public/datasets/{id}/tilejson` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Anonymous public path; same public_dataset checks as public GeoJSON..
   */
  tileJson(id: Identifier, options?: RequestOptions) {
    return this.client.request<T.TileJsonResponse>({ ...options, method: "GET", url: `/api/v1/public/datasets/${encodeURIComponent(id)}/tilejson` });
  }
  /**
   * Render a public published vector tile.
   * Calls `GET /api/v1/public/datasets/{id}/tiles/{z}/{x}/{y}` through the shared IDP-aware Faiber client.
   * @param id Backend path identifier `id`.
   * @param z Backend path identifier `z`.
   * @param x Backend path identifier `x`.
   * @param y Backend path identifier `y`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Anonymous public path, current published/public/global-or-deployment organization checked on every tile..
   */
  publicTile(id: Identifier, z: Identifier, x: Identifier, y: Identifier, options?: RequestOptions) {
    return this.client.request<T.PublicTileResponse>({ ...options, method: "GET", url: `/api/v1/public/datasets/${encodeURIComponent(id)}/tiles/${encodeURIComponent(z)}/${encodeURIComponent(x)}/${encodeURIComponent(y)}`, responseType: "arraybuffer" });
  }
  /**
   * List published maps for public delivery.
   * Calls `GET /api/v1/public/maps` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Anonymous handler. /api/v1/public/* bypasses cookie validation; map and dataset publication are checked at read time..
   */
  publicMaps(options?: RequestOptions) {
    return this.client.request<T.PublicMapsResponse>({ ...options, method: "GET", url: `/api/v1/public/maps` });
  }
  /**
   * Read a published public map by slug.
   * Calls `GET /api/v1/public/maps/{slug}` through the shared IDP-aware Faiber client.
   * @param slug Backend path identifier `slug`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Anonymous handler. /api/v1/public/* bypasses cookie validation; map and dataset publication are checked at read time..
   */
  publicMap(slug: Identifier, options?: RequestOptions) {
    return this.client.request<T.PublicMapResponse>({ ...options, method: "GET", url: `/api/v1/public/maps/${encodeURIComponent(slug)}` });
  }
  /**
   * Read bounded geometry for a public map.
   * Calls `GET /api/v1/public/maps/{slug}/geojson` through the shared IDP-aware Faiber client.
   * @param slug Backend path identifier `slug`.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Anonymous handler. /api/v1/public/* bypasses cookie validation; map and dataset publication are checked at read time..
   */
  publicMapFeatures(slug: Identifier, options?: RequestOptions) {
    return this.client.request<T.PublicMapFeaturesResponse>({ ...options, method: "GET", url: `/api/v1/public/maps/${encodeURIComponent(slug)}/geojson` });
  }
  /**
   * Read the style of a published public map.
   * Calls `GET /api/v1/public/maps/{slug}/style` through the shared IDP-aware Faiber client.
   * @param slug Backend path identifier `slug`.
   * @param params Typed query parameters; omitted members retain backend defaults.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: Anonymous handler. /api/v1/public/* bypasses cookie validation; map and dataset publication are checked at read time..
   */
  publicMapStyle(slug: Identifier, params?: T.PublicMapStyleQuery, options?: RequestOptions) {
    return this.client.request<T.PublicMapStyleResponse>({ ...options, method: "GET", url: `/api/v1/public/maps/${encodeURIComponent(slug)}/style`, params });
  }
  /**
   * Read GIS database and private Martin renderer dependency readiness.
   * Calls `GET /health` through the shared IDP-aware Faiber client.
   * @param options Axios headers, timeout, cancellation signal, credentials, adapter, and other request options.
   * @returns The complete Axios response, including the typed handler payload, status, and headers.
   * @throws AxiosError for authentication, permission, validation, not-found, conflict, or transport failures; required permission: No actor permission. Global middleware explicitly bypasses identity for /health, including unavailable cookie validation..
   */
  health(options?: RequestOptions) {
    return this.client.request<T.HealthResponse>({ ...options, method: "GET", url: `/health` });
  }
}
