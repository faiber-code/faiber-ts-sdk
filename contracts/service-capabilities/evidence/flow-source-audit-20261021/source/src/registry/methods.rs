use chrono::Utc;
use sea_orm::{ActiveModelTrait, EntityTrait, Set};

use crate::{
    broker::{publish_json, registry_url, REGISTRY_CHANGED_EVENT, REGISTRY_EXCHANGE},
    flow::methods::build_active_triggers,
    models::{ActiveTriggersResponse, FlowGraph, RegistryChangedData},
    state::AppState,
};

const REGISTRY_VERSION_KEY: &str = "registry_version";

pub fn extract_capture_fields(graph: &FlowGraph) -> Vec<String> {
    graph
        .nodes
        .iter()
        .filter(|n| n.node_type == "trigger")
        .flat_map(|n| {
            n.data
                .get("capture_fields")
                .and_then(|v| serde_json::from_value::<Vec<String>>(v.clone()).ok())
                .unwrap_or_default()
        })
        .collect()
}

pub async fn get_registry_version(state: &AppState) -> Result<i64, crate::models::AppError> {
    let row = entity::settings::Entity::find_by_id(REGISTRY_VERSION_KEY)
        .one(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    Ok(row
        .and_then(|r| r.value.parse().ok())
        .unwrap_or(0))
}

async fn set_registry_version(state: &AppState, version: i64) -> Result<(), crate::models::AppError> {
    let now = Utc::now().fixed_offset();
    let existing = entity::settings::Entity::find_by_id(REGISTRY_VERSION_KEY)
        .one(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    if let Some(row) = existing {
        let mut active: entity::settings::ActiveModel = row.into();
        active.value = Set(version.to_string());
        active.updated_at = Set(now);
        active
            .update(state.db.as_ref())
            .await
            .map_err(|e| crate::models::AppError::internal(e.to_string()))?;
    } else {
        let model = entity::settings::ActiveModel {
            key: Set(REGISTRY_VERSION_KEY.into()),
            value: Set(version.to_string()),
            updated_at: Set(now),
        };
        model
            .insert(state.db.as_ref())
            .await
            .map_err(|e| crate::models::AppError::internal(e.to_string()))?;
    }
    Ok(())
}

pub async fn bump_registry_and_notify(state: &AppState) -> Result<(), crate::models::AppError> {
    let version = get_registry_version(state).await? + 1;
    set_registry_version(state, version).await?;

    let data = RegistryChangedData {
        version,
        registry_url: state.registry_url.to_string(),
    };

    publish_json(
        state.broker_channel.as_ref(),
        REGISTRY_EXCHANGE,
        "",
        REGISTRY_CHANGED_EVENT,
        &serde_json::to_value(&data).unwrap_or_default(),
    )
    .await
    .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    tracing::info!(version, "registry changed notification published");
    Ok(())
}

pub async fn active_triggers_response(
    state: &AppState,
    service_filter: Option<&str>,
) -> Result<ActiveTriggersResponse, crate::models::AppError> {
    let version = get_registry_version(state).await?;
    let triggers = build_active_triggers(state, service_filter).await?;
    Ok(ActiveTriggersResponse {
        version,
        triggers,
    })
}

pub async fn notify_on_startup(state: &AppState) -> Result<(), crate::models::AppError> {
    let version = get_registry_version(state).await?;
    let data = RegistryChangedData {
        version,
        registry_url: registry_url(),
    };
    publish_json(
        state.broker_channel.as_ref(),
        REGISTRY_EXCHANGE,
        "",
        REGISTRY_CHANGED_EVENT,
        &serde_json::to_value(&data).unwrap_or_default(),
    )
    .await
    .map_err(|e| crate::models::AppError::internal(e.to_string()))?;
    Ok(())
}
