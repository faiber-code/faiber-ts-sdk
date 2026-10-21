use futures_lite::stream::StreamExt;
use lapin::{
    options::{BasicAckOptions, BasicConsumeOptions, BasicNackOptions},
    types::FieldTable,
};

use crate::{
    broker::{ENDPOINT_EVENT, FLOW_QUEUE},
    engine::executor::process_endpoint_event,
    models::{BrokerEvent, EndpointEvent},
    state::AppState,
};

pub async fn rmq_consume(state: &AppState) {
    let state_clone = state.clone();
    let queue = FLOW_QUEUE.to_string();

    tokio::spawn(async move {
        tracing::info!("Listening for flow endpoint events on `{queue}`");

        let mut consumer = match state_clone
            .broker_channel
            .basic_consume(
                queue.as_str(),
                "infera_flow",
                BasicConsumeOptions::default(),
                FieldTable::default(),
            )
            .await
        {
            Ok(c) => c,
            Err(e) => {
                tracing::error!(error = %e, "flow consumer failed to start");
                return;
            }
        };

        while let Some(delivery) = consumer.next().await {
            let Ok(delivery) = delivery else {
                continue;
            };

            let result = async {
                let envelope: BrokerEvent<EndpointEvent> =
                    serde_json::from_slice(&delivery.data).map_err(|e| {
                        crate::models::AppError::internal(format!("invalid payload: {e}"))
                    })?;

                if envelope.event != ENDPOINT_EVENT {
                    return Ok(());
                }

                process_endpoint_event(&state_clone, envelope.data).await
            }
            .await;

            match result {
                Ok(()) => {
                    let _ = delivery.ack(BasicAckOptions::default()).await;
                }
                Err(e) => {
                    tracing::warn!(error = %e.message, "flow event processing failed");
                    let _ = delivery
                        .nack(BasicNackOptions {
                            requeue: false,
                            ..Default::default()
                        })
                        .await;
                }
            }
        }
    });
}
