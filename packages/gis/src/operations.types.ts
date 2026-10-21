import type { ApiEnvelope, BackendJson, JsonObject, JsonValue, QueryParams, QueryValue } from "@faiber/sdk-core";

/** Generated route contracts. Dynamic payload members remain JSON-safe and are documented with their Rust source type. */
/** Backend response type: Value. */
export type DatasetsResponse = import("./types.js").Success<import("./types.js").Dataset[]>;

/** Backend request type: models::DatasetInput. */
export type CreateDatasetInput = import("./types.js").DatasetInput;
/** Backend response type: Value. */
export type CreateDatasetResponse = import("./types.js").Success<import("./types.js").Dataset>;

/** Backend response type: Value. */
export type DatasetResponse = import("./types.js").Success<import("./types.js").Dataset>;

/** Backend request type: models::Publish. */
export type PublishDatasetInput = import("./types.js").DatasetPublicationInput;
/** Backend response type: Value. */
export type PublishDatasetResponse = import("./types.js").Success<import("./types.js").Dataset>;

/** Backend query type: models::Query. */
export type FeaturesQuery = import("./types.js").FeatureQuery;
/** Backend response type: Value. */
export type FeaturesResponse = import("./types.js").FeatureCollection;

/** Backend request type: models::WriteFeatures. */
export type WriteFeaturesInput = import("./types.js").FeatureBatchInput;
/** Backend response type: Value. */
export type WriteFeaturesResponse = import("./types.js").Success<import("./types.js").FeatureWriteResult>;

/** Backend request type: models::Delete. */
export type DeleteFeatureInput = import("./types.js").RevisionInput;
/** Backend response type: Value. */
export type DeleteFeatureResponse = import("./types.js").Success<import("./types.js").RevisionResult>;

/** Backend response type: Value. */
export type DatasetHistoryResponse = import("./types.js").Success<import("./types.js").History[]>;

/** Backend response type: raw-response. */
export type TileResponse = ArrayBuffer;

/** Backend response type: Value. */
export type ImportsResponse = import("./types.js").Data<import("./types.js").ImportJob[]>;

/** Backend request type: Import. */
export type CreateImportInput = import("./types.js").ImportInput;
/** Backend response type: Value. */
export type CreateImportResponse = import("./types.js").Data<import("./types.js").ImportAccepted>;

/** Backend response type: Value. */
export type RetryImportResponse = import("./types.js").Data<import("./types.js").ImportRetryAccepted>;

/** Backend response type: Value. */
export type OutboxResponse = import("./types.js").Data<import("./types.js").PlaceEvent[]>;

/** Backend response type: Value. */
export type AckEventResponse = import("./types.js").Acknowledged;

/** Backend response type: Value. */
export type MapsResponse = import("./types.js").Data<import("./types.js").MapRecord[]>;

/** Backend request type: Input. */
export type CreateMapInput = import("./types.js").MapInput;
/** Backend response type: Value. */
export type CreateMapResponse = import("./types.js").Data<import("./types.js").MapRecord>;

/** Backend response type: Value. */
export type MapResponse = import("./types.js").Data<import("./types.js").MapRecord>;

/** Backend request type: Edit. */
export type UpdateMapInput = import("./types.js").MapEditInput;
/** Backend response type: Value. */
export type UpdateMapResponse = import("./types.js").Data<import("./types.js").MapRecord>;

/** Backend request type: Publish. */
export type PublishMapInput = import("./types.js").MapPublicationInput;
/** Backend response type: Value. */
export type PublishMapResponse = import("./types.js").Data<import("./types.js").MapRecord>;

/** Backend query type: Theme. */
export type MapStyleQuery = import("./types.js").StyleQuery;
/** Backend response type: Value. */
export type MapStyleResponse = import("./types.js").MapStyle;

/** Backend response type: serde_json::Value. */
export type MeResponse = import("./types.js").Data<import("./types.js").Me>;

/** Backend response type: Value. */
export type ContributionsResponse = import("./types.js").Data<import("./types.js").Place[]>;

