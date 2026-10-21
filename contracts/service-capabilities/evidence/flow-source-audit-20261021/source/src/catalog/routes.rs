use axum::{
    extract::State,
    routing::{get, post},
    Json, Router,
};
use infera_idp_macro::should_have_permissions;

use crate::{
    catalog::methods::{list_actions, list_triggers, sync_catalog},
    models::APIResponse,
    state::AppState,
};

pub fn routes() -> Router<AppState> {
    Router::new()
        .route("/triggers", get(triggers))
        .route("/actions", get(actions))
        .route("/sync", post(sync))
}

#[should_have_permissions(
    path("api/v1/catalog/triggers"),
    methods("GET"),
    permissions("flow:read"),
    aliases()
)]
async fn triggers(
    State(state): State<AppState>,
) -> Result<
    Json<APIResponse<Vec<crate::catalog::methods::CatalogTriggerView>>>,
    crate::models::AppError,
> {
    let data = list_triggers(&state).await?;
    Ok(Json(APIResponse::ok(data)))
}

#[should_have_permissions(
    path("api/v1/catalog/actions"),
    methods("GET"),
    permissions("flow:read"),
    aliases()
)]
async fn actions(
    State(state): State<AppState>,
) -> Result<
    Json<APIResponse<Vec<crate::catalog::methods::CatalogActionView>>>,
    crate::models::AppError,
> {
    let data = list_actions(&state).await?;
    Ok(Json(APIResponse::ok(data)))
}

#[should_have_permissions(
    path("api/v1/catalog/sync"),
    methods("POST"),
    permissions("catalog:sync"),
    aliases()
)]
async fn sync(
    State(state): State<AppState>,
) -> Result<Json<APIResponse<serde_json::Value>>, crate::models::AppError> {
    let report = sync_catalog(&state).await?;
    Ok(Json(APIResponse::ok(
        serde_json::to_value(report).unwrap_or_default(),
    )))
}
