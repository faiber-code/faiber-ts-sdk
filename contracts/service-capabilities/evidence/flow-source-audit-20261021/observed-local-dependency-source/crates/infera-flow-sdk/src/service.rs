//! Helpers for wiring infera-flow-sdk into Infera microservices.

use std::sync::Arc;

use crate::{
    init_registry_consumer, ActiveTriggerRegistry, FlowMiddlewareState, FlowPublisher,
    RegistryConfig,
};
use lapin::Channel;

#[derive(Clone)]
pub struct FlowSdkState {
    pub registry: ActiveTriggerRegistry,
    pub middleware: FlowMiddlewareState,
}

pub fn flow_events_enabled() -> bool {
    std::env::var("FLOW_EVENTS_ENABLED")
        .map(|v| v == "true" || v == "1")
        .unwrap_or(false)
}

pub fn flow_service_name(default: &str) -> String {
    let configured = std::env::var("FLOW_SERVICE_NAME").unwrap_or_else(|_| default.to_string());
    normalize_service_name(&configured)
}

fn normalize_service_name(value: &str) -> String {
    value.strip_prefix("infera-").unwrap_or(value).to_string()
}

pub fn flow_registry_url() -> String {
    std::env::var("FLOW_REGISTRY_URL").unwrap_or_else(|_| {
        // Resolve Flow inside the caller's namespace. This keeps sandbox services
        // bound to their sandbox registry while still working in infera-system.
        "http://infera-flow:8060/api/v1/registry/active-triggers".to_string()
    })
}

pub async fn setup_flow_sdk(
    broker_channel: Arc<Channel>,
    default_service_name: &str,
) -> FlowSdkState {
    let registry = ActiveTriggerRegistry::new();
    let service_name = flow_service_name(default_service_name);
    let enabled = flow_events_enabled();

    if enabled {
        init_registry_consumer(RegistryConfig {
            broker_channel: broker_channel.clone(),
            service_name: service_name.clone(),
            registry_url: flow_registry_url(),
            registry: registry.clone(),
        })
        .await;
    }

    let publisher = FlowPublisher {
        channel: broker_channel,
        service_name,
        registry: registry.clone(),
        enabled,
    };

    FlowSdkState {
        registry,
        middleware: FlowMiddlewareState(publisher),
    }
}

#[cfg(test)]
mod tests {
    use super::normalize_service_name;

    #[test]
    fn service_names_match_flow_catalog_keys() {
        assert_eq!(normalize_service_name("infera-lms"), "lms");
        assert_eq!(normalize_service_name("lms"), "lms");
    }
}
