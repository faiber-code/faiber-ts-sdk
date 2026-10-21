use std::time::Instant;

use axum::{
    body::Body,
    extract::State,
    http::{HeaderMap, Request, Response},
    middleware::Next,
};
use http_body_util::BodyExt;
use uuid::Uuid;

use crate::{
    publisher::{build_payload, FlowPublisher},
    trigger::{compute_trigger_key, is_excluded_path, is_sse_path},
};

#[derive(Clone)]
pub struct FlowMiddlewareState(pub FlowPublisher);

pub async fn flow_endpoint_middleware(
    State(state): State<FlowMiddlewareState>,
    headers: HeaderMap,
    request: Request<Body>,
    next: Next,
) -> Response<Body> {
    if !state.0.enabled {
        return next.run(request).await;
    }

    if headers
        .get("upgrade")
        .and_then(|v| v.to_str().ok())
        .map(|v| v.eq_ignore_ascii_case("websocket"))
        .unwrap_or(false)
    {
        return next.run(request).await;
    }

    let method = request.method().to_string();
    let path = request.uri().path().to_string();

    if is_excluded_path(&path) || is_sse_path(&path) {
        return next.run(request).await;
    }

    let user_id = headers
        .get("x-user-id")
        .and_then(|v| v.to_str().ok())
        .and_then(|v| Uuid::parse_str(v).ok());

    let trigger_key = compute_trigger_key(&state.0.service_name, &method, &path);
    if !state.0.registry.should_publish(&trigger_key) {
        return next.run(request).await;
    }

    let capture_fields = state.0.registry.capture_fields(&trigger_key);
    let started = Instant::now();
    let response = next.run(request).await;
    let duration_ms = started.elapsed().as_millis() as u64;
    let status = response.status().as_u16();

    let (parts, body) = response.into_parts();
    let body_bytes = match body.collect().await {
        Ok(collected) => collected.to_bytes(),
        Err(_) => bytes::Bytes::new(),
    };
    let response_json = serde_json::from_slice::<serde_json::Value>(&body_bytes).ok();

    let payload = build_payload(
        &state.0.service_name,
        &method,
        &path,
        status,
        user_id,
        duration_ms,
        None,
        response_json,
        &capture_fields,
    );

    state.0.spawn_publish(trigger_key, payload);

    Response::from_parts(parts, Body::from(body_bytes))
}
