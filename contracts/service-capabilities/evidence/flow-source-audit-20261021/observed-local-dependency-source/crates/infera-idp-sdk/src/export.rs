use std::fs;

use crate::models::{Endpoint, PermissionRoot, ShouldHavePermissionsMeta};

pub async fn export_routes() {
    let mut endpoints = Vec::new();
    let mut all_permissions = Vec::<String>::new();
    for route in inventory::iter::<ShouldHavePermissionsMeta> {
        let path = route.path;
        let methods = route.methods;
        let permissions: Vec<String> = route.permissions.iter().map(|p| p.to_string()).collect();
        let aliases: Vec<String> = route.aliases.iter().map(|p| p.to_string()).collect();
        for p in &permissions {
            if !all_permissions.contains(p) {
                all_permissions.push(p.clone());
            }
        }
        for a in &aliases {
            if !all_permissions.contains(a) {
                all_permissions.push(a.clone());
            }
        }
        for method in methods {
            endpoints.push(Endpoint {
                method: method.to_string(),
                route: path[0].to_string(),
                permissions: permissions.clone(),
                aliases: aliases.clone(),
            });
        }
    }
    let root = PermissionRoot {
        permissions: all_permissions,
        endpoints,
    };

    let yaml = serde_yaml::to_string(&root).unwrap();
    fs::write("routes_export.yml", yaml).expect("Failed to write YAML file");
}
