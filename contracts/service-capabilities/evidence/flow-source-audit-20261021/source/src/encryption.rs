use aes_gcm::{
    aead::{Aead, KeyInit},
    Aes256Gcm, Nonce,
};
use base64::{engine::general_purpose::STANDARD, Engine};
use rand::RngCore;
use serde_json::{Map, Value};

pub fn encrypt_options_map(options: &Map<String, Value>) -> Result<Map<String, Value>, String> {
    let mut encrypted = Map::new();
    for (key, value) in options {
        encrypted.insert(key.clone(), encrypt_value(value)?);
    }
    Ok(encrypted)
}

pub fn decrypt_options_map(options: &Map<String, Value>) -> Result<Map<String, Value>, String> {
    let mut decrypted = Map::new();
    for (key, value) in options {
        decrypted.insert(key.clone(), decrypt_value(value)?);
    }
    Ok(decrypted)
}

fn encrypt_value(value: &Value) -> Result<Value, String> {
    match value {
        Value::Null => Ok(Value::Null),
        Value::Array(_) | Value::Object(_) => Ok(value.clone()),
        Value::String(s) => {
            let encrypted = encrypt_string(s)?;
            Ok(Value::String(encrypted))
        }
        other => {
            let encrypted = encrypt_string(&other.to_string())?;
            Ok(Value::String(encrypted))
        }
    }
}

fn decrypt_value(value: &Value) -> Result<Value, String> {
    match value {
        Value::Null => Ok(Value::Null),
        Value::Array(_) | Value::Object(_) => Ok(value.clone()),
        Value::String(s) => match decrypt_string(s) {
            Ok(plain) => Ok(Value::String(plain)),
            Err(_) => Ok(Value::String(s.clone())),
        },
        other => Ok(other.clone()),
    }
}

fn cipher() -> Result<Aes256Gcm, String> {
    let key = app_key_bytes()?;
    Aes256Gcm::new_from_slice(&key).map_err(|e| e.to_string())
}

fn app_key_bytes() -> Result<[u8; 32], String> {
    let raw = std::env::var("APP_KEY").map_err(|_| "APP_KEY must be set".to_string())?;
    let trimmed = raw.trim_start_matches("base64:");
    let decoded = STANDARD
        .decode(trimmed)
        .map_err(|e| e.to_string())?;
    if decoded.len() < 32 {
        return Err("APP_KEY must decode to at least 32 bytes".to_string());
    }
    let mut key = [0u8; 32];
    key.copy_from_slice(&decoded[..32]);
    Ok(key)
}

pub fn encrypt_string(plain: &str) -> Result<String, String> {
    let cipher = cipher()?;
    let mut nonce_bytes = [0u8; 12];
    rand::rng().fill_bytes(&mut nonce_bytes);
    let nonce = Nonce::from_slice(&nonce_bytes);
    let ciphertext = cipher
        .encrypt(nonce, plain.as_bytes())
        .map_err(|e| e.to_string())?;
    let mut payload = nonce_bytes.to_vec();
    payload.extend(ciphertext);
    Ok(STANDARD.encode(payload))
}

pub fn decrypt_string(encoded: &str) -> Result<String, String> {
    let payload = STANDARD.decode(encoded).map_err(|e| e.to_string())?;
    if payload.len() < 13 {
        return Err("invalid encrypted payload".to_string());
    }
    let (nonce_bytes, ciphertext) = payload.split_at(12);
    let cipher = cipher()?;
    let nonce = Nonce::from_slice(nonce_bytes);
    let plain = cipher
        .decrypt(nonce, ciphertext)
        .map_err(|e| e.to_string())?;
    String::from_utf8(plain).map_err(|e| e.to_string())
}
