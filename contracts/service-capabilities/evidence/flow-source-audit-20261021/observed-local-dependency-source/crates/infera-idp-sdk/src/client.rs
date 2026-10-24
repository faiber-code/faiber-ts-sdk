use reqwest::Client;
use serde::Deserialize;
use thiserror::Error;

use crate::models::IdpLoginResponse;

#[derive(Debug, Deserialize)]
struct IdpLoginEnvelope {
    #[serde(default)]
    status: Option<String>,
    #[serde(default)]
    message: Option<String>,
    data: IdpTokenData,
}

#[derive(Debug, Deserialize)]
struct IdpTokenData {
    access_token: String,
    #[serde(default)]
    refresh_token: Option<String>,
    #[serde(default)]
    expires_in: Option<u64>,
}

#[derive(Debug, Error)]
pub enum IdpError {
    #[error("IDP request failed: {0}")]
    Request(#[from] reqwest::Error),
    #[error("IDP error: {0}")]
    Api(String),
}

pub struct IdpClient {
    http: Client,
    login_url: String,
    otp_login_url: String,
    otp_send_url: String,
    validate_url: String,
    client_id: String,
    client_secret: String,
}

#[derive(Debug, Clone)]
pub struct ValidatedIdentity {
    pub user_id: String,
    pub roles: Vec<String>,
    pub permissions: Vec<String>,
}

fn idp_api_base(login_url: &str) -> String {
    login_url
        .trim_end_matches('/')
        .trim_end_matches("/auth/login")
        .to_string()
}

fn env_nonempty(key: &str) -> Option<String> {
    std::env::var(key)
        .ok()
        .map(|s| s.trim().to_string())
        .filter(|s| !s.is_empty())
}

impl IdpClient {
    pub fn from_env() -> Self {
        let login_url = env_nonempty("IDP_LOGIN_URL")
            .unwrap_or_else(|| "https://idp.faiber.ir/api/v1/auth/login".into());
        let base = idp_api_base(&login_url);
        let otp_login_url =
            env_nonempty("IDP_OTP_LOGIN_URL").unwrap_or_else(|| format!("{base}/auth/otp-login"));
        let otp_send_url = env_nonempty("IDP_OTP_SEND_URL")
            .unwrap_or_else(|| format!("{base}/users/register-phone"));
        let validate_url =
            env_nonempty("IDP_VALIDATE_URL").unwrap_or_else(|| format!("{base}/auth/validate"));
        Self {
            http: Client::new(),
            login_url,
            otp_login_url,
            otp_send_url,
            validate_url,
            client_id: env_nonempty("IDP_CLIENT_ID").unwrap_or_default(),
            client_secret: env_nonempty("IDP_CLIENT_SECRET").unwrap_or_default(),
        }
    }

    pub async fn validate(
        &self,
        authorization: Option<&str>,
        cookie: Option<&str>,
    ) -> Option<ValidatedIdentity> {
        self.validate_with_context(authorization, cookie, None, None, None)
            .await
    }

    pub async fn validate_agentic_permissions(
        &self,
        authorization: Option<&str>,
        cookie: Option<&str>,
    ) -> Option<ValidatedIdentity> {
        self.validate_for_service(
            authorization,
            cookie,
            "/api/v1/auth/identity",
            "GET",
            "agentic",
        )
        .await
    }

    /// Validate a caller while asking IDP to resolve permissions for the
    /// concrete service route being handled.
    pub async fn validate_for_service(
        &self,
        authorization: Option<&str>,
        cookie: Option<&str>,
        forwarded_uri: &str,
        forwarded_method: &str,
        service: &str,
    ) -> Option<ValidatedIdentity> {
        self.validate_with_context(
            authorization,
            cookie,
            Some(forwarded_uri),
            Some(forwarded_method),
            Some(service),
        )
        .await
    }

