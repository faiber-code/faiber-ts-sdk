use std::path::PathBuf;

use axum::{
    body::Body,
    http::{self, Request, StatusCode},
    response::IntoResponse,
    routing::get,
    Json, Router,
};
use reqwest::Method;
use tower::ServiceExt;
use tower_http::{
    cors::CorsLayer,
    services::{ServeDir, ServeFile},
};

use crate::{models::*, state::AppState};

fn rewrite_dashboard_asset_uri(req: &mut Request<Body>) {
    let Some(path) = req
        .uri()
        .path()
        .strip_prefix("/dashboard")
        .filter(|path| !path.is_empty())
        .map(str::to_owned)
    else {
        return;
    };
    let rewritten = match req.uri().query() {
        Some(query) => format!("{path}?{query}"),
        None => path,
    };
    if let Ok(uri) = rewritten.parse() {
        *req.uri_mut() = uri;
    }
}

pub fn routes(_state: &AppState) -> Router<AppState> {
    let cors_layer = CorsLayer::new()
        .allow_origin(crate::cors::allow_origin_from_env())
        .allow_methods(vec![
            Method::GET,
            Method::POST,
            Method::OPTIONS,
            Method::PATCH,
            Method::PUT,
            Method::DELETE,
        ])
        .allow_credentials(true)
        .allow_headers([
            http::header::CONTENT_TYPE,
            http::header::AUTHORIZATION,
            http::header::ACCEPT,
            http::header::COOKIE,
            http::HeaderName::from_static("x-user-id"),
            http::HeaderName::from_static("x-user-roles"),
            http::HeaderName::from_static("x-user-permissions"),
        ]);

    let api_v1 = Router::new()
        .nest("/events", crate::event::routes::routes())
        .nest("/flows", crate::flow::routes::routes())
        .nest("/registry", crate::registry::routes::routes())
        .nest("/catalog", crate::catalog::routes::routes())
        .nest("/runs", crate::run::routes::routes())
        .route("/integration/flow", get(integration_flow));

    Router::new()
        .route("/", get(status_route))
        .route("/health", get(status_route))
        .route("/up", get(status_route))
        .nest("/api/v1", api_v1)
        .fallback_service(get(static_file_service))
        .layer(cors_layer)
}

async fn status_route() -> Json<APIResponse<HealthResponse>> {
    Json(APIResponse::ok(HealthResponse {
        version: env!("CARGO_PKG_VERSION").to_string(),
    }))
}

async fn integration_flow() -> Json<APIResponse<infera_flow_sdk::FlowIntegrationResponse>> {
    Json(APIResponse::ok(crate::integration::flow::integration_meta()))
}

async fn static_file_service(mut req: Request<Body>) -> Result<impl IntoResponse, std::convert::Infallible> {
    rewrite_dashboard_asset_uri(&mut req);
    let dist = PathBuf::from(
        std::env::var("PANEL_DIST").unwrap_or_else(|_| "panel/dist".to_string()),
    );
    let index = dist.join("index.html");
    let path = req.uri().path();
    let is_static_asset = path.starts_with("/assets/")
        || path.ends_with(".svg")
        || path.ends_with(".png")
        || path.ends_with(".ico")
        || path.ends_with(".webmanifest");
    let resp = if is_static_asset {
        ServeDir::new(&dist).oneshot(req).await
    } else {
        ServeFile::new(index).oneshot(req).await
    };
    match resp {
        Ok(r) => Ok(r.map(axum::body::Body::new)),
        Err(_) => Ok((StatusCode::NOT_FOUND, "not found").into_response()),
    }
}
