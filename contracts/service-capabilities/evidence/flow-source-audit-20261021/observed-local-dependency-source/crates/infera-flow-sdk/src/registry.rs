use std::sync::Arc;

use lapin::Channel;

use crate::trigger::trigger_key_matches;

#[derive(Clone)]
pub struct RegistryConfig {
    pub broker_channel: Arc<Channel>,
    pub service_name: String,
    pub registry_url: String,
    pub registry: ActiveTriggerRegistry,
}

#[derive(Clone, Default)]
pub struct ActiveTriggerRegistry {
    inner: Arc<std::sync::RwLock<RegistrySnapshot>>,
}

#[derive(Clone, Default)]
pub struct RegistrySnapshot {
    pub version: i64,
    pub triggers: std::collections::HashMap<String, Vec<String>>,
}

impl ActiveTriggerRegistry {
    pub fn new() -> Self {
        Self::default()
    }

    pub fn should_publish(&self, trigger_key: &str) -> bool {
        self.inner
            .read()
            .ok()
            .map(|snapshot| {
                snapshot
                    .triggers
                    .keys()
                    .any(|template| trigger_key_matches(template, trigger_key))
            })
            .unwrap_or(false)
    }

    pub fn capture_fields(&self, trigger_key: &str) -> Vec<String> {
        self.inner
            .read()
            .ok()
            .map(|snapshot| {
                snapshot
                    .triggers
                    .iter()
                    .filter(|(template, _)| trigger_key_matches(template, trigger_key))
                    .flat_map(|(_, fields)| fields.iter().cloned())
                    .collect::<std::collections::HashSet<_>>()
                    .into_iter()
                    .collect()
            })
            .unwrap_or_default()
    }

    pub fn replace(&self, version: i64, entries: Vec<RegistryTriggerEntry>) {
        if let Ok(mut guard) = self.inner.write() {
            guard.version = version;
            guard.triggers = entries
                .into_iter()
                .map(|e| (e.trigger_key, e.capture_fields))
                .collect();
        }
    }

    pub fn version(&self) -> i64 {
        self.inner.read().ok().map(|s| s.version).unwrap_or(0)
    }
}

#[cfg(test)]
mod tests {
    use super::{ActiveTriggerRegistry, RegistryTriggerEntry};

    #[test]
    fn registry_resolves_templated_routes_and_capture_fields() {
        let registry = ActiveTriggerRegistry::new();
        registry.replace(
            1,
            vec![RegistryTriggerEntry {
                trigger_key: "endpoint.lms.POST.api.v1.academy.attempts.{id}.submit".into(),
                capture_fields: vec!["response.data.passed".into()],
            }],
        );
        let actual =
            "endpoint.lms.POST.api.v1.academy.attempts.5d36fb63-2b0a-4baa-8336-aa7e64bb833e.submit";
        assert!(registry.should_publish(actual));
        assert_eq!(
            registry.capture_fields(actual),
            vec!["response.data.passed"]
        );
    }
}

#[derive(serde::Deserialize, Clone)]
pub struct RegistryTriggerEntry {
    pub trigger_key: String,
    pub capture_fields: Vec<String>,
}

#[derive(serde::Deserialize)]
struct ActiveTriggersResponse {
    version: i64,
    triggers: Vec<RegistryTriggerEntry>,
}

#[derive(serde::Deserialize)]
#[serde(untagged)]
enum ActiveTriggersApiResponse {
    Envelope { data: ActiveTriggersResponse },
    Direct(ActiveTriggersResponse),
}

impl ActiveTriggersApiResponse {
    fn into_data(self) -> ActiveTriggersResponse {
        match self {
            Self::Envelope { data } => data,
            Self::Direct(data) => data,
        }
    }
}

#[derive(serde::Deserialize)]
struct BrokerEnvelope<T> {
    event: String,
    data: T,
}

#[derive(serde::Deserialize)]
struct RegistryChangedData {
    version: i64,
    registry_url: String,
}

pub async fn pull_registry(config: &RegistryConfig) -> Result<(), String> {
    let url = format!(
        "{}?service={}",
        config.registry_url.trim_end_matches('/'),
        config.service_name
    );
    let client = reqwest::Client::new();
    let resp = client.get(&url).send().await.map_err(|e| e.to_string())?;
    if !resp.status().is_success() {
        return Err(format!("registry pull failed: {}", resp.status()));
    }
    let body: ActiveTriggersApiResponse = resp.json().await.map_err(|e| e.to_string())?;
    let body = body.into_data();
    let count = body.triggers.len();
    config.registry.replace(body.version, body.triggers);
    tracing::info!(
        version = body.version,
        service = %config.service_name,
        count,
        "flow registry updated"
    );
    Ok(())
}

#[cfg(test)]
mod response_tests {
    use super::ActiveTriggersApiResponse;

    #[test]
    fn parses_standard_api_envelope_and_legacy_direct_response() {
        let data = serde_json::json!({
            "version": 7,
            "triggers": [{
                "trigger_key": "endpoint.profile.PUT.api.v1.profile.{uuid}.properties",
                "capture_fields": ["response.data.changed"]
            }]
        });

        for value in [serde_json::json!({"data": data.clone()}), data] {
            let parsed: ActiveTriggersApiResponse = serde_json::from_value(value).unwrap();
            let body = parsed.into_data();
            assert_eq!(body.version, 7);
            assert_eq!(body.triggers.len(), 1);
        }
    }
}

pub async fn init_registry_consumer(config: RegistryConfig) {
    let service = config.service_name.clone();
    let queue = format!("flow_registry.{service}");

    let _ = config
        .broker_channel
        .exchange_declare(
            "infera.flow.registry",
            lapin::ExchangeKind::Fanout,
            lapin::options::ExchangeDeclareOptions {
                durable: true,
                ..Default::default()
            },
            lapin::types::FieldTable::default(),
        )
        .await;

    let _ = config
        .broker_channel
        .queue_declare(
            &queue,
            lapin::options::QueueDeclareOptions {
                durable: true,
                ..Default::default()
            },
            lapin::types::FieldTable::default(),
        )
        .await;

    let _ = config
        .broker_channel
        .queue_bind(
            &queue,
            "infera.flow.registry",
            "",
            lapin::options::QueueBindOptions::default(),
            lapin::types::FieldTable::default(),
        )
        .await;

    if let Err(e) = pull_registry(&config).await {
        tracing::warn!(error = %e, "initial registry pull failed");
    }

    let cfg = config.clone();
    tokio::spawn(async move {
        let mut consumer = match cfg
            .broker_channel
            .basic_consume(
                &queue,
                &format!("flow_registry_{service}"),
                lapin::options::BasicConsumeOptions::default(),
                lapin::types::FieldTable::default(),
            )
            .await
        {
            Ok(c) => c,
            Err(e) => {
                tracing::error!(error = %e, "registry consumer failed");
                return;
            }
        };

        use futures_lite::stream::StreamExt;
        while let Some(delivery) = consumer.next().await {
            let Ok(delivery) = delivery else { continue };
            if let Ok(envelope) =
                serde_json::from_slice::<BrokerEnvelope<RegistryChangedData>>(&delivery.data)
            {
                if envelope.event == "flow.registry.changed" {
                    let pull_cfg = RegistryConfig {
                        registry_url: envelope.data.registry_url,
                        ..cfg.clone()
                    };
                    if let Err(e) = pull_registry(&pull_cfg).await {
                        tracing::warn!(error = %e, "registry pull failed");
                    }
                }
            }
            let _ = delivery
                .ack(lapin::options::BasicAckOptions::default())
                .await;
        }
    });
}
