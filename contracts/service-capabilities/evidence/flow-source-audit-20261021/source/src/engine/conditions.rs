use serde_json::Value;

use crate::models::EndpointEvent;

pub fn evaluate(condition: &Value, event: &EndpointEvent) -> bool {
    let Some(op) = condition.get("op").and_then(|v| v.as_str()) else {
        return false;
    };

    match op {
        "always" => true,
        "success" => event.success,
        "failure" => !event.success,
        "field_eq" => {
            let path = condition.get("path").and_then(|v| v.as_str()).unwrap_or("");
            let expected = condition.get("value").cloned();
            let actual = resolve_path(event, path);
            actual == expected
        }
        "field_gt" => {
            let path = condition.get("path").and_then(|v| v.as_str()).unwrap_or("");
            let expected = condition.get("value").and_then(Value::as_f64);
            let actual = resolve_path(event, path).and_then(|value| value.as_f64());
            matches!((actual, expected), (Some(actual), Some(expected)) if actual > expected)
        }
        "field_exists" => {
            let path = condition.get("path").and_then(|v| v.as_str()).unwrap_or("");
            resolve_path(event, path).is_some()
        }
        "and" => condition
            .get("conditions")
            .and_then(|v| v.as_array())
            .map(|arr| arr.iter().all(|c| evaluate(c, event)))
            .unwrap_or(false),
        "or" => condition
            .get("conditions")
            .and_then(|v| v.as_array())
            .map(|arr| arr.iter().any(|c| evaluate(c, event)))
            .unwrap_or(false),
        _ => false,
    }
}

#[cfg(test)]
mod tests {
    use super::evaluate;
    use crate::models::EndpointEvent;

    fn event(response: serde_json::Value) -> EndpointEvent {
        EndpointEvent {
            event_id: uuid::Uuid::new_v4(),
            service: "profile".into(),
            method: "PUT".into(),
            path: "/api/v1/profile/user/properties".into(),
            status: 200,
            success: true,
            user_id: Some(uuid::Uuid::new_v4()),
            duration_ms: 1,
            request: None,
            response: Some(response),
            timestamp: None,
        }
    }

    #[test]
    fn field_gt_requires_numeric_values_and_a_strict_increase() {
        let event = event(serde_json::json!({"added_count": 1}));
        assert!(evaluate(
            &serde_json::json!({
                "op": "field_gt",
                "path": "event.response.added_count",
                "value": 0
            }),
            &event
        ));
        assert!(!evaluate(
            &serde_json::json!({
                "op": "field_gt",
                "path": "event.response.added_count",
                "value": 1
            }),
            &event
        ));
    }
}

pub fn resolve_path(event: &EndpointEvent, path: &str) -> Option<Value> {
    let mut parts = path.split('.');
    let root = parts.next()?;
    let mut current = match root {
        "event" => serde_json::to_value(event).ok()?,
        _ => return None,
    };
    for part in parts {
        current = current.get(part)?.clone();
    }
    Some(current)
}
