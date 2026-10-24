use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(name = "infera_flow")]
#[command(about = "Infera flow orchestration service", long_about = None)]
pub struct Cli {
    #[command(subcommand)]
    pub command: Commands,
}

#[derive(Subcommand)]
pub enum Commands {
    Serve,
}
