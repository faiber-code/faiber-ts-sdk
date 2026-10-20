use axum::{
    http::{HeaderMap, StatusCode},
    routing::{any, post},
    Json, Router,
};

async fn retired_summary() -> (StatusCode, Json<Value>) {
    (
        StatusCode::GONE,
        Json(
            json!({"error":"lms_summary_retired","message":"Configure and read summaries through Profile."}),
        ),
    )
}
