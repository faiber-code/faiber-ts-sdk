use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "flow_runs")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: Uuid,
    pub flow_id: Uuid,
    pub trigger_event_id: Uuid,
    pub status: String,
    #[sea_orm(column_type = "JsonBinary", nullable)]
    pub context: Option<Json>,
    pub error: Option<String>,
    pub started_at: DateTimeWithTimeZone,
    pub finished_at: Option<DateTimeWithTimeZone>,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(
        belongs_to = "super::flow::Entity",
        from = "Column::FlowId",
        to = "super::flow::Column::Id"
    )]
    Flow,
}

impl Related<super::flow::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Flow.def()
    }
}

impl ActiveModelBehavior for ActiveModel {}
