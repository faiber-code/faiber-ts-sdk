//! Infera IDP SDK — gateway auth middleware, ACL export, and IDP HTTP client.

pub mod client;
pub mod docs;
pub mod export;
pub mod middleware;
pub mod models;
pub mod utils;

#[cfg(feature = "internal-guard")]
pub mod guard;

pub use client::{IdpClient, IdpError, ValidatedIdentity};
pub use export::export_routes;
pub use middleware::auth_extractor_middleware;
pub use models::{AuthContext, IdpLoginResponse, ShouldHavePermissionsMeta};

inventory::collect!(ShouldHavePermissionsMeta);
