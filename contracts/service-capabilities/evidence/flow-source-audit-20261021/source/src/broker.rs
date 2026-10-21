use anyhow::Error;
use lapin::{
    options::{
        BasicPublishOptions, ExchangeDeclareOptions, QueueBindOptions, QueueDeclareOptions,
    },
    types::{AMQPValue, FieldTable},
    BasicProperties, Channel, Connection, ConnectionProperties, ExchangeKind,
};

pub const EVENTS_EXCHANGE: &str = "infera.events";
pub const REGISTRY_EXCHANGE: &str = "infera.flow.registry";
pub const FLOW_QUEUE: &str = "flow_queue";
pub const ENDPOINT_EVENT: &str = "flow.endpoint";
pub const REGISTRY_CHANGED_EVENT: &str = "flow.registry.changed";

pub async fn connect_rmq() -> Result<Connection, sea_orm::DbErr> {
    let broker_url = std::env::var("BROKER_URL").expect("BROKER_URL must be set");
    Connection::connect(broker_url.as_str(), ConnectionProperties::default())
        .await
        .map_err(|e| sea_orm::DbErr::Custom(e.to_string()))
}

pub async fn create_service_queues(channel: &Channel) -> Result<(), Error> {
    let mut event_args = FieldTable::default();
    event_args.insert("x-message-ttl".into(), AMQPValue::LongInt(86_400_000));

    channel
        .exchange_declare(
            EVENTS_EXCHANGE,
            ExchangeKind::Topic,
            ExchangeDeclareOptions {
                durable: true,
                ..Default::default()
            },
            FieldTable::default(),
        )
        .await?;

    channel
        .exchange_declare(
            REGISTRY_EXCHANGE,
            ExchangeKind::Fanout,
            ExchangeDeclareOptions {
                durable: true,
                ..Default::default()
            },
            FieldTable::default(),
        )
        .await?;

    channel
        .queue_declare(
            FLOW_QUEUE,
            QueueDeclareOptions {
                durable: true,
                ..Default::default()
            },
            event_args,
        )
        .await?;

    channel
        .queue_bind(
            FLOW_QUEUE,
            EVENTS_EXCHANGE,
            "endpoint.#",
            QueueBindOptions::default(),
            FieldTable::default(),
        )
        .await?;

    Ok(())
}

pub async fn publish_json(
    channel: &Channel,
    exchange: &str,
    routing_key: &str,
    event: &str,
    data: &serde_json::Value,
) -> Result<(), Error> {
    let payload = serde_json::json!({ "event": event, "data": data });
    let body = serde_json::to_vec(&payload)?;
    let props = BasicProperties::default().with_delivery_mode(1);

    channel
        .basic_publish(
            exchange,
            routing_key,
            BasicPublishOptions::default(),
            &body,
            props,
        )
        .await?
        .await?;

    Ok(())
}

pub fn registry_url() -> String {
    std::env::var("FLOW_REGISTRY_URL").unwrap_or_else(|_| {
        "http://infera-flow.infera-system.svc.cluster.local:8060/api/v1/registry/active-triggers"
            .to_string()
    })
}
