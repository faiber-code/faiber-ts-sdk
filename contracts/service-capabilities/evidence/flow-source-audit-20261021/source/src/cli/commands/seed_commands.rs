use entity::seeder::payment_seeder::PaymentSeeder;

use crate::cli::commands::CliCommand;

pub struct SeedCliCommand;

impl CliCommand for SeedCliCommand {
    async fn run(db: &sea_orm::DatabaseConnection, _: &bool) {
        let _ = PaymentSeeder::seed(db).await;
        println!("seed complete");
    }
}
