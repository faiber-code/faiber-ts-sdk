use std::time::Duration;

use migration::{Migrator, MigratorTrait};
use sea_orm::{
    ConnectOptions, ConnectionTrait, Database, DatabaseConnection, DbBackend, Statement,
};

pub async fn connect_pg() -> Result<DatabaseConnection, sea_orm::DbErr> {
    let db_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let is_dev = std::env::var("DEV").unwrap_or_else(|_| "false".to_string()) == "true";
    let mut opt = ConnectOptions::new(db_url);
    if is_dev {
        let max_connections = std::env::var("DATABASE_MAX_CONNECTIONS")
            .ok()
            .and_then(|value| value.parse().ok())
            .unwrap_or(5);
        opt.max_connections(max_connections)
            .min_connections(1)
            .connect_timeout(Duration::from_secs(30))
            .acquire_timeout(Duration::from_secs(30))
            .idle_timeout(Duration::from_secs(600))
            .max_lifetime(Duration::from_secs(600))
            .test_before_acquire(true)
            .sqlx_logging(false);
    } else {
        opt.max_connections(100)
            .min_connections(5)
            .connect_timeout(Duration::from_secs(8))
            .acquire_timeout(Duration::from_secs(8))
            .idle_timeout(Duration::from_secs(8))
            .max_lifetime(Duration::from_secs(8))
            .sqlx_logging(true);
    }
    opt.set_schema_search_path("public");
    Database::connect(opt).await
}

pub async fn run_migrations(db: &DatabaseConnection) {
    let _ = db
        .execute(Statement::from_string(
            DbBackend::Postgres,
            "SELECT pg_advisory_lock(84215046)",
        ))
        .await;
    Migrator::up(db, None).await.expect("migration failed");
    let _ = db
        .execute(Statement::from_string(
            DbBackend::Postgres,
            "SELECT pg_advisory_unlock(84215046)",
        ))
        .await;
}
