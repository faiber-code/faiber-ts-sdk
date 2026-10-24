use infera_idp_sdk::export_routes;

use crate::cli::commands::CliCommand;

pub struct RouteExportCliCommand;

impl CliCommand for RouteExportCliCommand {
    async fn run(_db: &sea_orm::DatabaseConnection, _: &bool) {
        export_routes().await;
        println!("route export complete");
    }
}
