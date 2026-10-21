use serde::Serialize;

#[derive(Debug, Clone, Serialize)]
pub struct IntegrationSnippet {
    pub event_name: String,
    pub method: String,
    pub language: String,
    pub cargo_dep: String,
    pub code: String,
}

pub fn integration_snippets() -> Vec<IntegrationSnippet> {
    vec![IntegrationSnippet {
        event_name: "gateway".to_string(),
        method: "sdk".to_string(),
        language: "rust".to_string(),
        cargo_dep: r#"infera-idp-sdk = { git = \"https://hamgit.ir/faiber/faiber-sdk.git\" }"#
            .to_string(),
        code: r#"use infera_idp_sdk::auth_extractor_middleware;

// Axum router:
// .layer(middleware::from_fn(auth_extractor_middleware))

// In handlers:
// use infera_idp_sdk::AuthContext;
// async fn handler(Extension(ctx): Extension<AuthContext>) { ... }
"#
        .to_string(),
    }]
}
