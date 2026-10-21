use chrono::Utc;
use sea_orm::{ActiveModelTrait, ColumnTrait, EntityTrait, QueryFilter, Set};
use uuid::Uuid;

use crate::{
    engine::{conditions::evaluate, emit},
    models::EndpointEvent,
    state::AppState,
};

pub fn trigger_key_from_event(event: &EndpointEvent) -> String {
    let normalized = event.path.trim_start_matches('/').replace('/', ".");
    format!(
        "endpoint.{}.{}.{}",
        service_slug(&event.service),
        event.method.to_uppercase(),
        normalized
    )
}

fn trigger_key_matches(template: &str, actual: &str) -> bool {
    let template_parts: Vec<_> = template.split('.').collect();
    let actual_parts: Vec<_> = actual.split('.').collect();
    template_parts.len() == actual_parts.len()
        && template_parts
            .iter()
            .zip(actual_parts)
            .all(|(expected, value)| {
                expected == &value || (expected.starts_with('{') && expected.ends_with('}'))
            })
}

fn service_slug(service: &str) -> String {
    service
        .strip_prefix("infera-")
        .unwrap_or(service)
        .to_string()
}

pub async fn process_endpoint_event(
    state: &AppState,
    event: EndpointEvent,
) -> Result<(), crate::models::AppError> {
    let key = trigger_key_from_event(&event);
    process_trigger_event(state, &key, event).await
}

