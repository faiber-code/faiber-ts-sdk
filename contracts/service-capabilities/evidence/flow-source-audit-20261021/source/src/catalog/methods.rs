use chrono::Utc;
use sea_orm::{ActiveModelTrait, ColumnTrait, EntityTrait, QueryFilter, Set};
use uuid::Uuid;

use crate::{
    catalog::services::{platform_services, service_base_url, ServiceDef},
    state::AppState,
};

#[derive(serde::Serialize)]
pub struct CatalogTriggerView {
    pub service: String,
    pub method: String,
    pub path: String,
    pub trigger_key: String,
}

#[derive(serde::Serialize)]
pub struct CatalogActionView {
    pub service: String,
    pub event_name: String,
    pub queue: String,
    pub payload_fields: serde_json::Value,
}

#[derive(serde::Serialize)]
pub struct CatalogSyncFailure {
    pub service: String,
    pub source: String,
    pub error: String,
}

#[derive(serde::Serialize)]
pub struct CatalogSyncReport {
    pub triggers: usize,
    pub actions: usize,
    pub succeeded_services: Vec<String>,
    pub failed_services: Vec<CatalogSyncFailure>,
}

pub async fn sync_catalog(state: &AppState) -> Result<CatalogSyncReport, crate::models::AppError> {
    let client = reqwest::Client::new();
    let services = platform_services();
    let mut trigger_count = 0usize;
    let mut action_count = 0usize;
    let mut succeeded_services = Vec::new();
    let mut failed_services = Vec::new();

    for svc in &services {
        let trigger_result = sync_triggers_for_service(state, &client, svc).await;
        let action_result = sync_actions_for_service(state, &client, svc).await;

        match trigger_result {
            Ok(count) => trigger_count += count,
            Err(error) => failed_services.push(CatalogSyncFailure {
                service: svc.slug.clone(),
                source: "openapi".into(),
                error,
            }),
        }
        match action_result {
            Ok(count) => action_count += count,
            Err(error) => failed_services.push(CatalogSyncFailure {
                service: svc.slug.clone(),
                source: "actions".into(),
                error,
            }),
        }
        if !failed_services
            .iter()
            .any(|failure| failure.service == svc.slug)
        {
            succeeded_services.push(svc.slug.clone());
        }
    }

    Ok(CatalogSyncReport {
        triggers: trigger_count,
        actions: action_count,
        succeeded_services,
        failed_services,
    })
}

async fn sync_triggers_for_service(
    state: &AppState,
    client: &reqwest::Client,
    svc: &ServiceDef,
) -> Result<usize, String> {
    let base = service_base_url(svc);
    let url = format!("{base}/api/openapi.json");
    let resp = client.get(&url).send().await;
    let Ok(resp) = resp else {
        tracing::warn!(service = %svc.slug, url = %url, "openapi fetch failed");
        return Err("request failed".into());
    };
    if !resp.status().is_success() {
        return Err(format!("HTTP {}", resp.status()));
    }
    let doc: serde_json::Value = resp
        .json()
        .await
        .map_err(|e| format!("invalid JSON: {e}"))?;

    let paths = doc.get("paths").and_then(|p| p.as_object());
    let Some(paths) = paths else {
        return Ok(0);
    };

    let mut count = 0usize;
    let now = Utc::now().fixed_offset();

    for (path, methods) in paths {
        let Some(methods) = methods.as_object() else {
            continue;
        };
        for (method, _) in methods {
            if method == "parameters" {
                continue;
            }
            let trigger_key = format!(
                "endpoint.{}.{}.{}",
                svc.slug,
                method.to_uppercase(),
                path.trim_start_matches('/').replace('/', ".")
            );

            entity::catalog_trigger::Entity::delete_many()
                .filter(entity::catalog_trigger::Column::TriggerKey.eq(&trigger_key))
                .exec(state.db.as_ref())
                .await
                .map_err(|e| e.to_string())?;

            let model = entity::catalog_trigger::ActiveModel {
                id: Set(Uuid::new_v4()),
                service: Set(svc.slug.clone()),
                method: Set(method.to_uppercase()),
                path: Set(path.clone()),
                trigger_key: Set(trigger_key),
                schema_fields: Set(None),
                updated_at: Set(now),
            };
            if model.insert(state.db.as_ref()).await.is_ok() {
                count += 1;
            }
        }
    }
    Ok(count)
}

async fn sync_actions_for_service(
    state: &AppState,
    client: &reqwest::Client,
    svc: &ServiceDef,
) -> Result<usize, String> {
    let base = service_base_url(svc);
    let url = format!("{base}/api/v1/integration/flow");
    let resp = client.get(&url).send().await;
    let Ok(resp) = resp else {
        return Err("request failed".into());
    };
    if !resp.status().is_success() {
        return Err(format!("HTTP {}", resp.status()));
    }

    let body: serde_json::Value = resp
        .json()
        .await
        .map_err(|e| format!("invalid JSON: {e}"))?;
    let data = body.get("data").cloned().unwrap_or(body);
    let queue = data
        .get("queue")
        .and_then(|v| v.as_str())
        .unwrap_or("")
        .to_string();
    let events = data
        .get("events")
        .and_then(|v| v.as_array())
        .cloned()
        .unwrap_or_default();

    let now = Utc::now().fixed_offset();
    let mut count = 0usize;
    for event in events {
        let event_name = event
            .get("event_name")
            .and_then(|v| v.as_str())
            .unwrap_or("")
            .to_string();
        if event_name.is_empty() {
            continue;
        }
        let payload_fields = event
            .get("payload_fields")
            .cloned()
            .unwrap_or_else(|| serde_json::json!([]));

        entity::catalog_action::Entity::delete_many()
            .filter(entity::catalog_action::Column::Service.eq(&svc.slug))
            .filter(entity::catalog_action::Column::EventName.eq(&event_name))
            .exec(state.db.as_ref())
            .await
            .map_err(|e| e.to_string())?;

        let model = entity::catalog_action::ActiveModel {
            id: Set(Uuid::new_v4()),
            service: Set(svc.slug.clone()),
            event_name: Set(event_name),
            queue: Set(queue.clone()),
            payload_fields: Set(payload_fields),
            updated_at: Set(now),
        };
        if model.insert(state.db.as_ref()).await.is_ok() {
            count += 1;
        }
    }
    Ok(count)
}

pub async fn list_triggers(
    state: &AppState,
) -> Result<Vec<CatalogTriggerView>, crate::models::AppError> {
    let rows = entity::catalog_trigger::Entity::find()
        .all(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    Ok(rows
        .into_iter()
        .map(|r| CatalogTriggerView {
            service: r.service,
            method: r.method,
            path: r.path,
            trigger_key: r.trigger_key,
        })
        .collect())
}

pub async fn list_actions(
    state: &AppState,
) -> Result<Vec<CatalogActionView>, crate::models::AppError> {
    let rows = entity::catalog_action::Entity::find()
        .all(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    Ok(rows
        .into_iter()
        .map(|r| CatalogActionView {
            service: r.service,
            event_name: r.event_name,
            queue: r.queue,
            payload_fields: r.payload_fields,
        })
        .collect())
}
