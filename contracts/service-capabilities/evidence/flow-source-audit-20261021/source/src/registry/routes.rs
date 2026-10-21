use axum::{extract::Query, routing::get, Json, Router};
use serde::Deserialize;

use crate::{
    models::{ActiveTriggersResponse, APIResponse},
    registry::methods::active_triggers_response,
    state::AppState,
};

#[derive(Debug, Deserialize)]
pub struct RegistryQuery {
    pub service: Option<String>,
}

pub fn routes() -> Router<AppState> {
    Router::new().route("/active-triggers", get(active_triggers))
}

async fn active_triggers(
    state: axum::extract::State<AppState>,
    Query(query): Query<RegistryQuery>,
) -> Result<Json<APIResponse<ActiveTriggersResponse>>, crate::models::AppError> {
    let data = active_triggers_response(&state, query.service.as_deref()).await?;
    Ok(Json(APIResponse::ok(data)))
}
