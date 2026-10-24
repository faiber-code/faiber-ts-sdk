use axum::{
    extract::{Path, State},
    routing::{get, post},
    Json, Router,
};
use infera_idp_macro::should_have_permissions;
use uuid::Uuid;

use crate::{
    flow::{
        methods::{
            create_flow, delete_flow, get_flow, import_flows, list_flows, update_flow,
            validate_flow_graph,
        },
        models::{
            CreateFlowRequest, FlowResponse, ImportFlowsRequest, ImportFlowsResponse,
            UpdateFlowRequest,
        },
    },
    models::APIResponse,
    state::AppState,
};

pub fn routes() -> Router<AppState> {
    Router::new()
        .route("/", get(index).post(store))
        .route("/import", post(import))
        .route("/{id}", get(show).put(update).delete(destroy))
        .route("/{id}/validate", post(validate))
}

#[should_have_permissions(
    path("api/v1/flows/import"),
    methods("POST"),
    permissions("flow:create", "flow:update"),
    aliases()
)]
async fn import(
    State(state): State<AppState>,
    Json(body): Json<ImportFlowsRequest>,
) -> Result<Json<APIResponse<ImportFlowsResponse>>, crate::models::AppError> {
    let data = import_flows(&state, body).await?;
    Ok(Json(APIResponse::ok(data)))
}

#[should_have_permissions(
    path("api/v1/flows"),
    methods("GET"),
    permissions("flow:read"),
    aliases()
)]
async fn index(
    State(state): State<AppState>,
) -> Result<Json<APIResponse<Vec<FlowResponse>>>, crate::models::AppError> {
    let data = list_flows(&state).await?;
    Ok(Json(APIResponse::ok(data)))
}

#[should_have_permissions(
    path("api/v1/flows"),
    methods("POST"),
    permissions("flow:create"),
    aliases()
)]
async fn store(
    State(state): State<AppState>,
    Json(body): Json<CreateFlowRequest>,
) -> Result<Json<APIResponse<FlowResponse>>, crate::models::AppError> {
    let data = create_flow(&state, body).await?;
    Ok(Json(APIResponse::ok(data)))
}

#[should_have_permissions(
    path("api/v1/flows/{id}"),
    methods("GET"),
    permissions("flow:read"),
    aliases()
)]
async fn show(
    State(state): State<AppState>,
    Path(id): Path<Uuid>,
) -> Result<Json<APIResponse<FlowResponse>>, crate::models::AppError> {
    let data = get_flow(&state, id).await?;
    Ok(Json(APIResponse::ok(data)))
}

#[should_have_permissions(
    path("api/v1/flows/{id}"),
    methods("PUT"),
    permissions("flow:update"),
    aliases()
)]
async fn update(
    State(state): State<AppState>,
    Path(id): Path<Uuid>,
    Json(body): Json<UpdateFlowRequest>,
) -> Result<Json<APIResponse<FlowResponse>>, crate::models::AppError> {
    let data = update_flow(&state, id, body).await?;
    Ok(Json(APIResponse::ok(data)))
}

#[should_have_permissions(
    path("api/v1/flows/{id}"),
    methods("DELETE"),
    permissions("flow:delete"),
    aliases()
)]
async fn destroy(
    State(state): State<AppState>,
    Path(id): Path<Uuid>,
) -> Result<Json<APIResponse<serde_json::Value>>, crate::models::AppError> {
    delete_flow(&state, id).await?;
    Ok(Json(APIResponse::ok(serde_json::json!({"deleted": true}))))
}

#[should_have_permissions(
    path("api/v1/flows/{id}/validate"),
    methods("POST"),
    permissions("flow:update"),
    aliases()
)]
async fn validate(
    State(state): State<AppState>,
    Path(id): Path<Uuid>,
) -> Result<Json<APIResponse<serde_json::Value>>, crate::models::AppError> {
    let flow = get_flow(&state, id).await?;
    let errors = validate_flow_graph(&flow.graph).await?;
    Ok(Json(APIResponse::ok(serde_json::json!({
        "valid": errors.is_empty(),
        "errors": errors
    }))))
}
