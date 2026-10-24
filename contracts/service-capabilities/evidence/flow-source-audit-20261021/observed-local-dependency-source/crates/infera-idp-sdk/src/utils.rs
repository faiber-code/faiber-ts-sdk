use std::str::FromStr;

use uuid::Uuid;

pub fn get_dev_id() -> Uuid {
    std::env::var("AUTH_ID")
        .ok()
        .and_then(|s| Uuid::from_str(s.trim()).ok())
        .unwrap_or(Uuid::nil())
}

pub fn get_dev_roles() -> Vec<String> {
    csv_env("AUTH_ROLES")
}

pub fn get_dev_permissions() -> Vec<String> {
    csv_env("AUTH_PERMISSIONS")
}

fn csv_env(key: &str) -> Vec<String> {
    std::env::var(key)
        .ok()
        .map(|s| {
            s.split(',')
                .map(|x| x.trim().to_string())
                .filter(|x| !x.is_empty())
                .collect()
        })
        .unwrap_or_default()
}

pub fn csv_header_value(value: Option<&str>) -> Vec<String> {
    value
        .map(|s| {
            s.split(',')
                .map(|x| x.trim().to_string())
                .filter(|x| !x.is_empty())
                .collect()
        })
        .unwrap_or_default()
}
