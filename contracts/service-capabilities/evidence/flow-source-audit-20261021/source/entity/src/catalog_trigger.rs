use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "catalog_triggers")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: Uuid,
    pub service: String,
    pub method: String,
    pub path: String,
    pub trigger_key: String,
    #[sea_orm(column_type = "JsonBinary", nullable)]
    pub schema_fields: Option<Json>,
    pub updated_at: DateTimeWithTimeZone,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}
