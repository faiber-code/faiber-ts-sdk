use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "catalog_actions")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: Uuid,
    pub service: String,
    pub event_name: String,
    pub queue: String,
    #[sea_orm(column_type = "JsonBinary")]
    pub payload_fields: Json,
    pub updated_at: DateTimeWithTimeZone,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}
