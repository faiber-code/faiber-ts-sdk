pub fn compute_trigger_key(service_name: &str, method: &str, path: &str) -> String {
    let slug = service_name.strip_prefix("infera-").unwrap_or(service_name);
    let normalized = path.trim_start_matches('/').replace('/', ".");
    format!("endpoint.{}.{}.{}", slug, method.to_uppercase(), normalized)
}

pub fn trigger_key_matches(template: &str, actual: &str) -> bool {
    let template_parts: Vec<_> = template.split('.').collect();
    let actual_parts: Vec<_> = actual.split('.').collect();
    template_parts.len() == actual_parts.len()
        && template_parts
            .iter()
            .zip(actual_parts)
            .all(|(expected, value)| {
                expected == &value || (expected.starts_with('{') && expected.ends_with('}'))
            })
}

pub fn is_excluded_path(path: &str) -> bool {
    if matches!(path, "/" | "/health" | "/up" | "/api/openapi.json") {
        return true;
    }
    if path.starts_with("/assets/") {
        return true;
    }
    if let Ok(extra) = std::env::var("FLOW_EXCLUDE_PATHS") {
        for p in extra.split(',') {
            let p = p.trim();
            if !p.is_empty() && (path == p || path.starts_with(p)) {
                return true;
            }
        }
    }
    false
}

pub fn is_sse_path(path: &str) -> bool {
    path.contains("/stream") || path.ends_with("/stream")
}

#[cfg(test)]
mod tests {
    use super::trigger_key_matches;

    #[test]
    fn route_parameters_match_concrete_endpoint_keys() {
        assert!(trigger_key_matches(
            "endpoint.lms.POST.api.v1.academy.enrollments.{id}.sessions.{session_id}.complete",
            "endpoint.lms.POST.api.v1.academy.enrollments.5d36fb63-2b0a-4baa-8336-aa7e64bb833e.sessions.42.complete",
        ));
        assert!(!trigger_key_matches(
            "endpoint.lms.POST.api.v1.academy.enrollments.{id}.sessions.{session_id}.complete",
            "endpoint.lms.GET.api.v1.academy.enrollments.5d36fb63-2b0a-4baa-8336-aa7e64bb833e.sessions.42.complete",
        ));
    }
}
