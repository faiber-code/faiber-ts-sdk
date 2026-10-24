use sea_orm::{ColumnTrait, EntityTrait, QueryFilter};
use serde_json::Value;

use crate::{
    models::{BrokerEvent, EndpointEvent, FlowGraph},
    state::AppState,
};

pub async fn resolve_emit_payload(
    mapping: &Value,
    event: &EndpointEvent,
) -> Result<Value, crate::models::AppError> {
    let Some(obj) = mapping.as_object() else {
        return Ok(Value::Object(Default::default()));
    };

    let mut out = serde_json::Map::new();
    for (key, spec) in obj {
        let value = if let Some(kind) = spec.get("kind").and_then(|v| v.as_str()) {
            match kind {
                "static" => spec.get("value").cloned().unwrap_or(Value::Null),
                "expr" => {
                    let template = spec.get("value").and_then(|v| v.as_str()).unwrap_or("");
                    resolve_template(template, event)?
                }
                _ => Value::Null,
            }
        } else {
            spec.clone()
        };
        out.insert(key.clone(), value);
    }
    Ok(Value::Object(out))
}

fn resolve_template(template: &str, event: &EndpointEvent) -> Result<Value, crate::models::AppError> {
    if let Some(inner) = template.strip_prefix("{{").and_then(|s| s.strip_suffix("}}")) {
        let path = inner.trim();
        return Ok(
            crate::engine::conditions::resolve_path(event, path).unwrap_or(Value::Null),
        );
    }
    Ok(Value::String(template.to_string()))
}

pub async fn emit_to_queue(
    state: &AppState,
    queue: &str,
    event_name: &str,
    payload: &Value,
) -> Result<(), crate::models::AppError> {
    let envelope = BrokerEvent {
        event: event_name.to_string(),
        data: payload.clone(),
    };
    let raw = serde_json::to_vec(&envelope)
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;
    state
        .broker_channel
        .basic_publish(
            "",
            queue,
            lapin::options::BasicPublishOptions::default(),
            &raw,
            lapin::BasicProperties::default().with_delivery_mode(1),
        )
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    tracing::info!(queue, event = event_name, "flow emit published");
    Ok(())
}

pub async fn lookup_action_queue(
    state: &AppState,
    service: &str,
    event_name: &str,
) -> Result<Option<String>, crate::models::AppError> {
    let row = entity::catalog_action::Entity::find()
        .filter(entity::catalog_action::Column::Service.eq(service))
        .filter(entity::catalog_action::Column::EventName.eq(event_name))
        .one(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;
    Ok(row.map(|r| r.queue))
}

pub fn graph_from_model(graph: &Value) -> FlowGraph {
    serde_json::from_value(graph.clone()).unwrap_or(FlowGraph {
        nodes: vec![],
        edges: vec![],
    })
}
