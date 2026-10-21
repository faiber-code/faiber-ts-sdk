use sea_orm::{ColumnTrait, EntityTrait, QueryFilter, QueryOrder, QuerySelect};
use serde::Serialize;
use uuid::Uuid;

use crate::state::AppState;

#[derive(Serialize)]
pub struct FlowRunView {
    pub id: Uuid,
    pub flow_id: Uuid,
    pub trigger_event_id: Uuid,
    pub status: String,
    pub error: Option<String>,
    pub started_at: chrono::DateTime<chrono::FixedOffset>,
    pub finished_at: Option<chrono::DateTime<chrono::FixedOffset>>,
}

#[derive(Serialize)]
pub struct FlowRunStepView {
    pub id: Uuid,
    pub node_id: String,
    pub condition_passed: bool,
    pub emitted_event: Option<String>,
    pub payload: Option<serde_json::Value>,
    pub created_at: chrono::DateTime<chrono::FixedOffset>,
}

#[derive(Serialize)]
pub struct FlowRunDetailView {
    #[serde(flatten)]
    pub run: FlowRunView,
    pub context: Option<serde_json::Value>,
    pub steps: Vec<FlowRunStepView>,
}

pub async fn list_runs(
    state: &AppState,
    limit: u64,
) -> Result<Vec<FlowRunView>, crate::models::AppError> {
    let rows = entity::flow_run::Entity::find()
        .order_by_desc(entity::flow_run::Column::StartedAt)
        .limit(limit)
        .all(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    Ok(rows
        .into_iter()
        .map(|r| FlowRunView {
            id: r.id,
            flow_id: r.flow_id,
            trigger_event_id: r.trigger_event_id,
            status: r.status,
            error: r.error,
            started_at: r.started_at,
            finished_at: r.finished_at,
        })
        .collect())
}

pub async fn get_run(
    state: &AppState,
    id: Uuid,
) -> Result<FlowRunDetailView, crate::models::AppError> {
    let row = entity::flow_run::Entity::find_by_id(id)
        .one(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?
        .ok_or_else(|| crate::models::AppError::not_found("run not found"))?;
    let steps = entity::flow_run_step::Entity::find()
        .filter(entity::flow_run_step::Column::FlowRunId.eq(id))
        .order_by_asc(entity::flow_run_step::Column::CreatedAt)
        .all(state.db.as_ref())
        .await
        .map_err(|e| crate::models::AppError::internal(e.to_string()))?;

    Ok(FlowRunDetailView {
        context: row.context.clone(),
        run: FlowRunView {
            id: row.id,
            flow_id: row.flow_id,
            trigger_event_id: row.trigger_event_id,
            status: row.status,
            error: row.error,
            started_at: row.started_at,
            finished_at: row.finished_at,
        },
        steps: steps
            .into_iter()
            .map(|step| FlowRunStepView {
                id: step.id,
                node_id: step.node_id,
                condition_passed: step.condition_passed,
                emitted_event: step.emitted_event,
                payload: step.payload,
                created_at: step.created_at,
            })
            .collect(),
    })
}
