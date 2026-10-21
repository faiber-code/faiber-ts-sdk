use axum::{
    extract::{Path, Query},
    routing::get,
    Json, Router,
};
use infera_idp_macro::should_have_permissions;
use serde::Deserialize;
use uuid::Uuid;

use crate::{
    models::APIResponse,
    run::methods::{get_run, list_runs},
    state::AppState,
};

#[derive(Deserialize)]
pub struct RunsQuery {
    pub limit: Option<u64>,
}

pub fn routes() -> Router<AppState> {
    Router::new()
        .route("/", get(index))
        .route("/{id}", get(show))
}

#[should_have_permissions(
    path("api/v1/runs/{id}"),
    methods("GET"),
    permissions("flow_run:read"),
    aliases()
)]
async fn show(
    axum::extract::State(state): axum::extract::State<AppState>,
    Path(id): Path<Uuid>,
) -> Result<Json<APIResponse<crate::run::methods::FlowRunDetailView>>, crate::models::AppError> {
    Ok(Json(APIResponse::ok(get_run(&state, id).await?)))
}

#[should_have_permissions(
    path("api/v1/runs"),
    methods("GET"),
    permissions("flow_run:read"),
    aliases()
)]
async fn index(
    axum::extract::State(state): axum::extract::State<AppState>,
    Query(q): Query<RunsQuery>,
) -> Result<Json<APIResponse<Vec<crate::run::methods::FlowRunView>>>, crate::models::AppError> {
    let data = list_runs(&state, q.limit.unwrap_or(50)).await?;
    Ok(Json(APIResponse::ok(data)))
}
