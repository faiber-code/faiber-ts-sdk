pub struct ServiceDef {
    pub slug: String,
    pub catalog_name: String,
    pub port: u16,
}

pub fn platform_services() -> Vec<ServiceDef> {
    vec![
        def("idp", 8002),
        def("profile", 8003),
        def("session", 8022),
        def("lms", 5040),
        def("crm", 6040),
        def("messenger", 7030),
        def("payment", 7040),
        def("reservation", 7050),
        def("modules", 8038),
        def("asset", 8043),
        def("knowledge", 8070),
        def("chat", 8075),
        def("social", 8076),
        def("state", 8079),
        def("version", 8091),
    ]
}

fn def(slug: &str, port: u16) -> ServiceDef {
    ServiceDef {
        slug: slug.to_string(),
        catalog_name: format!("infera-{slug}"),
        port,
    }
}

pub fn service_base_url(def: &ServiceDef) -> String {
    if let Ok(url) = std::env::var("FLOW_CATALOG_BASE_URL") {
        return format!("{url}/{}", def.slug);
    }
    format!("http://{}:{}", def.catalog_name, def.port)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn platform_catalog_includes_sezar_services() {
        let slugs: Vec<_> = platform_services()
            .into_iter()
            .map(|service| service.slug)
            .collect();
        for expected in ["asset", "social", "knowledge", "chat", "state"] {
            assert!(slugs.contains(&expected.to_string()), "missing {expected}");
        }
    }
}
