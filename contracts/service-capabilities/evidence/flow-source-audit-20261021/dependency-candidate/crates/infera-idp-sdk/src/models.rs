use std::borrow::Cow;

use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Serialize)]
pub struct PermissionRoot {
    pub permissions: Vec<String>,
    pub endpoints: Vec<Endpoint>,
}

#[derive(Serialize)]
pub struct Endpoint {
    pub method: String,
    pub route: String,
    pub permissions: Vec<String>,
    pub aliases: Vec<String>,
}

pub struct ShouldHavePermissionsMeta {
    pub path: &'static [Cow<'static, str>],
    pub methods: &'static [Cow<'static, str>],
    pub permissions: &'static [Cow<'static, str>],
    pub aliases: &'static [Cow<'static, str>],
}

#[derive(Debug, Clone)]
pub struct AuthContext {
    pub user_id: Option<Uuid>,
    pub permissions: Vec<String>,
    pub roles: Vec<String>,
    #[cfg(feature = "access-token")]
    pub access_token: Option<String>,
}

impl AuthContext {
    pub fn require_user_id(&self) -> Result<Uuid, &'static str> {
        self.user_id.ok_or("missing user_id in AuthContext")
    }

    /// Gateway user id with dev-fallback nil UUID when unset.
    pub fn user_uuid(&self) -> Uuid {
        self.user_id.unwrap_or(Uuid::nil())
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IdpLoginResponse {
    pub access_token: String,
    pub refresh_token: Option<String>,
    pub expires_in: Option<u64>,
}
