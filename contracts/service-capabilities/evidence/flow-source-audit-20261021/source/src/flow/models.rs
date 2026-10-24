use chrono::{DateTime, FixedOffset};
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;
use uuid::Uuid;
use validator::Validate;

use crate::models::FlowGraph;

#[derive(Debug, Serialize, Deserialize, ToSchema, Validate)]
pub struct CreateFlowRequest {
    #[validate(length(min = 1, max = 200))]
    pub name: String,
    pub slug: Option<String>,
    #[validate(length(min = 1))]
    pub trigger_key: String,
    pub enabled: Option<bool>,
    pub graph: Option<FlowGraph>,
}

#[derive(Debug, Serialize, Deserialize, ToSchema, Validate)]
pub struct UpdateFlowRequest {
    pub name: Option<String>,
    pub slug: Option<String>,
    pub trigger_key: Option<String>,
    pub enabled: Option<bool>,
    pub graph: Option<FlowGraph>,
}

#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct ImportFlowsRequest {
    pub version: Option<u32>,
    pub source: Option<String>,
    #[serde(default)]
    pub dry_run: bool,
    #[serde(default)]
    pub flows: Vec<ImportFlowEntry>,
    #[serde(default)]
    pub event_bridges: Vec<ImportEventBridgeEntry>,
    #[serde(default)]
    pub event_bridge_groups: Vec<ImportEventBridgeGroupEntry>,
}

#[derive(Debug, Serialize, Deserialize, ToSchema, Clone)]
pub struct ImportFlowEntry {
    pub name: String,
    pub slug: Option<String>,
    pub trigger_key: String,
    #[serde(default = "default_enabled")]
    pub enabled: bool,
    pub graph: FlowGraph,
}

#[derive(Debug, Serialize, Deserialize, ToSchema, Clone)]
pub struct ImportEventBridgeEntry {
    pub name: String,
    pub slug: Option<String>,
    pub event_key: String,
    #[serde(default = "default_enabled")]
    pub enabled: bool,
    pub target_service: String,
    pub target_event: String,
    pub queue: Option<String>,
    pub payload: serde_json::Map<String, serde_json::Value>,
    pub condition: Option<serde_json::Value>,
}

#[derive(Debug, Serialize, Deserialize, ToSchema, Clone)]
pub struct ImportEventBridgeGroupEntry {
    pub name_prefix: Option<String>,
    pub slug_prefix: Option<String>,
    pub event_keys: Vec<String>,
    #[serde(default = "default_enabled")]
    pub enabled: bool,
    pub target_service: String,
    pub target_event: String,
    pub queue: Option<String>,
    pub payload: serde_json::Map<String, serde_json::Value>,
    pub condition: Option<serde_json::Value>,
}

fn default_enabled() -> bool {
    true
}

#[derive(Debug, Serialize, ToSchema)]
pub struct ImportFlowsResponse {
    pub validated: usize,
    pub created: usize,
    pub updated: usize,
    pub unchanged: usize,
    pub dry_run: bool,
}

#[derive(Debug, Serialize, ToSchema)]
pub struct FlowResponse {
    pub id: Uuid,
    pub name: String,
    pub slug: String,
    pub enabled: bool,
    pub trigger_key: String,
    pub capture_fields: Vec<String>,
    pub graph: FlowGraph,
    pub version: i32,
    pub created_at: DateTime<FixedOffset>,
    pub updated_at: DateTime<FixedOffset>,
}

impl From<entity::flow::Model> for FlowResponse {
    fn from(m: entity::flow::Model) -> Self {
        Self {
            id: m.id,
            name: m.name,
            slug: m.slug,
            enabled: m.enabled,
            trigger_key: m.trigger_key,
            capture_fields: serde_json::from_value(m.capture_fields).unwrap_or_default(),
            graph: serde_json::from_value(m.graph).unwrap_or_else(|_| FlowGraph {
                nodes: vec![],
                edges: vec![],
            }),
            version: m.version,
            created_at: m.created_at,
            updated_at: m.updated_at,
        }
    }
}

pub fn flow_graph_trigger_node(trigger_key: &str) -> crate::models::FlowNode {
    crate::models::FlowNode {
        id: "trigger".into(),
        node_type: "trigger".into(),
        position: Some(serde_json::json!({"x": 0, "y": 0})),
        data: serde_json::json!({
            "trigger_key": trigger_key,
            "capture_fields": []
        }),
    }
}
