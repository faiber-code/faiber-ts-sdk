use std::sync::Arc;

use lapin::Channel;
use sea_orm::DatabaseConnection;

#[derive(Clone)]
pub struct AppState {
    pub db: Arc<DatabaseConnection>,
    pub broker_channel: Arc<Channel>,
    pub dev: Arc<bool>,
    pub registry_url: Arc<String>,
}
