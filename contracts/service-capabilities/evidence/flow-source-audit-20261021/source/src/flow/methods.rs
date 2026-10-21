use chrono::Utc;
use sea_orm::{
    ActiveModelTrait, ColumnTrait, EntityTrait, QueryFilter, QueryOrder, Set, TransactionTrait,
};
use slug::slugify;
use uuid::Uuid;
use validator::Validate;

use crate::{
    models::{FlowGraph, RegistryTriggerEntry},
    registry::methods::{bump_registry_and_notify, extract_capture_fields},
    state::AppState,
};

use super::models::{
    CreateFlowRequest, FlowResponse, ImportEventBridgeEntry, ImportEventBridgeGroupEntry,
    ImportFlowEntry, ImportFlowsRequest, ImportFlowsResponse, UpdateFlowRequest,
};

pub async fn list_flows(state: &AppState) -> Result<Vec<FlowResponse>, crate::models::AppError> {
    let rows = entity::flow::Entity::find()
        .order_by_desc(entity::flow::Column::UpdatedAt)
        .all(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    Ok(rows.into_iter().map(FlowResponse::from).collect())
}

pub async fn get_flow(state: &AppState, id: Uuid) -> Result<FlowResponse, crate::models::AppError> {
    let row = entity::flow::Entity::find_by_id(id)
        .one(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?
        .ok_or_else(|| crate::models::AppError::not_found("flow not found"))?;

    Ok(FlowResponse::from(row))
}

pub async fn create_flow(
    state: &AppState,
    req: CreateFlowRequest,
) -> Result<FlowResponse, crate::models::AppError> {
    req.validate()
        .map_err(|e| crate::models::AppError::bad_request(e.to_string()))?;

    let slug = req
        .slug
        .clone()
        .map(|value| slugify(&value))
        .unwrap_or_else(|| slugify(&req.name));
    if slug.is_empty() {
        return Err(crate::models::AppError::bad_request(
            "flow slug cannot be empty",
        ));
    }
    if entity::flow::Entity::find()
        .filter(entity::flow::Column::Slug.eq(&slug))
        .one(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?
        .is_some()
    {
        return Err(crate::models::AppError::conflict(
            "flow slug already exists",
        ));
    }
    let graph = req.graph.clone().unwrap_or_default_graph(&req.trigger_key);
    let errors = validate_flow_graph(&graph).await?;
    if !errors.is_empty() {
        return Err(crate::models::AppError::bad_request(errors.join("; ")));
    }
    let capture_fields = extract_capture_fields(&graph);

    let now = Utc::now().fixed_offset();
    let model = entity::flow::ActiveModel {
        id: Set(Uuid::new_v4()),
        name: Set(req.name),
        slug: Set(slug),
        enabled: Set(req.enabled.unwrap_or(false)),
        trigger_key: Set(req.trigger_key),
        capture_fields: Set(serde_json::to_value(capture_fields).unwrap_or_default()),
        graph: Set(serde_json::to_value(&graph).unwrap_or_default()),
        version: Set(1),
        created_at: Set(now),
        updated_at: Set(now),
    };

    let row = model
        .insert(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    if row.enabled {
        bump_registry_and_notify(state).await?;
    }

    Ok(FlowResponse::from(row))
}

pub async fn update_flow(
    state: &AppState,
    id: Uuid,
    req: UpdateFlowRequest,
) -> Result<FlowResponse, crate::models::AppError> {
    req.validate()
        .map_err(|e| crate::models::AppError::bad_request(e.to_string()))?;

    let existing = entity::flow::Entity::find_by_id(id)
        .one(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?
        .ok_or_else(|| crate::models::AppError::not_found("flow not found"))?;

    let requested_trigger = req.trigger_key.clone();
    let mut graph = req
        .graph
        .clone()
        .unwrap_or_else(|| serde_json::from_value(existing.graph.clone()).unwrap_or_default());
    if let Some(trigger_key) = requested_trigger.as_deref() {
        for node in graph
            .nodes
            .iter_mut()
            .filter(|node| node.node_type == "trigger")
        {
            if let Some(data) = node.data.as_object_mut() {
                data.insert("trigger_key".into(), trigger_key.into());
            }
        }
    }
    let errors = validate_flow_graph(&graph).await?;
    if !errors.is_empty() {
        return Err(crate::models::AppError::bad_request(errors.join("; ")));
    }
    let capture_fields = extract_capture_fields(&graph);
    let now = Utc::now().fixed_offset();
    let graph_updated = req.graph.is_some() || requested_trigger.is_some();

    let mut active: entity::flow::ActiveModel = existing.into();
    if let Some(name) = req.name {
        active.name = Set(name);
    }
    if let Some(slug) = req.slug {
        let slug = slugify(&slug);
        if slug.is_empty() {
            return Err(crate::models::AppError::bad_request(
                "flow slug cannot be empty",
            ));
        }
        let duplicate = entity::flow::Entity::find()
            .filter(entity::flow::Column::Slug.eq(&slug))
            .filter(entity::flow::Column::Id.ne(id))
            .one(state.db.as_ref())
            .await
            .map_err(|e| crate::models::AppError::internal(e.to_string()))?;
        if duplicate.is_some() {
            return Err(crate::models::AppError::conflict(
                "flow slug already exists",
            ));
        }
        active.slug = Set(slug);
    }
    if let Some(enabled) = req.enabled {
        active.enabled = Set(enabled);
    }
    if let Some(trigger_key) = req.trigger_key {
        active.trigger_key = Set(trigger_key);
    }
    if graph_updated {
        active.graph = Set(serde_json::to_value(&graph).unwrap_or_default());
        active.capture_fields = Set(serde_json::to_value(capture_fields).unwrap_or_default());
        let v = active.version.clone().unwrap() + 1;
        active.version = Set(v);
    }
    active.updated_at = Set(now);

    let row = active
        .update(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    bump_registry_and_notify(state).await?;

    Ok(FlowResponse::from(row))
}

pub async fn delete_flow(state: &AppState, id: Uuid) -> Result<(), crate::models::AppError> {
    let result = entity::flow::Entity::delete_by_id(id)
        .exec(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    if result.rows_affected == 0 {
        return Err(crate::models::AppError::not_found("flow not found"));
    }

    bump_registry_and_notify(state).await?;
    Ok(())
}

pub async fn import_flows(
    state: &AppState,
    request: ImportFlowsRequest,
) -> Result<ImportFlowsResponse, crate::models::AppError> {
    let dry_run = request.dry_run;
    let entries = expand_import_request(request)?;
    if entries.is_empty() {
        return Err(crate::models::AppError::bad_request(
            "manifest must contain at least one flow or event bridge",
        ));
    }

    let mut prepared = Vec::with_capacity(entries.len());
    let mut slugs = std::collections::HashSet::new();
    for entry in entries {
        let slug = entry
            .slug
            .as_deref()
            .map(slugify)
            .unwrap_or_else(|| slugify(&entry.name));
        if slug.is_empty() {
            return Err(crate::models::AppError::bad_request(format!(
                "flow '{}' has an empty slug",
                entry.name
            )));
        }
        if !slugs.insert(slug.clone()) {
            return Err(crate::models::AppError::bad_request(format!(
                "manifest contains duplicate slug '{slug}'"
            )));
        }
        let errors = validate_flow_graph(&entry.graph).await?;
        if !errors.is_empty() {
            return Err(crate::models::AppError::bad_request(format!(
                "flow '{slug}' is invalid: {}",
                errors.join("; ")
            )));
        }
        prepared.push((slug, entry));
    }

    let transaction = state
        .db
        .begin()
        .await
        .map_err(|error| crate::models::AppError::internal(error.to_string()))?;
    let mut response = ImportFlowsResponse {
        validated: prepared.len(),
        created: 0,
        updated: 0,
        unchanged: 0,
        dry_run,
    };

    for (slug, entry) in prepared {
        let graph_value = serde_json::to_value(&entry.graph).unwrap_or_default();
        let capture_fields =
            serde_json::to_value(extract_capture_fields(&entry.graph)).unwrap_or_default();
        let existing = entity::flow::Entity::find()
            .filter(entity::flow::Column::Slug.eq(&slug))
            .one(&transaction)
            .await
            .map_err(|error| crate::models::AppError::internal(error.to_string()))?;

        match existing {
            None => {
                response.created += 1;
                if !dry_run {
                    let now = Utc::now().fixed_offset();
                    entity::flow::ActiveModel {
                        id: Set(Uuid::new_v4()),
                        name: Set(entry.name),
                        slug: Set(slug),
                        enabled: Set(entry.enabled),
                        trigger_key: Set(entry.trigger_key),
                        capture_fields: Set(capture_fields),
                        graph: Set(graph_value),
                        version: Set(1),
                        created_at: Set(now),
                        updated_at: Set(now),
                    }
                    .insert(&transaction)
                    .await
                    .map_err(|error| crate::models::AppError::internal(error.to_string()))?;
                }
            }
            Some(existing) => {
                let changed = existing.name != entry.name
                    || existing.enabled != entry.enabled
                    || existing.trigger_key != entry.trigger_key
                    || existing.capture_fields != capture_fields
                    || existing.graph != graph_value;
                if changed {
                    response.updated += 1;
                    if !dry_run {
                        let next_version = existing.version + 1;
                        let mut active: entity::flow::ActiveModel = existing.into();
                        active.name = Set(entry.name);
                        active.enabled = Set(entry.enabled);
                        active.trigger_key = Set(entry.trigger_key);
                        active.capture_fields = Set(capture_fields);
                        active.graph = Set(graph_value);
                        active.version = Set(next_version);
                        active.updated_at = Set(Utc::now().fixed_offset());
                        active.update(&transaction).await.map_err(|error| {
                            crate::models::AppError::internal(error.to_string())
                        })?;
                    }
                } else {
                    response.unchanged += 1;
                }
            }
        }
    }

    if dry_run {
        transaction
            .rollback()
            .await
            .map_err(|error| crate::models::AppError::internal(error.to_string()))?;
    } else {
        transaction
            .commit()
            .await
            .map_err(|error| crate::models::AppError::internal(error.to_string()))?;
        if response.created > 0 || response.updated > 0 {
            bump_registry_and_notify(state).await?;
        }
    }

    Ok(response)
}

fn expand_import_request(
    request: ImportFlowsRequest,
) -> Result<Vec<ImportFlowEntry>, crate::models::AppError> {
    let mut entries = request.flows;
    for bridge in request.event_bridges {
        entries.push(expand_event_bridge(bridge)?);
    }
    for group in request.event_bridge_groups {
        entries.extend(expand_event_bridge_group(group)?);
    }
    Ok(entries)
}

fn expand_event_bridge_group(
    group: ImportEventBridgeGroupEntry,
) -> Result<Vec<ImportFlowEntry>, crate::models::AppError> {
    if group.event_keys.is_empty() {
        return Err(crate::models::AppError::bad_request(
            "event bridge group requires at least one event key",
        ));
    }
    let name_prefix = group.name_prefix.unwrap_or_else(|| "Event".into());
    let slug_prefix = group.slug_prefix.unwrap_or_default();
    group
        .event_keys
        .into_iter()
        .map(|event_key| {
            let payload = group
                .payload
                .iter()
                .map(|(key, value)| (key.clone(), replace_event_key(value.clone(), &event_key)))
                .collect();
            expand_event_bridge(ImportEventBridgeEntry {
                name: format!("{name_prefix} · {event_key}"),
                slug: Some(if slug_prefix.is_empty() {
                    event_key.clone()
                } else {
                    format!("{slug_prefix}-{event_key}")
                }),
                event_key,
                enabled: group.enabled,
                target_service: group.target_service.clone(),
                target_event: group.target_event.clone(),
                queue: group.queue.clone(),
                payload,
                condition: group.condition.clone(),
            })
        })
        .collect()
}

fn replace_event_key(value: serde_json::Value, event_key: &str) -> serde_json::Value {
    match value {
        serde_json::Value::String(value) => {
            serde_json::Value::String(value.replace("{{manifest.event_key}}", event_key))
        }
        serde_json::Value::Array(values) => serde_json::Value::Array(
            values
                .into_iter()
                .map(|value| replace_event_key(value, event_key))
                .collect(),
        ),
        serde_json::Value::Object(values) => serde_json::Value::Object(
            values
                .into_iter()
                .map(|(key, value)| (key, replace_event_key(value, event_key)))
                .collect(),
        ),
        value => value,
    }
}

fn expand_event_bridge(
    bridge: ImportEventBridgeEntry,
) -> Result<ImportFlowEntry, crate::models::AppError> {
    crate::event::routes::validate_event_key(&bridge.event_key)?;
    if bridge.target_service.trim().is_empty() || bridge.target_event.trim().is_empty() {
        return Err(crate::models::AppError::bad_request(format!(
            "event bridge '{}' requires target_service and target_event",
            bridge.name
        )));
    }
    let trigger_key = format!("event.{}", bridge.event_key);
    let mut emit_data = serde_json::json!({
        "target_service": bridge.target_service,
        "event": bridge.target_event,
        "payload": bridge.payload,
    });
    if let Some(queue) = bridge.queue.filter(|value| !value.trim().is_empty()) {
        emit_data["queue"] = queue.into();
    }
    let graph = FlowGraph {
        nodes: vec![
            super::models::flow_graph_trigger_node(&trigger_key),
            crate::models::FlowNode {
                id: "emit".into(),
                node_type: "emit".into(),
                position: Some(serde_json::json!({"x": 320, "y": 0})),
                data: emit_data,
            },
        ],
        edges: vec![crate::models::FlowEdge {
            id: "trigger-to-emit".into(),
            source: "trigger".into(),
            target: "emit".into(),
            data: Some(serde_json::json!({
                "condition": bridge.condition.unwrap_or_else(|| serde_json::json!({"op": "always"}))
            })),
        }],
    };
    Ok(ImportFlowEntry {
        name: bridge.name,
        slug: bridge.slug,
        trigger_key,
        enabled: bridge.enabled,
        graph,
    })
}

pub async fn validate_flow_graph(
    graph: &FlowGraph,
) -> Result<Vec<String>, crate::models::AppError> {
    let mut errors = Vec::new();
    let triggers: Vec<_> = graph
        .nodes
        .iter()
        .filter(|n| n.node_type == "trigger")
        .collect();
    if triggers.is_empty() {
        errors.push("graph must have a trigger node".into());
    }
    if triggers.len() > 1 {
        errors.push("graph must have exactly one trigger node".into());
    }
    for edge in &graph.edges {
        if !graph.nodes.iter().any(|n| n.id == edge.source) {
            errors.push(format!(
                "edge {} references missing source {}",
                edge.id, edge.source
            ));
        }
        if !graph.nodes.iter().any(|n| n.id == edge.target) {
            errors.push(format!(
                "edge {} references missing target {}",
                edge.id, edge.target
            ));
        }
        if let Some(condition) = edge.data.as_ref().and_then(|data| data.get("condition")) {
            validate_condition(
                condition,
                &format!("edge {} condition", edge.id),
                &mut errors,
            );
        }
    }
    let mut node_ids = std::collections::HashSet::new();
    for node in &graph.nodes {
        if node.id.trim().is_empty() {
            errors.push("node id cannot be empty".into());
        } else if !node_ids.insert(node.id.as_str()) {
            errors.push(format!("duplicate node id {}", node.id));
        }
        if node.node_type == "emit" {
            let service = node
                .data
                .get("target_service")
                .and_then(|value| value.as_str());
            let event = node.data.get("event").and_then(|value| value.as_str());
            if service.is_none_or(str::is_empty) {
                errors.push(format!("emit node {} is missing target_service", node.id));
            }
            if event.is_none_or(str::is_empty) {
                errors.push(format!("emit node {} is missing event", node.id));
            }
            if !node
                .data
                .get("payload")
                .is_some_and(|value| value.is_object())
            {
                errors.push(format!("emit node {} payload must be an object", node.id));
            }
        }
    }
    Ok(errors)
}

fn validate_condition(condition: &serde_json::Value, label: &str, errors: &mut Vec<String>) {
    let Some(op) = condition.get("op").and_then(|value| value.as_str()) else {
        errors.push(format!("{label} must have an op"));
        return;
    };
    match op {
        "always" | "success" | "failure" => {}
        "field_eq" | "field_gt" => {
            if condition
                .get("path")
                .and_then(|value| value.as_str())
                .is_none_or(str::is_empty)
            {
                errors.push(format!("{label} {op} requires a path"));
            }
            if condition.get("value").is_none() {
                errors.push(format!("{label} {op} requires a value"));
            } else if op == "field_gt"
                && condition
                    .get("value")
                    .and_then(|value| value.as_f64())
                    .is_none()
            {
                errors.push(format!("{label} field_gt requires a numeric value"));
            }
        }
        "field_exists" => {
            if condition
                .get("path")
                .and_then(|value| value.as_str())
                .is_none_or(str::is_empty)
            {
                errors.push(format!("{label} field_exists requires a path"));
            }
        }
        "and" | "or" => match condition
            .get("conditions")
            .and_then(|value| value.as_array())
        {
            Some(conditions) if !conditions.is_empty() => {
                for (index, child) in conditions.iter().enumerate() {
                    validate_condition(child, &format!("{label}.{op}[{index}]"), errors);
                }
            }
            _ => errors.push(format!(
                "{label} {op} requires a non-empty conditions array"
            )),
        },
        _ => errors.push(format!("{label} uses unsupported op {op}")),
    }
}

pub async fn build_active_triggers(
    state: &AppState,
    service_filter: Option<&str>,
) -> Result<Vec<RegistryTriggerEntry>, crate::models::AppError> {
    let rows = entity::flow::Entity::find()
        .filter(entity::flow::Column::Enabled.eq(true))
        .all(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    let mut map: std::collections::HashMap<String, std::collections::HashSet<String>> =
        std::collections::HashMap::new();

    for row in rows {
        if let Some(service) = service_filter {
            let prefix = format!("endpoint.{service}.");
            if !row.trigger_key.starts_with(&prefix) {
                continue;
            }
        }
        let fields: Vec<String> =
            serde_json::from_value(row.capture_fields.clone()).unwrap_or_default();
        map.entry(row.trigger_key)
            .or_default()
            .extend(fields.into_iter());
    }

    Ok(map
        .into_iter()
        .map(|(trigger_key, set)| RegistryTriggerEntry {
            trigger_key,
            capture_fields: set.into_iter().collect(),
        })
        .collect())
}

trait DefaultGraph {
    fn unwrap_or_default_graph(self, trigger_key: &str) -> FlowGraph;
}

impl DefaultGraph for Option<FlowGraph> {
    fn unwrap_or_default_graph(self, trigger_key: &str) -> FlowGraph {
        self.unwrap_or_else(|| FlowGraph {
            nodes: vec![super::models::flow_graph_trigger_node(trigger_key)],
            edges: vec![],
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::models::{FlowEdge, FlowNode};

    #[tokio::test]
    async fn validation_rejects_unconfigured_emit_nodes() {
        let graph = FlowGraph {
            nodes: vec![
                super::super::models::flow_graph_trigger_node(
                    "endpoint.profile.POST.api.v1.me.pets",
                ),
                FlowNode {
                    id: "emit-asset".into(),
                    node_type: "emit".into(),
                    position: None,
                    data: serde_json::json!({"target_service": "asset"}),
                },
            ],
            edges: vec![FlowEdge {
                id: "edge-1".into(),
                source: "trigger".into(),
                target: "emit-asset".into(),
                data: None,
            }],
        };

        let errors = validate_flow_graph(&graph).await.unwrap();
        assert!(errors.iter().any(|error| error.contains("missing event")));
        assert!(errors
            .iter()
            .any(|error| error.contains("payload must be an object")));
    }

    #[tokio::test]
    async fn validation_accepts_asset_action_flow() {
        let graph = FlowGraph {
            nodes: vec![
                super::super::models::flow_graph_trigger_node(
                    "endpoint.profile.POST.api.v1.me.pets",
                ),
                FlowNode {
                    id: "emit-asset".into(),
                    node_type: "emit".into(),
                    position: None,
                    data: serde_json::json!({
                        "target_service": "asset",
                        "event": "asset.action.complete",
                        "payload": {
                            "action_name": {"kind": "static", "value": "sezar.pet.registered"},
                            "profile_id": {"kind": "expr", "value": "{{event.user_id}}"}
                        }
                    }),
                },
            ],
            edges: vec![FlowEdge {
                id: "edge-1".into(),
                source: "trigger".into(),
                target: "emit-asset".into(),
                data: Some(serde_json::json!({"condition": {"op": "success"}})),
            }],
        };

        assert!(validate_flow_graph(&graph).await.unwrap().is_empty());
    }

    #[tokio::test]
    async fn validation_rejects_unsafe_edge_conditions() {
        let graph = FlowGraph {
            nodes: vec![super::super::models::flow_graph_trigger_node(
                "endpoint.lms.POST.api.v1.academy.attempts.{id}.submit",
            )],
            edges: vec![FlowEdge {
                id: "edge-1".into(),
                source: "trigger".into(),
                target: "trigger".into(),
                data: Some(
                    serde_json::json!({"condition": {"op": "field_eq", "path": "event.response.data_passed"}}),
                ),
            }],
        };

        let errors = validate_flow_graph(&graph).await.unwrap();
        assert!(errors
            .iter()
            .any(|error| error.contains("field_eq requires a value")));
    }

    #[test]
    fn expands_a_generic_event_bridge_without_domain_assumptions() {
        let entry = expand_event_bridge(ImportEventBridgeEntry {
            name: "Checkout completed".into(),
            slug: Some("checkout-completed".into()),
            event_key: "commerce.checkout.completed".into(),
            enabled: true,
            target_service: "ledger".into(),
            target_event: "ledger.credit".into(),
            queue: Some("ledger_queue".into()),
            payload: serde_json::Map::from_iter([(
                "customer_id".into(),
                serde_json::json!({"kind": "expr", "value": "{{event.user_id}}"}),
            )]),
            condition: None,
        })
        .unwrap();

        assert_eq!(entry.trigger_key, "event.commerce.checkout.completed");
        assert_eq!(entry.graph.nodes[1].data["target_service"], "ledger");
        assert_eq!(entry.graph.nodes[1].data["queue"], "ledger_queue");
    }

    #[test]
    fn rejects_duplicate_manifest_slugs_after_normalization() {
        let request = ImportFlowsRequest {
            version: Some(1),
            source: None,
            dry_run: true,
            flows: vec![],
            event_bridges: vec![
                ImportEventBridgeEntry {
                    name: "First".into(),
                    slug: Some("same slug".into()),
                    event_key: "first.completed".into(),
                    enabled: true,
                    target_service: "target".into(),
                    target_event: "target.complete".into(),
                    queue: None,
                    payload: serde_json::Map::new(),
                    condition: None,
                },
                ImportEventBridgeEntry {
                    name: "Second".into(),
                    slug: Some("same-slug".into()),
                    event_key: "second.completed".into(),
                    enabled: true,
                    target_service: "target".into(),
                    target_event: "target.complete".into(),
                    queue: None,
                    payload: serde_json::Map::new(),
                    condition: None,
                },
            ],
            event_bridge_groups: vec![],
        };
        let entries = expand_import_request(request).unwrap();
        let mut slugs = std::collections::HashSet::new();
        assert!(!entries
            .iter()
            .map(|entry| slugify(entry.slug.as_deref().unwrap_or(&entry.name)))
            .all(|slug| slugs.insert(slug)));
    }

    #[test]
    fn expands_event_bridge_groups_and_templates_event_keys() {
        let entries = expand_event_bridge_group(ImportEventBridgeGroupEntry {
            name_prefix: Some("Rewards".into()),
            slug_prefix: Some("rewards".into()),
            event_keys: vec!["checkout.completed".into(), "profile.completed".into()],
            enabled: true,
            target_service: "asset".into(),
            target_event: "asset.action.complete".into(),
            queue: Some("asset_queue".into()),
            payload: serde_json::Map::from_iter([(
                "action_name".into(),
                serde_json::json!({"kind": "static", "value": "{{manifest.event_key}}"}),
            )]),
            condition: None,
        })
        .unwrap();

        assert_eq!(entries.len(), 2);
        assert_eq!(
            entries[0].slug.as_deref(),
            Some("rewards-checkout.completed")
        );
        assert_eq!(
            entries[1].graph.nodes[1].data["payload"]["action_name"]["value"],
            "profile.completed"
        );
    }
}
