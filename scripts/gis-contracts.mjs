// Source-reviewed GIS0bc8423 DTOs and exact envelopes. Native and deployed certification remains pending.
export const gisContracts = {
  "gis:GET /health": {
    "methodName": "health",
    "typeBase": "Health",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").Health>",
    "purpose": "Read GIS database and private Martin renderer dependency readiness.",
    "auth": "No actor permission. Global middleware explicitly bypasses identity for /health, including unavailable cookie validation."
  },
  "gis:GET /api/v1/datasets": {
    "methodName": "datasets",
    "typeBase": "Datasets",
    "response": "import(\"./types.js\").Success<import(\"./types.js\").Dataset[]>",
    "purpose": "List readable GIS datasets.",
    "auth": "Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference."
  },
  "gis:POST /api/v1/datasets": {
    "methodName": "createDataset",
    "typeBase": "CreateDataset",
    "response": "import(\"./types.js\").Success<import(\"./types.js\").Dataset>",
    "purpose": "Create a scoped draft dataset.",
    "auth": "Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference.",
    "input": "import(\"./types.js\").DatasetInput"
  },
  "gis:GET /api/v1/datasets/{id}": {
    "methodName": "dataset",
    "typeBase": "Dataset",
    "response": "import(\"./types.js\").Success<import(\"./types.js\").Dataset>",
    "purpose": "Read authorized dataset metadata.",
    "auth": "Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference."
  },
  "gis:PATCH /api/v1/datasets/{id}": {
    "methodName": "publishDataset",
    "typeBase": "PublishDataset",
    "response": "import(\"./types.js\").Success<import(\"./types.js\").Dataset>",
    "purpose": "Change dataset publication/visibility with a revision and reason.",
    "auth": "Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference.",
    "input": "import(\"./types.js\").DatasetPublicationInput"
  },
  "gis:GET /api/v1/datasets/{id}/features": {
    "methodName": "features",
    "typeBase": "Features",
    "response": "import(\"./types.js\").FeatureCollection",
    "purpose": "Read authorized bounded GeoJSON features.",
    "auth": "Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference.",
    "query": "import(\"./types.js\").FeatureQuery"
  },
  "gis:PUT /api/v1/datasets/{id}/features": {
    "methodName": "writeFeatures",
    "typeBase": "WriteFeatures",
    "response": "import(\"./types.js\").Success<{revision:number;feature_ids:string[]}>",
    "purpose": "Upsert a geometry batch with atomic dataset revision control.",
    "auth": "Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference.",
    "input": "import(\"./types.js\").FeatureBatchInput"
  },
  "gis:PUT /api/v1/datasets/{id}/features/{feature}": {
    "methodName": "deleteFeature",
    "typeBase": "DeleteFeature",
    "response": "import(\"./types.js\").Success<{revision:number}>",
    "purpose": "Soft-delete one feature through the mounted PUT operation.",
    "auth": "Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference.",
    "input": "import(\"./types.js\").RevisionInput"
  },
  "gis:GET /api/v1/datasets/{id}/history": {
    "methodName": "datasetHistory",
    "typeBase": "DatasetHistory",
    "response": "import(\"./types.js\").Success<import(\"./types.js\").History[]>",
    "purpose": "Read private dataset and map mutation history.",
    "auth": "Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference. History specifically requires write-level dataset access, not ordinary public/read access."
  },
  "gis:GET /api/v1/public/datasets/{id}/geojson": {
    "methodName": "publicFeatures",
    "typeBase": "PublicFeatures",
    "response": "import(\"./types.js\").FeatureCollection",
    "purpose": "Read bounded published public dataset GeoJSON.",
    "auth": "Anonymous path explicitly bypasses IDP cookie validation; public_dataset requires published AND public and either global scope or deployment tenant organization. Missing/private404.",
    "query": "import(\"./types.js\").FeatureQuery"
  },
  "gis:GET /api/v1/maps": {
    "methodName": "maps",
    "typeBase": "Maps",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").MapRecord[]>",
    "purpose": "List accessible map records.",
    "auth": "Current trusted BFF bearer plus user/organization UUID and trusted permissions, or current IDP-validated cookie; cookie mutations require exact configured origin. Dataset native access: global write requires gis:global:manage; organization write same organization plus gis:dataset:manage; user write same organization and owner or gis:dataset:manage. Read organization scope allows same organization; global published/public readable. No role-name inference."
  },
  "gis:POST /api/v1/maps": {
    "methodName": "createMap",
    "typeBase": "CreateMap",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").MapRecord>",
    "purpose": "Create a draft map over an authorized dataset.",
    "auth": "Current trusted BFF bearer plus user/organization UUID and trusted permissions, or current IDP-validated cookie; cookie mutations require exact configured origin. Dataset native access: global write requires gis:global:manage; organization write same organization plus gis:dataset:manage; user write same organization and owner or gis:dataset:manage. Read organization scope allows same organization; global published/public readable. No role-name inference.",
    "input": "import(\"./types.js\").MapInput"
  },
  "gis:GET /api/v1/maps/{id}": {
    "methodName": "map",
    "typeBase": "Map",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").MapRecord>",
    "purpose": "Read an accessible map record.",
    "auth": "Current trusted BFF bearer plus user/organization UUID and trusted permissions, or current IDP-validated cookie; cookie mutations require exact configured origin. Dataset native access: global write requires gis:global:manage; organization write same organization plus gis:dataset:manage; user write same organization and owner or gis:dataset:manage. Read organization scope allows same organization; global published/public readable. No role-name inference."
  },
  "gis:PATCH /api/v1/maps/{id}": {
    "methodName": "updateMap",
    "typeBase": "UpdateMap",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").MapRecord>",
    "purpose": "Edit a map using its current revision.",
    "auth": "Current trusted BFF bearer plus user/organization UUID and trusted permissions, or current IDP-validated cookie; cookie mutations require exact configured origin. Dataset native access: global write requires gis:global:manage; organization write same organization plus gis:dataset:manage; user write same organization and owner or gis:dataset:manage. Read organization scope allows same organization; global published/public readable. No role-name inference.",
    "input": "import(\"./types.js\").MapEditInput"
  },
  "gis:GET /api/v1/maps/{id}/style": {
    "methodName": "mapStyle",
    "typeBase": "MapStyle",
    "response": "import(\"./types.js\").MapStyle",
    "purpose": "Read a private map preview style.",
    "auth": "Current trusted BFF bearer plus user/organization UUID and trusted permissions, or current IDP-validated cookie; cookie mutations require exact configured origin. Dataset native access: global write requires gis:global:manage; organization write same organization plus gis:dataset:manage; user write same organization and owner or gis:dataset:manage. Read organization scope allows same organization; global published/public readable. No role-name inference.",
    "query": "import(\"./types.js\").StyleQuery"
  },
  "gis:PUT /api/v1/maps/{id}/publish": {
    "methodName": "publishMap",
    "typeBase": "PublishMap",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").MapRecord>",
    "purpose": "Change map publication status with a reason.",
    "auth": "Current trusted BFF bearer plus user/organization UUID and trusted permissions, or current IDP-validated cookie; cookie mutations require exact configured origin. Dataset native access: global write requires gis:global:manage; organization write same organization plus gis:dataset:manage; user write same organization and owner or gis:dataset:manage. Read organization scope allows same organization; global published/public readable. No role-name inference.",
    "input": "import(\"./types.js\").MapPublicationInput"
  },
  "gis:GET /api/v1/public/maps": {
    "methodName": "publicMaps",
    "typeBase": "PublicMaps",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").MapRecord[]>",
    "purpose": "List published maps for public delivery.",
    "auth": "Anonymous handler. /api/v1/public/* bypasses cookie validation; map and dataset publication are checked at read time."
  },
  "gis:GET /api/v1/public/maps/{slug}": {
    "methodName": "publicMap",
    "typeBase": "PublicMap",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").MapRecord>",
    "purpose": "Read a published public map by slug.",
    "auth": "Anonymous handler. /api/v1/public/* bypasses cookie validation; map and dataset publication are checked at read time."
  },
  "gis:GET /api/v1/public/maps/{slug}/style": {
    "methodName": "publicMapStyle",
    "typeBase": "PublicMapStyle",
    "response": "import(\"./types.js\").MapStyle",
    "purpose": "Read the style of a published public map.",
    "auth": "Anonymous handler. /api/v1/public/* bypasses cookie validation; map and dataset publication are checked at read time.",
    "query": "import(\"./types.js\").StyleQuery"
  },
  "gis:GET /api/v1/public/maps/{slug}/geojson": {
    "methodName": "publicMapFeatures",
    "typeBase": "PublicMapFeatures",
    "response": "import(\"./types.js\").FeatureCollection",
    "purpose": "Read bounded geometry for a public map.",
    "auth": "Anonymous handler. /api/v1/public/* bypasses cookie validation; map and dataset publication are checked at read time."
  },
  "gis:GET /api/v1/public/datasets/{id}/tilejson": {
    "methodName": "tileJson",
    "typeBase": "TileJson",
    "response": "import(\"./types.js\").TileJson",
    "purpose": "Discover authorized public vector-tile metadata.",
    "auth": "Anonymous public path; same public_dataset checks as public GeoJSON."
  },
  "gis:GET /api/v1/public/datasets/{id}/tiles/{z}/{x}/{y}": {
    "methodName": "publicTile",
    "typeBase": "PublicTile",
    "response": "ArrayBuffer",
    "purpose": "Render a public published vector tile.",
    "auth": "Anonymous public path, current published/public/global-or-deployment organization checked on every tile.",
    "binaryDownload": true
  },
  "gis:GET /api/v1/datasets/{id}/tiles/{z}/{x}/{y}": {
    "methodName": "tile",
    "typeBase": "Tile",
    "response": "ArrayBuffer",
    "purpose": "Render a currently authorized private preview vector tile.",
    "auth": "Actual actor boundary: trusted server BFF bearer+user/organization UUID+current trusted permissions, or current IDP-validated cookie with exact-origin mutation checks. Backend current dataset access is authoritative: global public-published is readable or gis:global:manage; user scope requires matching organization and owner or gis:dataset:manage; organization scope requires same organization, and management permission for writes. Denials use404; authentication/tenant failures401/403. No display-role inference.",
    "binaryDownload": true
  },
  "gis:GET /api/v1/imports": {
    "methodName": "imports",
    "typeBase": "Imports",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").ImportJob[]>",
    "purpose": "List visible persistent import jobs.",
    "auth": "Current trusted BFF bearer plus user/organization UUID and trusted permissions, or current IDP-validated cookie; cookie mutations require exact configured origin. Dataset native access: global write requires gis:global:manage; organization write same organization plus gis:dataset:manage; user write same organization and owner or gis:dataset:manage. Read organization scope allows same organization; global published/public readable. No role-name inference."
  },
  "gis:POST /api/v1/imports": {
    "methodName": "createImport",
    "typeBase": "CreateImport",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").ImportAccepted>",
    "purpose": "Queue a bounded OpenStreetMap area import.",
    "auth": "Current issuer-bound IDP owner grant snapshot; original issuer cannot be rebound; dataset scope policy and exact cookie origin. Unavailable authority503, inactive owner401.",
    "input": "import(\"./types.js\").ImportInput"
  },
  "gis:POST /api/v1/imports/{id}/retry": {
    "methodName": "retryImport",
    "typeBase": "RetryImport",
    "response": "import(\"./types.js\").Data<{id:string;state:\"queued\"}>",
    "purpose": "Retry an owned failed import job.",
    "auth": "Current issuer-bound IDP owner grant snapshot; original issuer cannot be rebound; dataset scope policy and exact cookie origin. Unavailable authority503, inactive owner401."
  },
  "gis:GET /api/v1/my-places": {
    "methodName": "personalPlaces",
    "typeBase": "PersonalPlaces",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").PersonalPlace[]>",
    "purpose": "List the current user\u2019s private personal places.",
    "auth": "Private routes require actor() with user UUID and organization UUID. Direct trusted callers need exact Bearer BFF_SERVICE_KEY (minimum32) plus actor headers. Ordinary forwarded user/Bearer headers are stripped; cookie calls validate current session through IDP, set deployment PUBLIC_ORGANIZATION_ID, and mutations require exact GIS_PANEL_ORIGIN. Identity transport errors503, absent/invalid identity401, missing tenant403. This is not a generic end-user Bearer JWT transport. Trusted service credentials can assert tenant: provisioning boundaries require actual runtime validation."
  },
  "gis:POST /api/v1/my-places": {
    "methodName": "createPersonalPlace",
    "typeBase": "CreatePersonalPlace",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").IdResult>",
    "purpose": "Create a private location and note for the current actor.",
    "auth": "Private routes require actor() with user UUID and organization UUID. Direct trusted callers need exact Bearer BFF_SERVICE_KEY (minimum32) plus actor headers. Ordinary forwarded user/Bearer headers are stripped; cookie calls validate current session through IDP, set deployment PUBLIC_ORGANIZATION_ID, and mutations require exact GIS_PANEL_ORIGIN. Identity transport errors503, absent/invalid identity401, missing tenant403. This is not a generic end-user Bearer JWT transport. Trusted service credentials can assert tenant: provisioning boundaries require actual runtime validation.",
    "input": "import(\"./types.js\").PersonalPlaceInput"
  },
  "gis:GET /api/v1/my-places/{id}": {
    "methodName": "personalPlace",
    "typeBase": "PersonalPlace",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").PersonalPlace>",
    "purpose": "Read one strictly owned private place.",
    "auth": "Private routes require actor() with user UUID and organization UUID. Direct trusted callers need exact Bearer BFF_SERVICE_KEY (minimum32) plus actor headers. Ordinary forwarded user/Bearer headers are stripped; cookie calls validate current session through IDP, set deployment PUBLIC_ORGANIZATION_ID, and mutations require exact GIS_PANEL_ORIGIN. Identity transport errors503, absent/invalid identity401, missing tenant403. This is not a generic end-user Bearer JWT transport. Trusted service credentials can assert tenant: provisioning boundaries require actual runtime validation."
  },
  "gis:PUT /api/v1/my-places/{id}": {
    "methodName": "updatePersonalPlace",
    "typeBase": "UpdatePersonalPlace",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").IdResult>",
    "purpose": "Replace private location fields with optimistic revision control.",
    "auth": "Private routes require actor() with user UUID and organization UUID. Direct trusted callers need exact Bearer BFF_SERVICE_KEY (minimum32) plus actor headers. Ordinary forwarded user/Bearer headers are stripped; cookie calls validate current session through IDP, set deployment PUBLIC_ORGANIZATION_ID, and mutations require exact GIS_PANEL_ORIGIN. Identity transport errors503, absent/invalid identity401, missing tenant403. This is not a generic end-user Bearer JWT transport. Trusted service credentials can assert tenant: provisioning boundaries require actual runtime validation.",
    "input": "import(\"./types.js\").PersonalPlaceInput"
  },
  "gis:DELETE /api/v1/my-places/{id}": {
    "methodName": "deletePersonalPlace",
    "typeBase": "DeletePersonalPlace",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").IdResult>",
    "purpose": "Hard-delete an owned private place.",
    "auth": "Private routes require actor() with user UUID and organization UUID. Direct trusted callers need exact Bearer BFF_SERVICE_KEY (minimum32) plus actor headers. Ordinary forwarded user/Bearer headers are stripped; cookie calls validate current session through IDP, set deployment PUBLIC_ORGANIZATION_ID, and mutations require exact GIS_PANEL_ORIGIN. Identity transport errors503, absent/invalid identity401, missing tenant403. This is not a generic end-user Bearer JWT transport. Trusted service credentials can assert tenant: provisioning boundaries require actual runtime validation."
  },
  "gis:GET /api/v1/me": {
    "methodName": "me",
    "typeBase": "Me",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").Me>",
    "purpose": "Read the authenticated GIS actor context.",
    "auth": "Private routes require actor() with user UUID and organization UUID. Direct trusted callers need exact Bearer BFF_SERVICE_KEY (minimum32) plus actor headers. Ordinary forwarded user/Bearer headers are stripped; cookie calls validate current session through IDP, set deployment PUBLIC_ORGANIZATION_ID, and mutations require exact GIS_PANEL_ORIGIN. Identity transport errors503, absent/invalid identity401, missing tenant403. This is not a generic end-user Bearer JWT transport. Trusted service credentials can assert tenant: provisioning boundaries require actual runtime validation."
  },
  "gis:GET /api/v1/places": {
    "methodName": "places",
    "typeBase": "Places",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").Place[]>",
    "purpose": "Search public places in the deployment tenant.",
    "auth": "Anonymous handler, fixed deployment tenant. Unlike /public/*, a supplied cookie still invokes global IDP validation: transport outage can return503. No caller-selected tenant.",
    "query": "import(\"./types.js\").PlaceSearch"
  },
  "gis:POST /api/v1/places": {
    "methodName": "proposePlace",
    "typeBase": "ProposePlace",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").Pending>",
    "purpose": "Submit a place proposal for moderation.",
    "auth": "Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission.",
    "input": "import(\"./types.js\").ProposalInput"
  },
  "gis:GET /api/v1/places/{id}": {
    "methodName": "place",
    "typeBase": "Place",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").Place>",
    "purpose": "Resolve a visible place by UUID or slug.",
    "auth": "Anonymous handler, fixed deployment tenant. Unlike /public/*, a supplied cookie still invokes global IDP validation: transport outage can return503. No caller-selected tenant."
  },
  "gis:PUT /api/v1/places/{id}/save": {
    "methodName": "savePlace",
    "typeBase": "SavePlace",
    "response": "{saved:true;changed:boolean}",
    "purpose": "Save a visible place for the current user.",
    "auth": "Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission."
  },
  "gis:DELETE /api/v1/places/{id}/save": {
    "methodName": "unsavePlace",
    "typeBase": "UnsavePlace",
    "response": "{saved:false}",
    "purpose": "Remove a saved place for the current user.",
    "auth": "Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission."
  },
  "gis:POST /api/v1/places/{id}/reports": {
    "methodName": "reportPlace",
    "typeBase": "ReportPlace",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").Pending>",
    "purpose": "Report a place for moderator review.",
    "auth": "Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission.",
    "input": "import(\"./types.js\").ReportInput"
  },
  "gis:POST /api/v1/places/{id}/assertion": {
    "methodName": "placeAssertion",
    "typeBase": "PlaceAssertion",
    "response": "import(\"./types.js\").PlaceAssertion",
    "purpose": "Issue a short-lived Social subject assertion for a place.",
    "auth": "Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission."
  },
  "gis:GET /api/v1/me/saves": {
    "methodName": "savedPlaces",
    "typeBase": "SavedPlaces",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").Place[]>",
    "purpose": "Read the current user\u2019s saved visible places.",
    "auth": "Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission."
  },
  "gis:GET /api/v1/me/contributions": {
    "methodName": "contributions",
    "typeBase": "Contributions",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").Place[]>",
    "purpose": "Read places proposed by the current user.",
    "auth": "Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission."
  },
  "gis:GET /api/v1/internal/outbox": {
    "methodName": "outbox",
    "typeBase": "Outbox",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").PlaceEvent[]>",
    "purpose": "Read pending place integration events.",
    "auth": "Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission. Exact comma element places:integrations:read required; no wildcard match or whitespace trimming in worker predicate."
  },
  "gis:PUT /api/v1/internal/outbox/{id}/ack": {
    "methodName": "ackEvent",
    "typeBase": "AckEvent",
    "response": "{ok:true}",
    "purpose": "Acknowledge a place integration event.",
    "auth": "Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission. Exact comma element places:integrations:read required; no wildcard match or whitespace trimming in worker predicate."
  },
  "gis:GET /api/v1/places/{id}/references": {
    "methodName": "placeReferences",
    "typeBase": "PlaceReferences",
    "response": "import(\"./types.js\").Data<string[]>",
    "purpose": "Read public canonical place references.",
    "auth": "Anonymous handler, fixed deployment tenant. Unlike /public/*, a supplied cookie still invokes global IDP validation: transport outage can return503. No caller-selected tenant."
  },
  "gis:GET /api/v1/moderation/{id}/history": {
    "methodName": "placeHistory",
    "typeBase": "PlaceHistory",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").PlaceHistory[]>",
    "purpose": "Read moderation history for a place.",
    "auth": "Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission. Also comma-separated permission must match places:moderate, places:place:moderate, places:*, gis:place:manage, gis:* or *."
  },
  "gis:POST /api/v1/moderation/reports/{id}": {
    "methodName": "resolveReport",
    "typeBase": "ResolveReport",
    "response": "{ok:true}",
    "purpose": "Resolve a place report with a moderation reason.",
    "auth": "Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission. Also comma-separated permission must match places:moderate, places:place:moderate, places:*, gis:place:manage, gis:* or *.",
    "input": "import(\"./types.js\").ReportResolutionInput"
  },
  "gis:GET /api/v1/moderation": {
    "methodName": "moderationQueue",
    "typeBase": "ModerationQueue",
    "response": "import(\"./types.js\").Data<import(\"./types.js\").ModerationQueue>",
    "purpose": "Read pending proposals and place reports.",
    "auth": "Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission. Also comma-separated permission must match places:moderate, places:place:moderate, places:*, gis:place:manage, gis:* or *."
  },
  "gis:POST /api/v1/moderation/{id}": {
    "methodName": "moderatePlace",
    "typeBase": "ModeratePlace",
    "response": "{ok:true}",
    "purpose": "Moderate and optionally correct or merge a place.",
    "auth": "Current actor via trusted BFF bearer and exact configured organization plus UUID, or global current cookie validation which injects BFF credentials. End-user Bearer/forged headers stripped. No separate feature permission. Also comma-separated permission must match places:moderate, places:place:moderate, places:*, gis:place:manage, gis:* or *.",
    "input": "import(\"./types.js\").ModerationInput"
  }
};