pub async fn process_trigger_event(
    state: &AppState,
    key: &str,
    event: EndpointEvent,
) -> Result<(), crate::models::AppError> {
    let flows: Vec<_> = entity::flow::Entity::find()
        .filter(entity::flow::Column::Enabled.eq(true))
        .all(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?
        .into_iter()
        .filter(|flow| trigger_key_matches(&flow.trigger_key, key))
        .collect();

    if flows.is_empty() {
        return Ok(());
    }

    for flow in flows {
        if let Err(e) = execute_flow(state, &flow, &event).await {
            tracing::error!(flow_id = %flow.id, error = %e.message, "flow execution failed");
        }
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::trigger_key_matches;

    #[test]
    fn matches_concrete_events_to_route_templates() {
        assert!(trigger_key_matches(
            "endpoint.lms.POST.api.v1.academy.enrollments.{id}.sessions.{session_id}.complete",
            "endpoint.lms.POST.api.v1.academy.enrollments.5d36fb63-2b0a-4baa-8336-aa7e64bb833e.sessions.42.complete",
        ));
        assert!(!trigger_key_matches(
            "endpoint.lms.POST.api.v1.academy.enrollments.{id}.sessions.{session_id}.complete",
            "endpoint.lms.POST.api.v1.academy.attempts.5d36fb63-2b0a-4baa-8336-aa7e64bb833e.submit",
        ));
    }

    #[test]
    fn matches_generic_event_keys_exactly() {
        assert!(trigger_key_matches(
            "event.customer.checkout.completed",
            "event.customer.checkout.completed",
        ));
        assert!(!trigger_key_matches(
            "event.customer.checkout.completed",
            "event.customer.checkout.failed",
        ));
    }
}

async fn execute_flow(
    state: &AppState,
    flow: &entity::flow::Model,
    event: &EndpointEvent,
) -> Result<(), crate::models::AppError> {
    let graph = emit::graph_from_model(&flow.graph);
    let trigger = graph
        .nodes
        .iter()
        .find(|n| n.node_type == "trigger")
        .ok_or_else(|| crate::models::AppError::internal("flow missing trigger"))?;

    let now = Utc::now().fixed_offset();
    let run_id = Uuid::new_v4();
    let run = entity::flow_run::ActiveModel {
        id: Set(run_id),
        flow_id: Set(flow.id),
        trigger_event_id: Set(event.event_id),
        status: Set("running".into()),
        context: Set(Some(serde_json::to_value(event).unwrap_or_default())),
        error: Set(None),
        started_at: Set(now),
        finished_at: Set(None),
    };
    run.insert(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    let mut queue = vec![trigger.id.clone()];
    let mut visited = std::collections::HashSet::new();

    while let Some(node_id) = queue.pop() {
        if !visited.insert(node_id.clone()) {
            continue;
        }
        let Some(node) = graph.nodes.iter().find(|n| n.id == node_id) else {
            continue;
        };

        if node.node_type == "emit" {
            if let Err(e) = execute_emit_node(state, run_id, node, event).await {
                let msg = e.message.clone();
                finish_run(state, run_id, "failed", Some(msg)).await?;
                return Err(e);
            }
        }

        for edge in graph.edges.iter().filter(|e| e.source == node_id) {
            let condition = edge.data.as_ref().and_then(|d| d.get("condition"));
            let pass = condition.map(|c| evaluate(c, event)).unwrap_or(true);
            record_step(state, run_id, &edge.target, pass, None, None).await?;
            if pass {
                queue.push(edge.target.clone());
            }
        }
    }

    finish_run(state, run_id, "completed", None).await?;
    Ok(())
}

async fn execute_emit_node(
    state: &AppState,
    run_id: Uuid,
    node: &crate::models::FlowNode,
    event: &EndpointEvent,
) -> Result<(), crate::models::AppError> {
    let target_service = node
        .data
        .get("target_service")
        .and_then(|v| v.as_str())
        .unwrap_or("");
    let event_name = node
        .data
        .get("event")
        .and_then(|v| v.as_str())
        .unwrap_or("");
    let payload_map = node.data.get("payload").cloned().unwrap_or_default();

    let payload = emit::resolve_emit_payload(&payload_map, event).await?;
    let queue = match node.data.get("queue").and_then(|value| value.as_str()) {
        Some(queue) if !queue.is_empty() => queue.to_string(),
        _ => emit::lookup_action_queue(state, target_service, event_name)
            .await?
            .ok_or_else(|| {
                crate::models::AppError::bad_request(format!(
                    "action {target_service}.{event_name} is not present in the catalog"
                ))
            })?,
    };

    emit::emit_to_queue(state, &queue, event_name, &payload).await?;
    record_step(
        state,
        run_id,
        &node.id,
        true,
        Some(event_name.to_string()),
        Some(payload),
    )
    .await?;
    Ok(())
}

async fn record_step(
    state: &AppState,
    run_id: Uuid,
    node_id: &str,
    passed: bool,
    emitted_event: Option<String>,
    payload: Option<serde_json::Value>,
) -> Result<(), crate::models::AppError> {
    let existing = entity::flow_run_step::Entity::find()
        .filter(entity::flow_run_step::Column::FlowRunId.eq(run_id))
        .filter(entity::flow_run_step::Column::NodeId.eq(node_id))
        .one(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    if existing.is_some() {
        return Ok(());
    }

    let model = entity::flow_run_step::ActiveModel {
        id: Set(Uuid::new_v4()),
        flow_run_id: Set(run_id),
        node_id: Set(node_id.to_string()),
        condition_passed: Set(passed),
        emitted_event: Set(emitted_event),
        payload: Set(payload),
        created_at: Set(Utc::now().fixed_offset()),
    };
    model
        .insert(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;
    Ok(())
}

async fn finish_run(
    state: &AppState,
    run_id: Uuid,
    status: &str,
    error: Option<String>,
) -> Result<(), crate::models::AppError> {
    let row = entity::flow_run::Entity::find_by_id(run_id)
        .one(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?
        .ok_or_else(|| crate::models::AppError::not_found("run not found"))?;

    let mut active: entity::flow_run::ActiveModel = row.into();
    active.status = Set(status.into());
    active.error = Set(error);
    active.finished_at = Set(Some(Utc::now().fixed_offset()));
    active
        .update(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;
    Ok(())
}