/** Backend response type: Value. */
export type SavedPlacesResponse = import("./types.js").Data<import("./types.js").Place[]>;

/** Backend response type: Value. */
export type ModerationQueueResponse = import("./types.js").Data<import("./types.js").ModerationQueue>;

/** Backend request type: Decision. */
export type ModeratePlaceInput = import("./types.js").ModerationInput;
/** Backend response type: Value. */
export type ModeratePlaceResponse = import("./types.js").Acknowledged;

/** Backend response type: Value. */
export type PlaceHistoryResponse = import("./types.js").Data<import("./types.js").PlaceHistory[]>;

/** Backend request type: Report. */
export type ResolveReportInput = import("./types.js").ReportResolutionInput;
/** Backend response type: Value. */
export type ResolveReportResponse = import("./types.js").Acknowledged;

/** Backend response type: Value. */
export type PersonalPlacesResponse = import("./types.js").Data<import("./types.js").PersonalPlace[]>;

/** Backend request type: Input. */
export type CreatePersonalPlaceInput = import("./types.js").PersonalPlaceInput;
/** Backend response type: Value. */
export type CreatePersonalPlaceResponse = import("./types.js").Data<import("./types.js").IdResult>;

/** Backend response type: Value. */
export type DeletePersonalPlaceResponse = import("./types.js").Data<import("./types.js").IdResult>;

/** Backend response type: Value. */
export type PersonalPlaceResponse = import("./types.js").Data<import("./types.js").PersonalPlace>;

/** Backend request type: Input. */
export type UpdatePersonalPlaceInput = import("./types.js").PersonalPlaceInput;
/** Backend response type: Value. */
export type UpdatePersonalPlaceResponse = import("./types.js").Data<import("./types.js").IdResult>;

/** Backend query type: Search. */
export type PlacesQuery = import("./types.js").PlaceSearch;
/** Backend response type: Value. */
export type PlacesResponse = import("./types.js").Data<import("./types.js").Place[]>;

/** Backend request type: Proposal. */
export type ProposePlaceInput = import("./types.js").ProposalInput;
/** Backend response type: Value. */
export type ProposePlaceResponse = import("./types.js").Data<import("./types.js").Pending>;

/** Backend response type: Value. */
export type PlaceResponse = import("./types.js").Data<import("./types.js").Place>;

/** Backend response type: Value. */
export type PlaceAssertionResponse = import("./types.js").PlaceAssertion;

/** Backend response type: Value. */
export type PlaceReferencesResponse = import("./types.js").Data<string[]>;

/** Backend request type: Report. */
export type ReportPlaceInput = import("./types.js").ReportInput;
/** Backend response type: Value. */
export type ReportPlaceResponse = import("./types.js").Data<import("./types.js").Pending>;

/** Backend response type: Value. */
export type UnsavePlaceResponse = import("./types.js").UnsavedPlaceResult;

/** Backend response type: Value. */
export type SavePlaceResponse = import("./types.js").SavedPlaceResult;

/** Backend query type: models::Query. */
export type PublicFeaturesQuery = import("./types.js").FeatureQuery;
/** Backend response type: Value. */
export type PublicFeaturesResponse = import("./types.js").FeatureCollection;

/** Backend response type: serde_json::Value. */
export type TileJsonResponse = import("./types.js").TileJson;

/** Backend response type: raw-response. */
export type PublicTileResponse = ArrayBuffer;

/** Backend response type: Value. */
export type PublicMapsResponse = import("./types.js").Data<import("./types.js").MapRecord[]>;

/** Backend response type: Value. */
export type PublicMapResponse = import("./types.js").Data<import("./types.js").MapRecord>;

/** Backend response type: Value. */
export type PublicMapFeaturesResponse = import("./types.js").FeatureCollection;

/** Backend query type: Theme. */
export type PublicMapStyleQuery = import("./types.js").StyleQuery;
/** Backend response type: Value. */
export type PublicMapStyleResponse = import("./types.js").MapStyle;

/** Backend response type: serde_json::Value. */
export type HealthResponse = import("./types.js").Data<import("./types.js").Health>;
