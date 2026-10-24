use std::collections::HashSet;

use axum::http::HeaderValue;
use tower_http::cors::AllowOrigin;

const DEFAULT_ALLOW_ORIGINS: &str = "\
http://localhost:8000,http://localhost:8002,http://localhost:8003,\
http://localhost:3000,http://localhost:4000,http://localhost:3002,http://localhost:3010,\
http://localhost:3030,http://localhost:3038,http://localhost:3040,http://localhost:3041,\
http://localhost:3060,http://localhost:3070,http://localhost:3022,\
http://localhost:7030,http://localhost:8043,http://localhost:9000,\
http://127.0.0.1:8000,http://127.0.0.1:8002,http://127.0.0.1:8003,\
http://127.0.0.1:3000,http://127.0.0.1:4000,http://127.0.0.1:3002,http://127.0.0.1:3010,\
http://127.0.0.1:3030,http://127.0.0.1:3038,http://127.0.0.1:3040,http://127.0.0.1:3041,\
http://127.0.0.1:3060,http://127.0.0.1:3070,http://127.0.0.1:3022,\
http://127.0.0.1:7030,http://127.0.0.1:8043,http://127.0.0.1:9000";
const DEFAULT_ORIGIN_SUFFIXES: &str = "faiber.ir,sandbox.faiber.ir";

fn parse_csv(raw: &str) -> Vec<String> {
    raw.split(',').map(str::trim).filter(|value| !value.is_empty()).map(str::to_owned).collect()
}

fn origin_host(origin: &str) -> Option<&str> {
    let rest = origin.strip_prefix("https://").or_else(|| origin.strip_prefix("http://"))?;
    let host_port = rest.split('/').next().unwrap_or(rest);
    Some(host_port.split(':').next().unwrap_or(host_port))
}

fn host_matches_suffix(host: &str, suffix: &str) -> bool {
    let host = host.trim_end_matches('.').to_ascii_lowercase();
    let suffix = suffix.trim().trim_start_matches('.').trim_end_matches('.').to_ascii_lowercase();
    !host.is_empty() && !suffix.is_empty() && (host == suffix || host.ends_with(&format!(".{suffix}")))
}

pub fn allow_origin_from_env() -> AllowOrigin {
    let origins = std::env::var("ALLOW_ORIGIN").ok().filter(|value| !value.trim().is_empty()).unwrap_or_else(|| DEFAULT_ALLOW_ORIGINS.to_owned());
    let exact: HashSet<HeaderValue> = parse_csv(&origins).into_iter().filter_map(|origin| origin.parse().ok()).collect();
    let mut suffixes = parse_csv(&std::env::var("ALLOW_ORIGIN_SUFFIXES").ok().filter(|value| !value.trim().is_empty()).unwrap_or_else(|| DEFAULT_ORIGIN_SUFFIXES.to_owned()));
    if let Ok(base) = std::env::var("SANDBOX_BASE_DOMAIN") {
        let base = base.trim().trim_start_matches('.').trim_end_matches('.');
        if !base.is_empty() && !suffixes.iter().any(|suffix| suffix.eq_ignore_ascii_case(base)) {
            suffixes.push(base.to_owned());
        }
    }
    AllowOrigin::predicate(move |origin: &HeaderValue, _| {
        if exact.contains(origin) { return true; }
        origin.to_str().ok().and_then(origin_host).is_some_and(|host| suffixes.iter().any(|suffix| host_matches_suffix(host, suffix)))
    })
}
