use axum::{
    body::Body,
    http::{Request, StatusCode},
    Router,
};
use tower::ServiceExt;

use crate::{router, state::AppState};

pub fn admin_headers() -> Vec<(&'static str, &'static str)> {
    vec![
        ("x-user-id", "00000000-0000-0000-0000-000000000001"),
        ("x-user-roles", "admin"),
        (
            "x-user-permissions",
            "admin:gateway:read,admin:gateway:create,admin:gateway:update,admin:transaction:read",
        ),
    ]
}

pub async fn build_test_app(state: AppState) -> Router {
    Router::new()
        .merge(router::routes(&state))
        .with_state(state)
}

pub async fn request(
    app: Router,
    method: &str,
    uri: &str,
    headers: Vec<(&'static str, &'static str)>,
    body: Option<&str>,
) -> (StatusCode, String) {
    let mut builder = Request::builder().method(method).uri(uri);
    for (k, v) in headers {
        builder = builder.header(k, v);
    }
    let req = builder
        .body(Body::from(body.unwrap_or("").to_string()))
        .unwrap();
    let res = app.clone().oneshot(req).await.unwrap();
    let status = res.status();
    let bytes = axum::body::to_bytes(res.into_body(), usize::MAX)
        .await
        .unwrap();
    (status, String::from_utf8_lossy(&bytes).to_string())
}
