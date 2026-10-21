use std::sync::Arc;

use chrono::Utc;
use lapin::Channel;
use serde::Serialize;
use uuid::Uuid;

use crate::registry::ActiveTriggerRegistry;

pub const ENDPOINT_EVENT: &str = "flow.endpoint";
pub const EVENTS_EXCHANGE: &str = "infera.events";

#[derive(Serialize)]
pub struct EndpointEventPayload {
    pub event_id: Uuid,
    pub service: String,
    pub method: String,
    pub path: String,
    pub status: u16,
    pub success: bool,
    pub user_id: Option<Uuid>,
    pub duration_ms: u64,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub request: Option<serde_json::Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub response: Option<serde_json::Value>,
    pub timestamp: String,
}

#[derive(Clone)]
pub struct FlowPublisher {
    pub channel: Arc<Channel>,
    pub service_name: String,
    pub registry: ActiveTriggerRegistry,
    pub enabled: bool,
}

impl FlowPublisher {
    pub fn spawn_publish(&self, trigger_key: String, payload: EndpointEventPayload) {
        let channel = self.channel.clone();
        tokio::spawn(async move {
            if let Err(e) = publish_endpoint_event(&channel, &trigger_key, &payload).await {
                tracing::warn!(error = %e, trigger = %trigger_key, "flow publish failed");
            }
        });
    }
}

pub async fn publish_endpoint_event(
    channel: &Channel,
    trigger_key: &str,
    payload: &EndpointEventPayload,
) -> Result<(), String> {
    let envelope = serde_json::json!({
        "event": ENDPOINT_EVENT,
        "data": payload
    });
    let body = serde_json::to_vec(&envelope).map_err(|e| e.to_string())?;
    channel
        .exchange_declare(
            EVENTS_EXCHANGE,
            lapin::ExchangeKind::Topic,
            lapin::options::ExchangeDeclareOptions {
                durable: true,
                ..Default::default()
            },
            lapin::types::FieldTable::default(),
        )
        .await
        .map_err(|e| e.to_string())?;

    channel
        .basic_publish(
            EVENTS_EXCHANGE,
            trigger_key,
            lapin::options::BasicPublishOptions::default(),
            &body,
            lapin::BasicProperties::default().with_delivery_mode(1),
        )
        .await
        .map_err(|e| e.to_string())?
        .await
        .map_err(|e| e.to_string())?;
    Ok(())
}

pub fn extract_fields(
    source: &serde_json::Value,
    fields: &[String],
    prefix: &str,
) -> Option<serde_json::Value> {
    if fields.is_empty() {
        return None;
    }
    let mut out = serde_json::Map::new();
    for field in fields {
        if let Some(stripped) = field.strip_prefix(prefix) {
            if let Some(val) = get_path(source, stripped) {
                let key = stripped.replace('.', "_");
                out.insert(key, val);
            }
        }
    }
    if out.is_empty() {
        None
    } else {
        Some(serde_json::Value::Object(out))
    }
}

fn get_path(value: &serde_json::Value, path: &str) -> Option<serde_json::Value> {
    let mut current = value;
    for part in path.split('.') {
        current = current.get(part)?;
    }
    Some(current.clone())
}

pub fn build_payload(
    service_name: &str,
    method: &str,
    path: &str,
    status: u16,
    user_id: Option<Uuid>,
    duration_ms: u64,
    request_body: Option<serde_json::Value>,
    response_body: Option<serde_json::Value>,
    capture_fields: &[String],
) -> EndpointEventPayload {
    let request = request_body
        .as_ref()
        .and_then(|b| extract_fields(b, capture_fields, "request."));
    let response = response_body
        .as_ref()
        .and_then(|b| extract_fields(b, capture_fields, "response."));

    EndpointEventPayload {
        event_id: Uuid::new_v4(),
        service: service_name.to_string(),
        method: method.to_string(),
        path: path.to_string(),
        status,
        success: (200..300).contains(&status),
        user_id,
        duration_ms,
        request,
        response,
        timestamp: Utc::now().to_rfc3339(),
    }
}
