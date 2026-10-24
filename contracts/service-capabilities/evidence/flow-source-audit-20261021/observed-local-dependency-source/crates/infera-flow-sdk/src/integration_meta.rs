use serde::Serialize;

#[derive(Debug, Serialize)]
pub struct IntegrationField {
    pub name: String,
    pub field_type: String,
    pub required: bool,
    pub description: String,
}

#[derive(Debug, Serialize)]
pub struct IntegrationEventMeta {
    pub event_name: String,
    pub payload_fields: Vec<IntegrationField>,
}

#[derive(Debug, Serialize)]
pub struct FlowIntegrationResponse {
    pub queue: String,
    pub events: Vec<IntegrationEventMeta>,
}

pub fn flow_integration_meta(
    queue: &str,
    events: Vec<IntegrationEventMeta>,
) -> FlowIntegrationResponse {
    FlowIntegrationResponse {
        queue: queue.to_string(),
        events,
    }
}
