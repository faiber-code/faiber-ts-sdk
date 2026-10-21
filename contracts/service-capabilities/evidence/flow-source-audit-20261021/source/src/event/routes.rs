use axum::{
    extract::{Extension, Path, State},
    routing::post,
    Json, Router,
};
use infera_idp_macro::should_have_permissions;
use infera_idp_sdk::AuthContext;
use uuid::Uuid;

use crate::{
    engine::executor::process_trigger_event,
    models::{APIResponse, EndpointEvent},
    state::AppState,
};

pub fn routes() -> Router<AppState> {
    Router::new().route("/{event_key}", post(emit))
}

pub fn validate_event_key(event_key: &str) -> Result<(), crate::models::AppError> {
    let valid = !event_key.is_empty()
        && event_key.len() <= 200
        && !event_key.starts_with('.')
        && !event_key.ends_with('.')
        && !event_key.contains("..")
        && event_key.chars().all(|character| {
            character.is_ascii_alphanumeric() || matches!(character, '.' | '_' | '-')
        });
    if valid {
        Ok(())
    } else {
        Err(crate::models::AppError::bad_request(
            "event key must be 1-200 ASCII letters, numbers, dots, underscores, or hyphens",
        ))
    }
}

fn can_emit_event(auth: &AuthContext) -> bool {
    auth.permissions
        .iter()
        .any(|permission| permission == "flow:execute" || permission == "*")
}

#[should_have_permissions(
    path("api/v1/events/{event_key}"),
    methods("POST"),
    permissions("flow:execute"),
    aliases()
)]
async fn emit(
    State(state): State<AppState>,
    Path(event_key): Path<String>,
    Extension(auth): Extension<AuthContext>,
    Json(body): Json<serde_json::Value>,
) -> Result<Json<APIResponse<serde_json::Value>>, crate::models::AppError> {
    if !can_emit_event(&auth) {
        return Err(crate::models::AppError::new(
            axum::http::StatusCode::FORBIDDEN,
            "flow:execute permission is required",
        ));
    }
    validate_event_key(&event_key)?;
    let event_id = Uuid::new_v4();
    let trigger_key = format!("event.{event_key}");
    let event = EndpointEvent {
        event_id,
        service: "event".into(),
        method: "EMIT".into(),
        path: event_key,
        status: 202,
        success: true,
        user_id: auth.user_id,
        duration_ms: 0,
        request: Some(body),
        response: None,
        timestamp: Some(chrono::Utc::now().to_rfc3339()),
    };
    process_trigger_event(&state, &trigger_key, event).await?;

    Ok(Json(APIResponse::ok(serde_json::json!({
        "accepted": true,
        "event_id": event_id,
        "trigger_key": trigger_key
    }))))
}

#[cfg(test)]
mod tests {
    use super::{can_emit_event, validate_event_key};
    use infera_idp_sdk::AuthContext;

    #[test]
    fn accepts_generic_namespaced_event_keys() {
        assert!(validate_event_key("commerce.checkout.completed").is_ok());
        assert!(validate_event_key("profile_property.updated-v2").is_ok());
    }

    #[test]
    fn rejects_paths_and_malformed_namespaces() {
        assert!(validate_event_key("commerce/checkout").is_err());
        assert!(validate_event_key("commerce..checkout").is_err());
        assert!(validate_event_key(".checkout").is_err());
    }

    #[test]
    fn requires_explicit_execute_permission() {
        let denied = AuthContext {
            user_id: None,
            permissions: vec!["flow:read".into()],
            roles: vec!["admin".into()],
        };
        let allowed = AuthContext {
            user_id: None,
            permissions: vec!["flow:execute".into()],
            roles: vec![],
        };
        assert!(!can_emit_event(&denied));
        assert!(can_emit_event(&allowed));
    }
}
