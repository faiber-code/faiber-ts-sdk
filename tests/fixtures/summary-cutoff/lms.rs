use axum::{
    body::Body,
    extract::State,
    http::{self, Request, StatusCode},
    response::IntoResponse,
    routing::{any, get},
    Json, Router,
};

async fn retired_summary() -> impl IntoResponse {
    (
        StatusCode::GONE,
        Json(serde_json::json!({
            "status":"error",
            "message":"lms_summary_retired",
            "data":null
        })),
    )
}