    async fn validate_with_context(
        &self,
        authorization: Option<&str>,
        cookie: Option<&str>,
        forwarded_uri: Option<&str>,
        forwarded_method: Option<&str>,
        service: Option<&str>,
    ) -> Option<ValidatedIdentity> {
        if authorization.is_none() && cookie.is_none() {
            return None;
        }
        let mut req = self
            .http
            .get(&self.validate_url)
            .header("Accept", "application/json");
        if let Some(a) = authorization {
            req = req.header("Authorization", a);
        }
        if let Some(c) = cookie {
            req = req.header("Cookie", c);
        }
        if let Some(uri) = forwarded_uri {
            req = req.header("X-Forwarded-Uri", uri);
        }
        if let Some(method) = forwarded_method {
            req = req.header("X-Forwarded-Method", method);
        }
        if let Some(svc) = service {
            req = req.header("X-Service", svc);
        }
        let res = req.send().await.ok()?;
        if !res.status().is_success() {
            return None;
        }
        let csv = |name: &str| -> Vec<String> {
            res.headers()
                .get(name)
                .and_then(|v| v.to_str().ok())
                .map(|s| {
                    s.split(',')
                        .map(|x| x.trim().to_string())
                        .filter(|x| !x.is_empty())
                        .collect()
                })
                .unwrap_or_default()
        };
        let user_id = res
            .headers()
            .get("x-user-id")
            .and_then(|v| v.to_str().ok())
            .map(|s| s.to_string())
            .filter(|s| !s.is_empty())?;
        Some(ValidatedIdentity {
            user_id,
            roles: csv("x-user-roles"),
            permissions: csv("x-user-permissions"),
        })
    }

    pub async fn password_login(
        &self,
        username: &str,
        password: &str,
    ) -> Result<IdpLoginResponse, IdpError> {
        if self.client_id.is_empty() || self.client_secret.is_empty() {
            return Err(IdpError::Api(
                "IDP_CLIENT_ID and IDP_CLIENT_SECRET must be set on the server".into(),
            ));
        }
        let form = [
            ("grant_type", "password"),
            ("client_id", self.client_id.as_str()),
            ("client_secret", self.client_secret.as_str()),
            ("username", username),
            ("password", password),
        ];
        let res = self.http.post(&self.login_url).form(&form).send().await?;
        let status = res.status();
        let body = res.text().await?;
        if !status.is_success() {
            return Err(IdpError::Api(body));
        }
        let envelope: IdpLoginEnvelope = serde_json::from_str(&body).map_err(|e| {
            let preview: String = body.chars().take(500).collect();
            IdpError::Api(format!("invalid IDP response JSON: {e}; body: {preview}"))
        })?;
        if envelope.status.as_deref() == Some("error") {
            return Err(IdpError::Api(
                envelope
                    .message
                    .unwrap_or_else(|| "IDP login failed".into()),
            ));
        }
        Ok(IdpLoginResponse {
            access_token: envelope.data.access_token,
            refresh_token: envelope.data.refresh_token,
            expires_in: envelope.data.expires_in,
        })
    }

    pub async fn send_otp(&self, phone: &str) -> Result<(), IdpError> {
        let res = self
            .http
            .post(&self.otp_send_url)
            .json(&serde_json::json!({ "phone": phone }))
            .send()
            .await?;
        let status = res.status();
        let body = res.text().await?;
        if !status.is_success() {
            return Err(IdpError::Api(body));
        }
        Ok(())
    }

    pub async fn otp_login(
        &self,
        phone: &str,
        otp_code: &str,
    ) -> Result<IdpLoginResponse, IdpError> {
        if self.client_id.is_empty() || self.client_secret.is_empty() {
            return Err(IdpError::Api(
                "IDP_CLIENT_ID and IDP_CLIENT_SECRET must be set on the server".into(),
            ));
        }
        let form = [
            // The IDP OTP endpoint uses the OAuth password grant shape; the
            // one-time code replaces the password in `otp_code`.
            ("grant_type", "password"),
            ("client_id", self.client_id.as_str()),
            ("client_secret", self.client_secret.as_str()),
            ("username", phone),
            ("otp_code", otp_code),
        ];
        let res = self
            .http
            .post(&self.otp_login_url)
            .form(&form)
            .send()
            .await?;
        let status = res.status();
        let body = res.text().await?;
        if !status.is_success() {
            return Err(IdpError::Api(body));
        }
        let envelope: IdpLoginEnvelope = serde_json::from_str(&body).map_err(|e| {
            let preview: String = body.chars().take(500).collect();
            IdpError::Api(format!("invalid IDP response JSON: {e}; body: {preview}"))
        })?;
        if envelope.status.as_deref() == Some("error") {
            return Err(IdpError::Api(
                envelope
                    .message
                    .unwrap_or_else(|| "IDP OTP login failed".into()),
            ));
        }
        Ok(IdpLoginResponse {
            access_token: envelope.data.access_token,
            refresh_token: envelope.data.refresh_token,
            expires_in: envelope.data.expires_in,
        })
    }
}
