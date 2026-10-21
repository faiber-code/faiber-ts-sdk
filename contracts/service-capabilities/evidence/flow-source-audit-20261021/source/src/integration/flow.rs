use infera_flow_sdk::flow_integration_meta;

pub fn integration_meta() -> infera_flow_sdk::FlowIntegrationResponse {
    flow_integration_meta("flow_queue", vec![])
}
