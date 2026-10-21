use infera_idp_sdk::auth_extractor_middleware;
use axum::{middleware, Router};
use clap::Parser;
use dotenvy::dotenv;
use infera_flow::{
    broker::{create_service_queues, registry_url},
    cli::Cli,
    db::{connect_pg, run_migrations},
    handler::rmq_consume,
    registry::methods::notify_on_startup,
    router,
    state::AppState,
};
use std::{net::SocketAddr, sync::Arc, time::Duration};
use tower_http::{timeout::TimeoutLayer, trace::TraceLayer};
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt, EnvFilter};

#[tokio::main]
async fn main() {
    dotenv().ok();
    tracing_subscriber::registry()
        .with(
            EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "infera_flow=debug,tower_http=debug".into()),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    let db_pool = connect_pg().await.expect("DB connection failed");
    println!("database ok");

    let broker = infera_flow::broker::connect_rmq()
        .await
        .expect("Broker connection failed");
    let broker_channel = broker
        .create_channel()
        .await
        .expect("Broker channel creation failed");
    let _ = create_service_queues(&broker_channel).await;
    println!("broker ok");

    run_migrations(&db_pool).await;
    println!("migration ok");

    let is_dev = std::env::var("DEV").unwrap_or_else(|_| "false".to_string()) == "true";
    let state = AppState {
        db: Arc::new(db_pool.to_owned()),
        broker_channel: Arc::new(broker_channel.to_owned()),
        dev: Arc::new(is_dev),
        registry_url: Arc::new(registry_url()),
    };

    let cli = Cli::parse();
    match cli.command {
        infera_flow::cli::Commands::Serve => run_server(state).await,
    }
}

async fn run_server(state: AppState) {
    run_migrations(state.db.as_ref()).await;
    let _ = notify_on_startup(&state).await;
    rmq_consume(&state).await;

    let app = Router::new()
        .merge(router::routes(&state))
        .with_state(state)
        .layer(TraceLayer::new_for_http())
        .layer(middleware::from_fn(auth_extractor_middleware))
        .layer(TimeoutLayer::with_status_code(
            axum::http::StatusCode::REQUEST_TIMEOUT,
            Duration::from_secs(30),
        ));

    let port: u16 = std::env::var("PORT")
        .ok()
        .and_then(|p| p.parse().ok())
        .unwrap_or(8060);
    let addr = SocketAddr::from(([0, 0, 0, 0], port));
    tracing::info!("Listening on http://{}", addr);

    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(
        listener,
        app.into_make_service_with_connect_info::<SocketAddr>(),
    )
    .await
    .unwrap();
}
