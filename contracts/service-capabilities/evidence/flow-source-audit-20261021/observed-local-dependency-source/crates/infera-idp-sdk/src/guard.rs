use axum::{
    body::Body,
    http::{Request, StatusCode},
    middleware::Next,
    response::{IntoResponse, Response},
};
use reqwest::header::HOST;

pub async fn internal_service_guard(req: Request<Body>, next: Next) -> Response {
    let expected_host =
        std::env::var("IDP_INTERNAL_HOST").unwrap_or_else(|_| "idp.faiber.svc:8002".to_string());

    if let Some(host_header) = req.headers().get(HOST) {
        if host_header.to_str().ok() == Some(expected_host.as_str()) {
            return next.run(req).await;
        }
    }

    StatusCode::FORBIDDEN.into_response()
}
