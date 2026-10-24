use std::str::FromStr;

use axum::{
    body::Body,
    http::{HeaderValue, Request},
    middleware::Next,
    response::Response,
};
use uuid::Uuid;

use crate::models::AuthContext;
use crate::utils::{csv_header_value, get_dev_id, get_dev_permissions, get_dev_roles};

pub async fn auth_extractor_middleware(mut req: Request<Body>, next: Next) -> Response {
    let user_id = req
        .headers()
        .get("x-user-id")
        .and_then(|v| v.to_str().ok())
        .and_then(|s| Uuid::from_str(s).ok());

    #[cfg(feature = "dev-fallback")]
    let user_id = user_id.or(Some(get_dev_id()));

    let roles = if req.headers().contains_key("x-user-roles") {
        csv_header_value(
            req.headers()
                .get("x-user-roles")
                .and_then(|v| v.to_str().ok()),
        )
    } else {
        #[cfg(feature = "dev-fallback")]
        {
            get_dev_roles()
        }
        #[cfg(not(feature = "dev-fallback"))]
        {
            Vec::new()
        }
    };

    let permissions = if req.headers().contains_key("x-user-permissions") {
        csv_header_value(
            req.headers()
                .get("x-user-permissions")
                .and_then(|v| v.to_str().ok()),
        )
    } else {
        #[cfg(feature = "dev-fallback")]
        {
            get_dev_permissions()
        }
        #[cfg(not(feature = "dev-fallback"))]
        {
            Vec::new()
        }
    };

    #[cfg(feature = "access-token")]
    let access_token = req
        .headers()
        .get("authorization")
        .and_then(|v| v.to_str().ok())
        .map(|s| s.trim_start_matches("Bearer ").trim().to_string())
        .filter(|s| !s.is_empty());

    req.extensions_mut().insert(AuthContext {
        user_id,
        permissions,
        roles,
        #[cfg(feature = "access-token")]
        access_token,
    });

    next.run(req).await
}
