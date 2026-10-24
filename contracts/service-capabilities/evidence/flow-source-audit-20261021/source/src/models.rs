use axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
};
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;

#[derive(Debug, Serialize, ToSchema)]
pub struct APIResponse<T> {
    pub status: String,
    pub message: String,
    pub data: T,
}

impl<T: Serialize> APIResponse<T> {
    pub fn ok(data: T) -> Self {
        Self {
            status: "success".into(),
            message: "ok".into(),
            data,
        }
    }
}

#[derive(Serialize)]
struct ErrorResponse {
    error: String,
}

#[derive(Debug)]
pub struct AppError {
    pub status: StatusCode,
    pub message: String,
}

impl AppError {
    pub fn new(status: StatusCode, message: impl Into<String>) -> Self {
        Self {
            status,
            message: message.into(),
        }
    }

    pub fn bad_request(message: impl Into<String>) -> Self {
        Self::new(StatusCode::BAD_REQUEST, message)
    }

    pub fn not_found(message: impl Into<String>) -> Self {
        Self::new(StatusCode::NOT_FOUND, message)
    }

    pub fn conflict(message: impl Into<String>) -> Self {
        Self::new(StatusCode::CONFLICT, message)
    }

    pub fn internal(message: impl Into<String>) -> Self {
        Self::new(StatusCode::INTERNAL_SERVER_ERROR, message)
    }
}

impl IntoResponse for AppError {
    fn into_response(self) -> Response {
        let body = axum::Json(ErrorResponse {
            error: self.message,
        });
        (self.status, body).into_response()
    }
}

#[derive(Serialize, Deserialize)]
pub struct BrokerEvent<T> {
    pub event: String,
    pub data: T,
}

#[derive(Debug, Serialize, ToSchema)]
pub struct HealthResponse {
    pub version: String,
}

#[derive(Debug, Serialize, Deserialize, ToSchema, Clone, Default)]
pub struct FlowGraph {
    pub nodes: Vec<FlowNode>,
    pub edges: Vec<FlowEdge>,
}

#[derive(Debug, Serialize, Deserialize, ToSchema, Clone)]
pub struct FlowNode {
    pub id: String,
    #[serde(rename = "type")]
    pub node_type: String,
    #[serde(default)]
    pub position: Option<serde_json::Value>,
    pub data: serde_json::Value,
}

#[derive(Debug, Serialize, Deserialize, ToSchema, Clone)]
pub struct FlowEdge {
    pub id: String,
    pub source: String,
    pub target: String,
    #[serde(default)]
    pub data: Option<serde_json::Value>,
}

#[derive(Debug, Serialize, Deserialize, ToSchema, Clone)]
pub struct EndpointEvent {
    pub event_id: uuid::Uuid,
    pub service: String,
    pub method: String,
    pub path: String,
    pub status: u16,
    pub success: bool,
    pub user_id: Option<uuid::Uuid>,
    pub duration_ms: u64,
    #[serde(default)]
    pub request: Option<serde_json::Value>,
    #[serde(default)]
    pub response: Option<serde_json::Value>,
    #[serde(default)]
    pub timestamp: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct RegistryTriggerEntry {
    pub trigger_key: String,
    pub capture_fields: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct ActiveTriggersResponse {
    pub version: i64,
    pub triggers: Vec<RegistryTriggerEntry>,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct RegistryChangedData {
    pub version: i64,
    pub registry_url: String,
}
